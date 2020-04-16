import { createElementTemplate, initAttributes } from '../../../functions.js'

createElementTemplate('options-themes',
  class OptionsThemes extends customElements.get('options-module') {
    constructor() {
      super();
      // [...this.children].forEach(child =>
      //   this.shadowRoot.appendChild(child)
      // );
      this.appendChild(document.createTextNode(this.themeColor || this.getAttribute('theme-color')))
    }

    connectedCallback() {
    //  this.setThemeColorText();
    }

    static get observedAttributes() {
      return ['layout-style', 'theme-color'];
    }

    setThemeColorText() {
      this.shadowRoot.children[1].children[0].textContent = this.themeColor || this.getAttribute('theme-color');
    }
  }
)