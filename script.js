const questions = [
  {
    number: 1,
    questionContent: 'Który żart jest najśmieszniejszy',
    anwsers: [
      'Wczoraj śmialiśmy się z dziadkiem do utraty tchu   -Dziadek wygrał.',
      'Co robi skejter w toalecie: szaleje na desce',
      'Co robi dzik w zamku: Penetruje lochy',
      'Jak się nazywa człowiek który straszy dynie? -BuDyń ',
    ],
    correctAnswear: 0,
  },
  {
    number: 2,
    questionContent: 'Który żart jest najsuchszy',
    anwsers: [
      'Co robi lekarz na polu minowym -Witaminy',
      'Jak nazywa się osoba, która łowi mak? -Makłowicz',
      'Jak informatyk chroni się przed koronawirusem -Antywirusem',
      'Jak wita się mleko -Mlekovita',
    ],
    correctAnswear: 2,
  },
  {
    number: 3,
    questionContent: 'Który żart jest najbardziej zły',
    anwsers: [
      'Co to są kondolencje? -są to gratulacje, które się składa na pogrzebie',
      'Co jest małe czerwone i puka w szybkę? -Dziecko w piekarniku',
      'Kto nigdy nie uczy się na swoich błędach? -Saper',
      'Co mówi kat do skazańca pod szubienicą? -Głowa do góry',
    ],
    correctAnswear: 1,
  },
  {
    number: 4,
    questionContent: 'Który żart jest najgorszy',
    anwsers: [
      'Co ma wspólnego pokój dziecięcy z Bolesławem Chrobrym? -I tu dziecko mieszka i tu dziecko Mieszka',
      'Jak nazywa się wóz, w którym jeździ radio? -Radiowóz',
      'Jak nazywa się kot, który leci? -kotlecik',
      'Jak piją matematycy? -Na potęge',
    ],
    correctAnswear: 1,
  },
];
var roundNumber = 0;
var quizPoints = 0;
var i = 0;
const color = 'white';
const markedColor = 'rgb(195, 218, 231)';

const marked = [undefined, undefined, undefined, undefined];

const startButton = document
  .getElementById('btn-start')
  .addEventListener('click', startQuiz);

const checkAnswers = document
  .getElementById('check-btn')
  .addEventListener('click', showAnwsers);

const restart = document
  .querySelector('.restart-button')
  .addEventListener('click', restartQuiz);

function startQuiz() {
  const beginScreen = document.getElementById('card');
  beginScreen.style.display = 'none';
  globalThis.beginScreen;
  const scores = document.querySelector('.game-scores');
  scores.style.display = 'none';
  console.log(marked);

  if (roundNumber == 0) {
    createQuestionBox();
  } else {
    document.querySelector('.container-question').style.display = 'flex';
    i = 0;
  }
  singQuestion();
  chooseAnswear();
  for (j = 0; j <= 3; j++) {
    marked[i] = undefined;
    boxesResults[i].style.backgroundColor = color;
  }
  console.log(marked);

  endBtn.addEventListener('click', showScore);
  nextBtn.addEventListener('click', nextQuestion);
  backBtn.addEventListener('click', questionBack);
  answearBox.addEventListener('click', chooseAnswear);
  answearBox1.addEventListener('click', chooseAnswear);
  answearBox2.addEventListener('click', chooseAnswear);
  answearBox3.addEventListener('click', chooseAnswear);
}

function createQuestionBox() {
  questionNumber = document.createElement('h1');
  questionContent = document.createElement('p');
  answearsContainer = document.createElement('div');
  answearBoxes = document.createElement('div');
  answearBox = document.createElement('button');
  answearBox1 = document.createElement('button');
  answearBox2 = document.createElement('button');
  answearBox3 = document.createElement('button');
  backBtn = document.createElement('button');
  nextBtn = document.createElement('button');
  buttons = document.createElement('div');
  endBtn = document.createElement('button');
  card = document.getElementById('container');
  boxesResults = [answearBox, answearBox1, answearBox2, answearBox3];
  backBtn.style.display = 'none';

  questionNumber.className = 'Number';
  questionContent.className = 'Content';
  answearsContainer.className = 'container-question';
  answearBoxes.className = 'boxes';
  answearBox.className = 'box';
  answearBox1.className = 'box';
  answearBox2.className = 'box';
  answearBox3.className = 'box';
  buttons.className = 'nav-buttons';
  endBtn.className = 'end-button';
  endBtn.style.display = 'none';

  answearsContainer.appendChild(questionNumber);
  answearsContainer.appendChild(questionContent);
  card.appendChild(answearsContainer);
  answearsContainer.appendChild(answearBoxes);
  answearBoxes.appendChild(answearBox);
  answearBoxes.appendChild(answearBox1);
  answearBoxes.appendChild(answearBox2);
  answearBoxes.appendChild(answearBox3);
  answearsContainer.appendChild(buttons);
  buttons.appendChild(backBtn);
  buttons.appendChild(nextBtn);
  answearsContainer.appendChild(endBtn);
}

