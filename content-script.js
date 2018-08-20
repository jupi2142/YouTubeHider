var targetNode = document.getElementsByTagName('body')[0];

var config = {childList: true, subtree: true};
// var config = { attributes: true, childList: true, subtree: true };

var count = 0;
var callback = function(mutationsList) {
  // break if a ytd element has been added
  var eat = false;
  for (var mutation of mutationsList) {
    if (mutation.addedNodes.length !== 0) {
      eat = true;
      break;
    }
  }
  if (eat) {
    count += 1;
    console.log(count, 'th call');
    browser.runtime.sendMessage(count);
  }
};

var observer = new MutationObserver(callback);

observer.observe(targetNode, config);

// Later, you can stop observing
