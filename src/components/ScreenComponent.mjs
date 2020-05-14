import { initShadowRoot} from '../Functions.js';

customElements.define('screen-component',
  class ScreenComponent extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'ScreenComponent.css');
    }

    connectedCallback() {
      this.shadowRoot.appendChild(document.createElement('slot'))
      this.appendChild(document.createElement('falling-x'))
    }
  }
)