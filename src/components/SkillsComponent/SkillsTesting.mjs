const SkillsTestingBasicTemplate = `
  <skill-type-module>
    <p>Testing</p>
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
  </skill-type-module>
`

customElements.define('skills-testing',
  class SkillsTesting extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = SkillsTestingBasicTemplate;
    }
  }
)