import { createElementTemplate, setUpModule, initAttributes, createBaseCss, createCssLink } from '../functions.js'

const OptionsModuleBasicTemplate = `
  <span class="options-row" effect-hover effect-click>
    <slot>Category Title</slot>
    <p>^</p>
  </span>
`

createElementTemplate('options-module',
  class OptionsModule extends HTMLElement {
    constructor() {
      super();
    initAttributes(this);
  this.attachShadow({mode: 'open'});
      const shadow = this.shadowRoot;
      shadow.appendChild(createBaseCss())
      shadow.appendChild(createCssLink('OptionsModule.css'))
      this.shadowRoot.innerHTML += OptionsModuleBasicTemplate
      
    }

    static get observedAttributes() {
      return ['layout-style', 'theme-color', 'options-show'];
    }

    attributesChangedCallback(name, oldVal, newVal) {
      switch (name) {
        case 'options-show':
          console.log(newVal)
       //   this.toggleOptionsShow();
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
