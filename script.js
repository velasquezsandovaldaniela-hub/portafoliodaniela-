
/* =========================================
   1. MENÚ DE NAVEGACIÓN
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("show");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.innerHTML = isOpen ? "&times;" : "☰";

        });

        // Cerrar menú al seleccionar una página

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("show");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.innerHTML = "☰";

            });

        });

    }


    /* =========================================
       2. FORMULARIO DE CONTACTO
    ========================================= */

    const contactForm = document.getElementById("contact-form");

    const formMessage = document.getElementById("form-message");

    if (contactForm) {

        contactForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();

            const correo = document.getElementById("correo").value.trim();

            const mensaje = document.getElementById("mensaje").value.trim();

            if (!nombre || !correo || !mensaje) {

                formMessage.textContent = "Por favor, completa todos los campos.";

                return;

            }

            console.log("Formulario enviado correctamente:", {
                nombre,
                correo,
                mensaje
            });

            formMessage.textContent =
                "¡Gracias por escribirme! Tu mensaje ha sido registrado.";

            contactForm.reset();

        });

    }

});
