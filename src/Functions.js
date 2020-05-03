import { themeColorDefault, layoutStyleDefault } from './Constants.js'

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
  initTheme(node);
  initLayout(node);
}

export function initTheme(node) {
  node.setAttribute('theme-color', themeColorDefault);
}

export function initLayout(node) {
  node.setAttribute('layout-style', layoutStyleDefault);
}

export function initShadowRoot(node, cssName, template) {
  node.attachShadow({mode: 'open'});
  node.shadowRoot.appendChild(createBaseCss());
  if (cssName) {
    node.shadowRoot.appendChild(createCssLink(cssName));
  }
  if (template) {
    node.shadowRoot.innerHTML += template;
  }
}

export function setThemeColor(themeColor=themeColorDefault) {
  const colors = ['-color-main-bg', '-color-font', '-color-font-sub', '-color-highlight-hover', '-color-border'];
  colors.forEach(color => document.styleSheets[1].cssRules[0]. style.setProperty(`-${color}`, `var(--${themeColor}${color})`));
}