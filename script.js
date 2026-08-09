// ============================================
// PART 1: Intro Animation
// ============================================
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const logo = document.getElementById("intro-logo");

  logo.animate(
    [
      { opacity: 0, transform: "scale(.7)" },
      { opacity: 1, transform: "scale(1)" }
    ],
    {
      duration: 1000,
      fill: "forwards",
      easing: "ease"
    }
  );

  setTimeout(() => {
    intro.style.transition = ".8s";
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
    }, 800);
  }, 1800);
});

// ============================================
// PART 2: In-App Browser Warning Banner
// (Instagram / Facebook) — extra safety net
// ============================================
(function checkInAppBrowser() {
  const ua = navigator.userAgent || "";
  const isInApp = /Instagram|FBAN|FBAV|Line\//i.test(ua);

  if (isInApp) {
    const banner = document.createElement("div");
    banner.style.cssText = `
      position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
      background: #000; color: #fff; padding: 14px 16px;
      font-size: 14px; text-align: center; direction: rtl;
    `;
    banner.innerHTML = `
      لتقدر تبعتلنا الفورم بأفضل شكل، افتح الصفحة بمتصفح خارجي 👉
      اضغط ⋮ فوق يمين وإختار <strong>"Open in Browser"</strong>
      <br>
      <button id="copyLinkBtn" style="margin-top:8px;padding:6px 14px;border:none;border-radius:6px;background:#fff;color:#000;font-weight:bold;">
        نسخ رابط الصفحة
      </button>
    `;
    document.body.prepend(banner);

    document.getElementById("copyLinkBtn").addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        document.getElementById("copyLinkBtn").textContent = "تم النسخ ✓";
      });
    });
  }
})();

// ============================================
// PART 3: Contact Form Logic
// ============================================
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const business = contactForm.business.value.trim();
    const phone = contactForm.phone.value.trim();
    const message = contactForm.message.value.trim();

    // Make sure phone has exactly 8 digits
    if (!/^\d{8}$/.test(phone)) {
      contactForm.phone.focus();
      if (formMessage) {
        formMessage.textContent = "الرجاء إدخال رقم هاتف مؤلف من 8 أرقام.";
        formMessage.classList.add("show");
      }
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

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = gmailURL;

    contactForm.reset();

    if (formMessage) {
      formMessage.textContent = "Thank you! We'll respond soon.";
      formMessage.classList.add("show");
    }
  });
}

// ============================================
// PART 4: Hero Title Rotation
// ============================================
const heroTitle = document.getElementById("hero-title");

const titles = ["BUILD", "DESIGN", "DEPLOY", "CREATE"];
let currentTitle = 0;

if (heroTitle) {
  setInterval(() => {
    heroTitle.classList.add("change");

    setTimeout(() => {
      currentTitle = (currentTitle + 1) % titles.length;
      heroTitle.innerHTML = `WE <span>${titles[currentTitle]}.</span>`;
      heroTitle.classList.remove("change");
    }, 500);
  }, 3000);
}