/* Bascule mode clair / sombre.
   Chargé dans <head> (sans defer) : le thème mémorisé est appliqué avant
   l'affichage, ce qui évite un flash de la mauvaise couleur.
   Sans choix mémorisé, la page suit le réglage du système. */
(function () {
  var KEY = "theme";
  var root = document.documentElement;
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function save(theme) {
    try { localStorage.setItem(KEY, theme); } catch (e) { /* stockage indisponible */ }
  }

  function current() {
    return root.dataset.theme || (systemDark.matches ? "dark" : "light");
  }

  var saved = stored();
  if (saved === "light" || saved === "dark") root.dataset.theme = saved;

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    if (!button) return;

    function sync() {
      button.setAttribute("aria-pressed", String(current() === "dark"));
    }

    button.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      save(next);
      sync();
    });

    systemDark.addEventListener("change", sync);
    sync();
  });
})();
