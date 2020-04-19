const template = `
  <a slot="exp-name" href="https://doubledoor.io" target="_blank" rel="noreferrer noopener">DoubleDoor</a>
  <p slot="exp-desc">Global Real Estate platform for all services in the residential sector.  Responsive desktop and mobile app.</p>
  <p slot="exp-tech">Vue.js / Node.js / MongoDB</p>
  <p slot="exp-role">Software Engineer</p>
  <li>Responsive reusable UI modules and components, and codebase refactor to implement them</li>
  <li>RESTful API and unit tests for offer and professional services</li>
  <li>Built admin tools and interface for coupon management</li>
  <li>Worked with other software engineers to create and enforce coding standards</li>
  <li>Windows environment compatibility for scripts and modules including AWS</li>
  <li>IE / Edge browser compatibility</li>
  
`

customElements.define('experience-doubledoor',
  class ExperienceDoubleDoor extends customElements.get('experience-module') {
    constructor() {
      super();
      this.innerHTML += template;
    }
  }
)