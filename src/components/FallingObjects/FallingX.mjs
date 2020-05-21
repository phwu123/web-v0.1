import { getRandomValueBetween } from '../../Functions.js';

customElements.define('falling-x',
  class FallingX extends customElements.get('falling-object') {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(document.createElement('slot'));
      this.objectNodes = null;
      this.colors = ['blue', 'red', 'yellow'];
      this.targetAnimationStart = 'rotate3d(0, 0, 1, 0deg)'
      this.targetAnimationEnd = 'rotate3d(0, 0, 1, -3600deg)'
    }

    initSelf() {
      this.objectNodes = document.createElement('p');
      this.objectNodes.textContent = 'X';
      this.appendChild(this.objectNodes);
    }

    otherLoopParams() {
      this.setColor();
    }

    setColor() {
      this.objectNodes.style.color = this.colors[Math.floor(getRandomValueBetween(0, 3))];
    }
  }
)