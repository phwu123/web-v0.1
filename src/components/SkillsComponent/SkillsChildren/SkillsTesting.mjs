const SkillsTestingBasicTemplate = `
  <span>Testing</span>
  <div>
    <skill-set-module>
      <p>Mocha</p>
    </skill-set-module>
    <skill-set-module>
      <p>Chai</p>
    </skill-set-module>
    <skill-set-module>
      <p>Puppeteer</p>
    </skill-set-module>
  </div>
`

customElements.define('skills-testing',
  class SkillsTesting extends customElements.get('skill-type-module') {
    constructor() {
      super();
      this.shadowRoot.innerHTML += SkillsTestingBasicTemplate;
    }
  }
)