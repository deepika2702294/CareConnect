// ===== DATA =====
const DOCTORS = {
  ds: { name: 'Dr. Deepika Sharma', spec: 'General Physician · Age 34 · 8 yrs exp', init: 'DS', avail: 'Aaj: 10 AM – 2 PM, 4 PM – 7 PM', avail2: 'Kal: 9 AM – 1 PM', status: 'available' },
  rm: { name: 'Dr. Rakesh Mehta', spec: 'Cardiologist · Age 39 · 12 yrs exp', init: 'RM', avail: 'Aaj 2–5 PM: UNAVAILABLE ⚠️', avail2: 'Aaj 6 PM – 9 PM: Available', status: 'partial' },
  ag: { name: 'Dr. Anita Gupta', spec: 'Gynaecologist · Age 32 · 6 yrs exp', init: 'AG', avail: 'Aaj: 9 AM – 1 PM, 5 PM – 8 PM', avail2: 'Kal: 10 AM – 2 PM', status: 'available' }
};

const TIMETABLES = {
  ds: {
    label: 'Dr. Deepika Sharma — 7 Din Ka Schedule',
    rows: [
      { time: '9–11 AM', slots: ['free','busy','free','free','busy','free','off'] },
      { time: '11–1 PM', slots: ['busy','free','busy','free','free','busy','off'] },
      { time: '4–7 PM',  slots: ['free','free','free','busy','free','free','off'] }
    ]
  },
  rm: {
    label: 'Dr. Rakesh Mehta — 7 Din Ka Schedule',
    rows: [
      { time: '10–12 PM', slots: ['free','free','busy','free','off','free','off'] },
      { time: '2–5 PM',   slots: ['busy','busy','free','busy','off','free','off'] },
      { time: '6–9 PM',   slots: ['free','free','free','free','off','busy','off'] }
    ]
  },
  ag: {
    label: 'Dr. Anita Gupta — 7 Din Ka Schedule',
    rows: [
      { time: '9–1 PM',  slots: ['free','busy','free','free','free','busy','off'] },
      { time: '5–8 PM',  slots: ['busy','free','free','busy','free','free','off'] }
    ]
  }
};

