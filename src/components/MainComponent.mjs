import { initLayout, setThemeColor } from '../Functions.js';

const MainComponentTemplate = `
  <section class="navigation-component">
    <navigation-component></navigation-component>
    <options-component></options-component>
  </section>
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
      initLayout(this);
      setThemeColor();
      this.innerHTML = MainComponentTemplate;
    }

    static get observedAttributes() {
      return ['layout-style']
    }

    get layoutStyle() {
      return this.getAttribute('layout-style')
    }

    set layoutStyle(val) {
      this.setAttribute('layout-style', val)
    }

    connectedCallback() {
      setTimeout(() => {
        document.getElementById('main').classList.add('opacity-1');
      }, 200);
      this.addEventListener('change-layout', this.changeLayout);
    }

    changeLayout(e) {
      document.getElementById('content-holder').scroll({top: 0, left: 0})
      this.setAttribute('layout-style', e.detail);
    }
  }
)