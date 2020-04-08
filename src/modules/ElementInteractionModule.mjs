import { createCssLink, initAttributes } from '../functions.js'

customElements.define('element-interaction-module',
  class ElementInteractionModule extends HTMLElement {
    constructor() {
      super();
      initAttributes(this);
      this.attachShadow({mode: 'open'});
      const shadowRoot = this.shadowRoot;
      shadowRoot.appendChild(createCssLink('ElementInteractionModule.css'));
      shadowRoot.appendChild(document.createElement('slot'))
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