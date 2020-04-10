import { setUpModule } from '../functions.js'

customElements.define('skill-type-module',
  class SkillTypeModule extends HTMLElement {
    constructor() {
      super();
      setUpModule(this, 'SkillTypeModule.css');
      [...this.children].forEach(child =>
        this.shadowRoot.appendChild(child)
      )
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