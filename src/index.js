const header = document.querySelector('header')
console.log('header', header)
// const scrollX

window.addEventListener('scroll', function(){
    var x = this.scrollY
    if(x<1){
        console.log('x', x)
        header.classList.remove('sticky-bg')
        return
    }
    else header.classList.add('sticky-bg')
})