import { initShadowRoot} from '../../Functions.js';

const template = `
  <options-button></options-button>
  <dropdown-box-module id="options-dropdown-box">
    <options-themes id="options-themes"></options-themes>
    <options-layouts id="options-layouts"></options-layouts>
    <options-animations id="options-animations"></options-animations>
  </dropdown-box-module>
`;

customElements.define('options-component',
  class OptionsComponent extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'OptionsComponent.css');
      this.shadowRoot.appendChild(document.createElement('slot'));
      this.innerHTML = template;
    }
  }
)