'use strict';

console.clear();

var app = function () {
	var body = undefined;
	var menu = undefined;
	var menuItems = undefined;

	var init = function init() {
		body = document.querySelector('body');
		menu = document.querySelector('.menu-icon');
		menuItems = document.querySelectorAll('.nav__list-item');

		applyListeners();
	};

	var applyListeners = function applyListeners() {
		menu.addEventListener('click', function () {
			return toggleClass(body, 'nav-active');
		});
	};

	var toggleClass = function toggleClass(element, stringClass) {
		if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
	};

	init();
}();
var download = $('.download'),
    meter = $('.meter');

$('.button-download').on('click', function(e) {
  download.toggleClass('is-active');
  
  setTimeout(function() {
    meter.toggleClass('is-done');
  }, 4000);
  
  e.preventDefault();
});

$('#reset').on('click', function() {
  download.removeClass('is-active');
  meter.removeClass('is-done');
});