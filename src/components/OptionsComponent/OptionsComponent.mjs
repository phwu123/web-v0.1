import { initAttributes } from '../../functions.js';

const OptionsComponentTemplateBasic = `
  <header id="options-toggle" class="navigation-item" effect-hover effect-click>Options</header>
  <dropdown-box-module id="options-dropdown-box">
    <options-themes></options-themes >
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
      this.dropdownBox = document.getElementById('options-dropdown-box')
      this.optionsToggle = document.getElementById('options-toggle')
    }

    connectedCallback() {
      this.optionsToggle.addEventListener('click', this.toggleOptionsDropdown);
    }
    
    static get observedAttributes() {
      return ['layout-style', 'theme-color'];
    }

    get layoutStyle() {
      return this.getAttribute('layout-style')
    }

    set layoutStyle(val) {
      this.setAttribute('layout-style', val)
    }

    get themeColor() {
      return this.getAttribute('theme-color');
    }

    set themeColor(val) {
      this.setAttribute('theme-color', val)
    }
    
    get layoutStyleText() {
      switch (this.layoutStyle) {
        case 'basic':
          return 'Basic';
      }
    }

    get themeColorText() {
      switch (this.themeColor) {
        case 'light':
          return 'Light';
        case 'dark':
          return 'Dark';
      }
    }

    toggleOptionsDropdown() {
      document.getElementById('options-dropdown-box').toggleAttribute('dropdown-open');
    }
  }
)