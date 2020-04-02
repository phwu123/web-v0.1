const SkillsComponentBasicTemplate = `
  <header class="component-header">Skills</header>
  <section class="component-section skill-section">
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
    <skill-type-module>
      <p>Databases</p>
      <div>
        <skill-set-module>
          <p>NoSQL</p>
          <p>MongoDB / CouchDB</p>
        </skill-set-module>
        <skill-set-module>
          <p>SQL</p>
          <p>MySQL / PostgreSQL</p>
        </skill-set-module>
      </div>
    </skill-type-module>
    <skill-type-module>
      <p>Testing</p>
      <div>
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
    </skill-type-module>
    <skill-type-module>
      <p>Development</p>
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
    </skill-type-module>
    <skill-type-module>
      <p>Deployment</p>
      <div>
        <skill-set-module>
          <p>Amazon Web Services</p>
          <p>S3 / EC2</p>
        </skill-set-module>
        <skill-set-module>
          <p>DigitalOcean</p>
        </skill-set-module>
        <skill-set-module>
          <p>Docker</p>
        </skill-set-module>
        <skill-set-module>
          <p>Nginx</p>
        </skill-set-module>
      </div>
    </skill-type-module>
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