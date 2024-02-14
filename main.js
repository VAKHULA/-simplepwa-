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
let permission = Notification.permission;

if(permission === "granted") {
  showNotification();
} else if(permission === "default"){
  requestAndShowPermission();
} else {
  alert("Use normal alert");
}

function requestAndShowPermission() {
  Notification.requestPermission(function (permission) {
   if (permission === "granted") {
         showNotification();
   }
  });
  }

function showNotification() {
  // if(document.visibilityState === "visible) {return;}


var title = "JavaScript Jeep";   icon = "image-url";
var body = "Message to be displayed";
var notification = new Notification('Title', { body, icon });
notification.onclick = () => {
     notification.close();
     window.parent.focus();
}
}
