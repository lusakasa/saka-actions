class Scroller {
  /**
   * Creates a Scroller using 60 as the default monitor refresh rate,
   * then upgrades the refresh rate upon fetching the actual rate.
   */
  constructor (pixelsPerSecond = 600, duration = 30) {
    this.duration = duration;
    this.lastAnimationFrame = undefined;
    this.framesPerSecond = 60;
    this.configureSmoothScroll(pixelsPerSecond);
    this.getFramesPerSecond().then((framesPerSecond) => {
      this.framesPerSecond = framesPerSecond;
      this.configureSmoothScroll(pixelsPerSecond);
    });
    this.done = true;
    this.timeout = undefined;
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
    if (this.done) {
      this.done = false;
      const doScroll = () => {
        element.scrollTop += this.pixelsPerFrame;
        if (this.done === false) {
          requestAnimationFrame(doScroll);
        } else {
          console.log('stopped');
        }
      };
      requestAnimationFrame(doScroll);
    }
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => { this.done = true; }, this.duration);
  };
}

const s = new Scroller();
document.addEventListener('keydown', (e) => {
  s.smoothScroll(document.scrollingElement);
});
