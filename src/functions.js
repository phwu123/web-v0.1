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
