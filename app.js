// Car Data

const carData = [
  {
    brand: "Abarth",
    model: "500",
    price: "$12850",
    year: "2013.",
    fuel: "Petrol",
    kilometers: "84800km",
    img: "../img/abarth1.jpg",
  },
  {
    brand: "Audi",
    model: "RS7",
    price: "$43450",
    year: "2013.",
    fuel: "Petrol",
    kilometers: "108000km",
    img: "./img/audi1.jpg",
  },
  {
    brand: "Land Rover",
    model: "Range Rover Evoque",
    price: "$22400",
    year: "2015.",
    fuel: "Diesel",
    kilometers: "112000km",
    img: "./img/land-rover1.jpg",
  },
  {
    brand: "BMW",
    model: "320",
    price: "$16300",
    year: "2016.",
    fuel: "Petrol",
    kilometers: "152000km",
    img: "./img/bmw1.jpg",
  },
  {
    brand: "Mercedes Benz",
    model: "GT 53",
    price: "$99950",
    year: "2019.",
    fuel: "Petrol",
    kilometers: "1km",
    img: "./img/mercedes3.jpg",
  },
  {
    brand: "Ford",
    model: "Focus",
    price: "$11790",
    year: "2017.",
    fuel: "Petrol",
    kilometers: "56000km",
    img: "./img/ford1.jpg",
  },
  {
    brand: "Hyundai",
    model: "Tucson",
    price: "$16900",
    year: "2016.",
    fuel: "Diesel",
    kilometers: "84800km",
    img: "./img/hyundai1.jpg",
  },
  {
    brand: "Mercedes Benz",
    model: "C320",
    price: "$12000",
    year: "2010.",
    fuel: "Diesel",
    kilometers: "198000km",
    img: "./img/mercedes1.jpg",
  },
  {
    brand: "Mitsubishi",
    model: "Lancer",
    price: "$7000",
    year: "2011.",
    fuel: "Petrol",
    kilometers: "120000km",
    img: "./img/mitsubishi1.jpg",
  },
  {
    brand: "Nissan",
    model: "Juke",
    price: "$16890",
    year: "2018.",
    fuel: "Diesel",
    kilometers: "38000km",
    img: "./img/nissan1.jpg",
  },
  {
    brand: "Opel",
    model: "Astra H",
    price: "$3200",
    year: "2006.",
    fuel: "Diesel",
    kilometers: "190000km",
    img: "./img/opel1.jpg",
  },
  {
    brand: "Renault",
    model: "Koleos",
    price: "$30990",
    year: "2018.",
    fuel: "Diesel",
    kilometers: "71000km",
    img: "./img/renault1.jpg",
  },
  {
    brand: "Mercedes Benz",
    model: "G63",
    price: "$85900",
    year: "2013.",
    fuel: "Petrol",
    kilometers: "63000km",
    img: "./img/mercedes4.jpg",
  },
  {
    brand: "Volkswagen",
    model: "Passat B7",
    price: "$7900",
    year: "2011.",
    fuel: "Diesel",
    kilometers: "196000km",
    img: "./img/volkswagen1.jpg",
  },
  {
    brand: "Hyundai",
    model: "Santa Fe",
    price: "$48190",
    year: "2019.",
    fuel: "Diesel",
    kilometers: "3500km",
    img: "./img/hyundai2.jpg",
  },
  {
    brand: "BMW",
    model: "320",
    price: "$12890",
    year: "2013.",
    fuel: "Diesel",
    kilometers: "167000km",
    img: "./img/bmw2.jpg",
  },
  {
    brand: "BMW",
    model: "318",
    price: "$5200",
    year: "2007.",
    fuel: "Petrol",
    kilometers: "188000km",
    img: "./img/bmw3.jpg",
  },
  {
    brand: "Mercedes Benz",
    model: "CLS 350",
    price: "$69990",
    year: "2019.",
    fuel: "Petrol",
    kilometers: "33700km",
    img: "./img/mercedes2.jpg",
  },
  {
    brand: "Mercedes Benz",
    model: "ML 63",
    price: "$28900",
    year: "2008.",
    fuel: "Diesel",
    kilometers: "158000km",
    img: "./img/mercedes5.jpg",
  },
  {
    brand: "Opel",
    model: "Monza",
    price: "$11500",
    year: "1979.",
    fuel: "Petrol",
    kilometers: "127500km",
    img: "./img/opel2.jpg",
  },
  {
    brand: "Audi",
    model: "RS3",
    price: "$38500",
    year: "2016.",
    fuel: "Petrol",
    kilometers: "33000km",
    img: "./img/audi2.jpg",
  },
  {
    brand: "Ford",
    model: "Mustang",
    price: "$16200",
    year: "2012.",
    fuel: "Petrol",
    kilometers: "99240km",
    img: "./img/ford2.jpg",
  },
];

