const OptionsThemesDropdownTemplate = `
  <span class="button-row" effect-hover effect-click>
    <label>Light</label>
    <button-radio selected-value="light" ></button-radio>
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
      this.shadowRoot.children[3].innerHTML += OptionsThemesDropdownTemplate;
      [...this.shadowRoot.children[3].children].forEach(child => child.addEventListener('click', this.setThemeColor));
    }

    setThemeColor() {
      this.dispatchEvent(new CustomEvent('change-theme-color', {
        bubbles: true,
        composed: true,
        detail: this.children[1].getAttribute('selected-value')
      }));
      console.log('dispatch', window.event)
    }

    setThemeColorText() {
      // this.childNodes[0].textContent = this.themeColor;
    }
  }
)