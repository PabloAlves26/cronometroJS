let sec = 00;
let min = 00;
let hr = 00;
let interval;

function start() {
    interval = setInterval(counter,1000);
};
function pause() {
    clearInterval(interval);
};
function stop() {
    clearInterval(interval);
    sec=00;
    min=00;
    document.getElementById('counter').innerText='00:00:00';

};
function counter(){
    sec++;
    if (sec == 60) {
        min++;
        sec = 00;
        if (min == 60) {
            min = 00;
            sec = 00;
            hr++;
        }
    }
    document.getElementById('counter').innerText=hr + ':' + min + ':' + sec;
}