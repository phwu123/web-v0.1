import { initShadowRoot } from '../Functions.js';

const template = `
  <p id="navigation-skills" class="navigation-item" effect-hover effect-click>Skills</p>
  <p id="navigation-experience" class="navigation-item" effect-hover effect-click>Experience</p>
  <p id="navigation-contact" class="navigation-item" effect-hover effect-click>Contact</p>
`
customElements.define('navigation-component',
  class NavigationComponent extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'NavigationComponent.css');
      this.shadowRoot.appendChild(document.createElement('slot'));
      this.navigateToPage = this.navigateToPage.bind(this)
      this.innerHTML = template;
      [...this.children].forEach(child => child.addEventListener('click', this.navigateToPage, false))
      this.contentHolder = document.getElementById('content-holder');
    }

    static get observedAttributes() {
      return ['layout-style'];
    }

    navigateToPage(e) {
      const target = document.getElementById(`component-${e.target.id.slice(11)}`);
      if (this.getAttribute('layout-style') === 'book') {
        this.navigateFlip(target);
      } else {
        this.navigateScroll(target);
      }
      
    }

    navigateScroll(target) {
      this.contentHolder.scroll({top: target.offsetTop - this.contentHolder.offsetTop, left: target.offsetLeft - this.contentHolder.offsetLeft, behavior: 'smooth'});
    }

    navigateFlip(target) {

    }
  }
)