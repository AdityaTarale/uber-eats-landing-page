/* nav */
const nav = document.querySelector('nav');
const signIn = document.querySelector('.signIn');
const inputText = document.querySelector('nav .nav-wrapper .input-content');

window.addEventListener('scroll', () => {
  if (window.scrollY > 133) {  //scroll increase
    nav.style.background = '#fff';
    nav.style.borderBottom = '3px solid #EDEDED';
    signIn.style.background = '#F0F0F0';
  } else {                      //scroll decrease
    if (window.outerWidth > 375) {
      nav.style.background = 'transparent';
    }
    nav.style.border = 'none';
    if (window.outerWidth > 414) {
      signIn.style.background = '#fff';
    }
    signIn.style.background = '#eeeeee';
  }
  
  if (window.scrollY > 300) {
    if (window.outerWidth > 375) {
      inputText.style.display = 'block';
      inputText.style.animation = 'inputSlide 1s';
    }
  } else {
    inputText.style.display = 'none';
  }
});

const foodNearMe = [
  'Sandwich',
  'BBQ',
  'American',
  'Thai',
  'Sushi',
  'Comfort Food',
  'Mexican',
  'Bakery',
  'Asian',
  'Bubble Tea',
  'Indian',
  'Italian',
  'Desserts',
  'Alcohol',
  'Breakfast and Brunch',
  'Ice Cream and Frozen Yougurt',
  'Wings',
  'FastFood',
  'Seafood',
  'Salads',
];

const foodNearMeMenuwrapper = document.querySelector(
  '.foodNearMe .foodNearMe-wrapper .foodNearMe-Menu .foodNearMe-Menu-wrapper'
);

foodNearMe.forEach((menu) => {
  const item = document.createElement('div');
  item.classList.add('menu');
  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('img-wrapper');
  const itemImg = document.createElement('img');
  itemImg.src = `/images/${menu}.jpg`;
  const itemHead = document.createElement('a');
  itemHead.href = '#';
  itemHead.innerText = menu;
  item.appendChild(imgWrapper);
  imgWrapper.appendChild(itemImg);
  item.appendChild(itemHead);

  foodNearMeMenuwrapper.appendChild(item);
});

/* Cities */
const cities = [
  'Atlanta',
  'Dallas-Fort Worth',
  'New York City',
  'Sacramento',
  'Austin',
  'Denver',
  'Orange County',
  'San Diego',
  'Baltimore-Maryland',
  'Las Vegas',
  'Palm Springs',
  'San Francisco Bay Area',
  'Boston',
  'Los Angeles',
  'Philadelphia',
  'Seattle',
  'Charlotte',
  'Miami',
  'Phoenix',
  'Tampa Bay',
  'Chicago',
  'Minneapolis - St. Paul',
  'Portland',
  'Washington D.C.',
];
const citys = document.querySelector('.cities .cities-wrapper .city');

cities.forEach((city) => {
  let item = document.createElement('a');
  item.href = '#';
  item.innerText = city;
  citys.appendChild(item);
});

/* Countries */

const Countries = [
  'United States',
  'Canada',
  'Chile',
  'Belgium',
  'Spain',
  'Australia',
  'Switzerland',
  'Ecuador',
  'Brazil',
  'Poland',
  'New Zealand',
  'Ireland',
  'Mexico',
  'United Kingdom',
  'Colombia',
  'Argentina',
  'France',
  'Portugal',
  'Taiwan (ROC)',
  'Sweden',
  'Japan',
  'Italy',
  'South Africa',
  'Guatemala',
];

const countries = document.querySelector(
  '.countries .countries-wrapper .country'
);

Countries.forEach((countrie) => {
  let item = document.createElement('a');
  item.href = '#';
  item.innerText = countrie;
  countries.appendChild(item);
});

/* hamburger */

const hamburger = document.querySelector('.hamburger');
const sideBarWrapper = document.querySelector('.sideBar-wrapper');
const blackBG = document.querySelector('.blackBG');

hamburger.addEventListener('click', (e) => {
  if (e.target.classList.contains('hamburger')) {
    sideBarWrapper.style.left = '0em';

    blackBG.style.display = 'Block';
    document.querySelector('body').style.height = '100vh';
    document.querySelector('body').style.overflow = 'hidden';
  }
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('blackBG')) {
    sideBarWrapper.style.left = '-50em';
    if (window.outerWidth > 414) {
      sideBarWrapper.style.left = '-50em';
    }
    blackBG.style.display = 'none';
    document.querySelector('body').style.height = 'auto';
    document.querySelector('body').style.overflow = 'auto';
  }
  // console.log(e.target.classList)
});
