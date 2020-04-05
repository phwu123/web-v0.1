import { setUpModule } from '../functions.js'

customElements.define('experience-module',
  class ExperienceModule extends HTMLElement {
    constructor() {
      super();
      setUpModule(this, 'ExperienceModule.css')
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