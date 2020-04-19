import { initAttributes } from '../../functions.js';

const OptionsComponentTemplateBasic = `
  <header id="options-toggle" class="navigation-item" effect-hover effect-click>Options</header>
  <dropdown-box-module id="options-dropdown-box">
    <options-themes></options-themes>
    <options-layouts></options-layouts>
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
      initAttributes(this);
      this.innerHTML = OptionsComponentTemplateBasic;
      this.optionsToggle = document.getElementById('options-toggle')
      this.dropdownBox = document.getElementById('options-dropdown-box')
    }

    connectedCallback() {
      this.optionsToggle.addEventListener('click', this.toggleOptionsDropdown, false);
    }
    
    static get observedAttributes() {
      return ['layout-style', 'theme-color'];
    }

    toggleOptionsDropdown() {
      document.getElementById('options-dropdown-box').toggleAttribute('dropdown-open');
    }
  }
)