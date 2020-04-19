const SkillsDatabasesBasicTemplate = `
  <span>Databases</span>
  <div>
    <skill-set-module>
      <p>NoSQL</p>
      <p slot="skill-examples">MongoDB / CouchDB</p>
    </skill-set-module>
    <skill-set-module>
      <p>SQL</p>
      <p slot="skill-examples">MySQL / PostgreSQL</p>
    </skill-set-module>
  </div>
`

customElements.define('skills-databases',
  class SkillsDatabases extends customElements.get('skill-type-module') {
    constructor() {
      super();
      this.shadowRoot.innerHTML += SkillsDatabasesBasicTemplate;
    }
  }
)