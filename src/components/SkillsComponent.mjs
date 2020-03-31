const SkillsComponentTemplateBasic = `
  <header class="skills-header">Skills</header>
  <section class="skill-section">
    <article class="skill-type">
      <p class="skill-label">Javascript</p>
      <div class="skill-list">
        <skill-set-module>
          <p>Web Components</p>
        </skill-set-module>
        <skill-set-module>
          <p>Vue.js</p>
          <p>Vuex / Vue Router / Vuetify / Quasar</p>
        </skill-set-module>
        <skill-set-module>
          <p>ReactJS</p>
        </skill-set-module>
        <skill-set-module>
          <p>Node.js</p>
          <p>Express</p>
        </skill-set-module>
        <skill-set-module>
          <p>Other</p>
          <p>Redux / Bootstrap / jQuery / Socket.io</p>
        </skill-set-module>
      </div>
    </article>
    <article class="skill-type">
      <p class="skill-label">Essentials</p>
      <skill-set-module>
        <p>HTML5</p>
      </skill-set-module>
      <skill-set-module>
        <p>CSS3</p>
      </skill-set-module>
    </article>
    <article class="skill-type">
      <p class="skill-label">Databases</p>
      <div class="skill-list">
        <skill-set-module>
          <p>MongoDB</p>
          <p>Mongoose</p>
        </skill-set-module>
        <skill-set-module>
          <p>MySQL</p>
          <p>Sequelizer</p>
        </skill-set-module>
      </div>
    </article>
    <article class="skill-type">
      <p class="skill-label">Testing</p>
      <div class="skill-list">
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
    </article>
    <article class="skill-type">
      <p class="skill-label">fill</p>
      <div class="skill-list">
        <skill-set-module>
          <p>ex1</p>
          <p>sub1</p>
        </skill-set-module>
      </div>
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