import { initTheme } from '../../Functions.js';

const template = `
  <header class="component-header">Contact</header>
  <section class="component-section contact-links">
    <a href="https://github.com/phwu123" target="_blank" rel="noreferrer noopener">
      <img id="github-image">
    </a>
    <a href="https://www.linkedin.com/in/peter-hwu-973a21155/" target="_blank" rel="noreferrer noopener">
      <img id="linkedin-image">
    </a>
    <a href="mailto:peterbhwu@gmail.com" rel="noreferrer noopener">
      <img id="email-image">
    </a>
  </section>
`;

customElements.define('contact-component',
  class ContactComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = template;
    }

    connectedCallback() {
      initTheme(this);
      this.linkedinImage = this.getLinkedinImage;
      this.emailImage = this.getEmailImage;
    }

    static get observedAttributes() {
      return ['theme-color'];
    }

    attributeChangedCallback(name) {
      switch (name) {
        case 'theme-color':
          this.githubImage = this.getGithubImage();
          break;
      }
    }

    get githubImage() {
      return document.getElementById('github-image').src;
    }

    set githubImage(val) {
      document.getElementById('github-image').src = val;
    }

    getGithubImage() {
      switch (this.getAttribute('theme-color')) {
        case 'dark':
          return 'src/images/GitHub-Mark-Light-64px.png';
        case 'light':
        default:
          return 'src/images/GitHub-Mark-64px.png';
      }
    }

    get linkedinImage() {
      return document.getElementById('linkedin-image');
    }

    set linkedinImage(val) {
      document.getElementById('linkedin-image').src = val;
    }

    get getLinkedinImage() {
      return 'src/images/LI-In-Bug.png';
    }

    get emailImage() {
      return document.getElementById('email-image');
    }

    set emailImage(val) {
      document.getElementById('email-image').src = val;
    }

    get getEmailImage() {
      return 'src/images/email-icon.png';
    }
  }
)