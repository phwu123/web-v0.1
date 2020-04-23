const NavigationComponentTemplateBasic = `
  <p id="navigation-skills" class="navigation-item" effect-hover effect-click>Skills</p>
  <p id="navigation-experience" class="navigation-item" effect-hover effect-click>Experience</p>
  <p id="navigation-contact" class="navigation-item" effect-hover effect-click>Contact</p>
`
customElements.define('navigation-component',
  class NavigationComponent extends HTMLElement {
    constructor() {
      super();
      this.navigateToPage = this.navigateToPage.bind(this)
      this.innerHTML = NavigationComponentTemplateBasic;
      [...this.children].forEach(child => child.addEventListener('click', this.navigateToPage, false))
      this.contentHolder = document.getElementById('content-holder')
    }

    navigateToPage(e) {
      const target = document.getElementById(`component-${e.target.id.slice(11)}`)
      this.contentHolder.scroll({top: target.offsetTop - this.contentHolder.offsetTop, left: target.offsetLeft - this.contentHolder.offsetLeft, behavior: 'smooth'})
    }
  }
)