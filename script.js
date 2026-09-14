const modal = document.getElementById("expModal");
const modalContent = document.querySelector(".modal-content");

function downloadResume() {
  const resumeSelect = document.getElementById("resumeSelect");
  if (!resumeSelect.value) return;

  const downloadLink = document.createElement("a");
  downloadLink.href = resumeSelect.value;
  downloadLink.download = "";
  downloadLink.click();
  resumeSelect.value = "";
}

const expData = {
  airmacau: {
    title: "Passenger Sales / Reservation & Ticketing Assistant",
    company: "Air Macau Airline",
    period: "January 2024 – October 2025",
    bullets: [
      "Ticketing & Client Consultation: Advised and sold tickets to passengers and travel agents, resolving booking issues and clearly explaining policies — serving as the go-to point of contact for agents needing support during operational issues.",
      "Social Media Management: Collaborated with an outsourced content team on content ideation and planning — growing LINE Official followers by 72% and Facebook by 10%.",
      "Weekly Reporting: Compiled weekly sales figures and BKK inbound/outbound market reports by extracting data from internal systems and summarizing it into clear, easy-to-read reports for management.",
      "Flight Disruption Communication: Notified passengers and travel agents of flight delays and cancellations, leveraging patience and negotiation skills to manage complaints and guide affected passengers through the disruption — even when the cause was beyond the airline's control."
    ]
  },
  leadership: {
    title: '"Unlock Your Leadership" for student club members',
    company: "Suan Sunandha Rajabhat University",
    period: "March 2025",
    score: "4.68 / 5.00",
    bullets: [
      "Speaker on leadership development for student club members.",
      "Shared experiences and strategies for effective leadership in university settings."
    ]
  },
  workforce: {
    title: "Workforce Readiness",
    company: "Suan Sunandha Rajabhat University",
    period: "July 2024",
    bullets: [
      "Speaker on workforce readiness for graduating students.",
      "Provided insights on transitioning from academic to professional environments."
    ]
  },
  judge: {
    title: "Outstanding Student Competition",
    company: "Suan Sunandha Rajabhat University",
    period: "July 2025",
    bullets: [
      "Served as a judge for the Outstanding Student Competition.",
      "Evaluated candidates based on academic performance, leadership, and extracurricular activities."
    ]
  },
  brewbliss: {
    title: "Owner & Data Analyst — BREWBLISS BAR",
    company: "Personal Business | Delivery via LINE MAN, GrabFood, Shopee Food",
    period: "May – October 2025",
    description: [
      "A Thai tea lover since childhood, I spent 6 months developing my own signature recipe before founding and operating a Thai tea delivery business across major food delivery platforms. My tea has reached customers as far as Macau, Korea, and the Philippines, alongside a growing base of loyal regulars.",
      "To grow the business sustainably, I collected and analyzed sales data to identify best-selling products and peak order times, then built Excel dashboards using advanced formulas to track revenue and performance. These data-driven insights guided how I adjusted menu pricing and promotional strategies."
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
    company: "EVEANDBOY (Internship)",
    period: "December 2022 – March 2023",
    bullets: [
      "UX/UI Design: Designed the UX/UI for an internal company website.",
      "Content Creation: Selected products, shot photography and video content, and briefed the graphic design team on visual direction."
    ]
  },
  military: {
    title: "Conscript (Mandatory National Service)",
    company: "Royal Thai Armed Forces",
    period: "November 2025 – October 2026",
    bullets: [
      "Completed mandatory military conscription service, developing discipline, teamwork, and adaptability in a structured, high-pressure environment.",
      "Selected as a ceremonial honor guard for HRH Princess Maha Chakri Sirindhorn's visits to confer degrees to graduates of Khon Kaen University and Nakhon Phanom University for the 2026 academic year.",
      "Helped decorate the ceremonial flag vehicle (Rot Thongchai Chaloem Phon) and marched in the Royal Thai Armed Forces Day parade, with both activities earning 1st place in competition."
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

  const descriptionHTML = data.description
    ? data.description.map(paragraph => `<p class="modal-description">${paragraph}</p>`).join("")
    : "";

  const bulletsHTML = data.bullets?.length
    ? `<ul>${data.bullets.map(b => `<li>${b}</li>`).join("")}</ul>`
    : "";

  modalContent.innerHTML = `
    <h2>${data.title}</h2>
    <p><strong>${data.company}</strong></p>
    <p>${data.period}</p>
    ${data.score ? `<p class="modal-score">⭐ Evaluation Score: ${data.score}</p>` : ""}
    ${descriptionHTML}
    ${bulletsHTML}
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
