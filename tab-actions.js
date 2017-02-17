export function nextTab() {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
        const activeTabIndex = tabs.findIndex(tab => tab.active);
        const nextTabId = tabs[activeTabIndex + 1];
        chrome.tabs.update(nextTabId, {  active: true });
    })
}

export function previousTab() {

}

export function firstTab() {

}

export function lastTab() {

}

export function newTab() {

}

export function duplicateTab() {

}

export function newWindow() {

}

export function switchWindow() {

}