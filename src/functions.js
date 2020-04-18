function createBaseCss() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = './src/css/_base.css';
  return link;
}

export function createCssLink(cssName) {
  const link = document.createElement('link')
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = `./src/css/${cssName}`
  return link;
}

export function initAttributes(node) {
  if (!node.getAttribute('layout-style')) {
    node.setAttribute('layout-style', 'basic');
  };
  if (!node.getAttribute('theme-color')) {
    node.setAttribute('theme-color', 'light');
  };
}

export function initTheme(node) {
  if (!node.getAttribute('theme-color')) {
    node.setAttribute('theme-color', 'light');
  };
}

export function initLayout(node) {
  if (!node.getAttribute('layout-style')) {
    node.setAttribute('layout-style', 'basic');
  };
}

export function setUpModule(node, cssName) {
  initAttributes(node);
  node.attachShadow({mode: 'open'});
  node.shadowRoot.appendChild(createCssLink(cssName));
}

export function initShadowRoot(node, cssName) {
  node.attachShadow({mode: 'open'});
  node.shadowRoot.appendChild(createBaseCss());
  node.shadowRoot.appendChild(createCssLink(cssName));
}

export function initBasicModule(node, cssName) {
  // initAttributes(node);
  setupAttributesGetSet(node);
  initShadowRoot(node, cssName);
}

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

export function setupAttributesGetSet(node) {
  node.constructor.observedAttributes.forEach(attr => {
    const attributeName = setUpAttribute(attr);
    if (attributeName) {
      Object.defineProperty(node, attributeName, {
        get: () => {
          return node.getAttribute(attr);
        },
        set: (val) => {
          node.setAttribute(attr, val)
        }
      })
    }
  })
}