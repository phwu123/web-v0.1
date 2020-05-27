import { getRandomValueBetween, initShadowRoot } from '../../Functions.js';

const template = `
  <section>
    <div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>
`;

/* 5-12-13 triangle
 * 67.38, 22.62, 90
 */

customElements.define('falling-prism',
  class FallingPrism extends customElements.get('falling-object') {
    constructor() {
      super();
      initShadowRoot(this, 'FallingPrism.css', null, true);
      this.targetAnimationStart = 'rotate3d(0, 0, 1, 0deg)';
      this.targetAnimationEnd = null;
      this.objectNodes = null;
      this.zAxisFix = null;
    }

    get randomNumberTypeOne() {
      return getRandomValueBetween(0.3, 1);
    }

    initSelf() {
      this.shadowRoot.innerHTML += template;
      this.objectNodes = this.shadowRoot.children[1];
    }

    otherLoopParams() {
      this.setAnimationEnd();
    }

    setAnimationEnd() {
      this.targetAnimationEnd = `rotate3d(${this.randomNumberTypeOne}, ${this.randomNumberTypeOne}, ${this.randomNumberTypeOne}, -1500deg)`;
      this.zAxisFix = this.objectNodes.offsetWidth / 2;
    }
  }
)