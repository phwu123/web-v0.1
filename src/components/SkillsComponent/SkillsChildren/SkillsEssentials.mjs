const SkillsEssentialsBasicTemplate = `
  <span>Essentials</span>
  <div>
    <skill-set-module>
      <p>HTML5</p>
    </skill-set-module>
    <skill-set-module>
      <p>CSS3</p>
      <p slot="skill-examples">Sass</p>
    </skill-set-module>
  </div>
`

customElements.define('skills-essentials',
  class SkillsEssentials extends customElements.get('skill-type-module') {
    constructor() {
      super();
      this.shadowRoot.innerHTML += SkillsEssentialsBasicTemplate;
    }
  }
)