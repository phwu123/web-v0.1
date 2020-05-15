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
      this.circle = this.shadowRoot.children[2].children[0];
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
      this.sliderMouseDownMove = this.sliderMouseDownMove.bind(this);
    }

    addMouseEventListeners() {
      this.addEventListener('mousemove', this.sliderMouseMove, false);
      this.circle.addEventListener('mousedown', this.sliderMouseDown, false);
    }

    handleMouseUp() {
      console.log('up');
      this.mouseDown = false;
    }

    sliderMouseDown(e) {
      debounceFunction(this.sliderMouseDownMove, e.target, 2000, this)
      this.mouseDown = true;
    }

    sliderMouseDownMove() {
      console.log('down')

      
    }

    sliderMouseMove(e) {
      if (this.mouseDown) {
        debounceFunction(this.sliderMouseMoveMove, e.target, 2000, this);
      }
    }

    sliderMouseMoveMove(target) {
      console.log('move')
      const circlePosition = target.offsetLeft - (target.offsetWidth / 2)
      // console.log(target.offsetLeft, target.offsetWidth)
      // console.log(this.offsetLeft)
    }
  }
)