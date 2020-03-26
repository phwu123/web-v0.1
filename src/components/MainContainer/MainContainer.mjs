const MainContainerTemplate = `
  <span>nav</span>
  <span>others</span>
`
customElements.define('main-container',
  class MainContainer extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = MainContainerTemplate;
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