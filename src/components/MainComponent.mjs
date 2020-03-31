const MainComponentTemplate = `
  <navigation-component class="navigation-component"></navigation-component>
  <main id="content-holder" class="content-holder">
    <skills-component id="component-skills" class="content-component"></skills-component>
    <span id="component-experience" class="content-component">experience</span>
    <span id="component-contact" class="content-component">contact</span></span>
  </main>
`
customElements.define('main-component',
  class MainComponent extends HTMLElement {
    constructor() {
      super();
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
        document.getElementById('main').classList.add('opacity-1')
      }, 100);
    }
  }
)