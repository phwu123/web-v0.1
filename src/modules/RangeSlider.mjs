import { debounceFunction, initShadowRoot } from '../Functions.js';

const template = `
  <div>
    <span effect-click></span>
  </div>
`;

customElements.define('range-slider',
  class RangeSlider extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'RangeSlider.css', template);
      this.bindFunctions();
      this.bar = this.shadowRoot.children[2]
      this.circle = this.bar.children[0];
      this.addMouseEventListeners();
      this.mouseDown = false;
    }

    static get observedAttributes() {
      return ['mouse-up'];
    }

    get mouseIsUp() {
      return this.getAttribute('mouse-up') !== null;
    }

    attributeChangedCallback(name, oldVal, newVal) {
      switch(name) {
        case 'mouse-up':
          if (this.mouseIsUp && this.mouseDown) {
            this.handleMouseUp();
          }
          break;
      }
    }

    bindFunctions() {
      this.sliderMouseMove = this.sliderMouseMove.bind(this);
      this.sliderMouseMoveMove = this.sliderMouseMoveMove.bind(this);
      this.sliderMouseDown = this.sliderMouseDown.bind(this);
    }

    addMouseEventListeners() {
      this.addEventListener('mousemove', this.sliderMouseMove, false);
      this.circle.addEventListener('mousedown', this.sliderMouseDown, false);
    }

    handleMouseUp() {
      this.mouseDown = false;
    }

    sliderMouseDown() {
      this.mouseDown = true;
    }

    sliderMouseMove(e) {
      if (this.mouseDown) {
        debounceFunction(this.sliderMouseMoveMove, e, 50, this);
      }
    }

    sliderMouseMoveMove(e) {
      const circlePosition = Math.min(Math.max(1, e.clientX - this.bar.offsetLeft), this.bar.offsetWidth - 1);
      this.circle.style.transform = `translate3d(${circlePosition}px, 0, 0)`
      // console.log(target.offsetLeft, target.offsetWidth)
      // console.log(this.offsetLeft)
    }
  }
)