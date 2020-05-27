import { initLayout, setThemeColor, debounceFunction } from '../Functions.js';

const template = `
  <screen-component class="screen-component"></screen-component>
  <section class="menu-component">
    <navigation-component id="navigation-component"></navigation-component>
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
      this.bindFunctions();
      initLayout(this);
      this.initFunctions();
      setThemeColor();
      this.innerHTML = template;
      this.contentHolder = document.getElementById('content-holder');
    }

    static get observedAttributes() {
      return ['layout-style'];
    }

    connectedCallback() {
      setTimeout(() => {
        document.getElementById('main').classList.add('opacity-1');
      }, 200);
      this.addEventListener('change-layout', this.changeLayout, false);
    }

    initFunctions() {
      this.warnCss();
    }

    warnCss() {
      if (document.styleSheets.length !== 2) {
        alert('Please turn off any CSS extensions or plugins and refresh');
      }
    }

    bindFunctions() {
      this.changeLayout = this.changeLayout.bind(this);
    }

    changeLayout(e) {
      this.setAttribute('layout-style', e.detail);
      document.getElementById('navigation-component').setAttribute('layout-style', e.detail);
    }
  }
)