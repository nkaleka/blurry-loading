const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
// console.log(loadText);
// console.log(loadText1);

let load = 0;

let interval = setInterval(blurring, 30);
//blurring function will run every 30 ms

function blurring() {
    load++;

    if(load > 99){
        clearInterval(interval);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    console.log(load);
}

// function scale (number, inMin, inMax, outMin, outMax) {
//     return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }

const scale =  (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin)
    + outMin;
}