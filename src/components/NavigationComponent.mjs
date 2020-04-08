const NavigationComponentTemplateBasic = `
  <element-interaction-module id="navigation-skills" class="navigation-item" hover click-effect>Skills</element-interaction-module>
  <element-interaction-module id="navigation-experience" class="navigation-item" hover click-effect>Experience</element-interaction-module>
  <element-interaction-module id="navigation-contact" class="navigation-item" hover click-effect>Contact</element-interaction-module>
  <element-interaction-module class="navigation-item" click-effect>Options</element-interaction-module>
`
customElements.define('navigation-component',
  class NavigationComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = NavigationComponentTemplateBasic;
    }

    connectedCallback() {
      [...this.children].slice(0, 3).forEach(child => child.addEventListener('click', this.navigateToPage))
    }

    navigateToPage(e) {
      const target = document.getElementById(`component-${e.target.id.slice(11)}`)
      const contentHolder = document.getElementById('content-holder')
      contentHolder.scroll({top: target.offsetTop - contentHolder.offsetTop, behavior: 'smooth'})
    }
  }
)