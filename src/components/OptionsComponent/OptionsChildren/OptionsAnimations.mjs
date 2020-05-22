const template = `
  <span class="option-row slider-row">
    <label>X's: Low</label>
    <range-slider id="x-range" slider-for="x"></range-slider>
  </span>
  <span class="option-row slider-row">
    <label>Prisms: Off</label>
    <range-slider slider-for="prism"></range-slider>
  </span>
`;

customElements.define('options-animations',
  class OptionsAnimations extends customElements.get('options-module') {
    constructor() {
      super();
      this.appendChild(document.createTextNode('Animations'));
      this.shadowRoot.children[3].innerHTML += template;
    }

    connectedCallback() {
      setTimeout(() => {
        this.shadowRoot.getElementById('x-range').setAttribute('set-value', 0.3);
      }, 500);
    }
  }
)
