document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest(".copy-button");
    if (!button) return;

    const shareTitle = button.getAttribute("data-share-title") || "";
    const shareText = button.getAttribute("data-share-description") || "";
    const shareURL =
      button.getAttribute("data-share-url") || window.location.href;

    if (navigator.share) {
      handleWebShare(shareTitle, shareText, shareURL);
    } else if (navigator.clipboard) {
      copyToClipboard(button, shareURL);
    } else {
      console.warn("Clipboard API not supported.");
    }
  });
});

function handleWebShare(title, text, url) {
  navigator
    .share({ title, text, url })
    .then(() => console.log("Shared successfully!"))
    .catch((error) => console.error("Error sharing:", error));
}

function copyToClipboard(button, text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      flashButton(button);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

function flashButton(button) {
  button.classList.add("show-msg");
  setTimeout(() => button.classList.remove("show-msg"), 1000);
}
