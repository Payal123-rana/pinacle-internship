let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');

let string = "";
let arr = array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click' , (e) => {
        if(e.target.innerHTML == '='){
            String = evl(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
        input.value = string;
        }
        
        
        
        
    })
})