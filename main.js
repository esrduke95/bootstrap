/*
 * 1. Create a collection of 8 ducks
 *  a. split between male/female (not all the same)
 *  b. same with size
 *  c. At least 3 rubber ducks
 * 2. Print Ducks to Dom
 */
const ducks = [
    {
      color: 'white',
      name: 'SpottieOttieDopaliscious',
      breed: 'American Pekin',
      size: 'small', // one of: small, medium, large
      temperament: 'easy-going',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Amerikanische_Pekingenten_2013_01%2C_cropped.jpg/330px-Amerikanische_Pekingenten_2013_01%2C_cropped.jpg',
      gender: 'female', // one of: male, female
      age: 2,// int
      isRubber: false, //bool
    },
    {
        color: 'green',
        name: 'Boris',
        breed: 'Cayuga',
        size: 'large', // one of: small, medium, large
        temperament: 'loose cannon',
        imageUrl: 'http://media.tractorsupply.com/is/image/TractorSupplyCompany/20160511-tsc-out-here-cayuga-ducks?$650$',
        gender: 'male', // one of: male, female
        age: 4,// int
        isRubber: false, //bool
      },
      {
        color: 'mallard',
        name: 'Quackers',
        breed: 'Welsh Harlequin',
        size: 'medium', // one of: small, medium, large
        temperament: 'ridiculously chill, like way too chill',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/59698a7d29687fd47a2a7c52/1581980316821-2NR2F21INWP9G4U8YLO6/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/mallard-8085.jpg?format=750w',
        gender: 'male', // one of: male, female
        age: 35,// int
        isRubber: true, //bool
      },
      {
        color: 'black',
        name: 'Daffy',
        breed: 'American Black Duck',
        size: 'large', // one of: small, medium, large
        temperament: 'hot-headed',
        imageUrl: 'https://i.pinimg.com/564x/f1/2c/53/f12c53288950b6af818376c386503312.jpg',
        gender: 'male', // one of: male, female
        age: 83,// int
        isRubber: true, //bool
      },
      {
        color: 'White',
        name: 'Getzlaf',
        breed: 'Anaheim',
        size: 'large', // one of: small, medium, large
        temperament: 'aggressive',
        imageUrl: 'https://cdn.vox-cdn.com/thumbor/A9SsGuNiczlpqLi0mi5jlK_h66k=/0x0:4246x2831/1220x813/filters:focal(1705x508:2383x1186):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57503483/860964498.0.jpg',
        gender: 'male', // one of: male, female
        age: 34,// int
        isRubber: false, //bool
      },
      {
        color: 'blue',
        name: 'Bleu',
        breed: 'Pomeranian',
        size: 'medium', // one of: small, medium, large
        temperament: 'rather sad',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0604/4801/products/Blue_2_720x.jpeg?v=1568675819',
        gender: 'female', // one of: male, female
        age: 7,// int
        isRubber: true, //bool
      },
      {
        color: 'black and white',
        name: 'Moo',
        breed: 'Magpie',
        size: 'small', // one of: small, medium, large
        temperament: 'sensitive',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Magpie_%28duck%29_drake_2011-08-24_001.jpg/330px-Magpie_%28duck%29_drake_2011-08-24_001.jpg',
        gender: 'male', // one of: male, female
        age: 1,// int
        isRubber: false, //bool
      },
      {
        color: 'yellow',
        name: 'XMAS JAXON FLAXON WAXON',
        breed: 'Saxony',
        size: 'small', // one of: small, medium, large
        temperament: 'happy!',
        imageUrl: 'https://www.holderreadfarm.com/photogallery/saxony_page/Sx_Oct2806_N66.jpg',
        gender: 'female', // one of: male, female
        age: 12,// int
        isRubber: false, //bool
      },
  ];


  const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
  };


  const createDucks = (duckCollection) => {
    let domString = '';
  
    for (let i = 0; i < duckCollection.length; i++) {
        const duckies = duckCollection[i];

        domString += `<div class="container">`;

        domString += `
        <div class="card col-2 duck">
          <h2>${duckies.name}</h2>
          <img src="${duckies.imageUrl}" alt="duck">
          <h4>BREED: ${duckies.breed}</h4>
          <h4>AGE: ${duckies.age}</h4>
          <h4>TEMPERAMENT: ${duckies.temperament}</h4>
        </div>
      `;

        domString += `</div>`;

    }
     printToDom('#duckDiv', domString);
  }

const filterSize = (event) => {
    const buttonId = event.target.id;
    const sizeFilteredDucks = [];
    if (buttonId === 'small');
    return;
}

for (let i = 0; i < ducks.length; i++); 
    if (ducks[i].size === buttonId) {
        sizeFilteredDucks.push(ducks[i]);
    }

  const init = () => {
      createDucks(ducks);
  }
  
  init();