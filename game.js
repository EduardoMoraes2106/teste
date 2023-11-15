const itachi = document.querySelector('.itachi')

const jump = ()=>{
    itachi.classList.add('jump')

    setTimeout(()=>{
        itachi.classList.remove('jump')
    },500)
}

document.addEventListener('keydown', jump)