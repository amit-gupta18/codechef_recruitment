const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const popup = document.querySelectorAll(".popup");
const modalPara = document.querySelector(".modal p");
const findStyle = document.querySelector(".find-style");
const ul  =  document.querySelector("nav ul");
popup.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(item.className);
        ul.classList.add("disabled");
        if(item.className == "popup about"){
            modal.style.display = "block";
            document.body.classList.add("modal-open");
            modalPara.innerHTML = "You clicked about";
        }
        else if(item.className == "popup contact"){
            modal.style.display = "block";
            document.body.classList.add("modal-open");
            modalPara.innerHTML = "You clicked contact";
        }
        else if(item.className == "popup living"){
            modal.style.display = "block";
            document.body.classList.add("modal-open");
            modalPara.innerHTML = "You clicked living";
        }
        else if(item.className == "popup kitchen"){
            modal.style.display = "block";
            document.body.classList.add("modal-open");
            modalPara.innerHTML = "You clicked kitchen";
        }
        else if(item.className == "popup outdoor"){
            modal.style.display = "block";
            document.body.classList.add("modal-open");
            modalPara.innerHTML = "You clicked outdoor";
        }
    });
});

close.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    ul.classList.remove("disabled");
});

findStyle.addEventListener("click", () => {
   window.location.href = 'page.htm';
})
