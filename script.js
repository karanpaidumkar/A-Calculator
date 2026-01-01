let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                let expression = string
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/");

                string = eval(expression);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } 
        else if (value === "AC") {
            string = "";
            input.value = "";
        } 
        else if (value === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        } 
        else {
            string += value;
            input.value = string;
        }
    });
});


document.addEventListener("keydown", (e) => {
    e.preventDefault();
    let key = e.key;

    1
    if ((key >= '0' && key <= '9') || key === '.') {
        string += key;
        input.value = string;
    }

   
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        if (key === '*') key = '×';
        if (key === '/') key = '÷';

        string += key;
        input.value = string;
    }

   
    else if (key === 'Enter') {
        try {
            let expression = string
                .replace(/×/g, "*")
                .replace(/÷/g, "/");

            string = eval(expression);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    }

    else if (key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string;
    }


    else if (key === 'Escape') {
        string = "";
        input.value = "";
    }
});
