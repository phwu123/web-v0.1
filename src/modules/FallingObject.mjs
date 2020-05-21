import { getRandomValueBetween, fallingAnimation } from '../Functions.js';
import { offsetYStart, offsetXStartMin, offsetXStartMax, durationMin, durationMax} from '../Constants.js';

customElements.define('falling-object',
  class FallingObject extends HTMLElement {
    constructor() {
      super();
      this.animationX = null;
      this.animationYAndInner = null;
      // required: objectNodes, targetAnimationStart, targetAnimationEnd
      // optional: zAxisFix
    }

    static get observedAttributes() {
      return ['delete-this'];
    }

    connectedCallback() {
      this.setPositionStart();
      this.style.position = 'absolute';
      this.initSelf();
      this.setNewLoopParams();
      // required: objectNodes
    }

    // required methods: initSelf, otherLoopParams

    setPositionStart() {
      this.style.top = offsetYStart / 100 * window.innerHeight + 'px';
      this.style.left = getRandomValueBetween(offsetXStartMin, offsetXStartMax) / 100 * window.innerWidth + 'px';
    }

    setNewLoopParams() {
      this.otherLoopParams();
      const duration = getRandomValueBetween(durationMin, durationMax);
      this.animationX = fallingAnimation(true, duration, this);
      this.animationYAndInner = fallingAnimation(false, duration, this.objectNodes, this.targetAnimationStart, this.targetAnimationEnd, this.zAxisFix);
      setTimeout(() => {
        if (this.hasAttribute('delete-this')) {
          this.remove();
        } else {
          this.animationX.cancel();
          this.animationYAndInner.cancel();
          this.setNewLoopParams();
        }
      }, duration);
    }
  }
)