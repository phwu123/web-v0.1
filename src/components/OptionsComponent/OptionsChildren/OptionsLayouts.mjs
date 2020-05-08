const template = `
  <span class="button-row" effect-hover effect-click>
    <label>Basic</label>
    <button-radio target-type="layout-style" selected-value="basic" is-selected></button-radio>
  </span>
  <span class="button-row" effect-hover effect-click>
    <label>Gallery</label>
    <button-radio target-type="layout-style" selected-value="gallery"></button-radio>
  </span>
  `
  // <span class="button-row" effect-hover effect-click>
  //   <label>Book</label>
  //   <button-radio target-type="layout-style" selected-value="book"></button-radio>
  // </span>

customElements.define('options-layouts',
  class OptionsLayouts extends customElements.get('options-module') {
    constructor() {
      super();
      this.appendChild(document.createTextNode(this.getAttribute('layout-style')));
      this.setLayoutStyleText = this.setLayoutStyleText.bind(this);
      this.shadowRoot.children[3].innerHTML += template;
      [...this.shadowRoot.children[3].children].forEach(child => child.addEventListener('click', this.setLayoutStyleText, false))
    }

    setLayoutStyleText(e) {
      const target = e.currentTarget
      const layout = target.children[1].getAttribute('selected-value');
      const OptionsLayouts = document.getElementById('options-layouts');
      if (layout !== OptionsLayouts.getAttribute('layout-style')) {
        this.dispatchEvent(this.changeLayoutEvent(layout))
        OptionsLayouts.setAttribute('layout-style', layout);
        [...target.parentNode.children].forEach(child => child.children[1].setAttribute('layout-style', layout))
        OptionsLayouts.textContent = layout;
      }
    }

    changeLayoutEvent(layout) {
      return new CustomEvent('change-layout', {
        detail: layout,
        bubbles: true
      })
    }
  }
)