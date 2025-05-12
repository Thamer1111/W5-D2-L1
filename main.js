let btn = document.getElementById("sub");
let username = document.getElementById("username");
let textarea = document.getElementById("textarea");
let img = document.getElementById("img");
let infouser = document.getElementById("infouser")
btn.addEventListener("click", () => {
    fetch('https://68219a08259dad2655afc189.mockapi.io/post', {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            textarea: textarea.value,
            img: img.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
})

fetch("https://68219a08259dad2655afc189.mockapi.io/post")
    .then((response) => response.json())
    .then((data) => {
        data.map((arr) => {
            let div = document.createElement("div");
            let card = document.createElement("div");
            let img = document.createElement("img");
            let h4 = document.createElement("h4");
            let post = document.createElement("p");
            let del = document.createElement("butten");

            div.classList = "col-sm-6 col-md-4 col-lg-3";
            card.classList = "card h-100 text-center p-3 shadow";
            img.src = arr.img;
            img.style.height = "200px";
            img.style.objectFit = "contain";
            img.classList = "card-img-top";
            h4.classList = "card-title mt-3 fs-6";
            h4.innerText = `name is : ${arr.username}`;
            post.innerText = arr.textarea;
            del.classList = "btn btn-danger w-75 mx-auto mt-1 "
            del.innerText = "Delete"

            del.addEventListener("click", () => {
                fetch(`https://68219a08259dad2655afc189.mockapi.io/post/${arr.id}`, {
                    method: 'DELETE',
                });
            })

            card.appendChild(h4);
            card.appendChild(post);
            card.appendChild(img);
            card.appendChild(del);
            div.appendChild(card);
            infouser.appendChild(div);

        });
    })
