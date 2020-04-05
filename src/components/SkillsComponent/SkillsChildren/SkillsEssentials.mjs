const SkillsEssentialsBasicTemplate = `
  <skill-type-module>
    <p>Essentials</p>
    <div>
      <skill-set-module>
        <p>HTML5</p>
      </skill-set-module>
      <skill-set-module>
        <p>CSS3</p>
        <p>Sass</p>
      </skill-set-module>
    </div>
  </skill-type-module>
`

customElements.define('skills-essentials',
  class SkillsEssentials extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = SkillsEssentialsBasicTemplate;
    }
  }
)