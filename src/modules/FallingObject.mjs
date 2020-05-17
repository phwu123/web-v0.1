import { getRandomValueBetween } from '../Functions.js';
import { offsetYStart, offsetXStartMin, offsetXStartMax, durationMin, durationMax, offsetXEndDisplacementMin, offsetXEndDisplacementMax } from '../Constants.js';

customElements.define('falling-object',
  class FallingObject extends HTMLElement {
    constructor() {
      super();
      // this.offsetYStart = -10;
      // this.offsetYEnd = 110;
      // this.offsetXStartMin = 70;
      // this.offsetXStartMax = 110;
      // this.offsetXEndDisplacementMin = -90;
      // this.offsetXEndDisplacementMax = -40;
      // this.durationMin = 2000;
      // this.durationMax = 10000;
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
      this.setAnimationPositionEndX();
    //  this.setAnimationPositionEndY();
    }

    setAnimationPositionEndX() {
      const translateX = [
        { transform: 'translate3d(0, 0, 0)' },
        { transform: `translate3d(${getRandomValueBetween(offsetXEndDisplacementMin, offsetXEndDisplacementMax) / 100 * window.innerWidth}px, 0, 0)` }
      ]
      const translateXTiming = {
        duration: this.duration,
        easing: `cubic-bezier(${getRandomValueBetween(0, 0.7)}, ${getRandomValueBetween(0, 0,7)}, ${getRandomValueBetween(0.3, 1)}, ${getRandomValueBetween(0.3, 1)})`,
        direction: 'alternate',
        iterations: Infinity
      }
      this.animationX = this.animate(translateX, translateXTiming);
      setTimeout(() => {
        this.setPositionStart();
        this.setAnimationPositionEndX();
      }, this.duration);
    }

    // setAnimationPositionEndY() {
    //   const translateY = [
    //     { transform: 'translate3d(0, 0, 0' },
    //     { transform: `translate3d(0, ${(this.offsetYEnd - this.offsetYStart) / 100 * window.innerHeight}px, 0)` }
    //   ]
    //   const translateYTiming = {
    //     duration: this.duration,
    //     easing: `cubic-bezier(${getRandomValueBetween(0, 0.7)}, ${getRandomValueBetween(0, 0,7)}, ${getRandomValueBetween(0.3, 1)}, ${getRandomValueBetween(0.3, 1)})`,
    //     direction: 'alternate',
    //     iterations: Infinity
    //   }
    //   this.animationY = this.children[0].animate(translateY, translateYTiming);
    // }
  }
)