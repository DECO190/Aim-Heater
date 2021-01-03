function tamEasy(size) {
    let aim = document.getElementById('aim')

    var x = window.innerWidth;
    var y = window.innerHeight;
   
    let y_random =  (Math.floor(Math.random() * y)) 
    let x_random =  (Math.floor(Math.random() * x)) 

    if (y_random >= size) {
        aim.style.top = `${y_random - size}px`
    } else if ((y_random + size) <= y) {
        aim.style.top = `${y_random + size}px`
    } else {
        aim.style.top = `${y_random}px`
    }

    if (x_random >= size) {
        aim.style.left = `${x_random - size}px`
    } else if ((x_random + size) <= x) {
        aim.style.left = `${x_random + size}px`
    } else {
        aim.style.left = `${x_random}px`
    }
   
    acrescentar()

}

function easy(train, color = 'black', size) {
    let aim = document.getElementById('aim')
    aim.style.width = `${size}px`
    aim.style.height = `${size}px`
    aim.style.backgroundColor = color
    let a = setInterval(() => {
        let time = document.getElementById('time')
        let clicks = Number(document.getElementById('clicks').textContent)
        aim.style.display = 'block'
        time.textContent = Number(time.textContent) + 1
        
        if (time.textContent == `${train}`) {
            let game_container = document.getElementById('game-container')
            game_container.style.display = 'none'
            let result = document.getElementById('result')
            result.style.display = 'flex'

            let one = document.getElementById('1')
            let h1 = document.getElementById('result-data')
            let two = document.getElementById('2')

            one.textContent = 'Você fez uma média de'
            h1.textContent = `${( clicks / train).toFixed(2)}`
            two.textContent = 'alvos por segundo!'

            clearInterval(a)
        }
    }, 1000)
    
}

function main() {

    let aim = document.getElementById('aim')

    let dificult_easy = document.getElementById('easy_mode')
    let dificult_hard = document.getElementById('hard_morde')
    
    
    let color = document.getElementById('color').value
    let size;

    if (document.getElementById('small').checked) {
        size = 50
    } else if (document.getElementById('medium').checked){
        size = 100
    } else if (document.getElementById('big').checked){
        size = 150
    }

    if (dificult_easy.checked) {
        let train = document.getElementById('time-train').value

        if ( train != "") {
            aim.onclick = function() {tamEasy(size)}
            easy(train, color, size)
        } else {
            window.alert('Campos incompletos!')
            return
        }

    }


    if (dificult_hard.checked) {
        let time = document.getElementById('time-target').value
        let quant = document.getElementById('quant-target').value
        console.log(time)
        if (time != "", quant != "") {
            hard(time, color, size, quant)
        } else {
            window.alert('Campos incompletos!')
            return
        }
    }

    let game_container = document.getElementById('game-container')
    game_container.style.display = 'flex'

    let menu_container = document.getElementById('menu-container')
    menu_container.style.display = 'none'

    let side_bar = document.getElementById('sideBar')
    side_bar.style.display = 'none'

    suprise()
}


function acrescentar() {
    let clicks = document.getElementById('clicks')
    clicks.textContent = Number(clicks.textContent) + 1
}

function hard(second, color = 'black', size, quant) {
    let elem_quant = document.getElementById('quant')
    elem_quant.textContent = quant
    let time = document.getElementById('time')
    let c = setInterval(() => {
        let span = document.getElementById('timer')
        span.textContent = Number(span.textContent) + 1
        
        if (time.textContent == `${quant}`) {
            clearInterval(c)
        }
        
    }, 1000)
    let aim = document.getElementById('aim')
    aim.style.width = `${size}px`
    aim.style.height = `${size}px`
    aim.style.backgroundColor = color
    let a = setInterval(() => {
        let st = document.getElementById('status')
        
        let clicks = Number(document.getElementById('clicks').textContent)
        aim.style.display = 'block'
        
        
        if (st.textContent == 'yes') {
            st.textContent = 'no'
        } else {
            tam()
            time.textContent = Number(time.textContent) + 1
        }


        if (time.textContent == `${quant}`) {
            let game_container = document.getElementById('game-container')
            game_container.style.display = 'none'
            let result = document.getElementById('result')
            result.style.display = 'flex'
            
            let one = document.getElementById('1')
            let h1 = document.getElementById('result-data')
            let two = document.getElementById('2')

            let timer = document.getElementById('timer').textContent


            one.textContent = 'Você fez uma média de'
            h1.textContent = `${( clicks / Number(timer)).toFixed(2)}`
            two.textContent = 'alvos por segundo!'
            clearInterval(a)
        }
    }, second)
    
    

}

function tam() {

    let size;

    if (document.getElementById('small').checked) {
        size = 50
    } else if (document.getElementById('medium').checked){
        size = 100
    } else if (document.getElementById('big').checked){
        size = 150
    }
    let aim = document.getElementById('aim')

    var x = window.innerWidth;
    var y = window.innerHeight;
   
    let y_random =  (Math.floor(Math.random() * y)) 
    let x_random =  (Math.floor(Math.random() * x)) 

    if (y_random >= size) {
        aim.style.top = `${y_random - size}px`
    } else if ((y_random + size) <= y) {
        aim.style.top = `${y_random + size}px`
    } else {
        aim.style.top = `${y_random}px`
    }

    if (x_random >= size) {
        aim.style.left = `${x_random - size}px`
    } else if ((x_random + size) <= x) {
        aim.style.left = `${x_random + size}px`
    } else {
        aim.style.left = `${x_random}px`
    }
   

}

function off(){
    let time = document.getElementById('time')

    let st = document.getElementById('status')
    
    let quant = document.getElementById('quant').textContent

    if (time.textContent != `${quant}`) {
        time.textContent = Number(time.textContent) + 1
    }
    
    
    st.textContent = 'yes'
    tam()
    acrescentar()
}