const REPORTS = [
  { name: 'Blood Test — CBC Panel', date: '12 March 2025', doctor: 'Dr. Sharma', badge: 'normal', badgeText: 'Normal', icon: '🩸',
    details: [['Hemoglobin','14.2 g/dL (Normal)'],['WBC Count','7,200 /μL (Normal)'],['Platelet Count','2,20,000 /μL (Normal)'],['Blood Sugar (Fasting)','92 mg/dL (Normal)'],['Doctor Note','Sab kuch theek hai, 6 mahine baad dobara test karwayen']],
    prescription: { suggestion: 'Roz subah khali pet 2 glass pani piyen. Namak aur cheeni ka sevan kam karein. Roz 30-40 minute ki sair zaroori hai. Zyada tel-masale wala khana avoid karein.', followup: '6 mahine baad dobara blood test karwayen', medicines: [['Iron Supplement (Ferrous Sulfate)','200mg','1-0-0 (Subah)','30 din'],['Vitamin B12','500mcg','0-0-1 (Raat)','60 din'],['Multivitamin','1 tablet','1-0-0 (Subah)','30 din']] } },
  { name: 'X-Ray Chest AP', date: '28 Jan 2025', doctor: 'Dr. Mehta', badge: 'review', badgeText: 'Review', icon: '🫁',
    details: [['Findings','Mild opacity left lower zone'],['Impression','Possible early infection'],['Recommendation','Antibiotics + follow-up in 2 weeks'],['Doctor Note','Ghabrayen nahi, treatment se theek ho jaayega']],
    prescription: { suggestion: 'Poori tarah aaram karein. Thande paani aur cold drinks bilkul band. Dhool-mitti wali jagah se door rahein. Garh doodh ya haldi wala doodh piyen raat ko. Zyada bhaag-daud na karein jab tak chest theek na ho.', followup: '2 hafte baad chest X-Ray dobara karwayen', medicines: [['Azithromycin','500mg','1-0-0 (Subah, khana ke baad)','5 din'],['Ambroxol Syrup','10ml','1-1-1 (Teen baar)','7 din'],['Paracetamol 650','650mg','Zaroorat par (bukhaar mein)','5 din'],['Vitamin C','500mg','0-1-0 (Dopahar)','15 din']] } },
  { name: 'ECG — 12 Lead', date: '5 Dec 2024', doctor: 'Dr. Gupta', badge: 'normal', badgeText: 'Normal', icon: '💓',
    details: [['Heart Rate','72 bpm (Normal)'],['Rhythm','Sinus Rhythm'],['PR Interval','160 ms (Normal)'],['QT Interval','380 ms (Normal)'],['Impression','Normal ECG']],
    prescription: { suggestion: 'Dil bilkul theek hai, ghabrayen nahi. Lekin BP ki niyamit jaanch karaate rahein. Roz halki kasrat karein. Zyada stress na lein, meditation helpful hai. Oily/fried khana, cigarette aur alcohol se door rahein.', followup: 'Agar seene mein dard ya sans lene mein takleef ho to turant dikhayein, varna 1 saal baad routine check-up', medicines: [['Aspirin (Low Dose)','75mg','1-0-0 (Subah, khana ke saath)','Ongoing (doctor ki salah se band karein)'],['Omega-3 Fish Oil','1000mg','0-1-0 (Dopahar)','3 mahine']] } },
  { name: 'Thyroid Profile T3/T4', date: '2 Nov 2024', doctor: 'Dr. Sharma', badge: 'new', badgeText: 'New', icon: '🔬',
    details: [['T3','1.2 ng/mL (Normal)'],['T4','8.4 μg/dL (Normal)'],['TSH','2.1 mIU/L (Normal)'],['Doctor Note','Thyroid bilkul normal hai']],
    prescription: { suggestion: 'Thyroid abhi normal hai. Iodine yukta namak use karein. Soya products zyada mat khayein. Stress management bahut zaroori hai thyroid ke liye. Subah exercise helpful rehti hai.', followup: '6 mahine baad Thyroid profile dobara test karwayen', medicines: [['Selenium Supplement','200mcg','1-0-0 (Subah)','60 din'],['Vitamin D3','60,000 IU','Hafte mein ek baar (Sunday)','8 hafte']] } }
];

const HISTORY = [
  { title: 'Hypertension (BP)', date: 'Ongoing since 2022', detail: 'Dr. Mehta · Amlodipine 5mg daily · Controlled · Regular monitoring jaari hai', type: 'ongoing' },
  { title: 'Typhoid Fever', date: 'June 2023', detail: 'Dr. Sharma · 14 din treatment · Ciprofloxacin course · Poori tarah theek ho gaye', type: 'recovered' },
  { title: 'Appendix Surgery (Laparoscopic)', date: 'March 2020', detail: 'City Hospital, Agra · Dr. R. Verma · Full recovery in 3 weeks · Koi complication nahi', type: 'recovered' },
  { title: '⚠️ Allergies', date: '', detail: 'Penicillin (antibiotic group) — SEVERE REACTION\nDust mites — Mild rhinitis\nDairy sensitivity (lactose intolerance)', type: 'allergy' }
];

const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

let currentUser = null;
let currentRole = 'patient';
let appointments = JSON.parse(localStorage.getItem('as_appts') || '[]');
let alerts = JSON.parse(localStorage.getItem('as_alerts') || '[{"type":"Appointment Cancel","msg":"Dr. Mehta aaj 2–5 PM appointment cancel hai (emergency surgery). Naya time: 6 PM onwards.","from":"Dr. Rakesh Mehta","time":"Aaj, 11:30 AM"}]');
let currentTT = 'ds';
let bookingSlot = {};

// ===== FLOW =====
setTimeout(() => {
  document.getElementById('splash').style.opacity = '0';
  document.getElementById('splash').style.transition = 'opacity 0.5s';
  setTimeout(() => { document.getElementById('splash').classList.add('hidden'); showLogin(); }, 500);
}, 2500);

function showLogin() {
  document.getElementById('splash').classList.add('hidden');
  document.getElementById('login-page').classList.remove('hidden');
}

