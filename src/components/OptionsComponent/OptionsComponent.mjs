import { initAttributes } from '../../functions.js';

const OptionsComponentTemplateBasic = `
  <header id="options-toggle" class="navigation-item" effect-hover effect-click>Options</header>
  <dropdown-box-module id="options-dropdown-box">
    <span class="options-row" effect-hover effect-click>
      <p>Theme Type</p>
      <p>^</p>
      
    </span>
    <span class="options-row" effect-hover effect-click>
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
    </span>
  </dropdown-box-module>
`

// <options-module>
//           <header>Themes</header>
//           <div>test</div>
//         </options-module>

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
      [...this.dropdownBox.children].forEach(child => child.addEventListener('click', this.toggleOptionDropdown));
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
      // this.children[2].toggleAttribute('options-show');
      const dropdownBoxInner = document.getElementById('options-dropdown-box').shadowRoot.children
      for (let i = 1; i < dropdownBoxInner.length; ++i) {
        const target = dropdownBoxInner[i];
        if (target !== this) {
          target.removeAttribute('options-show');
        } else {
          target.toggleAttribute('options-show')
        }
      }
    }

    toggleOptionsDropdown() {
      document.getElementById('options-dropdown-box').toggleAttribute('dropdown-open');
    }

    setDropdownText() {
      this.setThemeColorText();
      this.setLayoutStyleText();
    }

    setThemeColorText() {
      this.dropdownBox.children[0].children[0].textContent = this.themeColorText;
    }
    
    setLayoutStyleText() {
      this.dropdownBox.children[1].children[0].textContent = this.layoutStyleText;
    }
  }
)