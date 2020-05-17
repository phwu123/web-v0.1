import { getRandomValueBetween, fallingAnimation } from '../Functions.js';
import { offsetYStart, offsetXStartMin, offsetXStartMax, durationMin, durationMax} from '../Constants.js';

customElements.define('falling-object',
  class FallingObject extends HTMLElement {
    constructor() {
      super();
      this.duration = null;
      this.animationX = null;
      this.animationY = null;
    }

    connectedCallback() {
      this.setPositionStart();
      this.style.position = 'absolute';
      this.setAttribute('init-complete', '');
      this.setAnimations();
    }

    setPositionStart() {
      this.style.top = offsetYStart / 100 * window.innerHeight + 'px';
      this.style.left = getRandomValueBetween(offsetXStartMin, offsetXStartMax) / 100 * window.innerWidth + 'px';
    }

    setAnimations() {
      this.duration = getRandomValueBetween(durationMin, durationMax);
      this.setAttribute('duration-change', this.duration)
      this.animationX = fallingAnimation(true, this.duration, this);
      setTimeout(() => {
        this.animationX.cancel();
        this.setPositionStart();
        this.setAnimations();
      }, this.duration);
    }
  }
)