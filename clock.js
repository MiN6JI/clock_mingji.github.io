const deg = 6; // setting up the value
const hr = document.querySelector('#hr'); // selecting div with id hr
const mn = document.querySelector('#mn'); // selecting div with id hr
const sc = document.querySelector('#sc'); // selecting div with id hr

setInterval(() => {

    let day = new Date(); //geting current date by seting up to a variable
    let hrs = day.getHours() * 30; //geting current date by seting up to a variable
    let min = day.getMinutes() * deg; //geting current date and time by seting up to a variable
    let sec = day.getSeconds() * deg; //geting current date and time by seting up to a variable
    
    hr.style.transform = `rotateZ(${(hrs)+(min/12)}deg)`;
    mn.style.transform = `rotateZ(${min}deg)`;
    sc.style.transform = `rotateZ(${sec}deg)`;

})

