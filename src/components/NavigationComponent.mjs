const NavigationComponentTemplateBasic = `
  <p id="navigation-skills" class="navigation-item" effect-hover effect-click>Skills</p>
  <p id="navigation-experience" class="navigation-item" effect-hover effect-click>Experience</p>
  <p id="navigation-contact" class="navigation-item" effect-hover effect-click>Contact</p>
  <slot></slot>
`
customElements.define('navigation-component',
  class NavigationComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = NavigationComponentTemplateBasic;
    }

    connectedCallback() {
      [...this.children].slice(0, 3).forEach(child => child.addEventListener('click', this.navigateToPage))
      // change when window resize listener ready for mobile
      this.children[3].appendChild(document.createElement('options-component'));
    }

    navigateToPage(e) {
      const target = document.getElementById(`component-${e.target.id.slice(11)}`)
      const contentHolder = document.getElementById('content-holder')
      contentHolder.scroll({top: target.offsetTop - contentHolder.offsetTop, behavior: 'smooth'})
    }
  }
)