import { initShadowRoot, initAttributes } from '../functions.js'

customElements.define('button-radio',
  class ButtonRadio extends HTMLElement {
    constructor() {
      super();
      initAttributes(this);
      initShadowRoot(this, 'ButtonRadio.css');
      this.shadowRoot.appendChild(document.createElement('span'))
    }

    static get observedAttributes() {
      return ['theme-color', 'layout-style', 'selected-value', 'is-selected'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
      switch(name) {
        case 'theme-color':
          if (newVal === this.getAttribute('selected-value')) {
            this.setAttribute('is-selected', '');
          } else {
            this.removeAttribute('is-selected');
          }
          case 'layout-style':
            if (newVal === this.getAttribute('selected-value')) {
              this.setAttribute('is-selected', '');
            } else {
              this.removeAttribute('is-selected');
            }
      }
    }
  }
)