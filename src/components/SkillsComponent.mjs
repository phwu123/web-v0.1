const SkillsComponentTemplateBasic = `
  <header class="skills-header">Skills</header>
  <section class="skill-section">
    <article class="skill-type">
      <p class="skill-label">Javascript</p>
      <div class="skill-list">
        <p>Web Components</p>
        <span class="skill-set">
          <p>Vue.js</p>
          <p>Vuex / Vue Router / Vuetify / Quasar</p>
        </span>
        <span>ReactJS</span>
        <span class="skill-set">
          <p>Node.js</p>
          <p>Express</p>
        </span>
        <span class="skill-set">
          <p>Other</p>
          <p>Redux / Bootstrap / jQuery / Socket.io</p>
        </span>
      </div>
    </article>
    <article class="skill-type">
      <p class="skill-label">Databases</p>
      <div class="skill-list">
        <span class="skill-set">
          <p>MongoDB</p>
          <p>Mongoose</p>
        </span>
        <span class="skill-set">
          <p>MySQL</p>
          <p>Sequelizer</p>
        </span>
      </div>
    </article>
    <article class="skill-type">
      <p class="skill-label">fill</p>
      <p>asdfk;jawekf;ljweafkaejfkl </p>
    </article>
    <article class="skill-type">
      <p class="skill-label">fill</p>
    </article>
  </section>
`

customElements.define('skills-component',
  class SkillsComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = SkillsComponentTemplateBasic;
    }
  }
)