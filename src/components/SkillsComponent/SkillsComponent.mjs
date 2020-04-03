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
      if (!this.layoutStyle) {
        this.layoutStyle = 'basic'
      }
      this.innerHTML = SkillsComponentBasicTemplate;
    }

    static get observedAttributes() {
      return ['layout-style'];
    }

    get layoutStyle() {
      return this.getAttribute('layout-style')
    }

    set layoutStyle(val) {
      this.setAttribute('layout-style', val)
    }
  }
)