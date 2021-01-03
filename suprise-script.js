function booh() {
    let span = document.getElementById('suprise-click')
    
    if ((Number(span.textContent)) + 1 == 11 ){
        span.textContent = '8000005'
    } else {
        span.textContent = Number(span.textContent) + 1
    }
}

function suprise() {
    let span = document.getElementById('suprise-click')

    if (span.textContent == '8000005') {
        let suprise_img = document.getElementById('suprise-img')
        suprise_img.style.display = 'block'
    }
}