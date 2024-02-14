let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});

installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}

window.addEventListener("appinstalled", () => {
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}

const notificationButton = document.querySelector("#notification");
const notificationButton2 = document.querySelector("#notification2");

notificationButton.addEventListener("click", async () => {
  navigator.serviceWorker.controller.postMessage({
    type: 'MESSAGE_IDENTIFIER',
  });
});

notificationButton.addEventListener("click", async () => {
  navigator.serviceWorker.controller.postMessage({
    type: 'MESSAGE_IDENTIFIER2',
  });
});