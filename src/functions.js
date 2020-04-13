export function createCssLink(cssName) {
  const link = document.createElement('link')
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = `./src/css/${cssName}`
  return link
}

export function initAttributes(node) {
  if (!node.layoutStyle) {
    node.layoutStyle = 'basic';
  };
  if (!node.themeColor) {
    node.themeColor = 'light';
  };
}

export function setUpModule(node, cssName) {
  initAttributes(node);
  node.attachShadow({mode: 'open'});
  node.shadowRoot.appendChild(createCssLink(cssName));
}

export function createElementTemplate(tag, module) {
  function setUpAttribute(attribute) {
    switch (attribute) {
      case 'layout-style':
        return 'layoutStyle';
      case 'theme-color':
        return 'themeColor';
      default:
        return; // do nothing
    }
  }
  console.log(module.constructor)
  module.observedAttributes.forEach(attribute => {
    const attributeName = setUpAttribute(attribute);
    if (attributeName) {
      Object.defineProperty(module, attributeName, {
        get: () => {
          return this.getAttribute(attribute);
        },
        set: (val) => {
          this.setAttribute(attribute, val)
        }
      })
    }
  })

  return customElements.define(tag, module);
}