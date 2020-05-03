import { initShadowRoot } from '../Functions.js'

customElements.define('dropdown-box-module',
  class DropdownBoxModule extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'DropdownBoxModule.css');
      this.animationDuration = 500;
      this.isAnimating = false;
      this.timeoutId = undefined;
    }

    connectedCallback() {
      this.shadowRoot.appendChild(document.createElement('slot'))
    }

    static get observedAttributes() {
      return ['dropdown-open', 'show-styles'];
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
        this.toggleOpen();
      } else {
        this.toggleClose();
      }
    }

    toggleOpen() {
      if (this.isAnimating) {
        clearTimeout(this.timeoutId);
      }
      this.setAttribute('show-styles', '');
      this.isAnimating = true;
      this.style.height = this.contentHeight + 'px';
      this.timeoutId = setTimeout(() => {
        this.style.height = 'unset';
        this.isAnimating = false;
      }, this.animationDuration);
    }

    toggleClose() {
      if (this.isAnimating) {
        clearTimeout(this.timeoutId);
      };
      this.isAnimating = true;
      this.style.height = this.contentHeight + 'px';
      setTimeout(() => {
        this.style.height = 0;
      }, 10); // needs a delay to work correctly?
      this.timeoutId = setTimeout(() => {
        this.isAnimating = false;
        this.removeAttribute('show-styles')
      }, this.animationDuration);
    }
  }
)