let button = document.getElementsByClassName('main-button')[0]
let scoreIH = document.getElementsByClassName('score')[0]
let audio = new Audio('sound/song.mp3')
let button_img = document.getElementsByClassName('button-img')[0]

let score = 0
let isBanned = "false"
let started = false
let cps = 0
let clicks = 0

button.addEventListener('click', (event) => {
    if(localStorage.getItem("ban")){
        isBanned = localStorage.getItem("ban")
    }
    setTimeout(()=>{
        cps = clicks
        clicks = 0
        console.log(cps)
        if(cps>= 10){
            localStorage.setItem("ban", "true")
        }
    },1000)
    if(isBanned == "false"){
        if(localStorage.getItem('scoresv')){
            score = parseInt(localStorage.getItem('scoresv'))
        }
    
        audio.play()
        score += 1
        clicks += 1
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
    else{
        scoreIH.innerHTML = `You have get banned`
    }
    
})
