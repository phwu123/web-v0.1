import { initShadowRoot} from '../../Functions.js';

customElements.define('options-button',
  class OptionsButton extends HTMLElement {
    constructor() {
      super();
      this.bindFunctions();
      initShadowRoot(this, 'OptionsButton.css');
      this.element = document.createElement('div');
      this.shadowRoot.appendChild(this.element);
      this.setUpElement();
    }

    connectedCallback() {
      window.addEventListener('resize', this.handleWindowResize, false);
      setTimeout(() => {
        this.handleWindowResize();
      }, 500);
    }

    bindFunctions() {
      this.handleWindowResize = this.handleWindowResize.bind(this);
      this.setDesktopMode = this.setDesktopMode.bind(this);
      this.setMobileMode = this.setMobileMode.bind(this);
    }

    handleWindowResize() {
      this.dispatchEvent(this.windowResizeEvent());
      if (window.innerWidth > 600) {
        this.setDesktopMode();
      } else {
        this.setMobileMode();
      }
    }

    windowResizeEvent() {
      return new CustomEvent('window-resize', { bubbles: true })
    }

    setDesktopMode() {
      while (this.element.lastElementChild) {
        this.element.removeChild(this.element.lastElementChild);
      }
      this.element.textContent = 'Options';
      document.body.removeEventListener('click', this.closeMenuMobile, true);
    }

    setMobileMode() {
      this.element.textContent = '';
      this.element.appendChild(document.createElement('span'));
      this.element.appendChild(document.createElement('span'));
      this.element.appendChild(document.createElement('span'));
      document.body.addEventListener('click', this.closeMenuMobile, true);
    }

    setUpElement() {
      this.element.id = 'options-toggle';
      this.element.classList.add('menu-button');
      this.element.setAttribute('effect-hover', '');
      this.element.setAttribute('effect-click', '');
      this.element.addEventListener('click', this.toggleOptionsDropdown);
      this.element.setAttribute('ontouchstart', '');
    }

    closeMenuMobile(e) {
      const target = e.target.element || e.target;
      if (target.id.slice(0, 7) !== 'options') {
        document.getElementById('options-dropdown-box').removeAttribute('dropdown-open');
      }
    }

    toggleOptionsDropdown() {
      document.getElementById('options-dropdown-box').toggleAttribute('dropdown-open');
    }
  }
)