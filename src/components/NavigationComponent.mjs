const NavigationComponentTemplateBasic = `
  <p class="navigation-item">Skills</p>
  <p class="navigation-item">Experience</p>
  <p class="navigation-item">Contact</p>
`
customElements.define('navigation-component',
  class NavigationComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = NavigationComponentTemplateBasic;
    }
  }
)