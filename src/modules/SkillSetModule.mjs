const template = `
  <slot><p>Skill set title</p></slot>
  <slot name="skill-examples"><p></p></slot>
`

customElements.define('skill-set-module',
  class SkillSetModule extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML += template;
    }
  }
)