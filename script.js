window.addEventListener("load", () => {

    const intro = document.getElementById("intro");
    const logo = document.getElementById("intro-logo");

    logo.animate([
        {
            opacity:0,
            transform:"scale(.7)"
        },

        {
            opacity:1,
            transform:"scale(1)"
        }

    ],{

        duration:1000,
        fill:"forwards",
        easing:"ease"

    });

    setTimeout(()=>{

        intro.style.transition=".8s";

        intro.style.opacity="0";

        setTimeout(()=>{

            intro.style.display="none";

        },800);

    },1800);

});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = contactForm.name.value.trim();
    const business = contactForm.business.value.trim();
    const phone = contactForm.phone.value.trim();
    const message = contactForm.message.value.trim();

    // Make sure phone has exactly 8 digits
    if (!/^\d{8}$/.test(phone)) {
        contactForm.phone.focus();
        return;
    }

    const email = "triplydevelopment@gmail.com";

    const subject = "New Project Request - TRPLY";

    const body = `Hello TRIPLY,

Name: ${name}

Business Name: ${business}

Phone: +961 ${phone}

Project Details:
${message}`;

    const mailtoURL =
    `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoURL;

    // Clear form
    contactForm.reset();

    // Show success message
    const formMessage = document.getElementById("formMessage");

    if (formMessage) {
        formMessage.textContent = "Thank you! We'll respond soon.";
        formMessage.classList.add("show");
    }

});

const heroTitle = document.getElementById("hero-title");


const titles = [
    "BUILD",
    "DESIGN",
    "DEPLOY",
    "CREATE"
];


let currentTitle = 0;


setInterval(()=>{


    heroTitle.classList.add("change");


    setTimeout(()=>{


        currentTitle = (currentTitle + 1) % titles.length;


        heroTitle.innerHTML = 
        `WE <span>${titles[currentTitle]}.</span>`;


        heroTitle.classList.remove("change");


    },500);


},3000);

