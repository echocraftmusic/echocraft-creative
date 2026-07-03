const modal = document.getElementById("videoModal");
const frame = document.getElementById("videoFrame");
const closeBtn = document.querySelector(".closeModal");

document.querySelectorAll(".workCard").forEach(card => {

    card.addEventListener("click", () => {

        const video = card.dataset.video;

        if (!video) return;

        frame.src = "https://www.youtube.com/embed/" + video + "?autoplay=1";

        modal.style.display = "flex";

    });

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

    frame.src = "";

});

modal.addEventListener("click", e => {

    if (e.target === modal) {

        modal.style.display = "none";

        frame.src = "";

    }

});

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(contactForm.action, {

                method: "POST",

                body: formData,

                headers: {

                    Accept: "application/json"

                }

            });

            if (response.ok) {

                contactForm.style.display = "none";

                document.getElementById("formSuccess").style.display = "block";

            } else {

                alert("Sorry, something went wrong. Please try again.");

            }

        } catch (error) {

            alert("Unable to send your message. Please check your connection and try again.");

        }

    });

}

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

    mobileMenu.style.display =
        mobileMenu.style.display === "block"
            ? "none"
            : "block";

});

document.querySelectorAll("#mobileMenu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.style.display = "none";

    });

});