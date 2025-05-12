let btn = document.getElementById("sub");
let username = document.getElementById("username");
let textarea = document.getElementById("textarea");
let img = document.getElementById("img");
let infouser = document.getElementById("infouser")
let usermasg = document.getElementById("usernamemassge");
let texareamasg = document.getElementById("textarreamassge");
let imgmassg = document.getElementById("imgmassg");
let pstmassg = document.getElementById("pstmassg");
btn.addEventListener("click", () => {

    if(username.value.length <= 4){
        usermasg.innerText = "Username must be more than 4 characters"
        return;
    }

    if(textarea.value.length <= 6){
        texareamasg.innerText = "Post text must be more than 6 characters"
        return;
    }

    if(img.value == ""){
        imgmassg.innerText = "Add image link"
        return;
    }
    // let userChicking =  true;
    // fetch("https://68219a08259dad2655afc189.mockapi.io/post")
    // .then((response) => response.json())
    // .then((data) => {
    //     data.map((arr) => {
    //         userChicking = userChicking && (username.value !== arr.uusername);
    //     });
    // })

    // if(!userChicking){
    //     pstmassg.innerText = "This username already exists."
    //     return;
    // }

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
    }).then(() => {
        location.reload();
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
                }).then(() => {
                    location.reload();
                })
            })

            card.appendChild(h4);
            card.appendChild(post);
            card.appendChild(img);
            card.appendChild(del);
            div.appendChild(card);
            infouser.appendChild(div);

        });
    })
