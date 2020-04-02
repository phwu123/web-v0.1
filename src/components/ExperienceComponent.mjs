const ExperienceComponentBasicTemplate = `
  <header class="component-header">Experience</header>
  <section class="component-section">
  
  </section>
`
customElements.define('experience-component',
  class ExperienceComponent extends HTMLElement {
    constructor() {
      super();
      if (!this.layoutStyle) {
        this.layoutStyle = 'basic'
      }
      this.innerHTML = ExperienceComponentBasicTemplate
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