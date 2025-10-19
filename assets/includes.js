// --- carrega os parciais dinamicamente ---
async function injectPartials() {
  const slots = document.querySelectorAll("[data-include]");
  for (const slot of slots) {
    const path = slot.getAttribute("data-include");
    try {
      const res = await fetch(path, { cache: "no-cache" });
      if (!res.ok) throw new Error(res.status + " " + res.statusText);
      slot.innerHTML = await res.text();
    } catch (e) {
      slot.innerHTML = `<!-- falha ao carregar ${path}: ${e.message} -->`;
    }
  }

  // dispara evento indicando que tudo foi carregado
  window.dispatchEvent(new Event("partials:loaded"));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectPartials);
} else {
  injectPartials();
}