import { setUpModule } from '../functions.js'

customElements.define('dropdown-box-module',
  class DropdownBoxModule extends HTMLElement {
    constructor() {
      super();
      setUpModule(this, 'DropdownBoxModule.css');
      [...this.children].forEach(child =>
        this.shadowRoot.appendChild(child)
      );
    }

    static get observedAttributes() {
      return ['layout-style', 'dropdown-open'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
      switch (name) {
        case 'dropdown-open':
          this.toggleDropdown();
          break;
      }
    }

    get layoutStyle() {
      return this.getAttribute('layout-style')
    }

    set layoutStyle(val) {
      this.setAttribute('layout-style', val)
    }

    get dropdownOpen() {
      return this.getAttribute('dropdown-open') !== null;
    }

    toggleDropdown() {
      if (this.dropdownOpen) {
        this.style.height = this.shadowRoot.children.offsetHeight + 'px';
        this.style.height = [...this.shadowRoot.children].reduce((sum, child) => sum += child.offsetHeight, 0) + 'px'
      } else {
        this.style.height = 0;
      }
    }
  }
)