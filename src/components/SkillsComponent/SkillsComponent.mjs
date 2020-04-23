const SkillsComponentBasicTemplate = `
  <header class="component-header">Skills</header>
  <section class="component-section skill-section">
    <skills-javascript></skills-javascript>
    <skills-essentials></skills-essentials>
    <skills-databases></skills-databases>
    <skills-testing></skills-testing>
    <skills-development></skills-development>
    <skills-deployment></skills-deployment>
  </section>
`

customElements.define('skills-component',
  class SkillsComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = SkillsComponentBasicTemplate;
    }
  }
)