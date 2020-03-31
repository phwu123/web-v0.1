import { createCssLink } from '../functions.js'

customElements.define('skill-set-module',
  class SkillSetModule extends HTMLElement {
    constructor() {
      super();
      if (!this.layoutStyle) {
        this.layoutStyle = 'basic'
      }
      const textMainNode = this.children[0]
      const textSubNode = this.children[1] || document.createElement('p')
      this.attachShadow({mode: 'open'});
      const shadowRoot = this.shadowRoot
      shadowRoot.appendChild(createCssLink('SkillSetModule.css'))
      shadowRoot.appendChild(textMainNode);
      shadowRoot.appendChild(textSubNode);
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