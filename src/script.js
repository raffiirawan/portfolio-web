// Data project untuk modal
const projects = [
  {
    title: "Coffee Shop Website",
    description:
      "Website company profile dan katalog produk untuk sebuah coffee shop. Menampilkan informasi tentang menu, lokasi, dan kontak. Dibangun dengan HTML, Tailwind CSS, dan Laravel untuk backend.",
    technologies: ["HTML", "Tailwind CSS", "Laravel"],
    screenshots: [
      "assets/projects/coffee-shop/hero-home-page.png",
      "assets/projects/coffee-shop/cta-home-page.png",
      "assets/projects/coffee-shop/about-page.png",
      "assets/projects/coffee-shop/products-page.png",
      "assets/projects/coffee-shop/contact-page.png",
    ],
  },
  {
    title: "Plaza Ambarrukmo",
    description:
      "Website company profile untuk Plaza Ambarrukmo yang menampilkan informasi lokasi tenant, event mall, serta kontak. Dibangun dengan WordPress dan Elementor untuk kemudahan pengelolaan konten.",
    technologies: ["WordPress", "Elementor"],
    screenshots: [
      "assets/projects/amplaz/hero-section.png",
      "assets/projects/amplaz/event-section.png",
      "assets/projects/amplaz/about-us.png",
      "assets/projects/amplaz/mall-facilities.png",
      "assets/projects/amplaz/brand-directory.png",
    ],
  },
  {
    title: "Porta by Ambarrukmo",
    description:
      "Website company profile untuk hotel Porta by Ambarrukmo yang menampilkan informasi kamar, fasilitas, layanan hotel, dan kontak. Dibangun dengan WordPress dan Elementor untuk kemudahan pengelolaan konten.",
    technologies: ["WordPress", "Elementor"],
    screenshots: [
      "assets/projects/porta/hero-home-page.png",
      "assets/projects/porta/rooms-page.png",
      "assets/projects/porta/single-room-page.png",
      "assets/projects/porta/facilities-page.png",
      "assets/projects/porta/packages-page.png",
    ],
  },
  {
    title: "Melamin Toptree",
    description:
      "Website company profile untuk perusahaan Melamin Toptree, perusahaan yang bergerak di bidang produksi alat makan melamin. Menampilkan katalog produk, informasi perusahaan, dan kontak. Dibangun dengan WordPress dan Elementor untuk kemudahan pengelolaan konten.",
    technologies: ["WordPress", "Elementor"],
    screenshots: [
      "assets/projects/melamin-toptree/hero-home-page.png",
      "assets/projects/melamin-toptree/about-page.png",
      "assets/projects/melamin-toptree/product-page.png",
      "assets/projects/melamin-toptree/single-product-page.png",
    ],
  },
  {
    title: "Omnicreapro",
    description:
      "Website company profile untuk Omnicreapro yang merupakan perusahaan yang bergerak di bidang Event Organizer. Menampilkan layanan, portofolio, dan kontak. Dibangun dengan WordPress dan Elementor untuk kemudahan pengelolaan konten.",
    technologies: ["WordPress", "Elementor"],
    screenshots: [
      "assets/projects/omnicreapro/hero-home-page.png",
      "assets/projects/omnicreapro/about-section.png",
      "assets/projects/omnicreapro/service-section.png",
      "assets/projects/omnicreapro/service-page.png",
      "assets/projects/omnicreapro/portfolio-page.png",
    ],
  },
];

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Check for saved theme or default to light mode
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
  sunIcon.classList.remove("hidden");
  moonIcon.classList.add("hidden");
}

themeToggle.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking on menu links
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Project Slider Navigation
const slider = document.getElementById("project-slider");
const prevBtn = document.getElementById("slider-prev");
const nextBtn = document.getElementById("slider-next");

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -320, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 320, behavior: "smooth" });
});

// Project Modal Functions
function openProjectModal(projectIndex) {
  const project = projects[projectIndex];
  const modal = document.getElementById("project-modal");

  // Set modal content
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent =
    project.description;

  // Set technologies
  const techContainer = document.getElementById("modal-technologies");
  techContainer.innerHTML = "";
  project.technologies.forEach((tech) => {
    const span = document.createElement("span");
    span.className =
      "px-3 py-1 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 rounded-full text-sm";
    span.textContent = tech;
    techContainer.appendChild(span);
  });

  // Set gallery
  const gallery = document.getElementById("modal-gallery");
  gallery.innerHTML = "";
  project.screenshots.forEach((screenshot, index) => {
    const div = document.createElement("div");
    div.className =
      "aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden";
    div.innerHTML = `<img src="${screenshot}" alt="Screenshot ${
      index + 1
    }" class="w-full h-full object-cover">`;
    gallery.appendChild(div);
  });

  // Show modal
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white/95", "dark:bg-gray-900/95");
    navbar.classList.remove("bg-white/80", "dark:bg-gray-900/80");
  } else {
    navbar.classList.add("bg-white/80", "dark:bg-gray-900/80");
    navbar.classList.remove("bg-white/95", "dark:bg-gray-900/95");
  }
});
