const template = `
  <span class="button-row" effect-hover effect-click>
    <label>Light</label>
    <button-radio selected-value="light" is-selected></button-radio>
  </span>
  <span class="button-row" effect-hover effect-click>
    <label>Dark</label>
    <button-radio selected-value="dark" ></button-radio>
  </span>
`

customElements.define('options-themes',
  class OptionsThemes extends customElements.get('options-module') {
    constructor() {
      super();
      this.appendChild(document.createTextNode(this.themeColor))
      this.shadowRoot.children[3].innerHTML += template;
      [...this.shadowRoot.children[3].children].forEach(child => child.addEventListener('click', this.setThemeColor));
    }

    setThemeColor() {
      const theme = this.children[1].getAttribute('selected-value');
      const OptionsThemes = document.getElementById('option-themes')
      if (theme !== OptionsThemes.getAttribute('theme-color')) {
        OptionsThemes.setAttribute('theme-color', theme);
        [...this.parentNode.children].forEach(child => child.children[1].setAttribute('theme-color', theme))
        const colors = ['-color-main-bg', '-color-font', '-color-font-sub', '-color-highlight-hover', '-color-button'];
        colors.forEach(color => document.styleSheets[1].cssRules[0].style.setProperty(`-${color}`, `var(--${theme}${color})`));
        OptionsThemes.textContent = theme;
      }
    }
  }
)