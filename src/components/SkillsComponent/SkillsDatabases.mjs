const SkillsDatabasesBasicTemplate = `
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
`

customElements.define('skills-databases',
  class SkillsDatabases extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = SkillsDatabasesBasicTemplate;
    }
  }
)