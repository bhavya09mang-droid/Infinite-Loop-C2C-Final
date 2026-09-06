// content_bridge.js
function extractAndScan() {
  const pageText = document.body ? document.body.innerText : "";
  if (pageText.trim().length > 0) {
    chrome.runtime.sendMessage({
      action: "scanText",
      url: window.location.href,
      text: pageText,
      timestamp: Date.now()
    });
  }
}

// Run after DOM is fully interactive
if (document.readyState === 'complete') {
  extractAndScan();
} else {
  window.addEventListener('load', extractAndScan);
}