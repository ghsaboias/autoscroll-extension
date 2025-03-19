document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["scrollSpeed"], (result) => {
    if (result.scrollSpeed) {
      document.getElementById("speed").value = result.scrollSpeed;
    }
  });
});

document.getElementById("start").onclick = () => {
  let speed = document.getElementById("speed").value;
  chrome.storage.local.set({ scrollSpeed: speed }); // Save speed
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "start", speed: speed });
  });
};

document.getElementById("stop").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "stop" });
  });
};
