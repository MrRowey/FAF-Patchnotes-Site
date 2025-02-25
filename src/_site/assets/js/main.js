if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const swUrl = "/service-worker.js";

    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.debug("Service Worker registered:", registration);

        // Listen for updates to the service worker
        registration.addEventListener("updatefound", () => {
          console.debug("New Service Worker detected...");
          const newWorker = registration.installing;

          newWorker?.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              console.debug("New version available. Reloading...");
              window.location.reload();
            }
          });
        });
      })
      .catch((error) => console.error("Service Worker registration failed:", error));
  });
}
