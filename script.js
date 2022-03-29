var input = document.getElementById('input');
var storedVar = 0;
function pushBtn(obj){
    var pushed = obj.innerHTML;
    if(pushed == '=')
        input.innerHTML = eval(input.innerHTML);  
    else if( pushed == 'C'){
        input.innerHTML = '0';
        storedVar = 0;
    }   
    else if(pushed == '1/x')
        input.innerHTML = 1/(input.innerHTML);
    else if(pushed == 'x^2')
        input.innerHTML = (input.innerHTML)*(input.innerHTML);
    else if(pushed == '√')
        input.innerHTML = Math.sqrt(input.innerHTML);
    else if(pushed=='MS'){
        if(input.innerHTML.includes('+') || input.innerHTML.includes('-')
           || input.innerHTML.includes('/') || input.innerHTML.includes('*'))
           return; 
        else
            storedVar = input.innerHTML;     
    }
    else if(pushed=='MC')
        storedVar = 0;
    else if (pushed =='MR')
        input.innerHTML = storedVar;
    else if(pushed =='M+'){
        if(input.innerHTML.includes('+') || input.innerHTML.includes('-')
           || input.innerHTML.includes('/') || input.innerHTML.includes('*'))
           return;
        else
            storedVar = Number(storedVar) + Number(input.innerHTML);
    }
    else if (pushed == '+-'){
        if(input.innerHTML.charAt(0)=='-'){
            input.innerHTML = input.innerHTML.replace('-','+')
        }
        else if(input.innerHTML.charAt(0)=='+'){
            input.innerHTML = input.innerHTML.replace('+','-')
        }
        else{
            input.innerHTML = '-'.concat(input.innerHTML);
        }
    }
    else{
        if(input.innerHTML == '0')
            input.innerHTML = pushed;
        else{
            input.innerHTML += pushed;
            if(pushed == '.'){
            input.innerHTML += '0';
            }
        }
    }
}