import { getRandomValueBetween, initShadowRoot } from '../../Functions.js';
import { offsetYEnd, offsetYStart } from '../../Constants.js';

customElements.define('falling-x',
  class FallingX extends customElements.get('falling-object') {
    constructor() {
      super();
      initShadowRoot(this, 'FallingX.css');
      this.shadowRoot.appendChild(document.createElement('slot'));
      this.animationY = null;
    }

    static get observedAttributes () {
      return ['init-complete', 'duration-change']
    }

    attributeChangedCallback(name, oldVal, newVal) {
      switch (name) {
        case 'init-complete':
          this.initSelf();
          break;
        case 'duration-change':
          this.setAnimationPositionEndY(newVal)
          break;
      }
    }

    initSelf() {
      const p = document.createElement('p');
      p.textContent = 'X';
      this.appendChild(p);
    }

    setAnimationPositionEndY(duration) {
      const selfRotationStart = 'rotate3d(0, 0, 1, 0deg)';
      const selfRotationEnd = 'rotate3d(0, 0, 1, -3600deg)';
      const translateY = [
        { transform: `translate3d(0, 0, 0) ${selfRotationStart}` },
        { transform: `translate3d(0, ${(offsetYEnd - offsetYStart) / 100 * window.innerHeight}px, 0) ${selfRotationEnd}` }
      ]
      const translateYTiming = {
        duration: Number(duration),
        easing: `cubic-bezier(${getRandomValueBetween(0, 0.7)}, ${getRandomValueBetween(0, 0,7)}, ${getRandomValueBetween(0.3, 1)}, ${getRandomValueBetween(0.3, 1)})`,
        direction: 'alternate',
        iterations: Infinity,
      }
      this.animationY = this.children[0].animate(translateY, translateYTiming);
    }
  }
)