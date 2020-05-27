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
      initShadowRoot(this, 'NavigationComponent.css', null, true);
      this.shadowRoot.appendChild(document.createElement('slot'));
      this.innerHTML = template;
      initLayout(this);
      this.bindFunctions();
      this.contentHolder = document.getElementById('content-holder');
      this.componentSkills = null;
      this.componentExperience = null;
      this.componentContact = null;
      this.previousScrollPosition = 0;
      this.markerBrightness = null;
      this.marker = this.lastElementChild;
      this.markerPosition = null;
      this.scrollPosition = null;
      this.scrollValue = null;
      this.offsetPosition = null;
      this.offsetValue = null;
    }

    static get observedAttributes() {
      return ['layout-style'];
    }

    attributeChangedCallback(name) {
      switch (name) {
        case 'layout-style':
          this.setScrollSuffixes();
          this.contentHolder.scroll({top: 0, left: 0})
          this.contentScrollBasic(0);
          break;
      }
    }

    connectedCallback() {
      this.setScrollSuffixes();
      const content = [...this.children].slice(0, 3);
      for (let i = 0; i < content.length; ++i) {
        content[i].addEventListener('click', this.navigateToPage, false);
      }
      this.addEventListener('window-resize', this.handleWindowResize, false);
      window.addEventListener('mouseup', this.optionsAnimationsMouseUp, false);
      window.addEventListener('touchend', this.optionsAnimationsMouseUp, false);
      this.contentHolder.addEventListener('scroll', this.contentScroll, false);
      this.setMarkerBrightness();
      setTimeout(() => {
        this.componentSkills = document.getElementById('component-skills')
        this.componentExperience = document.getElementById('component-experience')
        this.componentContact = document.getElementById('component-contact')
        this.contentScrollBasic(this.contentHolder[this.scrollPosition]);
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
      this.contentHolder.scroll({top: target.offsetTop - this.contentHolder.offsetHeight * 0.05, left: target.offsetLeft, behavior: 'smooth'});
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
      this.contentScrollBasic(this.contentHolder[this.scrollPosition]);
    }

    contentScroll(e) {
      if (this.componentSkills) {
        debounceFunction(this.scrollTo, e, 100, this);
      }
    }

    scrollTo(e) {
      switch (this.getAttribute('layout-style')) {
        case 'basic':
          this.contentScrollBasic(e.target.scrollTop);
          break;
        case 'gallery':
          if (e.target.scrollLeft !== this.previousScrollPosition) {
            this.contentScrollBasic(e.target.scrollLeft);
          }
          break;
      }
    }

    setScrollSuffixes() {
      switch (this.getAttribute('layout-style')) {
        case 'basic':
          this.scrollPosition = 'scrollTop';
          this.scrollValue = 'scrollHeight';
          this.offsetPosition = 'offsetTop';
          this.offsetValue = 'offsetHeight';
          break;
        case 'gallery':
          this.scrollPosition = 'scrollLeft'
          this.scrollValue = 'scrollWidth';
          this.offsetPosition = 'offsetLeft';
          this.offsetValue = 'offsetWidth';
          break;
        default:
          throw('layout-style not set');
      }
    }

    contentScrollBasic(scrollPosition) {
      const contactScrollBoundaryPrevious = this.contentHolder[this.scrollValue] - this.contentHolder[this.offsetValue] - this.componentContact[this.offsetValue] + 40;
      const skillExperienceBoundaryPrevious = this.getPositionStart(this.componentExperience) - 0.4 * this.componentSkills[this.offsetValue];

      const contactAndScrollingForwards = scrollPosition >= contactScrollBoundaryPrevious && this.previousScrollPosition < scrollPosition;
      const experienceAndScrollingForwards = scrollPosition >= skillExperienceBoundaryPrevious && this.previousScrollPosition < scrollPosition;
      const experienceAndScrollingBackwards = scrollPosition > skillExperienceBoundaryPrevious && (scrollPosition <= contactScrollBoundaryPrevious && this.previousScrollPosition > scrollPosition);
      const skillAndScrollingBackwards = scrollPosition < skillExperienceBoundaryPrevious && this.previousScrollPosition > scrollPosition;

      if (contactAndScrollingForwards) {
        this.moveNavigationMarker('contact');
      } else if (experienceAndScrollingForwards || experienceAndScrollingBackwards) {
        this.moveNavigationMarker('experience');
      } else if (scrollPosition < this.getPositionStart(this.componentExperience) || skillAndScrollingBackwards) {
        this.moveNavigationMarker('skills');
      }
      this.previousScrollPosition = scrollPosition;
    }

    getPositionStart(element) {
      return element[this.offsetPosition] - this.contentHolder[this.offsetPosition];
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