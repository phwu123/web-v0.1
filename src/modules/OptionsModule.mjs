import { createElementTemplate, setUpModule } from '../functions.js'

createElementTemplate('options-module',
  class OptionsModule extends HTMLElement {
    constructor() {
      super();
      setUpModule(this, 'OptionsModule.css');
      this.shadowRoot.appendChild(this.children[0]);
      const box = document.createElement('dropdown-box-module')
      box.appendChild(this.children[0])
      this.shadowRoot.appendChild(box)
    }

    static get observedAttributes() {
      return ['layout-style', 'theme-color', 'options-show'];
    }

    attributesChangedCallback(name, oldVal, newVal) {
      switch (name) {
        case 'options-show':
          console.log(newVal)
          this.toggleOptionsShow();
          break;
      }
    }

    get optionsShow() {
      return this.getAttribute('options-show') !== null
    }

    toggleOptionsShow() {
      if (this.optionsShow) {
        setTimeout(() => {
          this.children[1].setAttribute('dropdown-open', '');
        }, 500);
      } else {
        this.children[1].removeAttribute('dropdown-open');
      }
    }
  }
)