//pegando elementos do HTML

const lbl1 = window.document.getElementById('lbl1')
const lbl2 = window.document.getElementById('lbl2')
const lbl3 = window.document.getElementById('lbl3')
const eq = window.document.getElementById('eq')
const deltares = window.document.getElementById('deltares')
const x1res = window.document.getElementById('x1res')
const x2res = window.document.getElementById('x2res')

function btnclick(){

    //converting to number:

    const a = Number(lbl1.value)
    const b = Number(lbl2.value)
    const c = Number(lbl3.value)
    
    //show equation:

    eq.innerText = `(${a}x²) + (${b}x) + (${c}) = 0`
    
    //show delta:

    const delta = b**2 - 4 * a * c
    deltares.innerHTML = `<div id='deltares'>&Delta; = ${delta}</div>`

    if (delta < 0){

        //like delta is negative, this happens:

        let x = (0-b)/(2*a)
        x = x.toFixed(3)
        let x11 =(Math.sqrt(0 - delta))/(2*a)
        x11 = x11.toFixed(3)
        
        //show x1 and x2:

        const x1 = String(x) + ' + ' + String(x11) + 'i'
        const x2 = String(x) + ' - ' + String(x11) + 'i'

        x1res.innerText = `x1 = ${x1}`
        x2res.innerText = `x2 = ${x2}`

    }else{

        //making normal bhaskaras, because delta is positive:

        const x1 = (0 - b + Math.sqrt(delta)) / (2 * a)
        const xi = x1.toFixed(3)
        const x2 = (0 - b - Math.sqrt(delta)) / (2 * a)
        const xii = x2.toFixed(3)

        //to appear x1 and x2:
        
        x1res.innerText = `x1 = ${xi}`
        x2res.innerText = `x2 = ${xii}`
    }
}
        
