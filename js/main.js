


function calc() {
    let n1 = parseFloat(document.getElementById('1').value);
    let n2 = parseFloat(document.getElementById('2').value);
    
    if (n1 > 0 && n2 > 0) {
        let n = n1 * n2
        alert(n)
    }
    
}


function vur(){
    let n1 = parseFloat(document.getElementById('1').value);
    let n2 = parseFloat(document.getElementById('2').value);
    
    
    if (n1 > 0 && n2 > 0) {
        for (let index = n1; index <= n2; index++) {
          let element = element + index
        }
    alert(element);       
    }
    
    
}

