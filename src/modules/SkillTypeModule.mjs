import { initBasicModule, initLayout } from '../functions.js'

customElements.define('skill-type-module',
  class SkillTypeModule extends HTMLElement {
    constructor() {
      super();
      initLayout(this);
      initBasicModule(this, 'SkillTypeModule.css');
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