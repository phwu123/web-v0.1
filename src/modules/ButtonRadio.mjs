import { initShadowRoot } from '../functions.js'

const ButtonRadioTemplate = `
  <span></span>
`

customElements.define('button-radio',
  class ButtonRadio extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'ButtonRadio.css');
      this.shadowRoot.innerHTML += ButtonRadioTemplate;
      this.addEventListener('change-theme-color', this.changeThemeColor, false);
    }

    static get observedAttributes() {
      return ['theme-color','selected-value', 'is-selected'];
    }

    changeThemeColor(e) {
      console.log(e)
      this.setAttribute('theme-color', e.detail)
    }
  }
)