const template = `
  <span class="option-row slider-row">
    <label>X's: Low</label>
    <range-slider></range-slider>
  </span>
`

customElements.define('options-animations',
  class OptionsAnimations extends customElements.get('options-module') {
    constructor() {
      super();
      this.appendChild(document.createTextNode('Animations'));
      this.shadowRoot.children[3].innerHTML += template;
    }
  }
)
