/* SimpleIOP Mockup — Interactive behaviors */

document.addEventListener('DOMContentLoaded', () => {
  initHamburger();
  initWizard();
  initTabs();
  initPledge();
  initModals();
  initDarkPanelHover();
  initCountdown();
  initToggles();
});

/* Mobile hamburger menu */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.querySelector('.main-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => nav.classList.toggle('open'));
}

/* Wizard step advancement */
function initWizard() {
  const panels = document.querySelectorAll('.wizard-panel');
  if (!panels.length) return;

  let currentStep = 0;
  const totalSteps = panels.length;
  const dots = document.querySelectorAll('.wizard-dot');
  const labels = document.querySelectorAll('.wizard-step-label');

  function updateWizard() {
    panels.forEach((p, i) => p.classList.toggle('active', i === currentStep));
    dots.forEach((d, i) => {
      d.classList.remove('complete', 'current');
      if (i < currentStep) d.classList.add('complete');
      else if (i === currentStep) d.classList.add('current');
    });
    labels.forEach((l, i) => l.classList.toggle('active', i === currentStep));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.wizard-next').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < totalSteps - 1) {
        currentStep++;
        updateWizard();
      }
    });
  });

  document.querySelectorAll('.wizard-back').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        updateWizard();
      }
    });
  });

  updateWizard();
}

/* Tab switching */
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });
}

/* Pledge page interactions */
function initPledge() {
  const amountBtns = document.querySelectorAll('.amount-btn');
  const customInput = document.getElementById('custom-amount');
  const feeCheckbox = document.getElementById('fee-coverage');
  const totalEl = document.getElementById('pledge-total');
  const giveBtn = document.getElementById('give-now-btn');

  if (!totalEl) return;

  let baseAmount = 500;

  function recalculateTotal() {
    let total = baseAmount;
    if (feeCheckbox && feeCheckbox.checked) {
      total += Math.round(baseAmount * 0.025 * 100) / 100;
    }
    totalEl.textContent = '$' + total.toFixed(2);
    if (feeCheckbox) {
      const feeLabel = document.getElementById('fee-label');
      if (feeLabel) feeLabel.textContent = '(+$' + (baseAmount * 0.025).toFixed(2) + ')';
    }
  }

  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amountBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (btn.dataset.amount) {
        baseAmount = parseFloat(btn.dataset.amount);
        if (customInput) customInput.value = baseAmount;
      }
      recalculateTotal();
    });
  });

  if (customInput) {
    customInput.addEventListener('input', () => {
      baseAmount = parseFloat(customInput.value) || 0;
      amountBtns.forEach(b => b.classList.remove('selected'));
      recalculateTotal();
    });
  }

  if (feeCheckbox) feeCheckbox.addEventListener('change', recalculateTotal);

  if (giveBtn) {
    giveBtn.addEventListener('click', e => {
      e.preventDefault();
      const form = document.getElementById('pledge-form');
      const thankyou = document.getElementById('pledge-thankyou');
      const firstName = document.getElementById('pledge-first')?.value || 'Friend';
      if (form) form.classList.add('hidden');
      if (thankyou) {
        thankyou.classList.add('visible');
        const nameEl = document.getElementById('thankyou-name');
        const amtEl = document.getElementById('thankyou-amount');
        if (nameEl) nameEl.textContent = firstName;
        if (amtEl) amtEl.textContent = totalEl.textContent;
      }
    });
  }

  /* Payment tab toggle */
  document.querySelectorAll('.payment-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.payment-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  recalculateTotal();
}

/* Upsell modals */
function initModals() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;

  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  const addonContent = {
    scanner: {
      title: 'Mobile Scanner App',
      body: 'Log mailed pledge cards with your phone camera. $99 one-time add-on. Includes OCR recognition and automatic member matching.'
    },
    leadership: {
      title: 'Leadership Givers Group',
      body: 'Add a pre-campaign quiet phase template for your largest donors. Available on the Growth plan ($999/campaign). Anchors your campaign with early commitments.'
    },
    fullcolor: {
      title: 'Full-Color Printing',
      body: 'Upgrade to full-color letters for $0.45 more per piece. Studies show up to 35% higher response rates with color printing.'
    },
    digital: {
      title: 'Digital Bundle (Email + SMS)',
      body: 'Add email and SMS delivery for $149. Combined with print mail, see up to 28% higher response rates.'
    },
    upgrade: {
      title: 'Upgrade to Growth Plan',
      body: 'Unlock email + SMS channels, 5 donor groups, and weekly auto-reports for $999/campaign.'
    }
  };

  function openModal(addon) {
    const content = addonContent[addon];
    if (!content) return;
    if (modalTitle) modalTitle.textContent = content.title;
    if (modalBody) modalBody.textContent = content.body;
    overlay.classList.add('open');
  }

  document.querySelectorAll('.add-now-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal(btn.dataset.addon);
    });
  });

  document.querySelectorAll('[data-modal]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      openModal(el.dataset.modal);
    });
  });

  overlay.querySelector('.modal-close')?.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
}

/* Dark panel hover */
function initDarkPanelHover() {
  document.querySelectorAll('.dark-panel-item').forEach(item => {
    item.addEventListener('mouseenter', () => item.classList.add('hovered'));
    item.addEventListener('mouseleave', () => item.classList.remove('hovered'));
  });
}

/* Countdown timer */
function initCountdown() {
  document.querySelectorAll('[data-countdown]').forEach(el => {
    const deadline = new Date(el.dataset.countdown);
    function tick() {
      const now = new Date();
      const diff = deadline - now;
      if (diff <= 0) {
        el.textContent = 'Deadline passed';
        return;
      }
      const hrs = Math.floor(diff / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      el.textContent = hrs + ' hours ' + mins + ' minutes remaining';
      if (hrs < 24) el.classList.add('countdown');
    }
    tick();
    setInterval(tick, 60000);
  });
}

/* Toggle switches (visual only) */
function initToggles() {
  document.querySelectorAll('.toggle-switch').forEach(toggle => {
    toggle.addEventListener('click', () => toggle.classList.toggle('on'));
  });
}

/* Letter preview modal */
document.addEventListener('click', e => {
  const thumb = e.target.closest('.letter-thumb');
  if (!thumb) return;
  const overlay = document.getElementById('letter-modal');
  if (!overlay) return;
  const label = thumb.querySelector('.letter-thumb-label')?.textContent || 'Letter Preview';
  const title = overlay.querySelector('#letter-modal-title');
  if (title) title.textContent = label;
  overlay.classList.add('open');
});

document.getElementById('letter-modal')?.querySelector('.modal-close')?.addEventListener('click', function () {
  this.closest('.modal-overlay').classList.remove('open');
});
