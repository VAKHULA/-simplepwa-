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

const showNotification = () => {
  // create a new notification
  const notification = new Notification('JavaScript Notification API', {
      body: 'This is a JavaScript Notification API demo',
      icon: './apple-touch-icon.png',
      vibrate: true
  });

  // close the notification after 10 seconds
  setTimeout(() => {
      notification.close();
  }, 10 * 1000);

  // navigate to a URL
  notification.addEventListener('click', () => {
      window.open('https://simplepwa.vakhula.dev/', '_blank');
  });
}

notificationButton.addEventListener("click", async () => {
  showNotification()
});

notificationButton.addEventListener("click", async () => {
  setTimeout(() => {
    showNotification()
  }, 30000)
});