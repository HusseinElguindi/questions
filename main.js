window.onload = init;
window.addEventListener("load", () => init());
var q_container;

var colors = [[59, 128, 219], [21, 101, 231], [189, 27, 191], [66, 86, 29], [31, 10, 209], [25, 130, 217], [2, 145, 230], [255, 56, 56], [28, 12, 210], [22, 239, 184], [110, 120, 168]];
var colors_len = colors.length;

function init()
{
    q_container = document.getElementById("q-container");

    for (let i = 0; i < 1; i++)
    {
        let q = document.createElement("div");
        q.classList.add("q");
        q.style.backgroundColor = rgbToString(colors[rand_int(0, colors_len)]);

        let p = document.createElement("p");
        p.appendChild(document.createTextNode("This question is not real, but it shows what a real question would be like."));

        let remove_btn = document.createElement("div");
        remove_btn.classList.add("remove-btn");
        remove_btn.appendChild(document.createTextNode("Remove"));
        remove_btn.addEventListener('click', e => remove_q(e.path[1]));

        q.appendChild(p);
        q.appendChild(remove_btn);
        q_container.appendChild(q);
    }
}

// non inclusive of max
function rand_int(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// function rand_color(min_sum, max_sum)
// {
//     let sum = 0;
//     let rgb = [];
//     for (let i = 0; i < 3; i++)
//     {
//         rgb[i] = rand_int(0, 256);
//         sum += rgb[i];
//     }

//     if (sum < min_sum || sum > max_sum)
//     {
//         rgb = rand_color(min_sum, max_sum);
//     }

//     return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
// }

function rgbToString(rgb)
{
    var string = "rgb(";
    for (let i = 0; i < 3; i++)
    {
        string += `${rgb[i]}`;
        if (i < 2)
        {
            string += ", "
        }
    }
    string += ")"

    return string;
}

function remove_q(e)
{
    e.style.transitionDuration = "0.35s"
    e.style.opacity = "0%";
    setTimeout(() => {
        e.remove()
    }, 475);
}