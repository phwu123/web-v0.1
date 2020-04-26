import { initShadowRoot } from '../functions.js'

customElements.define('skill-type-module',
  class SkillTypeModule extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'SkillTypeModule.css');
    }
  }
)