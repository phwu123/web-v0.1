import { createCssLink } from '../functions.js'

customElements.define('experience-module',
  class ExperienceModule extends HTMLElement {
    constructor() {
      super();
      if (!this.layoutStyle) {
        this.layoutStyle = 'basic'
      }
      this.attachShadow({mode:'open'})
      shadowRoot.appendChild(createCssLink('ExperienceModule.css'));
      shadowRoot.appendChild(document.createElement('slot'))
    }
  }
)