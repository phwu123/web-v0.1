import { getRandomValueBetween } from '../Functions.js';
import { offsetYStart, offsetYEnd, offsetXStartMin, offsetXStartMax, offsetXEndDisplacementMin, offsetXEndDisplacementMax, durationMin, durationMax} from '../Constants.js';

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
      this.animationX = this.fallingAnimation(true, duration, this);
      this.animationYAndInner = this.fallingAnimation(false, duration, this.objectNodes, this.targetAnimationStart, this.targetAnimationEnd, this.zAxisFix);
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

    fallingAnimation(xAxis, duration, target, targetAnimationStart, targetAnimationEnd, zAxisFix) {
      const zAxisAdjust = this.zAxisFix
        ? `${zAxisFix}px`
        : 0
      const translate = xAxis
        ? `translate3d(${getRandomValueBetween(offsetXEndDisplacementMin, offsetXEndDisplacementMax) / 100 * window.innerWidth}px, 0, 0)`
        : `translate3d(0, ${(offsetYEnd - offsetYStart) / 100 * window.innerHeight}px, ${zAxisAdjust})`;
      const getInnerAnimation = (innerAnimation) => {
        return innerAnimation
          ? ` ${innerAnimation}`
          : ''
      }
      const transformFull = [
        { transform: `translate3d(0, 0, 0)${getInnerAnimation(targetAnimationStart)}`},
        { transform: `${translate}${getInnerAnimation(targetAnimationEnd)}`}
      ];
      const transformTiming = {
        duration,
        easing: `cubic-bezier(${getRandomValueBetween(0, 0.7)}, ${getRandomValueBetween(0, 0,7)}, ${getRandomValueBetween(0.3, 1)}, ${getRandomValueBetween(0.3, 1)})`,
      }
      return target.animate(transformFull, transformTiming);
    }
  }
)