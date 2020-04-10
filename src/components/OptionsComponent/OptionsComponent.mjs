const OptionsComponentTemplateBasic = `
  <element-interaction-module class="navigation-item" hover click-effect>Options</element-interaction-module>
`

customElements.define('options-component',
  class OptionsComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = OptionsComponentTemplateBasic;
    }
    
    connectedCallback() {
      
    }
  }
)