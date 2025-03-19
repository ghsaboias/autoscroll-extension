document.getElementById("start").onclick = () => {
  let speed = document.getElementById("speed").value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "start", speed: speed });
  });
};

document.getElementById("stop").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "stop" });
  });
};
