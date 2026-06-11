// =============================================
// PronounceAI — Login Screen JS
// =============================================

function validateEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const group = document.getElementById('emailGroup');
  const errorEl = document.getElementById('emailError');

  if (input.value.length > 0 && !emailRegex.test(input.value)) {
    input.classList.add('error');
    errorEl.classList.add('visible');
  } else {
    input.classList.remove('error');
    errorEl.classList.remove('visible');
  }
}

function togglePass() {
  const passInput = document.getElementById('passInput');
  const eyeIcon = document.getElementById('eyeIcon');

  if (passInput.type === 'password') {
    passInput.type = 'text';
    eyeIcon.className = 'ti ti-eye-off';
  } else {
    passInput.type = 'password';
    eyeIcon.className = 'ti ti-eye';
  }
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value.trim();
  const pass = document.getElementById('passInput').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;

  // Validate email
  if (!email || !emailRegex.test(email)) {
    document.getElementById('emailInput').classList.add('error');
    document.getElementById('emailError').classList.add('visible');
    document.getElementById('emailInput').classList.add('shake');
    setTimeout(() => document.getElementById('emailInput').classList.remove('shake'), 400);
    valid = false;
  }

  // Validate password
  if (!pass) {
    const passInput = document.getElementById('passInput');
    passInput.style.borderColor = '#E24B4A';
    passInput.classList.add('shake');
    setTimeout(() => {
      passInput.style.borderColor = '';
      passInput.classList.remove('shake');
    }, 600);
    valid = false;
  }

  if (valid) {
    // Navigate to onboarding
    window.location.href = 'onboarding.html';
  }
}
