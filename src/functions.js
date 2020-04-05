export function createCssLink(cssName) {
  const link = document.createElement('link')
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = `./src/css/${cssName}`
  return link
}

export function setUpModule(node, cssName) {
  if (!node.layoutStyle) {
    node.layoutStyle = 'basic';
  };
  node.attachShadow({mode: 'open'});
  const shadowRoot = node.shadowRoot;
  shadowRoot.appendChild(createCssLink(cssName));
  [...node.children].forEach(child =>
    shadowRoot.appendChild(child)  
  )
}