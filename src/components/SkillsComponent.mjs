const SkillsComponentTemplateBasic = `
  <header>Skills</header>
`

customElements.define('skills-component',
  class SkillsComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = SkillsComponentTemplateBasic;
    }
  }
)