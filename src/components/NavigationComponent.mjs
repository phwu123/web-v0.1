const NavigationComponentTemplateBasic = `
  <element-interaction-module id="navigation-skills" class="navigation-item" hover>Skills</element-interaction-module>
  <element-interaction-module id="navigation-experience" class="navigation-item" hover>Experience</element-interaction-module>
  <element-interaction-module id="navigation-contact" class="navigation-item" hover>Contact</element-interaction-module>
`
customElements.define('navigation-component',
  class NavigationComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = NavigationComponentTemplateBasic;
    }

    connectedCallback() {
      [...this.children].forEach(child => child.addEventListener('click', this.navigateToPage))
    }

    navigateToPage(e) {
      const target = document.getElementById(`component-${e.target.id.slice(11)}`)
      const contentHolder = document.getElementById('content-holder')
      contentHolder.scroll({top: target.offsetTop - contentHolder.offsetTop, behavior: 'smooth'})
    }
  }
)