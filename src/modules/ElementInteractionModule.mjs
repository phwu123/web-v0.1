import { setUpModule } from '../functions.js'

customElements.define('element-interaction-module',
  class ElementInteractionModule extends HTMLElement {
    constructor() {
      super();
      setUpModule(this, 'ElementInteractionModule.css');
      this.shadowRoot.appendChild(document.createElement('slot'))
    }

    static get observedAttributes() {
      return ['layout-style'];
    }

    get layoutStyle() {
      return this.getAttribute('layout-style')
    }

    set layoutStyle(val) {
      this.setAttribute('layout-style', val)
    }
  }
)