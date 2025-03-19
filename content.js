let scrollInterval = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start") {
    if (scrollInterval) clearInterval(scrollInterval);
    let speed = parseInt(message.speed);
    scrollInterval = setInterval(() => {
      window.scrollBy(0, 1);
    }, 1000 / speed); // Changed from 100 / speed to 1000 / speed
  } else if (message.action === "stop") {
    if (scrollInterval) clearInterval(scrollInterval);
  }
});
