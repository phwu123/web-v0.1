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

export function initShadowRoot(node, cssName, template, noBase) {
  node.attachShadow({mode: 'open'});
  if (!noBase) {
    node.shadowRoot.appendChild(createBaseCss());
  }
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

export function getRandomValueBetween(min, max) {
  return Math.random() * (max-min) + min;
}

export function debounceFunction(fcn, e, timeout, scope) {
  if (!scope._debounce) {
    scope._debounce = true;
    setTimeout(() => {
      scope._debounce = false;
    }, timeout);
    fcn(e);
  }
}

export function delayFunction(fcn, e, timeout, scope) {
  clearTimeout(scope._timeout);
  scope._timeout = setTimeout(() => {
    fcn(e);
  }, timeout);
}
