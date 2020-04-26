import { initLayout } from '../../Functions.js';

const ExperienceComponentBasicTemplate = `
  <header class="component-header">Experience</header>
  <section class="component-section">
    <experience-doubledoor></experience-doubledoor>
  </section>
`
customElements.define('experience-component',
  class ExperienceComponent extends HTMLElement {
    constructor() {
      super();
      initLayout(this);
      this.innerHTML = ExperienceComponentBasicTemplate
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