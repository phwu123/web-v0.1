import { initLayout, initShadowRoot, debounceFunction } from '../Functions.js';

const template = `
  <p id="navigation-skills" class="navigation-item" effect-hover effect-click>Skills</p>
  <p id="navigation-experience" class="navigation-item" effect-hover effect-click>Experience</p>
  <p id="navigation-contact" class="navigation-item" effect-hover effect-click>Contact</p>
  <span id="navigation-marker" class="navigation-marker marker-skills"></span>
`
customElements.define('navigation-component',
  class NavigationComponent extends HTMLElement {
    constructor() {
      super();
      initShadowRoot(this, 'NavigationComponent.css');
      this.shadowRoot.appendChild(document.createElement('slot'));
      this.innerHTML = template;
      initLayout(this);
      this.bindFunctions();
      this.contentHolder = document.getElementById('content-holder');
      this.skillsScroll = null;
      this.experienceScroll = null;
      this.contactScroll = null;
      this.previousScrollPosition = 0;
      this.markerBrightness = null;
      this.marker = this.lastElementChild;
      this.markerPosition = null;
    }

    static get observedAttributes() {
      return ['layout-style'];
    }

    attributeChangedCallback(name) {
      switch (name) {
        case 'layout-style':
          this.previousScrollPosition = 0;
          break;
      }
    }

    connectedCallback() {
      const content = [...this.children];
      for (let i = 0; i < content.length - 1; ++i) {
        content[i].addEventListener('click', this.navigateToPage, false);
      }
      this.addEventListener('window-resize', this.handleWindowResize, false);
      window.addEventListener('mouseup', this.optionsAnimationsMouseUp, false);
      this.contentHolder.addEventListener('scroll', this.contentScroll, false);
      setTimeout(() => {
        this.skillsScroll = this.getScrollCoords(this.contentHolder.children[0]);
        this.experienceScroll = this.getScrollCoords(this.contentHolder.children[1]);
        this.contactScroll = this.getScrollCoords(this.contentHolder.children[2]);
        this.setMarkerBrightness();
        this.contentScrollBasic(this.contentHolder.scrollTop);
      }, 500); // temp
    }

    bindFunctions() {
      this.navigateToPage = this.navigateToPage.bind(this);
      this.contentScroll = this.contentScroll.bind(this);
      this.handleWindowResize = this.handleWindowResize.bind(this);
      this.scrollTo = this.scrollTo.bind(this);
      this.optionsAnimationsMouseUp = this.optionsAnimationsMouseUp.bind(this);
    }

    navigateToPage(e) {
      const name = e.target.id.slice(11);
      if (this.getAttribute('layout-style') === 'book') {
        this.navigateFlip(name);
      } else {
        this.navigateScroll(name);
      }
      
    }

    navigateScroll(name) {
      const target = document.getElementById(`component-${name}`);
      this.contentHolder.scroll({top: target.offsetTop - this.contentHolder.offsetTop, left: target.offsetLeft - this.contentHolder.offsetLeft, behavior: 'smooth'});
    }

    navigateFlip(name) {

    }

    setMarkerBrightness() {
      const markerBrightnessKeyframes = [
        { filter: 'brightness(100%)' },
        { filter: 'brightness(10%)' },
        { filter: 'brightness(100%)' }
      ];
      const duration = parseInt(document.styleSheets[1].cssRules[0].style.getPropertyValue('--animation-duration'), 10) / 2;
      const markerBrightnessTiming = { duration, easing: 'ease-in' };
      this.markerBrightness = this.marker.animate(markerBrightnessKeyframes, markerBrightnessTiming);
      this.markerBrightness.pause();
    }

    handleWindowResize() {
      this.contentScrollBasic(this.contentHolder.scrollTop);
    }

    contentScroll(e) {
      if (this.skillsScroll) {
        debounceFunction(this.scrollTo, e, 100, this);
      }
    }

    scrollTo(e) {
      switch (this.getAttribute('layout-style')) {
        case 'basic':
          this.contentScrollBasic(e.target.scrollTop);
          break;
        case 'gallery':
          break;
      }
    }

    getScrollCoords(target) {
      return {
        top: target.offsetTop - this.contentHolder.offsetTop,
        left: target.offsetLeft - this.contentHolder.offsetLeft,
        height: target.offsetHeight,
        width: target.offsetWidth
      }
    }

    contentScrollBasic(scrollPosition) {
      const contactScrollTop = this.contentHolder.scrollHeight - this.contentHolder.offsetHeight - this.contactScroll.height + 40; // leeway temp

      const skillExperienceBoundary = this.experienceScroll.top - 0.4 * this.skillsScroll.height

      const contactAndScrollingDown = scrollPosition >= contactScrollTop && this.previousScrollPosition < scrollPosition
      const experienceAndScrollingDown = scrollPosition >= skillExperienceBoundary && this.previousScrollPosition < scrollPosition
      const experienceAndScrollingUp = scrollPosition > skillExperienceBoundary && (scrollPosition <= contactScrollTop && this.previousScrollPosition > scrollPosition)
      const skillAndScrollingUp = scrollPosition < skillExperienceBoundary && this.previousScrollPosition > scrollPosition

      if (contactAndScrollingDown) {
        this.moveNavigationMarker('contact');
      } else if (experienceAndScrollingDown || experienceAndScrollingUp) {
        this.moveNavigationMarker('experience');
      } else if (scrollPosition < this.experienceScroll.top || skillAndScrollingUp) {
        this.moveNavigationMarker('skills');
      }
      this.previousScrollPosition = scrollPosition;
    }

    moveNavigationMarker(name) {
      if (this.markerPosition !== name) {
        this.markerPosition = name;
        this.marker.classList.remove(this.marker.classList[1]);
        this.marker.classList.add(`marker-${name}`);
        this.markerBrightness.play();
      }
    }

    optionsAnimationsMouseUp() {
      [...document.getElementById('options-animations').shadowRoot.children[3].children].forEach(child => child.children[1].setAttribute('mouse-up', ''));
    }
  }
)