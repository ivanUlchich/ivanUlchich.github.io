

let snake = document.getElementById("my_div");

snake.style.position = "absolute";
snake.style.width = "10px";
snake.style.height = "50px";
snake.style.backgroundColor = "red";
snake.style.zIndex = 100;

snake.style.transition = "all ease 2s"

let temp_v = 0;
let temp_h = 0;

document.addEventListener("keydown", (ev) => {
    switch (ev.code) {
        case ("ArrowDown"): 
            snake.style.width = "10px";
            snake.style.height = "50px";
            temp_v += 10;
            snake.style.top = temp_v + "px";
            break;
        case ("ArrowUp"): 
            snake.style.width = "10px";
            snake.style.height = "50px";
            temp_v -= 10;
            snake.style.top = temp_v + "px";
            break;
        case ("ArrowLeft"): 
            snake.style.width = "50px";
            snake.style.height = "10px";
            temp_h -= 10;
            snake.style.left = temp_h + "px";
            break;
        case ("ArrowRight"): 
            snake.style.width = "50px";
            snake.style.height = "10px";
            temp_h += 10;
            snake.style.left = temp_h + "px";
            break;
        };

    }
)



// function fibonaci (number_) {
//     let array_ = [1,1,2];
    
//     while (array_.length <= number_)
//          array_.push(array_[array_.length - 1] + array_[array_.length - 2]);
//     return array_;
// };

// console.log(fibonaci(prompt("Сколько чисел?")));