import { initShadowRoot} from '../../Functions.js';

const template = `
  <options-button></options-button>
  <dropdown-box-module id="options-dropdown-box">
    <options-themes id="options-themes"></options-themes>
    <options-layouts id="options-layouts"></options-layouts>
    <options-animations id="options-animations"></options-animations>
  </dropdown-box-module>
`

{/* <span class="options-row" effect-hover effect-click>
<p>Layout Type</p>
<p>^</p>
</span>
<span class="options-row" effect-hover effect-click>
<p>Effects</p>
<p>^</p>
</span>
<span class="options-row" effect-hover effect-click>
<p>Background</p>
<p>^</p>

</span> */}

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