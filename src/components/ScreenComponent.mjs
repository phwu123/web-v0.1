import { initShadowRoot} from '../Functions.js';
import { sliderMinBuffer, sliderMaxBuffer } from '../Constants.js';

customElements.define('screen-component',
  class ScreenComponent extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'ScreenComponent.css');
      this.bindFunctions();
      this.counterX = 0;
      this.maxX = 10;
    }

    connectedCallback() {
      this.shadowRoot.appendChild(document.createElement('slot'));
      this.appendChild(document.createElement('falling-x'))
      this.appendChild(document.createElement('falling-x'))
      this.appendChild(document.createElement('falling-x'))
      window.addEventListener('animation-frequency', this.changeAnimationFrequency, false);
    }

    bindFunctions() {
      this.changeAnimationFrequency = this.changeAnimationFrequency.bind(this);
    }

    changeAnimationFrequency(e) {
      const { percent, type } = e.detail;
      let tagName
      switch(type) {
        case 'x':
          tagName = 'X';
          break;
      }
      const countNew = this.getCountNew(percent, tagName);
      const oldObjects = this.getOldObjects(tagName);
      const countOld = oldObjects.length;
      if (countNew > countOld) {
        this.addNewObjects(type, countNew - countOld);
      } else if (countNew < countOld) {
        this.tagForRemoval(oldObjects, countOld - countNew);
      };
    }

    getCountNew(percent, type) {
      if (percent < sliderMinBuffer) {
        return 0;
      } else if (percent > sliderMaxBuffer) {
        return this[`max${type}`];
      } else {
        return Math.round(percent * this[`max${type}`]);
      }
    }

    getOldObjects(tagName) {
      return [...this.children].filter((child) => child.tagName === `FALLING-${tagName}` && !child.hasAttribute('delete-this'));
    }

    addNewObjects(type, numToAdd) {
      for (let i = 0; i < numToAdd; ++i) {
        this.appendChild(document.createElement(`falling-${type}`));
      };
    }

    tagForRemoval(fallingObjects, numToRemove) {
      for (let i = 0; i < numToRemove; ++i) {
        fallingObjects[i].setAttribute('delete-this', '');
      };
    }
  }
)