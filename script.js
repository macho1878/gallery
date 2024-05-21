let images = [
  {
    url: "https://github.com/macho1878/gallery/blob/main/images/catch-one.jpg?raw=true",
    alt: "Catch one, mirror carp",
  },
  {
    url: "https://github.com/macho1878/gallery/blob/main/images/catch-2.jpg?raw=true",
    alt: "Catch 2, Common carp",
  },
  {
    url: "https://github.com/macho1878/gallery/blob/main/images/catch-three.jpg?raw=true",
    alt: "catch three, the zip",
  },
  {
    url: "https://github.com/macho1878/gallery/blob/main/images/catch-4.jpg?raw=true",
    alt: "Catch 4, another zip",
  },
  {
    url: "https://github.com/macho1878/gallery/blob/main/images/catch-5.jpg?raw=true",
    alt: "Catch five, the big scaley mirror",
  },
  {
    url: "https://github.com/macho1878/gallery/blob/main/images/lake.jpg?raw=true",
    alt: "The lake",
  },
  {
    url: "https://github.com/macho1878/gallery/blob/main/images/lake%20in%20snow.jpg?raw=true",
    alt: "The lake in the snow",
  },
  {
    url: "https://github.com/macho1878/gallery/blob/main/images/peg1.jpg?raw=true",
    alt: "View from peg one",
  },
  {
    url: "https://github.com/macho1878/gallery/blob/main/images/peg2.jpg?raw=true",
    alt: "View from peg two before installation",
  },
  {
    url: "https://github.com/macho1878/gallery/blob/main/images/summerhouse1-in-night.jpg?raw=true",
    alt: "Summerhouse on peg one of a night",
  },
  {
    url: "https://github.com/macho1878/gallery/blob/main/images/summerhouse1.jpg?raw=true",
    alt: "peg one summerhouse of a day",
  },
  {
    url: "https://github.com/macho1878/gallery/blob/main/images/summerhouse2.jpg?raw=true",
    alt: "peg two summerhouse",
  },
];

let thumbContainer = document.getElementById("img-container");
let displayImg = document.getElementById("display-img");

function createThumbnails(arrayOfImages) {
  for (let i = 0; i < arrayOfImages.length; i++) {
    let imgElem = document.createElement("img");

    imgElem.src = arrayOfImages[i].url;
    imgElem.alt = arrayOfImages[i].alt;

    imgElem.classList.add("thumbnail-image");

    imgElem.addEventListener("click", function () {
      console.log(imgElem);
      console.log(arrayOfImages[i]);

      createDisplayImg(arrayOfImages[i]);
    });

    thumbContainer.appendChild(imgElem);
  }
}
createThumbnails(images);

function createDisplayImg(imageObj) {
  displayImg.innerHTML = "";

  let imgTag = document.createElement("img");

  imgTag.classList.add("carp-image");

  imgTag.src = imageObj.url;

  imgTag.alt = imageObj.alt;

  displayImg.appendChild(imgTag);
}
