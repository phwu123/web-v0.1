import { initShadowRoot } from '../functions.js'

const template = `
  <slot name="exp-name"><a>Experience Title</a></slot>
  <slot name="exp-desc"><p>Experience description</p></slot>
  <div>
    <span>Tech Stack:</span>
    <slot name="exp-tech"><p>Tech / Stack</p></slot>
  </div>
  <div>
    <span>Role:</span>
    <slot name="exp-role"><p>Role</p></slot>
  </div>
  <div>
    <span>Responsibilities:</span>
    <ul>
      <slot><li>Responsibility 1</li></slot>
    </ul>
  </div>
`

customElements.define('experience-module',
  class ExperienceModule extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'ExperienceModule.css', template);
    }
  }
)
