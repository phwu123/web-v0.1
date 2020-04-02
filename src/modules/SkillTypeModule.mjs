import { createCssLink } from '../functions.js'

customElements.define('skill-type-module',
  class SkillTypeModule extends HTMLElement {
    constructor() {
      super();
      if (!this.layoutStyle) {
        this.layoutStyle = 'basic'
      }
      this.attachShadow({mode: 'open'});
      const shadowRoot = this.shadowRoot;
      shadowRoot.appendChild(createCssLink('SkillTypeModule.css'));
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