const carList = document.querySelector(".car-list-container");

// Use carData const to create new elements

function createCarContainer() {
  for (let i = 0; i < carData.length; i++) {
    let newCarContainer = document.createElement("div");
    newCarContainer.classList.add("car-container");

    newCarContainer.innerHTML += `

        <img src="${carData[i].img}" alt="Car Image" class="car-image" />
          <div class="car-description-container">
            <h2 class="car-title">
              <span class="car-brand">${carData[i].brand}</span>
              <span class="car-model">${carData[i].model}</span>
            </h2>
            
            <ul class="car-info">
              <li class="car-year">Year: ${carData[i].year}</li>
              <li class="car-fuel">Fuel: ${carData[i].fuel}</li>
              <li>Kilometers: ${carData[i].kilometers}</li>
            </ul>
          </div>
          <span class="price-container"
              ><span class="car-price">${carData[i].price}</span></span
            >
    
    `;

    carList.appendChild(newCarContainer);
  }
}

// Load Car Data at the beginning

window.onloadedmetadata = createCarContainer();

// Reset Display Settings ( Show All Cars Again )

function showAll() {
  document.querySelector(".car-list-container").style.display = "block";
  document.querySelector(".ad-video-container").style.display = "flex";
  document.querySelector(".large-ad-container").style.display = "none";
  document.querySelectorAll(".car-container").forEach((container) => {
    container.style.display = "flex";
  });
}

// Add Brand options

function displayBrands() {
  const brands = carData.reduce(
    function (values, option) {
      if (!values.includes(option.brand)) {
        values.push(option.brand);
      }
      return values;
    },
    ["--All Brands--"]
  );

  const brandOptions = brands
    .map((brand) => {
      return `<option value="${brand}">${brand}</option>`;
    })
    .sort()
    .join("");

  console.log(brandOptions);

  document.querySelector("#brand").innerHTML = brandOptions;
}

displayBrands();

// Select Brand

