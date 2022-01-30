
const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');

setInterval(() => {
    let time = new Date();
let c_sec = time.getSeconds();
let c_min = time.getMinutes();
let c_hour = time.getHours();

sec.style.transform=` rotate(${time_cal(60, c_sec)}deg)`;
min.style.transform=` rotate(${time_cal(60, c_min)}deg)`;
hour.style.transform=` rotate(${time_cal(12, c_hour)}deg)`;
    
}, 1000);
 


function time_cal(time,current){
    return(360*current)/ time;
}