function doLogin() {
  const name = document.getElementById('input-name').value.trim();
  const pid = document.getElementById('input-pid').value.trim();
  const role = document.getElementById('input-role').value;
  if (!name) { alert('Naam daalna zaroori hai'); return; }
  if (!pid) { alert('Patient ID daalna zaroori hai'); return; }
  currentUser = { name, pid, role };
  currentRole = role;
  document.getElementById('login-page').classList.add('hidden');
  document.getElementById('app').style.display = 'block';
  document.getElementById('topbar-username').textContent = name.split(' ')[0];
  document.getElementById('topbar-avatar').textContent = name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
  if (role === 'doctor') {
    document.getElementById('patient-view').classList.add('hidden');
    document.getElementById('doctor-view').classList.remove('hidden');
    renderDocAppts();
    renderDocTimetable();
  } else {
    renderReports();
    renderDoctors();
    showTimetable('ds');
    renderHistory();
    renderAppts();
  }
}

function logout() {
  currentUser = null;
  document.getElementById('app').style.display = 'none';
  document.getElementById('patient-view').classList.remove('hidden');
  document.getElementById('doctor-view').classList.add('hidden');
  showLogin();
}

// ===== TABS =====
function switchTab(el, panelId) {
  const tabs = el.parentElement.querySelectorAll('.tab-btn');
  tabs.forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const panels = ['tab-overview','tab-history','tab-appointments','tab-doc-appts','tab-doc-rx','tab-doc-schedule','tab-doc-alert'];
  panels.forEach(p => { const el2 = document.getElementById(p); if(el2) el2.classList.add('hidden'); });
  const panel = document.getElementById(panelId);
  if (panel) panel.classList.remove('hidden');
}

// ===== PRESCRIPTION DOCTOR FUNCTIONS =====
let medCount = 0;

function loadRxForm() {
  const val = document.getElementById('rx-report-select').value;
  const form = document.getElementById('rx-write-form');
  if (val === '') { form.classList.add('hidden'); return; }
  form.classList.remove('hidden');
  const savedRx = JSON.parse(localStorage.getItem('as_rx') || '{}');
  const rx = savedRx[val] || REPORTS[val].prescription;
  document.getElementById('rx-suggestion-input').value = rx ? rx.suggestion : '';
  document.getElementById('rx-followup-input').value = rx ? rx.followup : '';
  // load medicines
  document.getElementById('med-rows').innerHTML = '';
  medCount = 0;
  const meds = (rx && rx.medicines) ? rx.medicines : [['','','','']];
  meds.forEach(m => addMedRow(m));
}

function addMedRow(vals) {
  const id = medCount++;
  const v = vals || ['','','',''];
  const row = document.createElement('div');
  row.className = 'med-row';
  row.id = 'med-row-' + id;
  row.innerHTML = `
    <input class="med-input" placeholder="e.g. Paracetamol 500mg" value="${v[0]}" id="med-name-${id}">
    <input class="med-input" placeholder="500mg" value="${v[1]}" id="med-dose-${id}">
    <input class="med-input" placeholder="1-0-1" value="${v[2]}" id="med-freq-${id}">
    <input class="med-input" placeholder="5 din" value="${v[3]}" id="med-dur-${id}">
    <button class="del-btn" onclick="document.getElementById('med-row-${id}').remove()">×</button>`;
  document.getElementById('med-rows').appendChild(row);
}

function saveRx() {
  const idx = document.getElementById('rx-report-select').value;
  if (idx === '') { alert('Pehle report select karein'); return; }
  const suggestion = document.getElementById('rx-suggestion-input').value.trim();
  const followup = document.getElementById('rx-followup-input').value.trim();
  if (!suggestion) { alert('Suggestion likhna zaroori hai'); return; }
  const medicines = [];
  document.querySelectorAll('#med-rows .med-row').forEach(row => {
    const id = row.id.replace('med-row-','');
    const name = document.getElementById('med-name-'+id).value.trim();
    const dose = document.getElementById('med-dose-'+id).value.trim();
    const freq = document.getElementById('med-freq-'+id).value.trim();
    const dur  = document.getElementById('med-dur-'+id).value.trim();
    if (name) medicines.push([name, dose, freq, dur]);
  });
  const savedRx = JSON.parse(localStorage.getItem('as_rx') || '{}');
  savedRx[idx] = { suggestion, followup, medicines };
  localStorage.setItem('as_rx', JSON.stringify(savedRx));
  showToast('✅ Prescription save ho gayi! Patient ko dikhegi.');
}

