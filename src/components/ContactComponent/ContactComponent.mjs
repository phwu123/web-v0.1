import GithubLight from '../../images/GitHub-Mark-Light-64px.png'
import GithubDark from '../../images/GitHub-Mark-64px.png'

const ContactComponentBasicTemplate = `
  <header class="component-header">Contact</header>
  <section class="component-section">
    links
  </section>
`

customElements.define('contact-component',
  class ContactComponent extends HTMLElement {
    constructor() {
      super();
      if (!this.layoutStyle) {
        this.layoutStyle = 'basic'
      }
      if (!this.themeColor) {
        this.themeColor = 'light'
      }
      this.innerHTML = ContactComponentBasicTemplate
    }

    static get observedAttributes() {
      return ['layout-style'];
    }

    get layoutStyle() {
      return this.getAttribute('layout-style')
    }

    set layoutStyle(val) {
      this.setAttribute('layout-style', val)
    }

    get themeColor() {
      return this.getAttribute('theme-color');
    }

    set themeColor(val) {
      this.setAttribute('theme-color', val)
    }
  }
)