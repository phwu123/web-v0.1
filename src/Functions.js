import { themeColorDefault, layoutStyleDefault, offsetYStart, offsetYEnd, offsetXStartMin, offsetXStartMax, durationMin, durationMax, offsetXEndDisplacementMin, offsetXEndDisplacementMax } from './Constants.js'

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

export function fallingAnimation(xAxis, duration, target, targetAnimationStart, targetAnimationEnd) {
  const translate = xAxis
    ? `translate3d(${getRandomValueBetween(offsetXEndDisplacementMin, offsetXEndDisplacementMax) / 100 * window.innerWidth}px, 0, 0)`
    : `translate3d(0, ${(offsetYEnd - offsetYStart) / 100 * window.innerHeight}px, 0)`;
  const getInnerAnimation = (innerAnimation) => {
    return innerAnimation
      ? ` ${innerAnimation}`
      : ''
  }
  const transformFull = [
    { transform: `translate3d(0, 0, 0)${getInnerAnimation(targetAnimationStart)}`},
    { transform: `${translate}${getInnerAnimation(targetAnimationEnd)}`}
  ];
  const transformTiming = {
    duration,
    easing: `cubic-bezier(${getRandomValueBetween(0, 0.7)}, ${getRandomValueBetween(0, 0,7)}, ${getRandomValueBetween(0.3, 1)}, ${getRandomValueBetween(0.3, 1)})`,
  }
  return target.animate(transformFull, transformTiming);
}