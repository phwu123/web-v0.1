const ExperienceDoubleDoorBasicTemplate = `
  <experience-module>
    <header>DoubleDoor</header>
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
        <li></li>
      </ul>
    </div>
  </experience-module>
`

customElements.define('experience-doubledoor',
  class ExperienceDoubleDoor extends HTMLElement {
    constructor() {
      super();
      if (!this.layoutStyle) {
        this.layoutStyle = 'basic'
      }
      this.innerHTML = ExperienceDoubleDoorBasicTemplate
    }
  }
)