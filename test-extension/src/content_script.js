import {
  printMsg,
  scrollDown, scrollUp, scrollLeft, scrollRight,
  scrollPageDown, scrollPageUp, scrollHalfPageDown, scrollHalfPageUp,
  scrollToBottom, scrollToTop, scrollToLeft, scrollToRight
} from 'saka-actions/content-script';

let enabled = true;
const kb = {
  'a': printMsg,
  'd': scrollDown,
  's': scrollUp,
  'j': scrollLeft,
  'k': scrollRight,
  'q': scrollPageDown,
  'w': scrollPageUp,
  'e': scrollHalfPageDown,
  'r': scrollHalfPageUp,
  't': scrollToBottom,
  'y': scrollToTop,
  'u': scrollToLeft,
  'p': scrollToRight
}


document.addEventListener('keydown', (event) => {
  if (event.key == '`') {
    enabled = !enabled;
    console.log('saka-actions ' + (enabled ? 'enabled' : 'disabled'));
  }
  (enabled && kb[event.key] || (() => console.log('pressed ' + event.key)))();
})
