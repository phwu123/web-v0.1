import { getRandomValueBetween } from '../Functions.js';
import { offsetYStart, offsetXStartMin, offsetXStartMax } from '../Constants.js';

customElements.define('falling-object',
  class FallingObject extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.setPositionStart();
      this.style.position = 'absolute';
      this.setAttribute('init-complete', '');
    }

    setPositionStart() {
      this.style.top = offsetYStart / 100 * window.innerHeight + 'px';
      this.style.left = getRandomValueBetween(offsetXStartMin, offsetXStartMax) / 100 * window.innerWidth + 'px';
    }

    setPositionEndX() {

    }
  }
)