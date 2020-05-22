import { debounceFunction, delayFunction, initShadowRoot } from '../Functions.js';
import { sliderMinBuffer, sliderMaxBuffer } from '../Constants.js';

const template = `
  <div class="outer-bar">
    <span class="circle-handle" effect-click></span>
    <span class="filler-color"></span>
  </div>
`;

customElements.define('range-slider',
  class RangeSlider extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'RangeSlider.css', template);
      this.bar = this.shadowRoot.children[2]
      this.circle = this.bar.children[0];
      this.filler = this.bar.children[1];
      this.mouseDown = false;
    }

    static get observedAttributes() {
      return ['slider-for', 'mouse-up', 'set-value'];
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
        case 'set-value':
          this.sliderMouseMoveMove(null, newVal * this.bar.offsetWidth);
          break;
      }
    }

    connectedCallback() {
      this.bindFunctions();
      this.addMouseEventListeners();
    }

    bindFunctions() {
      this.sliderMouseDown = this.sliderMouseDown.bind(this);
      this.sliderMouseMove = this.sliderMouseMove.bind(this);
      this.sliderMouseMoveMove = this.sliderMouseMoveMove.bind(this);
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
        debounceFunction(this.sliderMouseMoveMove, e.clientX - e.currentTarget.offsetParent.offsetLeft, 50, this);
      }
    }

    sliderMouseMoveMove(position, force) {
      const circlePosition = force || Math.min(Math.max(1, position - this.bar.offsetLeft), this.bar.offsetWidth - 1);
      this.circle.style.transform = `translate3d(${circlePosition}px, 0, 0)`;
      const percentFilled = circlePosition / this.bar.offsetWidth;
      this.filler.style.transform = `scale3d(${percentFilled}, 1, 1)`;
      let filledText;
      if (percentFilled < sliderMinBuffer) {
        filledText = 'Off';
      } else if (percentFilled < 0.34) {
        filledText = 'Low';
      } else if (percentFilled < 0.67) {
        filledText = 'Medium';
      } else if (percentFilled < sliderMaxBuffer) {
        filledText = 'High';
      } else {
        filledText = 'Max';
      }
      const typeLabel = this.getAttribute('slider-for') === 'x'
        ? 'x\'s'
        : `${this.getAttribute('slider-for')}s`
      this.previousElementSibling.textContent = `${typeLabel}: ${filledText}`;
      delayFunction(this.dispatchEvent, this.changeAnimationFrequency(percentFilled), 500, this);
    }

    changeAnimationFrequency(percent) {
      return new CustomEvent('animation-frequency', {
        detail: {
          type: this.getAttribute('slider-for'),
          percent
        }
      })
    }
  }
)