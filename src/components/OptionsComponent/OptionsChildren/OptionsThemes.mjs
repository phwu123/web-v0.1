import { setThemeColor } from '../../../Functions.js';

const template = `
  <span class="option-row button-row" effect-hover effect-click>
    <label>Light</label>
    <button-radio target-type="theme-color" selected-value="light"></button-radio>
  </span>
  <span class="option-row button-row" effect-hover effect-click>
    <label>Dark</label>
    <button-radio target-type="theme-color" selected-value="dark"></button-radio>
  </span>
`

customElements.define('options-themes',
  class OptionsThemes extends customElements.get('options-module') {
    constructor() {
      super();
      this.appendChild(document.createTextNode(this.getAttribute('theme-color')));
      this.shadowRoot.children[3].innerHTML += template;
      [...this.shadowRoot.children[3].children].forEach(child => child.addEventListener('click', this.setThemeColor, false));
    }

    setThemeColor() {
      const theme = this.children[1].getAttribute('selected-value');
      const OptionsThemes = document.getElementById('options-themes')
      if (theme !== OptionsThemes.getAttribute('theme-color')) {
        OptionsThemes.setAttribute('theme-color', theme);
        [...this.parentNode.children].forEach(child => child.children[1].setAttribute('theme-color', theme))
        setThemeColor(theme);
        document.getElementById('component-contact').setAttribute('theme-color', theme)
        OptionsThemes.textContent = theme;
      }
    }
  }
)