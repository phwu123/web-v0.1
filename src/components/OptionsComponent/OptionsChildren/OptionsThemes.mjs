import { createElementTemplate, initAttributes } from '../../../functions.js'

createElementTemplate('options-themes',
  class OptionsThemes extends HTMLDivElement {
    constructor() {
      super();
      initAttributes(this);
    }

    static get observedAttributes() {
      return ['layout-style', 'theme-color'];
    }
  }
)