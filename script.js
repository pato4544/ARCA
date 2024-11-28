document.addEventListener("DOMContentLoaded", () => {
    // Validar ingreso de Clave Fiscal
    const ingresarBtn = document.getElementById("ingresarBtn");
    const claveFiscalInput = document.getElementById("claveFiscalInput");

    ingresarBtn.addEventListener("click", () => {
        const clave = claveFiscalInput.value.trim();
        if (clave === "") {
            alert("Por favor, ingresá tu Clave Fiscal.");
        } else if (clave.length < 8) {
            alert("La Clave Fiscal debe tener al menos 8 caracteres.");
        } else {
            alert("Clave Fiscal ingresada correctamente.");
            // Aquí podrías redirigir al usuario a otra página
        }
    });

    // Mostrar información adicional sobre el Pacto Fiscal
    const infoPactoFiscalBtn = document.getElementById("infoPactoFiscal");
    infoPactoFiscalBtn.addEventListener("click", () => {
        alert("Más información sobre el Pacto Fiscal estará disponible pronto.");
    });

    // Agregar más novedades dinámicamente
    const novedadesContainer = document.getElementById("novedadesContainer");
    const verMasNovedadesBtn = document.getElementById("verMasNovedades");

    verMasNovedadesBtn.addEventListener("click", () => {
        const nuevaNovedad = document.createElement("div");
        nuevaNovedad.classList.add("news-item");
        nuevaNovedad.innerHTML = `
            <img src="image5.jpg" alt="Novedad adicional">
            <p>Nueva novedad: información actualizada...</p>
        `;
        novedadesContainer.appendChild(nuevaNovedad);
        alert("Se agregó una nueva novedad.");
    });
});

