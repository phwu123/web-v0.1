const SkillsDevelopmentBasicTemplate = `
  <skill-type-module>
    <p>Development</p>
    <div>
      <skill-set-module>
        <p>Git</p>
      </skill-set-module>
      <skill-set-module>
        <p>npm</p>
      </skill-set-module>
      <skill-set-module>
        <p>Webpack</p>
      </skill-set-module>
      <skill-set-module>
        <p>Babel</p>
      </skill-set-module>
    </div>
  </skill-type-module>
`

customElements.define('skills-development',
  class SkillsDevelopment extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = SkillsDevelopmentBasicTemplate;
    }
  }
)