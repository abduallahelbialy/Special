//depart setting
//togle spin class on icon
document.querySelector(".toggel i").onclick = function () {
  //toggle class fa spin for rotation
  this.classList.toggle("fa-spin");
  //toggle class open on main settings box
  document.querySelector(".settings-box").classList.toggle("open");
};

// local storage and colors
//check if there's local storage color option
let maincolor = localStorage.getItem("option-box");
if (maincolor !== null) {
  document.documentElement.style.setProperty(`--main-color`, maincolor);
}
//Remove active class from all colors list items

document.querySelectorAll(".colors-list li").forEach((element) => {
  element.classList.remove("active");

  //add active class on element with data-color ===local storage item
  if (element.dataset.color === maincolor) {
    //Add active class
    element.classList.add("active");
  }
});

//Random background option
let backgroudoption = true;

// variable to control the background interval
let backgroundinterval;
//check if there's local storage radom background item
let backgroundlocal = localStorage.getItem("option-box");

//check if backround loacl storage it not empty
if (backgroundlocal !== null) {
  if (backgroundlocal === `true`) {
    backgroudoption = true;
  } else {
    backgroudoption = false;
  }
  //remove actove class from all spans
  document.querySelectorAll(".option-box span").forEach((element) => {
    element.classList.remove("active");
  });
  if (backgroundlocal === `true`) {
    document.querySelector(".option-box .yes").classList.add("active");
  } else {
    document.querySelector(".option-box .no").classList.add("active");
  }
}

// switch colors
const colorsLi = document.querySelectorAll(".colors-list li");

//loop on list items
colorsLi.forEach((li) => {
  //click on every list items
  li.addEventListener("click", (e) => {
    //set color on root
    document.documentElement.style.setProperty(
      `--main-color`,
      e.target.dataset.color
    );

    //set color on local storage

    localStorage.setItem("option-box", e.target.dataset.color);

    //Remove active class from all childerns
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    //Add active class on seif
    e.target.classList.add("active");
  });
});

// switch random background
const randombacel = document.querySelectorAll(".option-box span");

//loop on list items
randombacel.forEach((span) => {
  //click on every list items
  span.addEventListener("click", (e) => {
    //set color on root
    //Remove active class from all span
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    //Add active class on seif
    e.target.classList.add("active");
    if (e.target.dataset.background === `yes`) {
      backgroudoption = true;
      randoizeimgs();
      localStorage.setItem("option-box", true);
    } else {
      backgroudoption = false;
      clearInterval(backgroundinterval);
      localStorage.setItem("option-box", false);
    }
  });
});

//select landing page Element
let landingpage = document.querySelector(".landing-page");

//get array of imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.webp", "05.jpg"];

// function to randoize imgs
function randoizeimgs() {
  if (backgroudoption === true)
    backgroundinterval = setInterval(function () {
      // get random number
      let randomimags = Math.floor(Math.random() * imgsArray.length);
      //change background image Url
      landingpage.style.backgroundImage =
        `url("imags/` + imgsArray[randomimags] + `")`;
    }, 5000);
}
randoizeimgs();

///our-skills

let ourskills = document.querySelector(".our-skills");

window.onscroll = function () {
  // skills offset top
  let skillsoffsetTop = ourskills.offsetTop;
  //skills outer height
  let skillsouterheight = ourskills.offsetHeight;
  //window Height
  let windowheight = this.innerHeight;
  //window scrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsoffsetTop + skillsouterheight - windowheight) {
    let allskills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );
    allskills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
//end our skills

//departgallery

//create popup with the image
let ourgallery = document.querySelectorAll(".gallery img");
ourgallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    //create overlay Element
    let overlay = document.createElement("div");
    overlay.className = `popup-overlay`;
    //Append overlay to the body
    document.body.appendChild(overlay);

    //create the popup box
    let popupbox = document.createElement("div");
    //add class to the popup box
    popupbox.className = `popup-box`;
    if (img.alt !== null) {
      //create heading
      let imgheading = document.createElement("h3");
      //create text for heading
      let imgtext = document.createTextNode(img.alt);
      //append the text to the heading
      imgheading.appendChild(imgtext);
      //append the heading yo the popup box
      popupbox.appendChild(imgheading);
    }
    // create the imag
    let popupimage = document.createElement("img");
    //set image source
    popupimage.src = img.src;
    //add image to popup box
    popupbox.appendChild(popupimage);
    //append the popup box to bady
    document.body.appendChild(popupbox);
    //create the close span
    let closebutton = document.createElement("span");
    //create the close bytton text
    let closetextbutton = document.createTextNode("X");
    //append text to close button
    closebutton.appendChild(closetextbutton);
    //add close tl close bytton
    closebutton.className = `close-button`;
    //add close button to the popup box

    popupbox.appendChild(closebutton);
  });
});
//close popup
document.addEventListener("click", function (e) {
  if (e.target.className == `close-button`) {
    //remove the current popup
    e.target.parentNode.remove();
    //remove overlay
    document.querySelector(".popup-overlay").remove();
  }
});
//department bullets
//select all bullets
let allbullets = document.querySelectorAll(".nav-bullets .bullet");
allbullets.forEach((bull) => {
  bull.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//department header links
//select all links
let alllinks = document.querySelectorAll(".links a");
alllinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//طريقه اخرى لعمل استدعاء للقسم من الضغط عليه مجمعه للينكات والبلوتس
// function scrollallDepartment(element){
//   element.forEach(ele=>{
//     ele.addEventListener("click",(e)=>{
//       e.preventDefault();
//       document.querySelector(e.target.dataset.section).scrollIntoView({
//         behavior: "smooth",
//       });
//     })
//   })
// }
// scrollallDepartment(alllinks);
// scrollallDepartment(allbullets);

//handle active state لعمل فنكشن مجمعه لل active and remove
// function handleActive (ev){
// ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
//       element.classList.remove("active");
//     });
//     //Add active class on seif
//     ev.target.classList.add("active");

// }

//option setting show and hideen
let bulletSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletstorage = localStorage.getItem("bullets-option");
if (bulletstorage !== null) {
  bulletSpan.forEach((span) => {
    span.classList.remove("active");
  });
  if (bulletstorage === `block`) {
    bulletsContainer.style.display = `block`;
    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = `none`;
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === `Show`) {
      bulletsContainer.style.display = `block`;
      localStorage.setItem("bullets-option", `block`);
    } else {
      bulletsContainer.style.display = `none`;
      localStorage.setItem("bullets-option", `none`);
    }
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    //Add active class on seif
    e.target.classList.add("active");
  });
});
//Reset option
document.querySelector(".reset-option").onclick = function () {
  localStorage.clear();
  // localStorage.removeItem("bullets-option")
  // localStorage.removeItem("option-box");
  window.location.reload();
};

//toogle menu
// cood open the bars menu and close 

let toggle = document.querySelector(".toggel-menu");
let tilinks = document.querySelector(".links");
//stop propagation
toggle.onclick = function (e) {
  e.stopPropagation();
  //toggle class menu active on button
  this.classList.toggle("menu-active");
  //toggle class open on links
  tilinks.classList.toggle("open");
};
//click anywhere outside menu and toggle button
document.addEventListener("click", (e) => {
  if (e.target !== toggle && e.target !== tilinks) {
    //check if menu is open
    if (tilinks.classList.contains("open")) {
      //toggle class menu active on button
      toggle.classList.toggle("menu-active");
      //toggle class open on links
      tilinks.classList.toggle("open");
    }
  }
});
tilinks.onclick = function (e) {
  e.stopPropagation();
};
