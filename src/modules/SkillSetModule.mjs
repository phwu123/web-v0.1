import { setUpModule } from '../functions.js'

customElements.define('skill-set-module',
  class SkillSetModule extends HTMLElement {
    constructor() {
      super();
      setUpModule(this, 'SkillSetModule.css')
      const subText = this.children[1] || document.createElement('p')
      this.shadowRoot.appendChild(this.children[0])
      this.shadowRoot.appendChild(subText)
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