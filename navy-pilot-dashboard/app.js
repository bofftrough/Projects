(() => {
  "use strict";

  const STORAGE_KEY = "tacamo-dashboard";

  // ===== State Management =====
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  let state = loadState();

  // ===== Tab Switching =====
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((tc) => tc.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`tab-${target}`).classList.add("active");
      state._activeTab = target;
      saveState(state);
    });
  });

  // Restore active tab
  if (state._activeTab) {
    const savedTab = document.querySelector(`.tab[data-tab="${state._activeTab}"]`);
    if (savedTab) savedTab.click();
  }

  // ===== Collapsible Cards =====
  document.querySelectorAll("[data-toggle]").forEach((header) => {
    header.addEventListener("click", () => {
      const key = header.dataset.toggle;
      const body = document.getElementById(`body-${key}`);
      if (!body) return;
      body.classList.toggle("collapsed");
      // Save collapsed state
      if (!state._collapsed) state._collapsed = {};
      state._collapsed[key] = body.classList.contains("collapsed");
      saveState(state);
    });
  });

  // Restore collapsed states
  if (state._collapsed) {
    Object.entries(state._collapsed).forEach(([key, isCollapsed]) => {
      const body = document.getElementById(`body-${key}`);
      if (body) {
        body.classList.toggle("collapsed", isCollapsed);
      }
    });
  }

  // ===== Checkbox Handling =====
  const allCheckboxes = document.querySelectorAll("input[type='checkbox'][data-key]");

  allCheckboxes.forEach((cb) => {
    const key = cb.dataset.key;
    // Restore
    if (state[key]) cb.checked = true;

    cb.addEventListener("change", () => {
      state[key] = cb.checked;
      saveState(state);
      updateAllProgress();
    });
  });

  // ===== Textarea Handling =====
  const allTextareas = document.querySelectorAll("textarea[data-notes]");

  allTextareas.forEach((ta) => {
    const key = `_notes_${ta.dataset.notes}`;
    // Restore
    if (state[key]) ta.value = state[key];

    ta.addEventListener("input", () => {
      state[key] = ta.value;
      saveState(state);
    });
  });

  // ===== Date / Number Input Handling =====
  const allDateInputs = document.querySelectorAll("[data-date]");

  allDateInputs.forEach((input) => {
    const key = `_date_${input.dataset.date}`;
    // Restore
    if (state[key]) input.value = state[key];

    input.addEventListener("change", () => {
      state[key] = input.value;
      saveState(state);
      updateAllProgress();
    });

    input.addEventListener("input", () => {
      state[key] = input.value;
      saveState(state);
    });
  });

  // ===== PRT Cycle Inputs =====
  const prtCycle = document.getElementById("prt-cycle");
  const prtYear = document.getElementById("prt-year");

  if (prtCycle && state._prtCycle) prtCycle.value = state._prtCycle;
  if (prtYear && state._prtYear) prtYear.value = state._prtYear;

  if (prtCycle) {
    prtCycle.addEventListener("change", () => {
      state._prtCycle = prtCycle.value;
      saveState(state);
    });
  }
  if (prtYear) {
    prtYear.addEventListener("change", () => {
      state._prtYear = prtYear.value;
      saveState(state);
    });
  }

  // ===== Progress Calculation =====
  const milestoneGroups = {
    "2p": ["2p-ground", "2p-sim", "2p-flight", "2p-pqs"],
    ac: ["ac-prereq", "ac-pqs", "ac-eval"],
    ip: ["ip-prereq", "ip-pqs", "ip-eval"],
    gmt: ["gmt"],
  };

  function getGroupCheckboxes(groupPrefix) {
    return document.querySelectorAll(
      `input[type="checkbox"][data-key^="${groupPrefix}"]`
    );
  }

  function calcProgress(groups) {
    let total = 0;
    let checked = 0;
    groups.forEach((g) => {
      const cbs = getGroupCheckboxes(g);
      cbs.forEach((cb) => {
        total++;
        if (cb.checked) checked++;
      });
    });
    return total === 0 ? 0 : Math.round((checked / total) * 100);
  }

  function updateProgressBar(id, pct) {
    const fill = document.getElementById(`prog-${id}`);
    const text = document.getElementById(`prog-text-${id}`);
    if (fill) fill.style.width = `${pct}%`;
    if (text) text.textContent = `${pct}%`;
  }

  function updateStatusDot(id, pct) {
    const dot = document.getElementById(`dot-${id}`);
    if (!dot) return;
    dot.className = "status-dot";
    if (pct === 0) dot.classList.add("not-started");
    else if (pct === 100) dot.classList.add("complete");
    else dot.classList.add("in-progress");
  }

  function updateSectionDot(id, groupPrefix) {
    const cbs = getGroupCheckboxes(groupPrefix);
    let total = 0;
    let checked = 0;
    cbs.forEach((cb) => {
      total++;
      if (cb.checked) checked++;
    });
    const pct = total === 0 ? 0 : Math.round((checked / total) * 100);
    updateStatusDot(id, pct);
  }

  function updateAllProgress() {
    // Milestone progress bars
    Object.entries(milestoneGroups).forEach(([id, groups]) => {
      const pct = calcProgress(groups);
      updateProgressBar(id, pct);
      updateStatusDot(id, pct);
    });

    // Section dots for non-progress-bar cards
    updateSectionDot("prt", "prt");
    updateSectionDot("medical", "med");
    updateSectionDot("admin", "admin");
    updateSectionDot("natops", "natops");
    updateSectionDot("flights", "curr");
    updateSectionDot("survival", "surv");

    // Overall readiness ring
    updateOverallReadiness();
  }

  function updateOverallReadiness() {
    let totalAll = 0;
    let checkedAll = 0;
    allCheckboxes.forEach((cb) => {
      totalAll++;
      if (cb.checked) checkedAll++;
    });
    const pct = totalAll === 0 ? 0 : Math.round((checkedAll / totalAll) * 100);
    const ring = document.getElementById("overall-ring");
    const ringText = document.getElementById("overall-pct");
    if (ring) ring.setAttribute("stroke-dasharray", `${pct}, 100`);
    if (ringText) ringText.textContent = `${pct}%`;
  }

  // ===== Reset =====
  const modalOverlay = document.getElementById("modal-reset");
  const btnReset = document.getElementById("btn-reset");
  const btnResetConfirm = document.getElementById("btn-reset-confirm");
  const btnResetCancel = document.getElementById("btn-reset-cancel");

  if (btnReset) {
    btnReset.addEventListener("click", () => {
      modalOverlay.classList.add("visible");
    });
  }

  if (btnResetCancel) {
    btnResetCancel.addEventListener("click", () => {
      modalOverlay.classList.remove("visible");
    });
  }

  if (btnResetConfirm) {
    btnResetConfirm.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      state = {};
      // Uncheck all checkboxes
      allCheckboxes.forEach((cb) => (cb.checked = false));
      // Clear all textareas
      allTextareas.forEach((ta) => (ta.value = ""));
      // Clear all date/number inputs
      allDateInputs.forEach((input) => (input.value = ""));
      // Reset PRT fields
      if (prtCycle) prtCycle.value = "spring";
      if (prtYear) prtYear.value = new Date().getFullYear();
      // Update UI
      updateAllProgress();
      modalOverlay.classList.remove("visible");
    });
  }

  // Close modal on overlay click
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove("visible");
    });
  }

  // ===== Init =====
  updateAllProgress();
})();
