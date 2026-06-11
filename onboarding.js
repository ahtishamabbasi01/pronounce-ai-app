// =============================================
// PronounceAI — Onboarding Screen JS
// =============================================

function toggleChip(chip) {
  chip.classList.toggle('selected');
}

function selectLevel(card) {
  // Deselect all
  document.querySelectorAll('#levelGrid .level-card').forEach(c => {
    c.classList.remove('selected');
  });
  // Select clicked
  card.classList.add('selected');
}
