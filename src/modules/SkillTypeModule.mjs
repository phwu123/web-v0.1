import { initShadowRoot } from '../Functions.js'

customElements.define('skill-type-module',
  class SkillTypeModule extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'SkillTypeModule.css');
    }
  }
)