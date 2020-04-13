import { initAttributes } from '../../functions.js';

const OptionsComponentTemplateBasic = `
  <element-interaction-module id="options-toggle" class="navigation-item" hover click-effect>Options</element-interaction-module>
  <dropdown-box-module id="options-dropdown-box">
    <element-interaction-module hover click-effect>
      <span class="options-row">
        <p>Theme Type</p>
        <p></p>
      </span>
    </element-interaction-module>
    <element-interaction-module hover click-effect>
      <span class="options-row">
      <p>Layout Type</p>
      <p></p>
    </span>
    </element-interaction-module>
    <element-interaction-module hover click-effect>
      <span class="options-row">
        <p>Effects</p>
        <p></p>
      </span>
    </element-interaction-module>
    <element-interaction-module hover click-effect>
      <span class="options-row">
        <p>Background</p>
        <p></p>
      </span>
    </element-interaction-module>
  </dropdown-box-module>
`

customElements.define('options-component',
  class OptionsComponent extends HTMLElement {
    constructor() {
      super();
      initAttributes(this);
      this.innerHTML = OptionsComponentTemplateBasic;
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

    connectedCallback() {
      document.getElementById('options-toggle').addEventListener('click', this.toggleOptionsDropdown);
      this.setDropdownText();
    }

    toggleOptionsDropdown() {
      const dropdownBox = document.getElementById('options-dropdown-box');
      dropdownBox.toggleAttribute('dropdown-open');
    }

    setDropdownText() {
      const textLine = document.getElementById('options-dropdown-box').children;
      textLine[0].children[0].children[0].textContent = this.themeColorText
      ;
      textLine[1].children[0].children[0].textContent = this.layoutStyleText;
    }

    
  }
)