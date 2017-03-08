
/**
 * pass event.repeat as parameter repeat to avoid clunky animations
 */
class Scroller {
  /**
   * Creates a Scroller using 60 as the default monitor refresh rate,
   * then upgrades the refresh rate upon fetching the actual rate.
   */
  constructor (pixelsPerSecond = 300, duration = 100) {
    this.duration = duration;
    this.lastAnimationFrame = undefined;
    this.framesPerSecond = 60;
    this.configureSmoothScroll(pixelsPerSecond);
    getFramesPerSecond.then((framesPerSecond) => {
      this.framesPerSecond = framesPerSecond;
      this.configureSmoothScroll(pixelsPerSecond);
    });
  }
  configureSmoothScroll (pixelsPerSecond) {
    this.pixelsPerSecond = pixelsPerSecond;
    this.pixelsPerFrame = pixelsPerSecond / this.framesPerSecond;
  }
  /**
   * Calculates the display's refresh rate by measuring the time between
   * two consecutive frames.
   */
  getFramesPerSecond () {
    return new Promise((resolve, reject) => {
      requestAnimationFrame((timeFrame1) => {
        requestAnimationFrame((timeFrame2) => {
          resolve(1000 / (timeFrame2 - timeFrame1));
        });
      });
    });
  }
  /**
   * Scrolls the selected element by the configured PPS
   */
  smoothScroll (element) {
    cancelAnimationFrame(this.lastAnimationFrame);
    let startTime;
    const doScroll = (curTime) => {
      startTime = startTime || curTime;
      element.scrollTop += this.pixelsPerFrame;
      this.lastAnimationFrame = requestAnimationFrame(doScroll);
    };
    requestAnimationFrame(doScroll);
  };
}


/** Scroll down page by a single step */
export function scrollDown () {
  document.scrollingElement;
}

/** Scroll up page by a single step */
export function scrollUp () {

}

/** Scroll left page by a single step */
export function scrollLeft () {

}

/** Scroll right page by a single step */
export function scrollRight () {

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
