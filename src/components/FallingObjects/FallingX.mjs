import { getRandomValueBetween, fallingAnimation } from '../../Functions.js';

customElements.define('falling-x',
  class FallingX extends customElements.get('falling-object') {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(document.createElement('slot'));
      this.animationYAndInner = null;
      this.self = null;
      this.colors = ['blue', 'red', 'yellow'];
    }

    static get observedAttributes () {
      return ['init-complete', 'duration-change', 'delete-this'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
      switch (name) {
        case 'init-complete':
          this.initSelf();
          break;
        case 'duration-change':
          this.setAnimation(Number(newVal));
          break;
      }
    }

    initSelf() {
      this.self = document.createElement('p');
      this.self.textContent = 'X';
      this.appendChild(this.self);
    }

    setColor() {
      this.self.style.color = this.colors[Math.floor(getRandomValueBetween(0, 3))];
    }

    setAnimation(duration) {
      this.setColor();
      this.animationYAndInner = fallingAnimation(false, duration, this.self, 'rotate3d(0, 0, 1, 0deg)', 'rotate3d(0, 0, 1, -3600deg)');
      setTimeout(() => {
        if (this.hasAttribute('delete-this')) {
          this.remove();
        } else {
          this.animationYAndInner.cancel();
        }
      }, duration);
    }
  }
)