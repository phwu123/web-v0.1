import { initAttributes, initShadowRoot } from '../Functions.js';

const template = `
  <span class="options-row" effect-hover effect-click>
    <slot>Category Title</slot>
    <p>^</p>
  </span>
  <dropdown-box-module></dropdown-box-module>
`;

customElements.define('options-module',
  class OptionsModule extends HTMLElement {
    constructor() {
      super();
      initAttributes(this);
      initShadowRoot(this, 'OptionsModule.css', template);
      this.dropdownBox = this.shadowRoot.children[3];
      this.toggleOptionDropdown = this.toggleOptionDropdown.bind(this);
      this.shadowRoot.children[2].addEventListener('click', this.toggleOptionDropdown);
    }

    static get observedAttributes() {
      return ['options-show', 'theme-color', 'layout-style'];
    }

    attributeChangedCallback(name) {
      switch (name) {
        case 'options-show':
          this.toggleOptionsShow();
          break;
      }
    }

    get optionsShow() {
      return this.getAttribute('options-show') !== null;
    }

    toggleOptionDropdown() {
      this.toggleAttribute('options-show');
    }

    toggleOptionsShow() {
      if (this.optionsShow) {
        this.dropdownBox.setAttribute('dropdown-open', '');
      } else {
        this.dropdownBox.removeAttribute('dropdown-open');
      }
    }
  }
)
