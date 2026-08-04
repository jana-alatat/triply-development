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


contactForm.addEventListener("submit", (e)=>{

    e.preventDefault();


    const name = contactForm.name.value;
    const business = contactForm.business.value;
    const phone = contactForm.phone.value;
    const message = contactForm.message.value;


    const email = "triplydevelopment@gmail.com"; 


    const subject = "New Project Request - TRPLY";


    const body =
`Hello TRIPLY,

Name: ${name}

Business Name: ${business}

Phone: ${phone}

Project Details:
${message}`;


   window.location.href =
`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


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

