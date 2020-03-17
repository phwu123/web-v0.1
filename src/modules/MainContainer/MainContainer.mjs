const MainContainerTemplate = `
  <link rel="stylesheet" type="text/css" href="./css/MainContainer.css"
`
customElements.define('main-container',
  class MainContainer extends HTMLElement {
    constructor() {
      super();
    }
  }
)