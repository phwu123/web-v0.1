const OptionsLayoutsDropdownTemplate = `
  <span slot="sub-options">a</span>
`

customElements.define('options-layouts',
  class OptionsLayouts extends customElements.get('options-module') {
    constructor() {
      super();
      this.appendChild(document.createTextNode(this.layoutStyle))
      this.innerHTML += OptionsLayoutsDropdownTemplate;
    }

    connectedCallback() {
    //  this.setLayoutStyleText();
    }


    setLayoutStyleText() {
      // this.childNodes[0].textContent = this.layoutStyle;
    }
  }
)