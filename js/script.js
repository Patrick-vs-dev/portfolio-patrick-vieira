/* ========================================
   MENU MOBILE
======================================== */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ========================================
   FECHAR MENU AO CLICAR EM UM LINK
======================================== */

const menuItems = document.querySelectorAll(".nav-links a");

menuItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* ========================================
   TEMA CLARO / ESCURO
======================================== */

const themeButton = document.getElementById("theme-toggle");
const themeIcon = themeButton.querySelector("i");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const lightMode =
        document.body.classList.contains("light-mode");

    if (lightMode) {

        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    } else {

        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
});

/* ========================================
   VALIDAÇÃO DE FORMULÁRIO
======================================== */

const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const toast = document.getElementById("toast");

function validateEmail(email) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        nameInput.value.trim();

    const email =
        emailInput.value.trim();

    const message =
        messageInput.value.trim();

    if (!name || !email || !message) {

        showToast(
            "Preencha todos os campos.",
            false
        );

        return;
    }

    if (!validateEmail(email)) {

        showToast(
            "Digite um e-mail válido.",
            false
        );

        return;
    }

    form.reset();

    showToast(
        "Mensagem enviada com sucesso!",
        true
    );
});

/* ========================================
   TOAST
======================================== */

function showToast(message, success = true) {

    toast.textContent = message;

    if (success) {

        toast.style.background =
            "#22c55e";

    } else {

        toast.style.background =
            "#ef4444";
    }

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
}

/* ========================================
   ANIMAÇÃO AO ROLAR
======================================== */

const animatedElements =
    document.querySelectorAll(
        ".card, .project-card, .timeline-item"
    );

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");
                }
            });
        },

        {
            threshold: 0.15
        }
    );

animatedElements.forEach(element => {

    observer.observe(element);
});

/* ========================================
   MENU ATIVO CONFORME SEÇÃO
======================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {
            currentSection =
                section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active-link");
        }
    });
});

/* ========================================
   ANIMAÇÃO DAS BARRAS DE IDIOMA
======================================== */

const progressBars =
    document.querySelectorAll(
        ".progress-fill"
    );

const progressObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const bar =
                        entry.target;

                    const finalWidth =
                        getComputedStyle(bar).width;

                    bar.style.width = "0";

                    setTimeout(() => {

                        if (
                            bar.classList.contains(
                                "portuguese"
                            )
                        ) {
                            bar.style.width = "100%";
                        }

                        if (
                            bar.classList.contains(
                                "english"
                            )
                        ) {
                            bar.style.width = "60%";
                        }

                        if (
                            bar.classList.contains(
                                "mandarin"
                            )
                        ) {
                            bar.style.width = "20%";
                        }

                    }, 200);
                }
            });
        },

        {
            threshold: 0.5
        }
    );

progressBars.forEach(bar => {

    progressObserver.observe(bar);
});

/* ========================================
   HEADER TRANSPARENTE DINÂMICO
======================================== */

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(13,17,23,0.95)";

    } else {

        header.style.background =
            "rgba(13,17,23,0.85)";
    }
});

