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
      [...this.children].forEach(child => child.addEventListener('click', this.navigateToPage, false))
      this.contentHolder = document.getElementById('content-holder');
      this.marker = this.children[3];
      this.markerBrightness = null
    }

    connectedCallback() {
      const markerBrightnessKeyframes = [
        { filter: 'brightness(100%)' },
        { filter: 'brightness(10%)' },
        { filter: 'brightness(100%)' }
      ]
      const duration = parseInt(document.styleSheets[1].cssRules[0].style.getPropertyValue('--animation-duration'), 10);
      const markerBrightnessTiming = { duration };
      this.markerBrightness = this.marker.animate(markerBrightnessKeyframes, markerBrightnessTiming);
      this.markerBrightness.pause()
    }

    static get observedAttributes() {
      return ['layout-style'];
    }

    navigateToPage(e) {
      const name = e.target.id.slice(11)
      const target = document.getElementById(`component-${e.target.id.slice(11)}`);
      if (this.getAttribute('layout-style') === 'book') {
        this.navigateFlip(name);
      } else {
        this.navigateScroll(name);
      }
      
    }

    navigateScroll(name) {
      const target = document.getElementById(`component-${name}`);
      this.contentHolder.scroll({top: target.offsetTop - this.contentHolder.offsetTop, left: target.offsetLeft - this.contentHolder.offsetLeft, behavior: 'smooth'});
      this.marker.classList.remove(this.marker.classList[1]);
      this.marker.classList.add(`marker-${name}`);
      this.markerBrightness.play();
    }

    navigateFlip(name) {

    }
  }
)