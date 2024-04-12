import { infoCard, postCard } from "./api.js";

let showBtn = document.querySelector(".show-btn");
let secondSection = document.querySelector(".second-section");
let secondContainer = document.querySelector(".second-container");
let firstContainer = document.querySelector(".first-section");
let navContainer = document.querySelector(".nav-container");
let featured = document.querySelector(".featured");
let products = document.querySelector(".products-btn");
let thirdSection = document.querySelector(".third-section");
let thirdSectionTop = document.querySelector(".third-section-top-wrap");
let secondBox = document.querySelector(".second-box");
let box = document.querySelector(".box");
let navShow = document.querySelector(".nav-show");
let navWrap = document.querySelector(".nav-wrap");
let cardBox = document.querySelector(".third-section-card-box");
let navClose = document.querySelector(".nav-close");
let comfyLogo = document.querySelector(".comfy-logo");
let thirdContainer = document.querySelector(".third-container");
let productLink = document.querySelector(".products-link");
let about = document.querySelector(".about");
let aboutContainer = document.querySelector(".about-container");
let aboutNav = document.querySelector(".about-navbar");
let aboutClose = document.querySelector(".about-close");
let productsAbout = document.querySelector(".products-about");
let aboutThird = document.querySelector(".about-third");
let home = document.querySelector(".home")
let homeAbout = document.querySelector(".home-about");
let infoContainer = document.querySelector(".info-container");
let infoNav = document.querySelector(".info-navbar");
let infoCardName = document.querySelector(".info-name-card");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let back = document.querySelector(".back");
let aboutInfo = document.querySelector(".about-info");
let productsInfo = document.querySelector(".products-info");
let homeInfo = document.querySelector(".home-info");
let add = document.querySelector(".add");
let addModal = document.querySelector(".addModal");
let addForm = document.querySelector(".addForm");
let closeAddModal = document.querySelector(".close-addModal");
let bagBox = document.querySelector(".bag-box");
let bag = document.querySelector(".bag");
let bagContainer = document.querySelector(".bag-container");
let bagClose = document.querySelector(".bag-close");
let number = document.querySelector(".count")
let infoBag = document.querySelector(".info-bag");
let infoCount = document.querySelector(".info-count");
let aboutBag = document.querySelector(".about-bag");
let aboutCount = document.querySelector(".about-count");
let thirdBag = document.querySelector(".third-bag");
let thirdCount = document.querySelector(".third-count");
let cover = document.querySelector(".cover");
let money = document.querySelector(".money");





let range = document.querySelector(".range")
let value = document.querySelector(".volume")
range.oninput = () => {
  value.innerHTML = range.value
}


showBtn.onclick = () => {
  navContainer.style.display = "none";
  firstContainer.style.height = "0";
  firstContainer.style.overflow = "hidden";
  thirdSection.style.height = "0";
  secondSection.classList.remove("second-section");
  secondSection.classList.add("new-section");
  thirdSectionTop.style.height = "0";
  secondSection.style.height = "100%";
  thirdContainer.style.display = "none";
};

featured.onclick = () => {
  thirdSection.style.height = "0";
  thirdSection.style.overflow = "hidden";
  secondSection.style.height = "0";
  secondSection.classList.add("second-section");
  secondSection.classList.remove("new-section");
  navContainer.style.display = "flex";
  firstContainer.style.height = "750px";
};

products.onclick = () => {
  secondContainer.style.padding = "0";
  secondContainer.style.height = "0";
  thirdSection.style.height = "100%";
  thirdSectionTop.style.height = "100%";
  secondSection.classList.add("second-section");
  secondSection.classList.remove("new-section");
  thirdContainer.style.display = "block";
};

navShow.onclick = () => {
  navWrap.style.width = "255px";
  navWrap.style.paddingLeft = "120px";
  cardBox.style.paddingLeft = "300px";
};

navClose.onclick = () => {
  navWrap.style.width = "0";
  navWrap.style.paddingLeft = "0";
  cardBox.style.paddingLeft = "0";
};

comfyLogo.onclick = () => {
  thirdSection.style.height = "0";
  thirdSection.style.overflow = "hidden";
  navContainer.style.display = "flex";
  firstContainer.style.height = "750px";
};

