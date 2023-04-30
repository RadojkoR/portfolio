
const typewriter = {};

export default typewriter.typeInit = () => {
    typewriter.loop();
};


typewriter.textDisplay = document.querySelector('.animatedTxt');
typewriter.phrases = ['I am a Frontend Web Developer. ', 'I love to code. '];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
typewriter.isEnd = false;  

typewriter.loop = () => {
    typewriter.isEnd = false;  
    typewriter.textDisplay.innerHTML = currentPhrase.join('');
    if (i < typewriter.phrases.length) {
        
        if (!isDeleting && j <= typewriter.phrases[i].length) {
            currentPhrase.push(typewriter.phrases[i][j]);
            j++;
        }

        if (isDeleting && j <= typewriter.phrases[i].length) {
            currentPhrase.pop(typewriter.phrases[i][j] );
            j--;
            
        }

        if (j == typewriter.phrases[i].length) { 
                 typewriter.isEnd = true;  
                 isDeleting = true;
        };

        if (isDeleting && j === 1) {
            currentPhrase = ['I'];
            isDeleting = false;
            i++;
            if (i == typewriter.phrases.length) {
                i = 0;
            }
        }
    }
    typewriter.spedUp = Math.random() * (80 -50) + 10;
    typewriter.normalSpeed = 100;
    typewriter.time = typewriter.isEnd ? 2500 : isDeleting ? typewriter.spedUp : typewriter.normalSpeed;
    setTimeout(typewriter.loop, typewriter.time);
};
