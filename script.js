document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('nav');

  if (menu && nav) {
    menu.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  const params = new URLSearchParams(window.location.search);
  const courseMap = {
    mindset: 'Mindset Jijjiiruu',
    wealth: 'Financial Literacy & Wealth Creation',
    love: 'Kaartaa Jaalalaa',
    digital: 'Digital Marketing & Online Income',
    entrepreneurship: 'Entrepreneurship & Small Business',
    ai: 'AI, Productivity & Digital Work',
    leadership: 'Leadership & Teamwork',
    instructor: 'Trainer, Instructor & Mentor Development'
  };

  const tierMap = {
    basic: 'Basic',
    standard: 'Standard',
    premium: 'Premium',
    vip: 'VIP'
  };

  const courseSel = document.querySelector('select[name="course"]');
  const tierSel = document.querySelector('select[name="tier"]');

  if (courseSel && params.get('course')) {
    const selectedCourse = courseMap[params.get('course').toLowerCase()] || params.get('course');
    Array.from(courseSel.options).forEach((option) => {
      if (option.value === selectedCourse || option.text === selectedCourse) {
        courseSel.value = option.value || option.text;
      }
    });
  }

  if (tierSel && params.get('tier')) {
    const selectedTier = tierMap[params.get('tier').toLowerCase()] || params.get('tier');
    Array.from(tierSel.options).forEach((option) => {
      if (option.value === selectedTier || option.text === selectedTier) {
        tierSel.value = option.value || option.text;
      }
    });
  }

  document.querySelectorAll('[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = form.querySelector('.form-message');
      if (message) {
        message.innerHTML = '<span style="color:#175c2d">Galatoomi! Form kee demo keessatti fudhatameera. Backend/email integration dura connect godhi.</span>';
      }
      form.reset();
    });
  });

  const verifyForm = document.getElementById('verify-form');
  if (verifyForm) {
    verifyForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const id = new FormData(verifyForm).get('id') || '';
      const result = document.getElementById('verify-result');
      if (result) {
        result.innerHTML = '<div style="margin-top:14px;padding:14px;border-radius:8px;background:#eaf7ef;border:1px solid #a9d9b8;color:#175c2d"><b>Demo verification:</b> ' + String(id).replace(/</g, '&lt;') + '<br>Database integration hin connectamne. Backend keessatti Certificate ID lookup qopheessi.</div>';
      }
    });
  }
});