function changeBrand() {
  const brandSelect = document.querySelector("#brand");
  const allTitles = document.querySelectorAll(".car-brand");
  let selectedBrand = brandSelect.value.toLowerCase();

  // If all brands are selected, display all cars

  if (selectedBrand == "--all brands--") {
    return;
  }

  // Loop through titles to check if it matches selected value

  allTitles.forEach((title) => {
    if (title.textContent.toLowerCase() !== selectedBrand) {
      title.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
}

// Changing Price Range

function priceRange() {
  let minPriceValue = document.querySelector("#min-price").value;
  let maxPriceValue = document.querySelector("#max-price").value;
  let carPrices = document.querySelectorAll(".car-price");

  // If input fields are left blank, set some default value

  minPriceValue == "" ? (minPriceValue = 0) : minPriceValue;

  maxPriceValue == "" ? (maxPriceValue = 999999) : maxPriceValue;

  // Filter cars by price

  carPrices.forEach((price) => {
    let soloPrice = parseInt(price.textContent.replace("$", ""));

    if (soloPrice < minPriceValue || soloPrice > maxPriceValue) {
      price.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
}

// Choose Fuel Type

function chooseFuel() {
  let fuelTypeSelector = document.querySelector("#fuel");
  let selectedFuel = fuelTypeSelector.value;

  let carFuel = document.querySelectorAll(".car-fuel");

  carFuel.forEach((fuel) => {
    if (
      selectedFuel != "any-fuel" &&
      !fuel.textContent.toLowerCase().includes(selectedFuel)
    ) {
      fuel.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
}

// Choose Year

function chooseYear() {
  let lowerYear = document.querySelector("#lower-year").value;
  let higherYear = document.querySelector("#higher-year").value;

  higherYear == "any-year" ? (higherYear = "2020") : higherYear;
  lowerYear == "any-year" ? (lowerYear = "1960") : lowerYear;

  let carYear = document.querySelectorAll(".car-year");
  carYear.forEach((year) => {
    // Check if Lower Year is NOT Lower, and then make it equal
    if (lowerYear > higherYear) {
      higherYear = lowerYear;
    }

    // Leave Only Cars Between Selected Years
    if (
      year.textContent.replace("Year: ", "").replace(".", "") >= lowerYear &&
      year.textContent.replace("Year: ", "").replace(".", "") <= higherYear
    ) {
      // year.parentElement.parentElement.parentElement.style.display = "flex";
    } else {
      year.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
}

// Confirm Button Click

function searchConfirm() {
  showAll();
  changeBrand();
  chooseFuel();
  priceRange();
  chooseYear();
}

// Ad Video Settings

const adVideoList = [
  "./img/ad-video1.mp4",
  "./img/ad-video2.mp4",
  "./img/ad-video3.mp4",
  "./img/ad-video4.mp4",
];

const adVideoContainer = document.querySelector(".ad-video-container");

let adIterator = 0;

function changeAdVideo() {
  const adVideo = document.querySelector(".ad-video");

  adIterator++;
  adIterator >= adVideoList.length ? (adIterator = 0) : adIterator;

  adVideo.src = adVideoList[adIterator];
}
setInterval(changeAdVideo, 10000);

// Large Ad Slider

const sliderArrowRight = document.querySelector("#slide-right");
const sliderArrowLeft = document.querySelector("#slide-left");
const adImages = document.querySelectorAll(".ad-img");
let sliderIterator = 0;
const imgWidth = adImages[0].clientWidth;
const sliderDots = document.querySelectorAll(".dot");

sliderArrowRight.addEventListener("click", () => {
  if (sliderIterator >= adImages.length - 1) {
    return;
  }
  sliderIterator++;
  adImages.forEach((image) => {
    image.style.transform = "translateX(" + -sliderIterator * 100 + "%)";
  });
  sliderDots.forEach((dot) => {
    dot.classList.remove("dot-active");
  });
  sliderDots[sliderIterator].classList.add("dot-active");
});

sliderArrowLeft.addEventListener("click", () => {
  if (sliderIterator < 1) {
    return;
  }
  sliderIterator--;
  adImages.forEach((image) => {
    image.style.transform = "translateX(" + -sliderIterator * 100 + "%)";
  });
  sliderDots.forEach((dot) => {
    dot.classList.remove("dot-active");
  });
  sliderDots[sliderIterator].classList.add("dot-active");
});

// Modal Container

// Create Modal and use variables in it

function createModal(e) {
  const newModal = document.createElement("div");
  newModal.classList.add("modal-container");

  const targetContainer = e.target;

  newModal.innerHTML = `
   <button id="modal-close"></button>
   <div class="modal-content">
     <div class="modal-main">
       <h1 class="modal-title">${targetContainer.children[1].children[0].children[0].textContent}
        ${targetContainer.children[1].children[0].children[1].textContent}</h1>
       <img src="${targetContainer.children[0].src}" alt="${targetContainer.children[1].children[0].children[0].textContent}" class="modal-img" />
     </div>

     <div class="modal-info">
       <span class="modal-price">Price: ${targetContainer.children[2].children[0].textContent}</span>
       <span class="modal-year">${targetContainer.children[1].children[1].children[0].textContent}</span>
       <span class="modal-fuel">${targetContainer.children[1].children[1].children[1].textContent}</span>
       <span class="modal-kilometers">${targetContainer.children[1].children[1].children[2].textContent}</span>
     </div>
     <p class="modal-description">
       <span class="modal-description-title">About</span>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
       iste quasi saepe, illum ullam libero consectetur sapiente, quod,
       temporibus amet laborum ipsa minima assumenda unde dolore! Culpa
       quis voluptatem inventore expedita quas nesciunt.
     </p>
   </div>

   `;

  // Darken the background and open modal

  document.querySelector(".modal-overlay").style.display = "inline";
  document.querySelector(".modal-overlay").appendChild(newModal);

  // Close Modal

  const closeModalBtn = document.querySelector("#modal-close");

  closeModalBtn.addEventListener("click", () => {
    document.querySelector(".modal-container").remove();
    document.querySelector(".modal-overlay").style.display = "none";
  });
}

// Open Modal on Container click

const openModalTrigger = document.querySelectorAll(".car-container");

openModalTrigger.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    createModal(e);
  });
});

// Small Resolution Ad Slider
const imageSlider = document.querySelector(".ad-img-slider");

function changeAdImg() {
  if (window.innerWidth < 1100) {
    let randomNum = Math.round(Math.random() * 4);
    imageSlider.children[0].src = imageSlider.children[randomNum].src;
  }
}

window.onresize = () => {
  if (window.innerWidth > 1100) {
    imageSlider.children[0].src = "../img/ad-img/ad-mercedes1.jpg";
  }
};

setInterval(changeAdImg, 3000);
