import { createCssLink } from '../functions.js'

customElements.define('skill-set-module',
  class SkillSetModule extends HTMLElement {
    constructor() {
      super();
      if (!this.layoutStyle) {
        this.layoutStyle = 'basic'
      }
      if (!this.children[1]) { // add second element if there is none for spacing
        this.appendChild(document.createElement('p'));
      }
      this.attachShadow({mode: 'open'});
      const shadowRoot = this.shadowRoot
      shadowRoot.appendChild(createCssLink('SkillSetModule.css'));
      shadowRoot.appendChild(document.createElement('slot'));
    }

    static get observedAttributes() {
      return ['layout-style'];
    }

    get layoutStyle() {
      return this.getAttribute('layout-style');
    }

    set layoutStyle(val) {
      this.setAttribute('layout-style', val);
    }
  }
)