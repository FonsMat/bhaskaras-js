const txtA = document.getElementById('txtA'), txtB = document.getElementById('txtB'), txtC = document.getElementById('txtC'), eq = document.getElementById('eq'), deltaRes = document.getElementById('deltaRes'), x1res = document.getElementById('x1res'), x2res = document.getElementById('x2res'), body = document.getElementById('body');
/*if(isNaN(txtA)||isNaN(txtB)||isNaN(txtC)){
    eq.style.color = 'red';
    eq.innerText = `[ERROR] YOU DON'T TYPE A NUMBER, YOU BROKE IT!!`;
    deltaRes.innerText = '';
    x1res.innerText = '';
    x2res.innerText = ''
}*/
function buttonCalculate(){

    if(txtA.value.length == 0 || txtB.value.length == 0 || txtC.value.length == 0){
        eq.style.color = 'red';
        body.style.background = 'red';
        eq.innerText = `[ERROR] YOU DIDN'T TYPE ANY NUMBER! YOU BROKE IT!!!`;
        deltaRes.innerText = '';
        x1res.innerText = '';
        x2res.innerText = '';
    }
    else{
        const num = {
            a: Number(txtA.value),
            b: Number(txtB.value),
            c: Number(txtC.value)
        };
        
        if(isNaN(num.a)||isNaN(num.b)||isNaN(num.c)){
            eq.style.color = 'red';
            eq.innerText = `[ERROR] THIS IS NOT A NUMBER! YOU BROKE IT!!`;
            body.style.background = 'red';
            deltaRes.innerText = '';
            x1res.innerText = '';
            x2res.innerText = '';
        }
        else{
            eq.style.color = 'white';
            body.style.background = '#2c2c54';
            //show equation:

            eq.innerText = `(${num.a}x²) + (${num.b}x) + (${num.c}) = 0`;
            
            //show delta:

            const delta = num.b**2 - 4 * num.a * num.c;
            deltaRes.innerHTML = `<div id='deltaRes'>&Delta; = ${delta}</div>`;

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
        };
    };
};