import { setUpModule } from '../functions.js'

customElements.define('dropdown-box-module',
  class DropdownBoxModule extends HTMLElement {
    constructor() {
      super();
      setUpModule(this, 'DropdownBoxModule.css');
      this.shadowRoot.appendChild(document.createElement('slot'))
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

    get dropdownOpen() {
      return this.getAttribute('dropdown-open');
    }

    set dropdownOpen(val) {
      this.setAttribute('dropdown-open', val)
    }

    toggleDropdown(val) {
      if (val) {
        this.style.height = this.offsetHeight + 'px';
      } else {
        this.style.height = 0;
      }
    }
  }
)