const OptionsThemesDropdownTemplate = `
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
      this.shadowRoot.children[3].innerHTML += OptionsThemesDropdownTemplate;
      [...this.shadowRoot.children[3].children].forEach(child => child.addEventListener('click', this.setThemeColor));
    }

    setThemeColor() {
      const theme = this.children[1].getAttribute('selected-value');
      if (theme !== this.getAttribute('theme-color')) {
        [...this.parentNode.children].forEach(child => child.children[1].setAttribute('theme-color', theme))
        document.styleSheets[1].cssRules[0].style.setProperty('--color-main-bg', `var(--${theme}-color-main-bg)`)
        document.styleSheets[1].cssRules[0].style.setProperty('--color-font', `var(--${theme}-color-font)`)
        document.styleSheets[1].cssRules[0].style.setProperty('--color-font-sub', `var(--${theme}-color-font-sub)`)
        document.styleSheets[1].cssRules[0].style.setProperty('--color-highlight-hover', `var(--${theme}-color-highlight-hover)`)
        document.styleSheets[1].cssRules[0].style.setProperty('--color-button', `var(--${theme}-color-button)`)
      }
    }

    setThemeColorText() {
      // this.childNodes[0].textContent = this.themeColor;
    }
  }
)