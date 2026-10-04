// OnionPlay /official/ — CTA buttons.
// Opens official-domain links in a secure new tab without exposing the URL in
// the browser status bar (buttons carry data-href, not href).
// First-party, no dependencies, no tracking.

document.querySelectorAll("[data-href]").forEach(function (el) {
  el.addEventListener("click", function () {
    var url = el.getAttribute("data-href");
    if (url) {
      window.open(url, el.hasAttribute("data-blank") ? "_blank" : "_self", "noopener,noreferrer");
    }
  });
});