function nextQuestion() {
  if (i < 3 && i >= 0) {
    i += 1;

    singQuestion();
    switchButtons();
    targetColors();
  } else {
    alert('Nie ma więcej pytań');
  }
  targetColors();
}

function questionBack() {
  if (i <= 3 && i > 0) {
    i -= 1;
    singQuestion();
    switchButtons();
    targetColors();
  } else {
    alert('Nie ma wcześniejszego pytania');
  }
}
function switchButtons() {
  if (i == 0) {
    backBtn.style.display = 'none';
  } else {
    backBtn.style.display = 'block';
  }

  if (i == 3) {
    endBtn.style.display = 'block';
    nextBtn.style.display = 'none';
  } else {
    endBtn.style.display = 'none';
    nextBtn.style.display = 'block';
  }
}
function singQuestion() {
  questionNumber.textContent = 'Pytanie ' + questions[i].number;
  questionContent.textContent = questions[i].questionContent;
  answearBox.textContent = questions[i].anwsers[0];
  answearBox1.textContent = questions[i].anwsers[1];
  answearBox2.textContent = questions[i].anwsers[2];
  answearBox3.textContent = questions[i].anwsers[3];
  nextBtn.textContent = 'Następne';
  backBtn.textContent = 'Poprzednie';
  endBtn.textContent = 'Koniec Quizu';
}

function chooseAnswear() {
  answearBox.style.backgroundColor = color;
  answearBox1.style.backgroundColor = color;
  answearBox2.style.backgroundColor = color;
  answearBox3.style.backgroundColor = color;
  var boxNumber = event.target;
  boxNumber.style.backgroundColor = markedColor;
  markedAnswers();
}
function markedAnswers() {
  if (answearBox.style.backgroundColor == markedColor) {
    marked[i] = 0;
    answearBox.style.backgroundColor = markedColor;
  } else if (answearBox1.style.backgroundColor == markedColor) {
    marked[i] = 1;
  } else if (answearBox2.style.backgroundColor == markedColor) {
    marked[i] = 2;
  } else if (answearBox3.style.backgroundColor == markedColor) {
    marked[i] = 3;
  }
}

function targetColors() {
  if (marked[i] == 0) {
    answearBox.style.backgroundColor = markedColor;
    answearBox1.style.backgroundColor = color;
    answearBox2.style.backgroundColor = color;
    answearBox3.style.backgroundColor = color;
  } else if (marked[i] == 1) {
    answearBox.style.backgroundColor = color;
    answearBox1.style.backgroundColor = markedColor;
    answearBox2.style.backgroundColor = color;
    answearBox3.style.backgroundColor = color;
  } else if (marked[i] == 2) {
    answearBox.style.backgroundColor = color;
    answearBox1.style.backgroundColor = color;
    answearBox2.style.backgroundColor = markedColor;
    answearBox3.style.backgroundColor = color;
  } else if (marked[i] == 3) {
    answearBox.style.backgroundColor = color;
    answearBox1.style.backgroundColor = color;
    answearBox2.style.backgroundColor = color;
    answearBox3.style.backgroundColor = markedColor;
  } else if (marked[i] == undefined && i >= 1) {
    answearBox.style.backgroundColor = color;
    answearBox1.style.backgroundColor = color;
    answearBox2.style.backgroundColor = color;
    answearBox3.style.backgroundColor = color;
  }
}

function showScore() {
  endBtn.style.display = 'none';
  nextBtn.style.display = 'flex';
  backBtn.style.display = 'none';
  answearsContainer.style.display = 'none';

  document.getElementById('score-screen').style.display = 'flex';
  for (j = 0; j <= questions.length - 1; j++) {
    if (questions[j].correctAnswear == marked[j]) {
      quizPoints += 1;
    }
  }
  const quizResult = (document.getElementById('quiz-score').textContent =
    (quizPoints / questions.length) * 100 + '%');
}
function showAnwsers() {
  document.getElementById('score-screen').style.display = 'none';
  document.querySelector('.correct-anwsers').style.display = 'flex';
}

function restartQuiz() {
  document.querySelector('.correct-anwsers').style.display = 'none';
  document.querySelector('.card').style.display = 'flex';
  document.querySelector('.game-scores').style.display = 'none';
  quizPoints = 0;
  roundNumber += 1;
  for (j = 0; j <= 3; j++) {
    marked[i] = undefined;
    boxesResults[i].style.backgroundColor = color;
  }
}
