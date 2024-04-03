


const scrollInit = () => {
    checkBoxes();
    checkMySkill()
};

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
       const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }

    });
    
};

const mySkillbox = document.querySelectorAll('.boxEl')
window.addEventListener('scroll', checkMySkill);

function checkMySkill() {
    const triggerBottom = window.innerHeight / 5 * 4;

    mySkillbox.forEach((box) => {
       const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('showBoxEl');
        } else {
            box.classList.remove('showBoxEl');
        }

    });
    
};
export default scrollInit;