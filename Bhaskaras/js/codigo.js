//pegando elementos do HTML

var lbl1 = window.document.getElementById('lbl1')
var lbl2 = window.document.getElementById('lbl2')
var lbl3 = window.document.getElementById('lbl3')
var eq = window.document.getElementById('eq')
var deltares = window.document.getElementById('deltares')
var x1res = window.document.getElementById('x1res')
var x2res = window.document.getElementById('x2res')

function btnclick(){

    //converting to number:

    var a = Number(lbl1.value)
    var b = Number(lbl2.value)
    var c = Number(lbl3.value)
    
    //show equation:

    eq.innerText = `${a}x² ${b}x ${c} = 0`
    
    //show delta:

    var delta = b**2 - 4 * a * c
    deltares.innerHTML = `<div id='deltares'>&Delta; é igual ${delta}</div>`

    if (delta < 0){

        //like delta is negative, this happens:

        var x = (0-b)/(2*a)
        x = x.toFixed(3)
        var x11 =(Math.sqrt(0 - delta))/(2*a)
        x11 = x11.toFixed(3)
        
        //show x1 and x2:

        var x1 = x.toString()+" + " + x11.toString() + "i"
        var x2 = x.toString()+" - " + x11.toString() + "i"

        x1res.innerText = `x1 = ${x1}`
        x2res.innerText = `x2 = ${x2}`

    }else{

        //making normal bhaskaras, because delta is positive:

        var x1 = (0 - b + Math.sqrt(delta)) / (2 * a)
        var x2 = (0 - b - Math.sqrt(delta)) / (2 * a)

        //to appear x1 and x2:
        
        x1res.innerText = `x1 = ${x1}`
        x2res.innerText = `x2 = ${x2}`
    }
}
        