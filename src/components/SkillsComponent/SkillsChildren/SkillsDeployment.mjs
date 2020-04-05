const SkillsDeploymentBasicTemplate = `
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
`

customElements.define('skills-deployment',
  class SkillsDeployment extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = SkillsDeploymentBasicTemplate;
    }
  }
)