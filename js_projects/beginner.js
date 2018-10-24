
let ball = document.createElement("img");
ball.src = "https://apprecs.org/gp/images/app-icons/300/20/aldimeart.com.jpg";
ball.style.width = "30px";
ball.style.height = "30px";
ball.style.position = "absolute";
ball.style.margin = "0";
ball.style.padding = "0";
ball.style.top = "1";
ball.style.left = "1";
ball.style.transition = "all ease-out 0.3s"
document.body.appendChild(ball);

let platforma = document.getElementById("my_div");
let left = platforma.clientLeft;
console.log(platforma.left);

document.addEventListener("keydown", (ev) => {
    switch (ev.code) {
        case ("ArrowLeft"):
            // console.log(platforma.style.left) 
            left -= 20;
            break;
        case ("ArrowRight"):
            left += 20;
            // console.log(ev.code)        
            break;
    }
    platforma.style.left = left + "px";
}
);

let array_ = [[0, "down"], [0, "down"]];
let temp_v = null;

body_ = document.getElementById("body_one");
let body_height = body_.clientHeight;
let step = 30;

setInterval(() => {
    ball.style.top = move_func_v() + "px";
    // ball.style.left = move_func_h();
}, 50);

function move_func_v() {

    temp_v = ball.y;

    if (temp_v + 30 >= body_height) {
        array_[0][1] = "up";
        return (temp_v - step);
    }
    else if (temp_v + 30 < body_height && array_[0][1] == "down") {
        return (temp_v + step);
    }
    else if (temp_v <= 0) {
        array_[0][1] = "down";
        return (temp_v + step);
    }
    else if (temp_v < body_height && array_[0][1] == "up") {
        return (temp_v - step);
    }

}

// let snake = document.getElementById("my_div");

// snake.style.position = "absolute";
// snake.style.width = "10px";
// snake.style.height = "50px";
// snake.style.backgroundColor = "red";
// snake.style.zIndex = 100;

// snake.style.transition = "all ease-out 0.5s"

// let temp_v = 0;
// let temp_h = 0;

// document.addEventListener("keydown", (ev) => {
//     switch (ev.code) {
//         case ("ArrowDown"): 
//             snake.style.width = "10px";
//             snake.style.height = "50px";
//             temp_v += 10;
//             snake.style.top = temp_v + "px";
//             break;
//         case ("ArrowUp"): 
//             snake.style.width = "10px";
//             snake.style.height = "50px";
//             temp_v -= 10;
//             snake.style.top = temp_v + "px";
//             break;
//         case ("ArrowLeft"): 
//             snake.style.width = "50px";
//             snake.style.height = "10px";
//             temp_h -= 10;
//             snake.style.left = temp_h + "px";
//             break;
//         case ("ArrowRight"): 
//             snake.style.width = "50px";
//             snake.style.height = "10px";
//             temp_h += 10;
//             snake.style.left = temp_h + "px";
//             break;
//         };

//     }
// )


// function fibonaci (number_) {
//     let array_ = [1,1,2];

//     while (array_.length <= number_)
//          array_.push(array_[array_.length - 1] + array_[array_.length - 2]);
//     return array_;
// };

// console.log(fibonaci(prompt("Сколько чисел?")));