import { initShadowRoot, initTheme, initLayout } from '../Functions.js'

customElements.define('button-radio',
  class ButtonRadio extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'ButtonRadio.css');
      this.shadowRoot.appendChild(document.createElement('span'))
      this.initAttributes();
    }

    static get observedAttributes() {
      return ['target-type', 'theme-color', 'layout-style', 'selected-value', 'is-selected'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (name === this.getAttribute('target-type')) {
        this.setIsSelected(newVal);
      }
    }

    setIsSelected(val) {
      if (val === this.getAttribute('selected-value')) {
        this.setAttribute('is-selected', '');
      } else {
        this.removeAttribute('is-selected');
      }
    }

    initAttributes() { // store initial states somewhere
      switch (this.getAttribute('target-type')) {
        case 'theme-color':
          initTheme(this);
          break;
        case 'layout-style':
          initLayout(this);
          break;
      }
    }
  }
)