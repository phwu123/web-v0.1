import { initAttributes } from '../../functions.js';

const OptionsComponentTemplateBasic = `
  <element-interaction-module id="options-toggle" class="navigation-item" hover click-effect>Options</element-interaction-module>
  <dropdown-box-module id="options-dropdown-box">
    <element-interaction-module hover click-effect>
      <span class="options-row">
        <p>Theme Type</p>
        <p></p>
        <options-module>
          <header>Themes</header>
          <div>test</div>
        </options-module>
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
      this.dropdownBox = document.getElementById('options-dropdown-box')
      this.optionsToggle = document.getElementById('options-toggle')
    }

    connectedCallback() {
      this.optionsToggle.addEventListener('click', this.toggleOptionsDropdown);
      this.setDropdownText();
    //  [...this.dropdownBox.children].forEach(child => child.children[0].children[2].addEventListener('click', this.toggleOptionDropdown));
      this.dropdownBox.children[0].children[0].addEventListener('click', this.toggleOptionDropdown);
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

    toggleOptionDropdown() {
      this.children[2].toggleAttribute('options-show');
    }

    toggleOptionsDropdown() {
      document.getElementById('options-dropdown-box').toggleAttribute('dropdown-open');
    }

    setDropdownText() {
      this.setThemeColorText();
      this.setLayoutStyleText();
    }

    setThemeColorText() {
      this.dropdownBox.children[0].children[0].children[0].textContent = this.themeColorText;
    }
    
    setLayoutStyleText() {
      this.dropdownBox.children[1].children[0].children[0].textContent = this.layoutStyleText;
    }
  }
)