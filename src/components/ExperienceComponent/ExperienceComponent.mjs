const template = `
  <header class="component-header">Experience</header>
  <section class="component-section">
    <experience-doubledoor></experience-doubledoor>
  </section>
`
customElements.define('experience-component',
  class ExperienceComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = template;
    }
  }
)