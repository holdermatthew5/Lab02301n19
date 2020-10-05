'use strict';
const hornArrary = [];
let pageChange = '../data/page-1.json';

function changePage() {
  if (pageChange === '../data/page-1.json') {
    pageChange = '..data/page-2.json';
    console.log('1st' + pageChange);
  } else {
    pageChange = '../data/page-1.json';
    console.log('2nd' + pageChange);
  }

<<<<<<< HEAD
function filter(keyword) {
  $.ajax('../data/page-1.json').then(data => {
    console.log('data:  ', data);
    data.forEach(object => {let horn = new HornInfo(object.image_url, object.title, object.description, object.keyword, object.horns);
      console.log(horn);
    horn.render();
    });
  })
}
filter();

function HornInfo(image_url, title, description, keyword, horns) {
  console.log(title);
=======
}
// changePage();
$.ajax('../data/page-1.json').then(data => {
  // console.log('data:  ', data);
  data.forEach(object => {
    let horn = new HornInfo(object.image_url, object.title, object.description, object.keyword, object.horns);
    // console.log(horn);
    horn.render(object.keyword);
  });
  dropDown(data);
})

function HornInfo(image_url, title, description, keyword, horns) {
>>>>>>> 8dbdf5e8376d88b0717753cdfd33f99baa732fd0
  this.imgUrl = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  hornArrary.push(this);
}
<<<<<<< HEAD
HornInfo.prototype.render = function () {
  const template = $('#photo_template');
  const $newSection = template.clone();
  $newSection.attr('id', 'template');
=======
HornInfo.prototype.render = function (keyword) {
  const template = $('#photo_template');
  const $newSection = template.clone();
  // console.log(keyword);
  $newSection.attr('class', keyword);
>>>>>>> 8dbdf5e8376d88b0717753cdfd33f99baa732fd0
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(` ${this.description}. Number of horns ${this.horns}`);
  $newSection.find('img').attr('src', this.imgUrl);
  $newSection.find('img').attr('title', this.title);
  $('main').append($newSection);
};
<<<<<<< HEAD
HornInfo.dropDown = () => {
  let tempArray = [];
  hornArrary.forEach((value) => tempArray.push(value.keyword));
=======

function dropDown(hornArrary) {
  // let tempArray = [];
  // hornArrary.forEach((value) => {
  //   console.log();
  //   tempArray.push(value.keyword);
  // })
>>>>>>> 8dbdf5e8376d88b0717753cdfd33f99baa732fd0
  //removed (words)from in between temparry and closing parenthesis
  (hornArrary).forEach(value => {
    const $newOptionTag = $('<option></option>');
    // console.log(value.keyword);
    $newOptionTag.attr('class', value.keyword);
    $newOptionTag.text(value.keyword);
    $('select').append($newOptionTag);
  });
<<<<<<< HEAD
  $('select').on('change', handler);
  function handler(Event) {
    $('section').hide();
    hornArrary.forEach((object) => {
      if (Event.target.value === object.keyword) {
        $('#object.keyword').show();
      }
    });
  }
};

console.log(hornArrary);
=======
}
let keyword = [];

// function initialize() {
//   $.ajax('./data/page-1.json').then(data => {
//     data.forEach(photo => {
//       let photoObject = new Photo(photo.image_url, photo.title, photo.description, photo.keywords, photo.horns);
//       let $newPhoto = $template.clone();
//       $newPhoto.attr('class', '${photoObject.key} photo');
//       $container.append($newPhoto)
//       if (keywords.indexOf(photoObject.key) == -1) {
//         keywords.push(photoObject.key);
//         $dropdown.append(
//           $('<option></option>').text(photoObject.key)
//         )
//       }
//     })
//   })
// }


$('select').on('change', filterHorns);
$('.dropdown').on('click', sortByHorn)
function filterHorns(Event) {
  // console.log(Event.target.value)
  $('section').hide();

  hornArrary.forEach((object) => {
    if (Event.target.value === object.keyword) {
      $('.' + Event.target.value).show();
    }

  });
}
function sortByHorn (Event) {
  $('section').hide();
  hornArrary.forEach((object) => {
    let hornNum = '';
    console.log(hornNum);
    if (object.horns === 1) {
      hornNum = 'one';
      console.log(Event.target);
    } else if (object.horns === 2) {
      hornNum = 'two';
    } else if ( object.horns === 3) {
      hornNum = 'three';
    } else {
      hornNum = 'one-hundred';
    }
    if (Event.target.value === hornNum) {
      $('.' + Event.target.value).show();
    }

  });
}
// console.log(hornArrary);

$('.page2').on('onclick', changePage);
>>>>>>> 8dbdf5e8376d88b0717753cdfd33f99baa732fd0
