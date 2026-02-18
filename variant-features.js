// aca espera a que cargue el HTML, obtiene el div de características
// y prepara la función que muestra la descripción correcta por variante

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("variant-features");
  if (!container || !window.variantFeatures) return;

  const variantInput = document.querySelector('input[name="id"]');

  function renderFeatures(variantId) {
    const features = window.variantFeatures[variantId];

    if (features) {
      container.innerHTML = features;
      container.style.display = "block";
    } else {
      container.innerHTML = "";
      container.style.display = "none";
    }
  }

  // render inicial
  if (variantInput?.value) {
    renderFeatures(variantInput.value);
  }

  // escucha cambios reales de variante
  document.addEventListener("change", (e) => {
    if (e.target.name === "id") {
      renderFeatures(e.target.value);
    }
  });
});

