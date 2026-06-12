// ===============================
// LOCAL STORAGE ARRAYS
// ===============================

let startups = JSON.parse(localStorage.getItem("startups")) || [];

let profiles = JSON.parse(localStorage.getItem("profiles")) || [];

let journalEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];

let incubations = JSON.parse(localStorage.getItem("incubations")) || [];

// ===============================
// STARTUP FUNCTIONS
// ===============================

function renderStartups() {
  let container = document.getElementById("startupContainer");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  for (let i = 0; i < startups.length; i++) {
    container.innerHTML += `

        <div class="startup-card">

            <h3>${startups[i].name}</h3>

            <p>
                <strong>Industry:</strong>
                ${startups[i].industry}
            </p>

            <p>
                <strong>Founder:</strong>
                ${startups[i].founder}
            </p>

            <p>
                ${startups[i].problem}
            </p>

            <p>
                <strong>Skills:</strong>
                ${startups[i].skills}
            </p>

            <p>
                <strong>Team Members:</strong>
                ${startups[i].members}
            </p>

            <button
            onclick="joinStartup(${i})">
                Join Team
            </button>

        </div>

        `;
  }

  updateDashboard();
}

// ===============================
// JOIN TEAM
// ===============================

function joinStartup(index) {
  startups[index].members++;

  localStorage.setItem("startups", JSON.stringify(startups));

  alert("Join Request Sent Successfully");

  renderStartups();
}

// ===============================
// PUBLISH STARTUP
// ===============================

let publishBtn = document.getElementById("publishBtn");

if (publishBtn) {
  publishBtn.onclick = function () {
    let startup = {
      name: document.getElementById("startupName").value,

      industry: document.getElementById("industry").value,

      founder: document.getElementById("founderName").value,

      problem: document.getElementById("problemStatement").value,

      description: document.getElementById("description").value,

      skills: document.getElementById("skillsRequired").value,

      members: 1,
    };

    startups.push(startup);

    localStorage.setItem("startups", JSON.stringify(startups));

    renderStartups();

    document.getElementById("startupForm").reset();

    alert("Startup Published Successfully");
  };
}

// ===============================
// SEARCH STARTUPS
// ===============================

let searchStartup = document.getElementById("searchStartup");

