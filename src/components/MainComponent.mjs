import { initLayout, setThemeColor, debounceFunction } from '../Functions.js';

const template = `
  <screen-component class="screen-component"></screen-component>
  <section class="menu-component">
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
      this.bindFunctions();
      initLayout(this);
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

    bindFunctions() {
      this.changeLayout = this.changeLayout.bind(this);
    }

    changeLayout(e) {
      this.contentHolder.scroll({top: 0, left: 0});
      this.setAttribute('layout-style', e.detail);
    }
  }
)