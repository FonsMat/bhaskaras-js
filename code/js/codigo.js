const txtA = document.getElementById('txtA'), txtB = document.getElementById('txtB'), txtC = document.getElementById('txtC'), eq = document.getElementById('eq'), deltares = document.getElementById('deltares'), x1res = document.getElementById('x1res'), x2res = document.getElementById('x2res');

function buttonCalculate(){

    const num = {
        a: Number(txtA.value),
        b: Number(txtB.value),
        c: Number(txtC.value)
    };
    
    //show equation:

    eq.innerText = `(${num.a}x²) + (${num.b}x) + (${num.c}) = 0`;
    
    //show delta:

    const delta = num.b**2 - 4 * num.a * num.c;
    deltares.innerHTML = `<div id='deltares'>&Delta; = ${delta}</div>`;

    if (delta < 0) {

        //like delta is negative, this happens:

        const x1 = ((0 - num.b)/(2 * num.a)).toFixed(3), x2 = ((Math.sqrt(0 - delta))/(2 * num.a)).toFixed(3);
        
        //show x1 and x2:

        x1res.innerText = `x1 = ${x1} + ${x2}i`;
        x2res.innerText = `x2 = ${x1} - ${x2}i`;

    }
    else {

        //making normal bhaskaras, because delta is positive:

        const x1 = ((0 - num.b + Math.sqrt(delta)) / (2 * num.a)).toFixed(3), x2 = ((0 - num.b - Math.sqrt(delta)) / (2 * num.a)).toFixed(3);

        //to appear x1 and x2:
        
        x1res.innerText = `x1 = ${x1}`;
        x2res.innerText = `x2 = ${x2}`;
    };
}
        
