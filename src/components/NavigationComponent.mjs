import { initShadowRoot } from '../Functions.js';

const template = `
  <p id="navigation-skills" class="navigation-item" effect-hover effect-click>Skills</p>
  <p id="navigation-experience" class="navigation-item" effect-hover effect-click>Experience</p>
  <p id="navigation-contact" class="navigation-item" effect-hover effect-click>Contact</p>
  <span class="navigation-marker marker-skills"></span>
`
customElements.define('navigation-component',
  class NavigationComponent extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'NavigationComponent.css');
      this.shadowRoot.appendChild(document.createElement('slot'));
      this.navigateToPage = this.navigateToPage.bind(this)
      this.innerHTML = template;
      this.contentHolder = document.getElementById('content-holder');
    }

    static get observedAttributes() {
      return ['layout-style'];
    }

    connectedCallback() {
      const content = [...this.children];
      for (let i = 0; i < content.length - 1; ++i) {
        content[i].addEventListener('click', this.navigateToPage, false);
      }
    }

    navigateToPage(e) {
      const name = e.target.id.slice(11);
      if (this.getAttribute('layout-style') === 'book') {
        this.navigateFlip(name);
      } else {
        this.navigateScroll(name);
      }
      
    }

    navigateScroll(name) {
      const target = document.getElementById(`component-${name}`);
      this.contentHolder.scroll({top: target.offsetTop - this.contentHolder.offsetTop, left: target.offsetLeft - this.contentHolder.offsetLeft, behavior: 'smooth'});
    }

    navigateFlip(name) {

    }
  }
)