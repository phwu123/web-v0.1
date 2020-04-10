import { initAttributes } from '../../../functions.js';

const ExperienceDoubleDoorBasicTemplate = `
  <experience-module>
    <a href="https://doubledoor.io" target="_blank" rel="noreferrer noopener">DoubleDoor</a>
    <p>Global Real Estate platform for all services in the residential sector.  Responsive desktop and mobile app.</p>
    <div>
      <span>Tech Stack:</span>
      <p>Vue.js / Node.js / MongoDB</p>
    </div>
    <div>
      <span>Role:</span>
      <p>Software Engineer</p>
    </div>
    <div>
      <span>Responsibilities:</span>
      <ul>
        <li>Responsive reusable UI modules and components, and codebase refactor to implement them</li>
        <li>RESTful API and unit tests for offer and professional services</li>
        <li>Built admin tools and interface for coupon management</li>
        <li>Worked with other software engineers to create and enforce coding standards</li>
        <li>Windows environment compatibility for scripts and modules including AWS</li>
        <li>IE / Edge browser compatibility</li>
      </ul>
    </div>
  </experience-module>
`

customElements.define('experience-doubledoor',
  class ExperienceDoubleDoor extends HTMLElement {
    constructor() {
      super();
      initAttributes(this);
      this.innerHTML = ExperienceDoubleDoorBasicTemplate
    }

    static get observedAttributes() {
      return ['layout-style'];
    }

    get layoutStyle() {
      return this.getAttribute('layout-style')
    }

    set layoutStyle(val) {
      this.setAttribute('layout-style', val)
    }
  }
)