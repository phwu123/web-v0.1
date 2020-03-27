const MainComponentTemplate = `
  <navigation-component class="navigation-component"></navigation-component>
  <main class="content-holder">others</main>
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
  }
)