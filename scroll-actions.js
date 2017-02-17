/**
 * Scrolling Functions
 */

require('smoothscroll-polyfill').polyfill();

/* scroll step size in pixels */
let step = 60;

export function scrollDown() {
  window.scrollBy({
    top: step,
    behavior: 'smooth'
  });
}

export function scrollUp() {
  window.scrollBy({
    top: -step,
    behavior: 'smooth'
  });
}

export function scrollLeft() {
  window.scrollBy({
    left: -step,
    behavior: 'smooth'
  });
}

export function scrollRight() {
  window.scrollBy({
    left: step,
    behavior: 'smooth'
  });
}

// TODO: figure out why document.documentElement.clientHeight
// is buggy on hackernews, i wouldd use it over window.innerHeight otherwise
export function scrollPageDown() {
  window.scrollBy({
    top: window.innerHeight * 0.9,
    behavior: 'smooth'
  });
}

export function scrollPageUp() {
  window.scrollBy({
    top: -window.innerHeight * 0.9,
    behavior: 'smooth'
  });
}

export function scrollHalfPageDown() {
  window.scrollBy({
    top: window.innerHeight / 2,
    behavior: 'smooth'
  });
}

export function scrollHalfPageUp() {
  window.scrollBy({
    top: -window.innerHeight / 2,
    behavior: 'smooth'
  });
}

export function scrollToBottom() {
  window.scrollTo({
    top: window.document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

export function scrollToLeft() {
  window.scrollTo({
    left: 0,
    behavior: 'smooth'
  });
}

export function scrollToRight() {
  window.scrollTo({
    left: window.document.documentElement.scrollWidth,
    behavior: 'smooth'
  });
}