productLink.onclick = () => {
  thirdSection.style.height = "100%";
  thirdSectionTop.style.height = "100%";
  secondSection.classList.add("second-section");
  secondSection.classList.remove("new-section");
  thirdContainer.style.display = "block";
  navContainer.style.display = "none";
  firstContainer.style.height = "0";
  firstContainer.style.overflow = "hidden";
}

productsAbout.onclick = () => {
  thirdSection.style.height = "100%";
  thirdSectionTop.style.height = "100%";
  secondSection.classList.add("second-section");
  secondSection.classList.remove("new-section");
  thirdContainer.style.display = "block";
  navContainer.style.display = "none";
  firstContainer.style.height = "0";
  firstContainer.style.overflow = "hidden";
  aboutContainer.style.height = "0";
  aboutNav.style.display = "none";
}

aboutThird.onclick = () => {
  aboutContainer.style.height = "100%";
  aboutNav.style.display = "block";
}


about.onclick = () => {
  aboutContainer.style.height = "100%";
  aboutNav.style.display = "block";
}

aboutClose.onclick = () => {
  aboutContainer.style.height = "0";
  aboutNav.style.display = "none";
}

home.onclick = () => {
  thirdSection.style.height = "0";
  thirdSection.style.overflow = "hidden";
  navContainer.style.display = "flex";
  firstContainer.style.height = "750px";
}

homeAbout.onclick = () => {
  aboutContainer.style.height = "0";
  aboutNav.style.display = "none";
  navContainer.style.display = "flex";
  firstContainer.style.height = "750px";
  thirdSection.style.height = "0";
  thirdSection.style.overflow = "hidden";
}

// add.onclick = () => {
//   addModal.showModal();
// }

// addForm.onsubmit = (e) => {
//   e.preventDefault();
//   if (addForm["img"].value == "" || addForm["name"].value == "" || addForm["price"].value == "" || addForm["description"].value == "") {
//     alert("Пожалуйста заполните поле");
//   }
//   else {
//     let card = {
//       img: addForm["img"].value,
//       name: addForm["name"].value,
//       price: addForm["price"].value,
//       description: addForm["description"].value
//     }
//     postCard(card);
//     addModal.close();
//   }
// }

// closeAddModal.onclick = () => {
//   addModal.close();
// }

let copy = JSON.parse(localStorage.getItem("data")) || [];
let count = parseInt(localStorage.getItem("count")) || 0;
thirdCount.innerHTML = count
aboutCount.innerHTML = count;
infoCount.innerHTML = count;
number.innerHTML = count;


bag.onclick = () => {
  bagContainer.style.width = "420px";
  bagContainer.style.right = "0px";
  cover.style.display = "block";
  getCopy();
}

infoBag.onclick = () => {
  bagContainer.style.width = "420px";
  bagContainer.style.right = "0px";
  cover.style.display = "block";
  getCopy();
}

aboutBag.onclick = () => {
  bagContainer.style.width = "420px";
  bagContainer.style.right = "0px";
  cover.style.display = "block";
  getCopy();
}

thirdBag.onclick = () => {
  bagContainer.style.width = "420px";
  bagContainer.style.right = "0px";
  cover.style.display = "block";
  getCopy();
}

bagClose.onclick = () => {
  bagContainer.style.width = "0";
  bagContainer.style.right = "-100px";
  cover.style.display = "none";
}
function getCopy() {
  bagBox.innerHTML = "";
  copy.forEach((el) => {
    let cardCnt = el.cnt || 0;
    let card = document.createElement("div");
    card.classList.add("card-bag");
    let divLeft = document.createElement("div");
    divLeft.classList.add("divLeft");
    let img = document.createElement("img");
    img.src = el.img;
    divLeft.appendChild(img);
    let divRight = document.createElement("div");
    divRight.classList.add("divRight");
    let boxName = document.createElement("div");
    let name = document.createElement("h1");
    name.classList.add("nameBag");
    name.innerHTML = el.name;
    let price = document.createElement("p");
    price.classList.add("priceBag");
    price.innerHTML = el.price;
    let delBagCard = document.createElement("p");
    delBagCard.classList.add("del-bag-card");
    delBagCard.innerHTML = "&times;";
    delBagCard.onclick = () => {
      delCard(el.id);
    }
    let divBottom = document.createElement("div");
    divBottom.classList.add("divBottom");
    let sumBtn = document.createElement("button");
    sumBtn.classList.add("btn");
    sumBtn.innerHTML = "+";
    sumBtn.onclick = () => {
      cardCnt++;
      result.innerHTML = cardCnt;
      el.cnt = cardCnt;
      localStorage.setItem("data", JSON.stringify(copy));
    }
    let result = document.createElement("p");
    result.classList.add("result");
    let minusBtn = document.createElement("button");
    minusBtn.classList.add("btn");
    minusBtn.innerHTML = "-";
    minusBtn.onclick = () => {
      if (cardCnt > 0) {
        infoCard(el.id)
        cardCnt--;
        result.innerHTML = cardCnt;
        el.cnt = cardCnt;
        localStorage.setItem("data", JSON.stringify(copy));
      }
    }
    result.innerHTML = cardCnt;
    divBottom.append(sumBtn, result, minusBtn);
    boxName.append(name, price, divBottom);
    divRight.append(boxName, delBagCard);
    card.append(divLeft, divRight);
    bagBox.appendChild(card);
  })
}

