
const wordbank = ['whitemane', 'grobbulus', 'anathema', 'rattlegore', 'atiesh', 'bigglesworth', 'kirtonos', 'thalnos', 'benediction', 'arugal', 'loatheb', 'thrall', 'hakkar', 'garrosh', 'mannoroth', 'alexstrasza', 'antonidas', 'blackhand', 'carine', 'deathwing', 'galakrond', 'guldan', 'kalecgos', 'magtheridon', 'medivh', 'onyxia', 'arthas', 'malfurion', 'malygos', 'ysera', 'illidan'];
var wins= 0;
var guesses = 10;
var correctlet = 0;
var rightused = [];
var wrongused = [];
const winnum = document.querySelector('#winnum');
const word = document.querySelector('#word');
const guenum = document.querySelector('#guenum');
const gue = document.querySelector('#gue');
const corr = document.querySelector('#corr');

var answer = wordbank[Math.floor(Math.random() * wordbank.length)];
console.log(answer);
var emptystr = [];
        
for(var i = 0; i < answer.length; i++){
    emptystr[i] = "_ ";
}
        
winnum.innerText = wins.toString();
word.innerText = emptystr;
guenum.innerText = guesses.toString();

const play = function(event) {
   let keycode = event.keyCode;
   let keychar = String.fromCharCode(keycode);
   keychar = keychar.toLowerCase();
   console.log(answer.indexOf(keychar));
   if(answer.indexOf(keychar) > -1 && rightused.indexOf(keychar) == -1){
       rightused.push(keychar);
       console.log(rightused);
       //emptystr[answer.indexOf(keychar)] = keychar;
       for(let i = 0; i < answer.length; i++){
           if(answer[i] == keychar){
               emptystr[i] = keychar;
               correctlet++;
           }
       }
       word.innerText = emptystr;
       console.log('AAA' + emptystr);
       checkwin();
   }
   else if(wrongused.indexOf(keychar) == -1 && emptystr.indexOf(keychar) == -1){
       wrongused.push(keychar);
       console.log(wrongused);
       guesses--;
       guenum.innerText = guesses.toString();
       gue.innerText = wrongused.toString();
       checkloss();

   }
}

const checkwin = function() {
    console.log('cl' + correctlet);
    if(correctlet == answer.length){
        corr.innerText = answer;
        picsrc = 'assets/images/'.concat(answer.concat('.jpg'));
        document.getElementById('picture').src = picsrc;
        resetwin();
    }
}

const checkloss = function() {
    if(guesses == 0){
        resetloss();
    }
}

const resetloss = function() {
    corr.innerText = answer;
    picsrc = 'assets/images/'.concat(answer.concat('.jpg'));
    document.getElementById('picture').src = picsrc;
    
    wins= 0;
    guesses = 10;
    rightused = [];
    wrongused = [];
    correctlet = 0;

    winnum.innerText = wins.toString();
    word.innerText = emptystr;
    guenum.innerText = guesses.toString();
    gue.innerText = wrongused.toString();

    answer = wordbank[Math.floor(Math.random() * wordbank.length)];
    console.log(answer);
    emptystr = [];
        
    for(var i = 0; i < answer.length; i++){
        emptystr[i] = "_ ";
    }
    word.innerText = emptystr;
}
const resetwin = function() {
    wins++;
    guesses = 10;
    rightused = [];
    wrongused = [];
    correctlet = 0;

    winnum.innerText = wins.toString();
    word.innerText = emptystr;
    guenum.innerText = guesses.toString();
    gue.innerText = wrongused.toString();

    answer = wordbank[Math.floor(Math.random() * wordbank.length)];
    console.log(answer);
    emptystr = [];
        
    for(var i = 0; i < answer.length; i++){
        emptystr[i] = "_ ";
    }
    word.innerText = emptystr;
}

document.addEventListener("keypress", play);
