// =============================================
// PronounceAI — Goal Selection Screen JS
// =============================================

function selectGoal(card) {
  // Deselect all
  document.querySelectorAll('#goalList .goal-card').forEach((c, i) => {
    c.classList.remove('selected');
    document.getElementById('radio' + i).classList.remove('checked');
  });

  // Select clicked card
  card.classList.add('selected');

  // Find index and mark radio
  const cards = Array.from(document.querySelectorAll('#goalList .goal-card'));
  const idx = cards.indexOf(card);
  document.getElementById('radio' + idx).classList.add('checked');
}