function delCard(id) {
  copy = copy.filter((el) => el.id != id);
  localStorage.setItem("data", JSON.stringify(copy));
  count--;
  thirdCount.innerHTML = count
  aboutCount.innerHTML = count;
  infoCount.innerHTML = count;
  number.innerHTML = count;
  localStorage.setItem("count", count.toString());
  getCopy(copy);
}


// first Data
function firstGetData(firstData) {
  firstData.forEach((el) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let img = document.createElement("img");
    img.src = el.img;
    img.classList.add("img");
    let name = document.createElement("h1");
    name.classList.add("name");
    name.innerHTML = el.name;
    let price = document.createElement("p");
    price.innerHTML = el.price;
    price.classList.add("price");
    card.append(img, name, price);
    box.append(card);
  });
}

function secondGetData(firstData) {
  firstData.forEach((el) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.onclick = () => {
      infoCard(el.id)
      left.innerHTML = "";
      right.innerHTML = "";
      infoContainer.style.width = "100%";
      infoNav.style.display = "block";
      infoCardName.innerHTML = el.name;
      let img = document.createElement("img");
      img.src = el.img;
      img.style.width = "100%";
      left.appendChild(img);
      let name = document.createElement("h1");
      name.classList.add("info-name");
      let marcos = document.createElement("h2");
      marcos.classList.add("info-marcos");
      marcos.innerHTML = "BY MARCOS";
      name.innerHTML = el.name;
      let price = document.createElement("p");
      price.innerHTML = el.price;
      price.classList.add("info-price");
      let description = document.createElement("p");
      description.classList.add("info-description");
      description.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi debitis facere libero ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi debitis facere libero ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi debitis facere libero ratione.";
      let addToBag = document.createElement("button");
      addToBag.classList.add("add-to-bag");
      addToBag.onclick = () => {
        if (!copy.find((item) => item.id === el.id)) {
          copy.push(el);
          count++;
          thirdCount.innerHTML = count
          aboutCount.innerHTML = count;
          infoCount.innerHTML = count;
          number.innerHTML = count;
          localStorage.setItem("count", count.toString());
          localStorage.setItem("data", JSON.stringify(copy));
        } else {
          alert("это карточка уже добавлена в корзину.");
        };
      }
      addToBag.innerHTML = "ADD TO CARD";
      right.append(name, marcos, price, description, addToBag);
      back.onclick = () => {
        infoContainer.style.width = "0";
        infoNav.style.display = "none";
      }
      aboutInfo.onclick = () => {
        infoContainer.style.width = "0";
        infoNav.style.display = "none";
        aboutContainer.style.height = "100%";
        aboutNav.style.display = "block";
      }
      productsInfo.onclick = () => {
        infoContainer.style.width = "0";
        infoNav.style.display = "none";
      }
      homeInfo.onclick = () => {
        infoContainer.style.width = "0";
        infoNav.style.display = "none";
        navContainer.style.display = "flex";
        firstContainer.style.height = "750px";
        thirdSection.style.height = "0";
        thirdSection.style.overflow = "hidden";
      }

    }
    let img = document.createElement("img");
    img.src = el.img;
    img.classList.add("img");
    let name = document.createElement("h1");
    name.classList.add("name");
    name.innerHTML = el.name;
    let price = document.createElement("p");
    price.innerHTML = el.price;
    price.classList.add("price");
    card.append(img, name, price);
    secondBox.append(card);
  });
}

export { firstGetData, secondGetData };
