import { initShadowRoot } from '../../Functions.js';
import {} from '../../Constants.js';

customElements.define('falling-x',
  class FallingX extends customElements.get('falling-object') {
    constructor() {
      super();
      initShadowRoot(this, 'FallingX.css');
      this.shadowRoot.appendChild(document.createElement('slot'));
    }

    static get observedAttributes () {
      return ['init-complete']
    }

    attributeChangedCallback(name, oldVal, newVal) {
      switch (name) {
        case 'init-complete':
          this.initSelf();
          break;
      }
    }

    initSelf() {
      const p = document.createElement('p');
      p.textContent = 'X';
      this.appendChild(p);
    }
  }
)