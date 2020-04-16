const OptionsThemesDropdownTemplate = `
  <span>a</span>
`

customElements.define('options-themes',
  class OptionsThemes extends customElements.get('options-module') {
    constructor() {
      super();
      this.appendChild(document.createTextNode(this.themeColor))
      this.shadowRoot.children[3].innerHTML += OptionsThemesDropdownTemplate;
      // this.innerHTML += OptionsThemesDropdownTemplate;
    }

    connectedCallback() {
    //  this.setThemeColorText();
    }


    setThemeColorText() {
      // this.childNodes[0].textContent = this.themeColor;
    }
  }
)