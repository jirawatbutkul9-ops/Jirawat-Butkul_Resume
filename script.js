const modal = document.getElementById("expModal");
const modalContent = document.querySelector(".modal-content");

const expData = {
  airmacau: {
    title: "Passenger Sales / Reservation & Ticketing Assistant",
    company: "Air Macau Company Limited, Bangkok, Thailand",
    period: "2023 – 2024",
    bullets: [
      "Providing ticketing services, including assisting passengers and agents.",
      "Planning and conceptualizing various online advertising media.",
      "Line Official: Friends increased by 72.10% within 9 months.",
      "Facebook: follower growth by 10.05% within 9 months.",
      "Instagram: follower growth by 8.60% within 9 months.",
      "Preparing sales reports and aviation situation updates.",
      "Preparing monthly Social Media reports.",
      "Collaborate with the marketing department in designing and developing advertising media, as well as liaising with travel agents.",
      "Notifying passengers in case of flight cancellations or changes."
    ]
  },
  leadership: {
    title: '"Unlock Your Leadership" for student club members',
    company: "Suan Sunandha Rajabhat University",
    period: "March 11, 2025",
    score: "4.68 / 5.00",
    bullets: [
      "Speaker on leadership development for student club members.",
      "Shared experiences and strategies for effective leadership in university settings."
    ]
  },
  workforce: {
    title: "Workforce Readiness",
    company: "Suan Sunandha Rajabhat University",
    period: "July 12, 2024",
    bullets: [
      "Speaker on workforce readiness for graduating students.",
      "Provided insights on transitioning from academic to professional environments."
    ]
  },
  judge: {
    title: "Outstanding Student Competition",
    company: "Suan Sunandha Rajabhat University",
    period: "July 11, 2025",
    bullets: [
      "Served as a judge for the Outstanding Student Competition.",
      "Evaluated candidates based on academic performance, leadership, and extracurricular activities."
    ]
  },
  brewbliss: {
    title: "Owner & Data Analyst — BREWBLISS BAR",
    company: "Personal Business | Delivery via LINE MAN, GrabFood, Shopee Food",
    period: "May – October 2024",
    bullets: [
      "Founded and operated a Thai tea delivery business across major food delivery platforms.",
      "Collected and analyzed sales data to identify best-selling products and peak order times.",
      "Built Excel dashboards using Advanced formulas and Pivot Tables to track revenue and performance.",
      "Applied data-driven insights to adjust menu pricing and promotional strategies."
    ],
    menu: [
      { name: "Thai Tea", img: "menu-thaitea.png" },
      { name: "Green Tea", img: "menu-greentea.png" },
      { name: "Iced Black Tea", img: "menu-icedblacktea.png" },
      { name: "Clear Matcha", img: "menu-clearmatcha.png" },
      { name: "Matcha Latte", img: "menu-matchalatte.png" },
      { name: "Iced Matcha Honey Lemon", img: "menu-icedmatchahoneylemon.png" },
      { name: "Pink Milk", img: "menu-pinkmlik.png" },
      { name: "Pink Milk Chocolate", img: "menu-pinkmlikchocolate.png" },
      { name: "Peach Soda", img: "menu-peach.png" },
      { name: "Strawberry Soda", img: "menu-strawberrysoda.png" },
      { name: "Apple Soda", img: "menu-applesoda.png" }
    ]
  },
  Internship: {
    title: "UX/UI Designer & Content Creator",
    company: "EVEANDBOY",
    period: "December 01, 2022 – March 03, 2023",
    bullets: [
      "System Analysis: Designed UX/UI interfaces using user-centered analysis to enhance application usability.",
      "Digital Content: Planned and created targeted website content to improve user engagement and marketing reach."
    ]
  },
};

function openModal(id) {
  const data = expData[id];
  if (!data) return;

  const menuHTML = data.menu ? `
    <div class="modal-section">
      <h3 class="modal-subtitle">🧋 Menu</h3>
      <div class="modal-img-grid">
        ${data.menu.map(m => `
          <div class="modal-img-item" onclick="openModalLightbox('${m.img}')">
            <img src="${m.img}" alt="${m.name}">
            <p>${m.name}</p>
          </div>
        `).join("")}
      </div>
    </div>
  ` : "";

  modalContent.innerHTML = `
    <h2>${data.title}</h2>
    <p><strong>${data.company}</strong></p>
    <p>${data.period}</p>
    ${data.score ? `<p class="modal-score">⭐ Evaluation Score: ${data.score}</p>` : ""}
    <ul>
      ${data.bullets.map(b => `<li>${b}</li>`).join("")}
    </ul>
    ${menuHTML}
  `;

  modal.style.display = "flex";
}

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = "Copied!";
    btn.style.background = "#22c55e";
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = "";
    }, 2000);
  });
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Education Modal
const eduModal = document.getElementById("eduModal");

function openEduModal() {
  eduModal.style.display = "flex";
}

window.addEventListener("click", function(e) {
  if (e.target === eduModal) eduModal.style.display = "none";
});

// Modal Image Lightbox
function openModalLightbox(src) {
  const lb = document.getElementById("modalLightbox");
  const img = document.getElementById("modalLightboxImg");
  img.src = src;
  lb.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function() {
  const lb = document.getElementById("modalLightbox");
  if (lb) {
    lb.addEventListener("click", function() {
      lb.style.display = "none";
    });
  }
});
