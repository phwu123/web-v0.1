import { createCssLink } from '../functions.js'

customElements.define('element-interaction-module',
  class ElementInteractionModule extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      const shadowRoot = this.shadowRoot;
      shadowRoot.appendChild(createCssLink('ElementInteractionModule.css'));
      [...this.children].forEach(child => {
        shadowRoot.appendChild(child);
      })
    }

    static get observedAttributes() {
      return ['layout-style', 'hover'];
    }

    get layoutStyle() {
      return this.getAttribute('layout-style')
    }

    set layoutStyle(val) {
      this.setAttribute('layout-style', val)
    }

    get interactionHover() {
      return this.getAttribute('hover');
    }

    set interactionHover(val) {
      this.setAttribute('hover', val)
    }
  }
)