// ===== RENDER REPORTS =====
function renderReports() {
  const cont = document.getElementById('reports-list');
  let html = '';
  if (alerts.length) {
    alerts.forEach(a => {
      html += `<div class="alert"><div class="alert-icon">⚠️</div><div class="alert-text"><strong>${a.from}</strong> — ${a.msg}<br><small style="opacity:.7">${a.time}</small></div></div>`;
    });
  }
  REPORTS.forEach((r, i) => {
    html += `<div class="report-item" onclick="showReport(${i})">
      <div class="report-icon" style="background:var(--${r.badge === 'normal' ? 'green' : r.badge === 'review' ? 'amber' : 'blue'}-light)">${r.icon}</div>
      <div class="report-info">
        <div class="report-name">${r.name}</div>
        <div class="report-meta">${r.date} · ${r.doctor}</div>
      </div>
      <span class="badge badge-${r.badge}">${r.badgeText}</span>
    </div>`;
  });
  cont.innerHTML = html;
  document.getElementById('stat-reports').textContent = REPORTS.length;
}

function showReport(i) {
  const r = REPORTS[i];
  document.getElementById('rm-title').textContent = r.name;
  document.getElementById('rm-sub').textContent = `${r.date} · ${r.doctor}`;
  let body = '';
  r.details.forEach(([k, v]) => {
    body += `<div class="report-detail-row"><span class="report-detail-label">${k}</span><span class="report-detail-value">${v}</span></div>`;
  });

  // Load saved prescription if any, else use default
  const savedRx = JSON.parse(localStorage.getItem('as_rx') || '{}');
  const rx = savedRx[i] || r.prescription;

  if (rx) {
    body += `<div class="rx-section">
      <div class="rx-header">
        <span class="rx-badge">Rx</span>
        <span class="rx-doctor">Dr. ki Prescription — ${r.doctor}</span>
      </div>
      <div class="rx-suggestion">
        <div class="rx-suggestion-label">💡 Doctor ki Suggestion</div>
        <div class="rx-suggestion-text">${rx.suggestion}</div>
      </div>`;

    if (rx.medicines && rx.medicines.length) {
      body += `<div style="margin-bottom:.5rem;font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px">💊 Prescribed Medicines</div>
      <table class="rx-medicine-table">
        <thead><tr><th>Medicine</th><th>Dose</th><th>Frequency</th><th>Duration</th></tr></thead>
        <tbody>`;
      rx.medicines.forEach(m => {
        body += `<tr><td><strong>${m[0]}</strong></td><td>${m[1]}</td><td>${m[2]}</td><td>${m[3]}</td></tr>`;
      });
      body += `</tbody></table>`;
    }

    if (rx.followup) {
      body += `<div class="rx-followup">📅 <strong>Follow-up:</strong>&nbsp;${rx.followup}</div>`;
    }
    body += `</div>`;
    body += `<button class="rx-print-btn" onclick="printRx(${i})">🖨️ Print / Download Prescription</button>`;
  } else {
    body += `<div class="rx-section"><div class="no-rx">⏳ Is report ke liye abhi prescription add nahi ki gayi. Doctor se milne ke baad yahan dikhai degi.</div></div>`;
  }

  document.getElementById('rm-body').innerHTML = body;
  document.getElementById('report-modal').classList.remove('hidden');
}

