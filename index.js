let i=0;
let j=0;

function display(val){
    if(i!==0){
        document.getElementById('output').value = '';
        i=0;
    }
    if(j==1 && (val!=='*' &&  val!=='/' &&  val!=='+' &&  val!=='-')){
        document.getElementById('output').value = '';
        j=0;
        console.log(j);
    }
    else{
        j=0;
    }
    document.getElementById('output').value += val;
}

function Clear(){
    document.getElementById('output').value = '';
}

function compute(){
    let x = document.getElementById('output').value;
    if(x.endsWith('+') || x.endsWith('-') || x.endsWith('*') || x.endsWith('/') || x.startsWith('*') || x.startsWith('/')){
        document.getElementById('output').value = 'Error';
        i++;
        return false;
    }
    let y = eval(x);
    document.getElementById('output').value = y;
    j++;
}