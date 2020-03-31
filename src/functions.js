export function createCssLink(name) {
  const link = document.createElement('link')
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = `./src/css/${name}`
  return link
}
