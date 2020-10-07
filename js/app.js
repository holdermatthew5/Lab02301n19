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
}

$.ajax('../data/page-1.json').then(data => {
  data.forEach(object => {
    let horn = new HornInfo(object.image_url, object.title, object.description, object.keyword, object.horns);
    horn.render(object.keyword);
  });
  HornInfo.dropDown(data);
})

function HornInfo(image_url, title, description, keyword, horns) {
  this.imgUrl = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  hornArrary.push(this);
}

HornInfo.prototype.render = function (keyword) {
  const template = $('#photo_template');
  const $newSection = template.clone();
  $newSection.attr('class', keyword);
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(` ${this.description}. Number of horns ${this.horns}`);
  $newSection.find('img').attr('src', this.imgUrl);
  $newSection.find('img').attr('title', this.title);
  $('main').append($newSection);
};

HornInfo.dropDown = () => {
  let tempArray = [];
  hornArrary.forEach((value) => tempArray.push(value.keyword));

  (hornArrary).forEach(value => {
    const $newOptionTag = $('<option></option>');
    console.log(value.keyword);
    $newOptionTag.attr('class', value.keyword);
    $newOptionTag.text(value.keyword);
    $('select').append($newOptionTag);
  });
};

let keyword = [];

function filterHorns(Event) {
  $('section').hide();
  
  hornArrary.forEach((object) => {
    if (Event.target.value === object.keyword) {
      console.log(Event.target.value);
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

$('.page2').on('onclick', changePage);
$('select').on('change', filterHorns);
$('.dropdown').on('click', sortByHorn)
