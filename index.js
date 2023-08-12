let temp1 = document.querySelector(".body-content")
const template = document.getElementById("card")
let temp2 = document.querySelector(".lower-body-cards")
const template2 = document.getElementById("low-body")
let body = document.querySelector(".body")
let header = document.querySelector(".header")
let dashboard = document.getElementById("Dashboard")
let overview = document.querySelector(".overview")
let mode = document.querySelector(".mode-text")

let array = [
    {logo: "assets/icon-facebook.svg",name: "@nathanf",number: "1987",upDownLogo: "assets/icon-up.svg",upDown: "12 Today"},
    {logo: "assets/icon-twitter.svg",name: "@nathanf",number: "1044",upDownLogo: "assets/icon-up.svg",upDown: "99 Today"},
    {logo: "assets/icon-instagram.svg",name: "@realnathanf",number: "11k",upDownLogo: "assets/icon-up.svg",upDown: "1099 Today"},
    {logo: "assets/icon-youtube.svg",name: "@Nathan F.",number: "8239",upDownLogo: "assets/icon-down.svg",upDown: "144 Today"}
    
]

const mappedArray = array.map((ele,card) => {
        card=template.content.cloneNode(true),
        card.querySelector(".logo").src=ele.logo,
        card.querySelector(".name").textContent=ele.name,
        card.querySelector(".number").textContent=ele.number,
        card.querySelector(".up-logo").src=ele.upDownLogo,
        ele.upDownLogo === "assets/icon-down.svg" ?  card.querySelector(".up-down").style.color="hsl(356, 69%, 56%)" :card.querySelector(".up-down").style.color="hsl(163, 72%, 41%)" ,
        ele.logo === "assets/icon-instagram.svg"  ? card.querySelector(".card-top").style.backgroundImage="linear-gradient(to right,hsl(37, 97%, 70%),hsl(329, 70%, 58%))" : card.querySelector(".card-top").style.backgroundColor="hsl(208, 92%, 53%)",
        ele.logo === "assets/icon-youtube.svg"  ? card.querySelector(".card-top").style.backgroundColor="hsl(348, 97%, 39%)" : card.querySelector(".card-top").style.backgroundColor="hsl(208, 92%, 53%)",
        card.querySelector(".up-down").textContent=ele.upDown,
        temp1.appendChild(card)
})

let array2 = [
    {desc: "Page Views", logo: "assets/icon-facebook.svg",num: "87",upDownLogo:"assets/icon-up.svg",percentage: "3%"},
    {desc: "Likes", logo: "assets/icon-facebook.svg",num: "52",upDownLogo:"assets/icon-down.svg",percentage: "2%"},
    {desc: "Likes", logo: "assets/icon-instagram.svg",num: "5462",upDownLogo:"assets/icon-up.svg",percentage: "2257%"},
    {desc: "Profile views", logo: "assets/icon-instagram.svg",num: "52k",upDownLogo:"assets/icon-up.svg",percentage: "1375%"},
    {desc: "Retweets", logo: "assets/icon-twitter.svg",num: "117",upDownLogo:"assets/icon-up.svg",percentage: "303%"},
    {desc: "Likes", logo: "assets/icon-twitter.svg",num: "507",upDownLogo:"assets/icon-up.svg",percentage: "553%"},
    {desc: "Likes", logo: "assets/icon-youtube.svg",num: "107",upDownLogo:"assets/icon-down.svg",percentage: "19%"},
    {desc: "Total views", logo: "assets/icon-youtube.svg",num: "1407",upDownLogo:"assets/icon-down.svg",percentage: "12%"}
]

const mappedArray2 = array2.map((ele,card) => {
    card=template2.content.cloneNode(true),
    card.querySelector(".desc").textContent=ele.desc,
    card.querySelector(".bottom-logo").src=ele.logo,
    card.querySelector(".num").textContent=ele.num,
    card.querySelector(".up-logo-bottom").src=ele.upDownLogo,
    ele.upDownLogo === "assets/icon-down.svg" ?  card.querySelector(".up-down-bottom").style.color="hsl(356, 69%, 56%)" :card.querySelector(".up-down-bottom").style.color="hsl(163, 72%, 41%)" ,
    card.querySelector(".up-down-bottom").textContent=ele.percentage
    temp2.appendChild(card)
}) 
let darkMode = false
let containerr=document.importNode(template,true)
function toggleDarkMode(){
    document.body.classList.toggle("dark-mode")
    if(darkMode===false){
        header.style.backgroundColor="hsl(232, 18%, 17%)"
        body.style.backgroundColor="hsl(230, 17%, 14%)"
        overview.style.color="white"
        dashboard.style.color="white"
        darkMode=true        
    } 
    else{
        header.style.backgroundColor="hsl(225, 100%, 98%)"
        body.style.backgroundColor="white"
        overview.style.color="hsl(228, 12%, 44%)"
        dashboard.style.color="black"
        darkMode=false
    }
}