function printRx(i) {
  const r = REPORTS[i];
  const savedRx = JSON.parse(localStorage.getItem('as_rx') || '{}');
  const rx = savedRx[i] || r.prescription;
  let medsHtml = '';
  if (rx.medicines) {
    rx.medicines.forEach((m,idx) => {
      medsHtml += `<tr><td style="padding:6px 8px;border:1px solid #ccc">${idx+1}. ${m[0]}</td><td style="padding:6px 8px;border:1px solid #ccc">${m[1]}</td><td style="padding:6px 8px;border:1px solid #ccc">${m[2]}</td><td style="padding:6px 8px;border:1px solid #ccc">${m[3]}</td></tr>`;
    });
  }
  const win = window.open('','_blank');
  win.document.write(`<html><head><title>Prescription — ${r.name}</title>
  <style>body{font-family:Arial,sans-serif;padding:30px;max-width:700px;margin:0 auto}h1{color:#0d9e72;border-bottom:2px solid #0d9e72;padding-bottom:10px}.rx-sym{font-size:32px;color:#0d9e72;font-style:italic;font-weight:bold}table{width:100%;border-collapse:collapse;margin-top:10px}th{background:#e0f5ee;padding:8px;border:1px solid #ccc;text-align:left}@media print{button{display:none}}</style>
  </head><body>
  <div style="display:flex;justify-content:space-between;align-items:flex-start">
    <div><h1>CareConnect — केयर कनेक्ट</h1><p style="color:#555;font-size:13px">"Where every heartbeat matters, and every patient is family."</p></div>
    <div class="rx-sym">Rx</div>
  </div>
  <hr>
  <p><strong>Patient:</strong> ${currentUser ? currentUser.name : 'Patient'} &nbsp;&nbsp; <strong>ID:</strong> ${currentUser ? currentUser.pid : ''}</p>
  <p><strong>Report:</strong> ${r.name} &nbsp;&nbsp; <strong>Date:</strong> ${r.date} &nbsp;&nbsp; <strong>Doctor:</strong> ${r.doctor}</p>
  <hr>
  <h3>Doctor ki Suggestion:</h3>
  <p style="background:#f0fdf4;padding:12px;border-radius:6px;border-left:4px solid #0d9e72;line-height:1.7">${rx.suggestion}</p>
  <h3>Prescribed Medicines:</h3>
  <table><thead><tr><th>Medicine</th><th>Dose</th><th>Frequency</th><th>Duration</th></tr></thead><tbody>${medsHtml}</tbody></table>
  <p style="margin-top:16px;background:#e6f0fb;padding:10px;border-radius:6px"><strong>Follow-up:</strong> ${rx.followup}</p>
  <hr>
  <p style="font-size:11px;color:#999;text-align:center">Yeh prescription kewal CareConnect demo ke liye hai. Kisi bhi dawai lene se pehle qualified doctor se zaroor milein.</p>
  <button onclick="window.print()" style="margin-top:16px;padding:10px 24px;background:#0d9e72;color:white;border:none;border-radius:6px;cursor:pointer;font-size:14px">🖨️ Print Karein</button>
  </body></html>`);
  win.document.close();
}

// ===== RENDER DOCTORS =====
function renderDoctors() {
  const cont = document.getElementById('doctors-list');
  let html = '';
  Object.entries(DOCTORS).forEach(([key, d]) => {
    const dotClass = d.status === 'available' ? 'dot-green' : d.status === 'partial' ? 'dot-amber' : 'dot-red';
    html += `<div class="doc-card">
      <div class="doc-top">
        <div class="doc-avatar">${d.init}</div>
        <div><div class="doc-name">${d.name}</div><div class="doc-spec">${d.spec}</div></div>
      </div>
      <div class="avail-row"><div class="dot ${dotClass}"></div><div class="avail-text">${d.avail}</div></div>
      <div class="avail-row"><div class="dot dot-green"></div><div class="avail-text">${d.avail2}</div></div>
      <button class="btn-book" onclick="openBookFromDoc('${key}')">📅 Appointment Book Karein</button>
    </div>`;
  });
  cont.innerHTML = html;
}

function openBookFromDoc(key) {
  const d = DOCTORS[key];
  bookingSlot = { doctor: d.name, time: 'Apni preferred time likhein' };
  document.getElementById('bm-doc').value = d.name;
  document.getElementById('bm-time').value = '';
  document.getElementById('bm-time').removeAttribute('readonly');
  document.getElementById('bm-time').placeholder = 'e.g. Aaj 4 PM ya Mon 9 AM';
  if (currentUser) document.getElementById('bm-name').value = currentUser.name;
  document.getElementById('book-modal').classList.remove('hidden');
}

