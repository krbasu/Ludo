function MyButton(){
    let ran1 = Math.ceil(Math.random()*6);
    let ran2 = Math.ceil(Math.random()*6);
    console.log(`Ludo${ran1}`);
    document.getElementById('img1').src = `Ludo${ran1}.svg`;
    document.getElementById('img2').src = `Ludo${ran2}.svg`;
    if(`Ludo${ran1}.svg` == `Ludo${ran2}.svg`){
        document.getElementById('h3').innerText = 'You won The Game';
    }
}