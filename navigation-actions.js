export function backHistory () {
  window.history.go(-1);
}

export function forwardHistory () {
  window.history.go(1);
}

/* Goes to the next page (as in 2nd page of a google search) */
export function nextPage () {
  console.log('>> Next page');
}

export function previousPage () {
  console.log('<< Previous page');
}

/* Goes up URL hierarchy (from /cookie_recipes/3 to /cookie_recipes) */
export function upPage () {
  const rawURL = window.location.href;
  const url = rawURL.endsWith('/') ? rawURL.substring(0, rawURL.length - 1) : rawURL;
  const urlsplit = url.split('/');
  // make sure we haven't hit the base domain yet
  if (urlsplit.length > 3) {
    window.location.href = urlsplit.slice(0, Math.max(3, urlsplit.length - 1)).join('/');
  }
}

export function rootPage () {
  window.location.href = window.location.origin;
}
