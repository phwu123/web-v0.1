const SkillsDeploymentBasicTemplate = `
  <span>Deployment</span>
  <div>
    <skill-set-module>
      <p>Amazon Web Services</p>
      <p slot="skill-examples">S3 / EC2</p>
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
`

customElements.define('skills-deployment',
  class SkillsDeployment extends customElements.get('skill-type-module') {
    constructor() {
      super();
      this.shadowRoot.innerHTML += SkillsDeploymentBasicTemplate;
    }
  }
)