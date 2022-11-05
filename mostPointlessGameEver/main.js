let i = 0

console.log('█▀█ █▀█ █ █▄░█ ▀█▀ █░░ █▀▀ █▀ █▀   █▀▀ ▄▀█ █▀▄▀█ █▀▀\n█▀▀ █▄█ █ █░▀█ ░█░ █▄▄ ██▄ ▄█ ▄█   █▄█ █▀█ █░▀░█ ██▄\n')

document.getElementById("text").innerHTML = i;
function numbers(){
    console.log('You have clicked a button')
    i++;
    document.getElementById("text").innerHTML = i;

    if(i >= 5){
        window.open('https://www.google.com/', '_self');
    }
}






