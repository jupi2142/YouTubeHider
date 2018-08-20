function notify(message) {
  console.log('Message:', message);
  browser.tabs.executeScript({
    file: 'page-eater.js',
  });
}

browser.runtime.onMessage.addListener(notify);

browser.contextMenus.create({
  id: 'eat-page',
  title: 'Eat this page',
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == 'eat-page') {
    notify();
  }
});
