import { setUpModule } from '../functions.js'

customElements.define('dropdown-box-module',
  class DropdownBoxModule extends HTMLElement {
    constructor() {
      super();
      setUpModule(this, 'DropdownBoxModule.css');
      [...this.children].forEach(child =>
        this.shadowRoot.appendChild(child)
      )
    }

    static get observedAttributes() {
      return ['layout-style', 'dropdown-open'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
      switch (name) {
        case 'dropdown-open':
          this.toggleDropdown(newVal);
          break;
      }
    }

    get layoutStyle() {
      return this.getAttribute('layout-style')
    }

    set layoutStyle(val) {
      this.setAttribute('layout-style', val)
    }

    toggleDropdown(val) {
      if (val === null) {
        this.style.height = 0;
      } else {
        this.style.height = this.shadowRoot.children[1].offsetHeight + 'px';
      }
    }
  }
)