if (searchStartup) {
  searchStartup.onkeyup = function () {
    let value = this.value.toLowerCase();

    let cards = document.querySelectorAll(".startup-card");

    cards.forEach(function (card) {
      let text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };
}
// ===============================
// TEAM DIRECTORY
// ===============================

function renderProfiles() {
  let container = document.getElementById("profileContainer");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  for (let i = 0; i < profiles.length; i++) {
    container.innerHTML += `

        <div class="profile-card">

            <h3>
                ${profiles[i].name}
            </h3>

            <p>
                ${profiles[i].role}
            </p>

            <p>
                ${profiles[i].skills}
            </p>

            <p>
                ${profiles[i].experience}
            </p>

        </div>

        `;
  }

  updateDashboard();
}

let createProfileBtn = document.getElementById("createProfileBtn");

if (createProfileBtn) {
  createProfileBtn.onclick = function () {
    let profile = {
      name: document.getElementById("memberName").value,

      role: document.getElementById("memberRole").value,

      skills: document.getElementById("memberSkills").value,

      experience: document.getElementById("experience").value,
    };

    profiles.push(profile);

    localStorage.setItem("profiles", JSON.stringify(profiles));

    renderProfiles();

    document.getElementById("profileForm").reset();

    alert("Profile Created Successfully");
  };
}

// ===============================
// CO-FOUNDER COMPATIBILITY SCORE
// ===============================

let compatibilityBtn = document.getElementById("compatibilityBtn");

if (compatibilityBtn) {
  compatibilityBtn.onclick = function () {
    let score = Math.floor(Math.random() * 41) + 60;

    document.getElementById("compatibilityResult").innerHTML = `
        <h3>
        Compatibility Score:
        ${score}%
        </h3>
        `;
  };
}

// ===============================
// STARTUP READINESS ANALYZER
// ===============================

let readinessBtn = document.getElementById("readinessBtn");

if (readinessBtn) {
  readinessBtn.onclick = function () {
    let score = 0;

    if (document.getElementById("research").value === "Yes") {
      score += 25;
    }

    if (document.getElementById("mvp").value === "Yes") {
      score += 25;
    }

    if (document.getElementById("revenue").value === "Yes") {
      score += 25;
    }

    if (document.getElementById("audience").value === "Yes") {
      score += 25;
    }

    let status = "Needs Improvement";

    if (score >= 90) {
      status = "Ready for Incubation";
    } else if (score >= 70) {
      status = "Almost Ready";
    }

    document.getElementById("readinessResult").innerHTML = `
        <h3>${score}%</h3>
        <p>${status}</p>
        `;
  };
}

// ===============================
// STARTUP DNA REPORT
// ===============================

let dnaBtn = document.getElementById("dnaBtn");

if (dnaBtn) {
  dnaBtn.onclick = function () {
    document.getElementById("dnaResult").innerHTML = `
        <h3>
        Startup DNA Report
        </h3>

        <p>
        Startup Type:
        Disruptor
        </p>

        <p>
        Growth Potential:
        High
        </p>

        <p>
        Investment Potential:
        Strong
        </p>

        <p>
        Incubation Suitability:
        Excellent
        </p>
        `;
  };
}

// ===============================
// INCUBATION CENTER
// ===============================

let applyIncubation = document.getElementById("applyIncubation");

if (applyIncubation) {
  applyIncubation.onclick = function () {
    let application = {
      startup: document.getElementById("incubationStartup").value,
    };

    incubations.push(application);

    localStorage.setItem("incubations", JSON.stringify(incubations));

    document.getElementById("incubationResult").innerHTML = `
        <h3>
        Application Submitted
        Successfully
        </h3>

        <p>
        Status:
        Pending Review
        </p>
        `;

    updateDashboard();
  };
}
// ===============================
// MENTOR CONNECT
// ===============================

let mentorButtons = document.querySelectorAll(".mentorBtn");

mentorButtons.forEach(function (button) {
  button.onclick = function () {
    alert("Mentorship Request Sent Successfully");
  };
});

// ===============================
// PROGRESS TRACKER
// ===============================

let progressBtn = document.getElementById("progressBtn");

if (progressBtn) {
  progressBtn.onclick = function () {
    let checks = document.querySelectorAll(".stageCheck");

    let completed = 0;

    checks.forEach(function (check) {
      if (check.checked) {
        completed++;
      }
    });

    let percent = Math.round((completed / checks.length) * 100);

    document.getElementById("progressResult").innerHTML = `
        <h3>
        Progress:
        ${percent}%
        </h3>
        `;
  };
}

// ===============================
// FOUNDER JOURNAL
// ===============================

function renderJournal() {
  let list = document.getElementById("journalList");

  if (!list) {
    return;
  }

  list.innerHTML = "";

  for (let i = 0; i < journalEntries.length; i++) {
    list.innerHTML += `
        <div class="profile-card">

            <p>
            ${journalEntries[i]}
            </p>

            <button
            onclick="deleteJournal(${i})">

                Delete

            </button>

        </div>
        `;
  }

  updateDashboard();
}

function deleteJournal(index) {
  journalEntries.splice(index, 1);

  localStorage.setItem(
    "journalEntries",

    JSON.stringify(journalEntries),
  );

  renderJournal();
}

let saveJournalBtn = document.getElementById("saveJournalBtn");

if (saveJournalBtn) {
  saveJournalBtn.onclick = function () {
    let text = document.getElementById("journalEntry").value;

    if (text === "") {
      alert("Please write something");

      return;
    }

    journalEntries.push(text);

    localStorage.setItem(
      "journalEntries",

      JSON.stringify(journalEntries),
    );

    renderJournal();

    document.getElementById("journalEntry").value = "";
  };
}

// ===============================
// INVESTOR ATTRACTION SCORE
// ===============================

let investorBtn = document.getElementById("investorBtn");

if (investorBtn) {
  investorBtn.onclick = function () {
    let score = 0;

    if (document.getElementById("investRevenue").value === "Yes") {
      score += 25;
    }

    if (document.getElementById("investMarket").value === "Large") {
      score += 25;
    } else if (document.getElementById("investMarket").value === "Medium") {
      score += 15;
    }

    if (document.getElementById("investCompetition").value === "Yes") {
      score += 25;
    }

    if (document.getElementById("investValidation").value === "Yes") {
      score += 25;
    }

    let result = "Needs More Validation";

    if (score >= 90) {
      result = "Highly Attractive";
    } else if (score >= 70) {
      result = "Promising";
    }

    document.getElementById("investorResult").innerHTML = `
        <h3>
        ${score}%
        </h3>

        <p>
        ${result}
        </p>
        `;
  };
}

// ===============================
// DASHBOARD
// ===============================

function updateDashboard() {
  let startupsCount = document.getElementById("dashboardStartups");

  let profilesCount = document.getElementById("dashboardProfiles");

  let journalCount = document.getElementById("dashboardJournal");

  let incubationCount = document.getElementById("dashboardIncubation");

  if (startupsCount) {
    startupsCount.textContent = startups.length;
  }

  if (profilesCount) {
    profilesCount.textContent = profiles.length;
  }

  if (journalCount) {
    journalCount.textContent = journalEntries.length;
  }

  if (incubationCount) {
    incubationCount.textContent = incubations.length;
  }
}

// ===============================
// PAGE LOAD
// ===============================

renderStartups();
renderProfiles();
renderJournal();
updateDashboard();

// ===============================
// GET STARTED BUTTON
// ===============================

let getStartedBtn = document.getElementById("getStartedBtn");

if (getStartedBtn) {
  getStartedBtn.onclick = function () {
    document.getElementById("post-startup").scrollIntoView({
      behavior: "smooth",
    });
  };
}

let navbarBtn = document.getElementById("navbarGetStartedBtn");

if (navbarBtn) {
  navbarBtn.onclick = function () {
    document.getElementById("post-startup").scrollIntoView({
      behavior: "smooth",
    });
  };
}
