// =============================================
// PronounceAI — AI Avatar Screen JS
// =============================================

const DEMO_RESPONSES = [
  {
    user: "She sells seashells by the seashore.",
    feedback: "Great attempt! Focus on 'seashells' — stress the FIRST syllable: SEA-shells, not sea-SHELLS. The 'sh' sounds are perfect! Try again."
  },
  {
    user: "The sixth sick sheik's sixth sheep's sick.",
    feedback: "Good effort! 'Sixth' — place your tongue between your teeth for the 'th': six-TH. You're getting there!"
  },
  {
    user: "How much wood would a woodchuck chuck?",
    feedback: "Excellent! Your 'w' sounds are very clear. Slightly elongate 'would' — think of it as 'w-oould'. Nearly perfect!"
  },
  {
    user: "Peter Piper picked a peck of pickled peppers.",
    feedback: "Very good! The 'p' sounds are crisp. Try to keep the rhythm even: PE-ter PI-per PICKED a PECK. Well done!"
  }
];

let responseIndex = 0;
let isRecording = false;
let recordTimer = null;

const sentences = [
  '"She sells seashells by the seashore."',
  '"The sixth sick sheik\'s sixth sheep\'s sick."',
  '"How much wood would a woodchuck chuck?"',
  '"Peter Piper picked a peck of pickled peppers."'
];

function startRecording() {
  if (isRecording) return;
  isRecording = true;

  const micBtn = document.getElementById('micBtn');
  const holdLabel = document.getElementById('holdLabel');
  const statusText = document.getElementById('statusText');
  const avatarRing = document.getElementById('avatarRing');
  const statusDot = document.querySelector('.status-dot');

  // Update UI
  micBtn.classList.add('recording');
  micBtn.querySelector('i').className = 'ti ti-microphone';
  holdLabel.textContent = 'Recording...';
  statusText.textContent = 'Listening...';
  avatarRing.classList.add('listening');
  statusDot.classList.add('active');

  // Animate waveform bars
  document.querySelectorAll('.wave-bar').forEach(bar => {
    bar.classList.add('active');
  });

  // Hide old feedback
  document.getElementById('feedbackCard').style.display = 'none';
  document.getElementById('userBubble').style.display = 'none';
}

function stopRecording() {
  if (!isRecording) return;
  isRecording = false;

  const micBtn = document.getElementById('micBtn');
  const holdLabel = document.getElementById('holdLabel');
  const statusText = document.getElementById('statusText');
  const avatarRing = document.getElementById('avatarRing');
  const statusDot = document.querySelector('.status-dot');

  // Reset mic button
  micBtn.classList.remove('recording');
  holdLabel.textContent = 'Processing...';

  // Stop waveform
  document.querySelectorAll('.wave-bar').forEach(bar => {
    bar.classList.remove('active');
  });

  // Simulate processing delay
  setTimeout(() => {
    showUserBubble();
    statusText.textContent = 'Thinking...';
  }, 400);

  setTimeout(() => {
    showFeedback();
    statusText.textContent = 'Ready';
    holdLabel.textContent = 'Hold to speak';
    avatarRing.classList.remove('listening');
    statusDot.classList.remove('active');
  }, 1200);
}

function showUserBubble() {
  const resp = DEMO_RESPONSES[responseIndex % DEMO_RESPONSES.length];
  const userBubble = document.getElementById('userBubble');
  const userText = document.getElementById('userText');

  userText.textContent = resp.user;
  userBubble.style.display = 'flex';

  scrollChat();
}

function showFeedback() {
  const resp = DEMO_RESPONSES[responseIndex % DEMO_RESPONSES.length];
  const feedbackCard = document.getElementById('feedbackCard');
  const feedbackText = document.getElementById('feedbackText');

  feedbackText.textContent = resp.feedback;
  feedbackCard.style.display = 'block';

  responseIndex++;
  scrollChat();

  // Update next AI sentence
  setTimeout(() => {
    updateNextSentence();
  }, 2000);
}

function updateNextSentence() {
  const chatArea = document.getElementById('chatArea');
  const nextIdx = responseIndex % sentences.length;

  const newBubble = document.createElement('div');
  newBubble.className = 'bubble-wrap left';
  newBubble.innerHTML = `<div class="chat-bubble ai-bubble">Now try: <strong>${sentences[nextIdx]}</strong></div>`;
  chatArea.appendChild(newBubble);

  scrollChat();
}

function retryPractice() {
  document.getElementById('feedbackCard').style.display = 'none';
  document.getElementById('userBubble').style.display = 'none';

  const statusText = document.getElementById('statusText');
  statusText.textContent = 'Ready';
}

function scrollChat() {
  const chatArea = document.getElementById('chatArea');
  chatArea.scrollTop = chatArea.scrollHeight;
}
