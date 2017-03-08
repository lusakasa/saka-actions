require('smoothscroll-polyfill').polyfill();

/* scroll step size in pixels */
let step = 200;

/** Scroll down page by a single step */
export function scrollDown () {
  window.scrollBy({
    top: step,
    behavior: 'smooth'
  });
}

/** Scroll up page by a single step */
export function scrollUp () {
  window.scrollBy({
    top: -step,
    behavior: 'smooth'
  });
}

/** Scroll left page by a single step */
export function scrollLeft () {
  window.scrollBy({
    left: -step,
    behavior: 'smooth'
  });
}

/** Scroll right page by a single step */
export function scrollRight () {
  window.scrollBy({
    left: step,
    behavior: 'smooth'
  });
}

// TODO: figure out why document.documentElement.clientHeight
// is buggy on hackernews, i wouldd use it over window.innerHeight otherwise
/** Scroll down one page */
export function scrollPageDown () {
  window.scrollBy({
    top: window.innerHeight * 0.9,
    behavior: 'smooth'
  });
}

/** Scroll up one page */
export function scrollPageUp () {
  window.scrollBy({
    top: -window.innerHeight * 0.9,
    behavior: 'smooth'
  });
}

/** Scroll down half a page */
export function scrollHalfPageDown () {
  window.scrollBy({
    top: window.innerHeight / 2,
    behavior: 'smooth'
  });
}

/** Scroll up half a page */
export function scrollHalfPageUp () {
  window.scrollBy({
    top: -window.innerHeight / 2,
    behavior: 'smooth'
  });
}

/** Scroll to bottom of page */
export function scrollToBottom () {
  window.scrollTo({
    top: window.document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
}

/** Scroll to top page */
export function scrollToTop () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/** Scroll to far left of page */
export function scrollToLeft () {
  window.scrollTo({
    left: 0,
    behavior: 'smooth'
  });
}

/** Scroll to far right of page */
export function scrollToRight () {
  window.scrollTo({
    left: window.document.documentElement.scrollWidth,
    behavior: 'smooth'
  });
}
