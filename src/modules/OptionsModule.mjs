import { initBasicModule } from '../functions.js'

const OptionsModuleBasicTemplate = `
  <span class="options-row" effect-hover effect-click>
    <slot>Category Title</slot>
    <p>^</p>
  </span>
  <dropdown-box-module></dropdown-box-module>
`

customElements.define('options-module',
  class OptionsModule extends HTMLElement {
    constructor() {
      super();
      initBasicModule(this, 'OptionsModule.css');
      this.shadowRoot.innerHTML += OptionsModuleBasicTemplate
      this.dropdownBox = this.shadowRoot.children[3]
    }

    static get observedAttributes() {
      return ['layout-style', 'theme-color', 'options-show'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
      switch (name) {
        case 'options-show':
          this.toggleOptionsShow();
          break;
      }
    }

    get optionsShow() {
      return this.getAttribute('options-show') !== null
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
