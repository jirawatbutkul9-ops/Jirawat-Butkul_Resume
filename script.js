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
  }
};

function openModal(id) {
  const data = expData[id];
  if (!data) return;

  modalContent.innerHTML = `
    <h2>${data.title}</h2>
    <p><strong>${data.company}</strong></p>
    <p>${data.period}</p>
    ${data.score ? `<p class="modal-score">⭐ Evaluation Score: ${data.score}</p>` : ""}
    <ul>
      ${data.bullets.map(b => `<li>${b}</li>`).join("")}
    </ul>
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
