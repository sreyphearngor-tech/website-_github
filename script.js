// Basic JS: fill year, simple language toggle
document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.getElementById('year').textContent = year;
  document.getElementById('year2').textContent = year;

  // mock facts animation (replace with real data from backend)
  const facts = { fact1: 1250, fact2: 987, fact3: 3120 };
  document.getElementById('fact1').textContent = facts.fact1;
  document.getElementById('fact2').textContent = facts.fact2;
  document.getElementById('fact3').textContent = facts.fact3;

  // Language toggle: show/hide Khmer or English blocks
  const toggle = document.getElementById('lang-toggle');
  toggle.addEventListener('click', () => {
    const kh = document.querySelectorAll('.kh');
    const en = document.querySelectorAll('.en');
    const showingKh = kh[0] && kh[0].style.display !== 'none' && kh[0].style.display !== '';
    if (showingKh) {
      // switch to English
      kh.forEach(n => n.style.display = 'none');
      en.forEach(n => n.style.display = '');
      toggle.textContent = 'ភាសា / EN';
    } else {
      // switch to Khmer
      kh.forEach(n => n.style.display = '');
      en.forEach(n => n.style.display = 'none');
      toggle.textContent = 'EN / ភាសា';
    }
  });

  // initialize to show both languages (user can pick)
  // show both by default — alternatively hide one
});
