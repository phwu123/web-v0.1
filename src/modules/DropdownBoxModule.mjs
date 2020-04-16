import { initShadowRoot } from '../functions.js'

customElements.define('dropdown-box-module',
  class DropdownBoxModule extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'DropdownBoxModule.css');
      
    }

    connectedCallback() {
      this.shadowRoot.appendChild(document.createElement('slot'))
    }

    static get observedAttributes() {
      return ['dropdown-open'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
      switch (name) {
        case 'dropdown-open':
          this.toggleDropdown();
          break;
      }
    }

    get dropdownOpen() {
      return this.getAttribute('dropdown-open') !== null;
    }

    get contentHeight() {
      return [...this.children].reduce((sum, child) => sum += child.offsetHeight, 0)
    }

    toggleDropdown() {
      if (this.dropdownOpen) {
        this.style.height = this.contentHeight + 'px'
        setTimeout(() => {
          this.style.height = 'unset';
        }, 500);
      } else {
        this.style.height = this.contentHeight + 'px'
        setTimeout(() => {
          this.style.height = 0;
        }, 0);
      }
    }
  }
)