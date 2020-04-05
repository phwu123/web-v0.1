const SkillsJavascriptBasicTemplate = `
  <skill-type-module>
    <p>Javascript</p>
    <div>
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
  </skill-type-module>
`

customElements.define('skills-javascript',
  class SkillsJavascript extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = SkillsJavascriptBasicTemplate;
    }
  }
)