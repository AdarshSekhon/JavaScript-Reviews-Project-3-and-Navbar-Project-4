const reviews = [
  {
    id: 1,
    name: 'Penn Badgley',
    job: 'Actor and Singer',
    img: 'https://i.guim.co.uk/img/media/5b42e55fe05a999e7416633776d1744ca6673e44/0_5_2880_1728/master/2880.jpg?width=1020&dpr=1&s=none',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'Victoria Pedretti',
    job: 'Actress',
    img: 'https://media.vanityfair.com/photos/5e011f817ffbe90009885d90/master/w_1600%2Cc_limit/you-season-2-love-actress-victoria-pedretti-interview.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Elizabeth Lail',
    job: 'Actress',
    img: 'https://media.glamour.com/photos/5c4b774db3ec153a69d6ccb6/master/w_2560%2Cc_limit/you.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Charlotte Ritchie',
    job: 'Actress and Singer',
    img: 'https://assets.vogue.com/photos/63e3b115d9adffa5570675c0/4:3/w_2560%2Cc_limit/You_S4_E4_00_40_59_16_R.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn1')
const startBtn = document.querySelector('.start-btn')
const endBtn = document.querySelector('.end-btn')

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// show person based on item

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem > reviews.length - 1) {
      currentItem = 0;
  }
  showPerson();
});

// show previous person

prevBtn.addEventListener('click', function() {
  currentItem--;
  if (currentItem < 0) {
      currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length)
  console.log(currentItem);
  showPerson();
});

endBtn.addEventListener('click', function(){
  currentItem = reviews.length - 1;
  showPerson();
});

startBtn.addEventListener('click', function(){
  currentItem = 0;
  showPerson();
});