// ===== TIMETABLE =====
function showTimetable(key) {
  currentTT = key;
  ['ds','rm','ag'].forEach(k => {
    const btn = document.getElementById('tt-' + k);
    if (btn) {
      btn.style.background = k === key ? 'var(--green)' : 'white';
      btn.style.color = k === key ? 'white' : 'var(--muted)';
      btn.style.borderColor = k === key ? 'var(--green)' : 'var(--border)';
    }
  });
  const tt = TIMETABLES[key];
  document.getElementById('timetable-title').textContent = tt.label;
  let html = `<tr><th></th>${DAYS.map(d=>`<th>${d}</th>`).join('')}</tr>`;
  tt.rows.forEach((row, ri) => {
    html += `<tr><td class="time-col">${row.time}</td>`;
    row.slots.forEach((s, di) => {
      if (s === 'free') {
        html += `<td><button class="slot slot-free" onclick="openBookSlot('${key}','${DAYS[di]}','${row.time}')">Free</button></td>`;
      } else if (s === 'busy') {
        html += `<td><div class="slot slot-busy">Busy</div></td>`;
      } else {
        html += `<td><div class="slot slot-off">Off</div></td>`;
      }
    });
    html += `</tr>`;
  });
  document.getElementById('timetable-table').innerHTML = html;
}

function openBookSlot(docKey, day, time) {
  const d = DOCTORS[docKey];
  bookingSlot = { doctor: d.name, time: `${day} — ${time}` };
  document.getElementById('bm-doc').value = d.name;
  document.getElementById('bm-time').value = `${day} — ${time}`;
  document.getElementById('bm-time').setAttribute('readonly', true);
  if (currentUser) document.getElementById('bm-name').value = currentUser.name;
  document.getElementById('book-modal').classList.remove('hidden');
}

// ===== BOOKING =====
function confirmBooking() {
  const name = document.getElementById('bm-name').value.trim();
  const phone = document.getElementById('bm-phone').value.trim();
  const reason = document.getElementById('bm-reason').value.trim();
  const time = document.getElementById('bm-time').value.trim();
  if (!name) { alert('Naam daalna zaroori hai'); return; }
  if (phone && phone.length !== 10) { alert('Sahi phone number daalen (10 digits)'); return; }
  const appt = {
    id: Date.now(),
    doctor: bookingSlot.doctor,
    time: time || 'Time confirm hogi',
    name,
    phone,
    reason,
    status: 'upcoming',
    bookedAt: new Date().toLocaleString('hi-IN')
  };
  appointments.push(appt);
  localStorage.setItem('as_appts', JSON.stringify(appointments));
  closeModal('book-modal');
  renderAppts();
  document.getElementById('stat-appts').textContent = appointments.filter(a=>a.status==='upcoming').length;
  showToast('✅ Appointment book ho gayi! Doctor se confirmation milegi.');
  // Reset form
  document.getElementById('bm-name').value = '';
  document.getElementById('bm-phone').value = '';
  document.getElementById('bm-reason').value = '';
}

// ===== RENDER APPOINTMENTS =====
function renderAppts() {
  const cont = document.getElementById('appt-list');
  const mine = appointments.filter(a => !currentUser || a.name.toLowerCase().includes(currentUser.name.split(' ')[0].toLowerCase()) || true);
  if (!mine.length) {
    cont.innerHTML = '<p style="font-size:13px;color:var(--muted);text-align:center;padding:1rem">Koi appointment nahi. Doctor availability se book karein.</p>';
    return;
  }
  let html = '';
  mine.slice().reverse().forEach(a => {
    const dotC = a.status === 'upcoming' ? 'dot-green' : a.status === 'cancelled' ? 'dot-red' : 'dot-amber';
    const statusLabel = a.status === 'upcoming' ? 'Upcoming' : a.status === 'cancelled' ? 'Cancelled' : 'Completed';
    html += `<div class="appt-item">
      <div class="appt-status-dot dot ${dotC}"></div>
      <div class="appt-info">
        <div class="appt-doc">${a.doctor}</div>
        <div class="appt-time">${a.time}${a.reason ? ' · ' + a.reason : ''}</div>
        <div class="appt-time" style="margin-top:2px">Booked: ${a.bookedAt}</div>
      </div>
      <span class="badge badge-${a.status === 'upcoming' ? 'new' : a.status === 'cancelled' ? 'critical' : 'normal'}" style="margin-right:8px">${statusLabel}</span>
      ${a.status==='upcoming' ? `<button class="appt-cancel" onclick="cancelAppt(${a.id})">Cancel</button>` : ''}
    </div>`;
  });
  cont.innerHTML = html;
}

