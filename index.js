const postImg1 = document.querySelector("#post-img-1");
const postImg2 = document.querySelector("#post-img-2");
const postImg3 = document.querySelector("#post-img-3");

const postLike1 = document.querySelector("#postLike-1");
const postLike2 = document.querySelector("#postLike-2");
const postLike3 = document.querySelector("#postLike-3");

const post1Likes = document.querySelector("#post1-likes");
const post2Likes = document.querySelector("#post2-likes");
const post3Likes = document.querySelector("#post3-likes");

const heartRed1 = document.querySelector("#heart-red1");
const heartRed2 = document.querySelector("#heart-red2");
const heartRed3 = document.querySelector("#heart-red3");


let like1 = 0;
let like2 = 0;
let like3 = 0;


function active3() {
    like3++;
    post3Likes.textContent = like3 + " Likes";
    postLike3.style.display = "none";
    heartRed3.style.display = "block";
}

function active33() {
    like3--;
    post3Likes.textContent = like3 + " Likes";
    postLike3.style.display = "block";
    heartRed3.style.display = "none"
}


function active2() {
    like2++;
    post2Likes.textContent = like2 + " Likes";
    postLike2.style.display = "none";
    heartRed2.style.display = "block";
}

function active22() {
    like2--;
    post2Likes.textContent = like2 + " Likes";
    postLike2.style.display = "block";
    heartRed2.style.display = "none";
}

function active1() {
    like1++;
    post1Likes.textContent = like1 + " Likes";
    postLike1.style.display = "none";
    heartRed1.style.display = "block";
}

function active11() {
    like1--;
    post1Likes.textContent = like1 + " Likes";
    postLike1.style.display = "block";
    heartRed1.style.display = "none";
}

active1();
active11();
active2();
active22();



