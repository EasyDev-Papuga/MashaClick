let button = document.getElementsByClassName('main-button')[0]
let scoreIH = document.getElementsByClassName('score')[0]
let audio = new Audio('sound/song.mp3')
let button_img = document.getElementsByClassName('button-img')[0]

let score = 0

function delay(f) {

  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, 200);
  };

}

const onClick = () => {
    if(localStorage.getItem('scoresv')){
        score = parseInt(localStorage.getItem('scoresv'))
    }

    audio.play()
    score+=1
    scoreIH.innerHTML = `Score: ${score}`

    localStorage.setItem('scoresv', score)

    button_img.style.scale = 0.1
    setTimeout(()=>{
        button_img.style.scale = 0.2
    }, 50)
    setTimeout(()=>{
        button_img.style.scale = 0.3
    }, 100)
    setTimeout(()=>{
        button_img.style.scale = 0.4
    }, 150)
    setTimeout(()=>{
        button_img.style.scale = 0.5
    }, 200)
}

button.addEventListener('click', delay(onClick))