function cancelAppt(id) {
  if (!confirm('Kya aap sure hain? Appointment cancel kar dein?')) return;
  appointments = appointments.map(a => a.id === id ? {...a, status:'cancelled'} : a);
  localStorage.setItem('as_appts', JSON.stringify(appointments));
  renderAppts();
  document.getElementById('stat-appts').textContent = appointments.filter(a=>a.status==='upcoming').length;
  showToast('Appointment cancel ho gayi.');
}

// ===== HISTORY =====
function renderHistory() {
  const cont = document.getElementById('history-list');
  let html = '';
  HISTORY.forEach(h => {
    const bg = h.type === 'allergy' ? '#fff7ed' : h.type === 'ongoing' ? 'var(--blue-light)' : 'white';
    const border = h.type === 'allergy' ? '#fdba74' : h.type === 'ongoing' ? '#93c5fd' : 'var(--border)';
    html += `<div class="history-item" style="background:${bg};border-color:${border}">
      <div class="history-header">
        <span class="history-title">${h.title}</span>
        <span class="history-date">${h.date}</span>
      </div>
      <div class="history-detail" style="white-space:pre-line">${h.detail}</div>
    </div>`;
  });
  cont.innerHTML = html;
}

// ===== DOCTOR VIEW =====
function renderDocAppts() {
  const cont = document.getElementById('doc-appt-list');
  if (!appointments.length) {
    cont.innerHTML = '<p style="font-size:13px;color:var(--muted);text-align:center;padding:1rem">Abhi tak koi appointment nahi aayi.</p>';
    return;
  }
  let html = '';
  appointments.slice().reverse().forEach(a => {
    html += `<div class="appt-item">
      <div class="appt-status-dot dot ${a.status==='upcoming'?'dot-green':'dot-red'}"></div>
      <div class="appt-info">
        <div class="appt-doc">${a.name} ${a.phone ? '· 📞 '+a.phone : ''}</div>
        <div class="appt-time">${a.doctor} · ${a.time}</div>
        ${a.reason ? `<div class="appt-time">Shikayat: ${a.reason}</div>` : ''}
      </div>
      <span class="badge badge-${a.status==='upcoming'?'new':'critical'}">${a.status==='upcoming'?'Upcoming':'Cancelled'}</span>
    </div>`;
  });
  cont.innerHTML = html;
}

let docSchedule = JSON.parse(localStorage.getItem('as_doc_schedule') || JSON.stringify(TIMETABLES.ds.rows.map(r => ({...r, slots:[...r.slots]}))));

function renderDocTimetable() {
  const tt = TIMETABLES.ds;
  let html = `<tr><th></th>${DAYS.map(d=>`<th>${d}</th>`).join('')}</tr>`;
  docSchedule.forEach((row, ri) => {
    html += `<tr><td class="time-col">${row.time}</td>`;
    row.slots.forEach((s, di) => {
      const cls = s === 'free' ? 'slot-free' : s === 'busy' ? 'slot-busy' : 'slot-off';
      const label = s === 'free' ? 'Free' : s === 'busy' ? 'Busy' : 'Off';
      html += `<td><button class="slot ${cls}" onclick="toggleSlot(${ri},${di})">${label}</button></td>`;
    });
    html += `</tr>`;
  });
  document.getElementById('doctor-timetable').innerHTML = html;
}

function toggleSlot(ri, di) {
  const s = docSchedule[ri].slots[di];
  docSchedule[ri].slots[di] = s === 'free' ? 'busy' : s === 'busy' ? 'off' : 'free';
  renderDocTimetable();
}

function saveSchedule() {
  localStorage.setItem('as_doc_schedule', JSON.stringify(docSchedule));
  showToast('✅ Schedule save ho gaya!');
}

function sendAlert() {
  const type = document.getElementById('alert-type').value;
  const msg = document.getElementById('alert-msg').value.trim();
  if (!msg) { alert('Message daalna zaroori hai'); return; }
  const alert2 = { type, msg, from: currentUser ? currentUser.name : 'Doctor', time: 'Abhi' };
  alerts.unshift(alert2);
  localStorage.setItem('as_alerts', JSON.stringify(alerts));
  document.getElementById('alert-msg').value = '';
  showToast('✅ Alert patients ko bhej diya gaya!');
}

// ===== UTILS =====
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'success-toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}