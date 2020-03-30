const NavigationComponentTemplateBasic = `
  <p id="navigation-skills" class="navigation-item">Skills</p>
  <p id="navigation-experience" class="navigation-item">Experience</p>
  <p id="navigation-contact" class="navigation-item">Contact</p>
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