const OptionsComponentTemplateBasic = `
  <element-interaction-module id="options-toggle" class="navigation-item" hover click-effect>Options</element-interaction-module>
  <dropdown-box-module id="dropdown-box" >
    <p>aa</p>
  </dropdown-box-module>
`

customElements.define('options-component',
  class OptionsComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = OptionsComponentTemplateBasic;
    }
    
    connectedCallback() {
      document.getElementById('options-toggle').addEventListener('click', this.toggleOptionsDropdown);
    }

    toggleOptionsDropdown() {
      const dropdownBox = document.getElementById('dropdown-box');
      dropdownBox.toggleAttribute('dropdown-open');
    }
  }
)