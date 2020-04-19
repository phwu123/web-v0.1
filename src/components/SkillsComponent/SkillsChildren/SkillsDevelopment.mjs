const SkillsDevelopmentBasicTemplate = `
  <span>Development</span>
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
`

customElements.define('skills-development',
  class SkillsDevelopment extends customElements.get('skill-type-module') {
    constructor() {
      super();
      this.shadowRoot.innerHTML += SkillsDevelopmentBasicTemplate;
    }
  }
)