import { initAttributes } from '../functions.js';

const MainComponentTemplate = `
  <navigation-component class="navigation-component"></navigation-component>
  <main id="content-holder" class="content-holder">
    <skills-component id="component-skills" class="content-component"></skills-component>
    <experience-component id="component-experience" class="content-component"></experience-component>
    <contact-component id="component-contact" class="contact-component"></contact-component>
  </main>
`
customElements.define('main-component',
  class MainComponent extends HTMLElement {
    constructor() {
      super();
      initAttributes(this);
      this.innerHTML = MainComponentTemplate;
    }

    static get observedAttributes() {
      return ['layout-style', 'theme-color']
    }

    get layoutStyle() {
      return this.getAttribute('layout-style')
    }

    set layoutStyle(val) {
      this.setAttribute('layout-style', val)
    }

    get themeColor() {
      return this.getAttribute('theme-color');
    }

    set themeColor(val) {
      this.setAttribute('theme-color', val)
    }

    connectedCallback() {
      setTimeout(() => {
        document.getElementById('main').classList.add('opacity-1')
      }, 100);
    }
  }
)