const SkillsJavascriptBasicTemplate = `
  <span>Javascript</span>
  <div>
    <skill-set-module>
      <p>Web Components</p>
    </skill-set-module>
    <skill-set-module>
      <p>Vue.js</p>
      <p slot="skill-examples">Vuex / Vue Router / Vuetify / Quasar</p>
    </skill-set-module>
    <skill-set-module>
      <p>ReactJS</p>
    </skill-set-module>
    <skill-set-module>
      <p>Node.js</p>
      <p slot="skill-examples">Express</p>
    </skill-set-module>
    <skill-set-module>
      <p>Other</p>
      <p slot="skill-examples">Redux / Bootstrap / jQuery / Socket.io</p>
    </skill-set-module>
  </div>
`

customElements.define('skills-javascript',
  class SkillsJavascript extends customElements.get('skill-type-module') {
    constructor() {
      super();
      this.shadowRoot.innerHTML += SkillsJavascriptBasicTemplate;
    }
  }
)