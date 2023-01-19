


const scrollInit = () => {
    checkBoxes();
    checkMySkill()
};

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    // console.log(window.innerHeight / 5 * 4);
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
        // console.log(box.getBoundingClientRect().top);
       const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            // console.log("show");
            box.classList.add('show');
        } else {
            // console.log("hide");
            box.classList.remove('show');
        }

    });
    
};

const mySkillbox = document.querySelectorAll('.boxEl')
window.addEventListener('scroll', checkMySkill);

function checkMySkill() {
    // console.log(window.innerHeight / 5 * 4);
    const triggerBottom = window.innerHeight / 5 * 4;

    mySkillbox.forEach((box) => {
        // console.log(box.getBoundingClientRect().top);
       const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            // console.log("show");
            box.classList.add('showBoxEl');
        } else {
            // console.log("hide");
            box.classList.remove('showBoxEl');
        }

    });
    
};




export default scrollInit;