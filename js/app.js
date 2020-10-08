'use strict';
let hornArrary = [];
const hornNumber = [1, 2, 3, 100]
let hornNum = '';

function pageOne() {
  render(1)
}

function pageTwo() {
  $.ajax('../data/page-2.json').then(data => {
    console.log('words');
    data.forEach(object => {
      let horn = new HornInfo(object.image_url, object.title, object.description, object.keyword, object.horns, 2);
    });
    HornInfo.dropDown(data);
    render(2)
  })
}

$.ajax('../data/page-1.json').then(data => {
  data.forEach(object => {
    let horn = new HornInfo(object.image_url, object.title, object.description, object.keyword, object.horns, 1);
  });
  render(1);
  HornInfo.dropDown(data);
})


function HornInfo(image_url, title, description, keyword, horns, page) {
  this.imgUrl = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  this.page = page
  hornArrary.push(this);
}

// renders without Mustach.js
// HornInfo.prototype.render = function (keyword) {
//   const template = $('#photo_template');
//   const $newSection = template.clone();
//   hornArrary.forEach(object => {
//     if (object.horns === 1) {
//       hornNum = 'one';
//       // console.log(Event.target.value);
//     } else if (object.horns === 2) {
//       hornNum = 'two';
//     } else if (object.horns === 3) {
//       hornNum = 'three';
//     } else {
//       hornNum = 'one-hundred';
//     }
//   })
//   $newSection.attr('class', keyword);
//   $newSection.addClass(hornNum);
//   $newSection.find('h2').text(this.title);
//   $newSection.find('p').text(` ${this.description}. Number of horns ${this.horns}`);
//   $newSection.find('img').attr('src', this.imgUrl);
//   $newSection.find('img').attr('title', this.title);
//   $('main').append($newSection);
// };

// renders with Mustache.js
function render(pageNumber) {
  // console.log(hornArrary);
  $('section').remove();
  hornArrary.forEach(obj => {
    if (obj.page === pageNumber) {
      // console.log(obj.page)
      let $template = $('#mustache-tmpl').html();
      let mustTmpl = Mustache.render($template, obj);
      $('main').append(mustTmpl);
    }
  });
}

HornInfo.dropDown = () => {
  let tempArray = [];
  hornArrary.forEach((value) => tempArray.push(value.keyword));

  (hornArrary).forEach(value => {
    const $newOptionTag = $('<option></option>');
    $newOptionTag.attr('class', value.keyword);
    $newOptionTag.text(value.keyword);
    $('#s1').append($newOptionTag);
  });

  hornNumber.forEach(number => {
    const $options = $('<option></option>');
    $options.text(number);
    $('#s2').append($options);
  });
};

let keyword = [];

function filterHorns(Event) {
  $('section').hide();

  hornArrary.forEach((object) => {
    if (Event.target.value === object.keyword) {
      console.log(object);
      $('.' + Event.target.value).show();
    }

  });
}

function sortByHorn(Event) {
  $('section').hide();
  hornArrary.forEach((object) => {
    if (object.horns === 1) {
      hornNum = 1;
    } else if (object.horns === 2) {
      hornNum = 2;
    } else if (object.horns === 3) {
      hornNum = 3;
    } else {
      hornNum = 100;
    }
    console.log(Event.target.value);
    if (Event.target.value == hornNum) {
      let classes = Event.target.value;
      console.log($('.' + classes));
      $('.' + classes).show();
    }

  });
}

$('.page1').on('click', pageOne);
$('.page2').on('click', pageTwo);
$('#s1').on('change', filterHorns);
$('#s2').on('change', sortByHorn)
