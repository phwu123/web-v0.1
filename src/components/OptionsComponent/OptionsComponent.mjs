import { initShadowRoot} from '../../Functions.js';

const template = `
  <header id="options-toggle" class="navigation-item" effect-hover effect-click></header>
  <dropdown-box-module id="options-dropdown-box">
    <options-themes id="options-themes"></options-themes>
    <options-layouts id="options-layouts"></options-layouts>
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
      this.handleWindowResize = this.handleWindowResize.bind(this);
      initShadowRoot(this, 'OptionsComponent.css');
      this.shadowRoot.appendChild(document.createElement('slot'));
      this.innerHTML = template;
      if (window.innerWidth > 600) {
        this.setText();
      }
    }

    connectedCallback() {
      document.getElementById('options-toggle').addEventListener('click', this.toggleOptionsDropdown, false);
      window.addEventListener('resize', this.handleWindowResize, false)
    }

    toggleOptionsDropdown() {
      document.getElementById('options-dropdown-box').toggleAttribute('dropdown-open');
    }

    handleWindowResize() {
      if (window.innerWidth > 600) {
        this.setText();
      } else {
        this.setMenu();
      }
    }

    setText() {
      this.children[0].textContent = 'Options';
    }

    setMenu() {
      this.children[0].textContent = '';
    }
  }
)