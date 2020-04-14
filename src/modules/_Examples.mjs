import { createElementTemplate, initAttributes } from '../functions.js'

createElementTemplate('base-module',
  class BaseModule extends HTMLElement {
    constructor() {
      super();
      initAttributes(this);
    }
    static get observedAttributes() {
      return ['layout-style', 'theme-color'];
    }

    connectedCallback() {
      console.log('base', this.layoutStyle)
    }
  }
)