import { initLayout, setThemeColor } from '../Functions.js';

const template = `
  <section class="menu-component">
    <navigation-component></navigation-component>
    <options-component></options-component>
  </section>
  <main id="content-holder" class="content-holder">
    <skills-component id="component-skills" class="content-component"></skills-component>
    <experience-component id="component-experience" class="content-component"></experience-component>
    <contact-component id="component-contact" class="contact-component"></contact-component>
  </main>
`

customElements.define('main-component',
  class MainComponent extends HTMLElement {
    constructor() {
      super();
      this.contentScroll = this.contentScroll.bind(this);
      this.changeLayout = this.changeLayout.bind(this);
      this.handleWindowResize = this.handleWindowResize.bind(this);
      initLayout(this);
      setThemeColor();
      this.innerHTML = template;
      this.contentHolder = document.getElementById('content-holder')
      this.skillsScroll = null;
      this.experienceScroll = null;
      this.contactScroll = null;
      this.previousScrollPosition = 0;
      this.markerBrightness = null;
      this.marker = null;
      this.markerPosition = null;
      this.scrollDebouncer = false;
    }

    static get observedAttributes() {
      return ['layout-style']
    }

    connectedCallback() {
      setTimeout(() => {
        document.getElementById('main').classList.add('opacity-1');
      }, 200);
      this.addEventListener('change-layout', this.changeLayout, false);
      this.addEventListener('window-resize', this.handleWindowResize, false);
      this.contentHolder.addEventListener('scroll', this.contentScroll, false);
      setTimeout(() => {
        this.skillsScroll = this.getScrollCoords(this.contentHolder.children[0]);
        this.experienceScroll = this.getScrollCoords(this.contentHolder.children[1]);
        this.contactScroll = this.getScrollCoords(this.contentHolder.children[2]);
        this.setMarkerBrightness();
        // this.contentScrollBasic(this.contentHolder.scrollTop);
      }, 500); // temp
    }

    setMarkerBrightness() {
      const markerBrightnessKeyframes = [
        { filter: 'brightness(100%)' },
        { filter: 'brightness(10%)' },
        { filter: 'brightness(100%)' }
      ];
      const duration = parseInt(document.styleSheets[1].cssRules[0].style.getPropertyValue('--animation-duration'), 10) / 2;
      const markerBrightnessTiming = { duration, easing: 'ease-in' };
      this.marker = this.children[0].children[0].lastElementChild;
      this.markerBrightness = this.marker.animate(markerBrightnessKeyframes, markerBrightnessTiming);
      this.markerBrightness.pause();
    }

    changeLayout(e) {
      this.contentHolder.scroll({top: 0, left: 0});
      this.setAttribute('layout-style', e.detail);
      this.previousScrollPosition = 0;
    }

    handleWindowResize() {
      this.contentScrollBasic(this.contentHolder.scrollTop);
    }

    contentScroll(e) {
      if (!this.skillsScroll || this.scrollDebouncer) {
        return;
      }
      this.scrollDebouncer = true
      setTimeout(() => {
        this.scrollDebouncer = false
      }, 100);
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
      const experienceAndScrollingDown = scrollPosition >= this.experienceScroll.top - 0.2 * this.skillsScroll.height && this.previousScrollPosition < scrollPosition
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
  }
)