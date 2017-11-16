'use strict'

var htmlDoc = document.documentElement,
	bodyDoc = document.body,
	button = document.getElementById('button'),
	grandParent = document.getElementById('grandparent'),
	parent = document.getElementById('parent'),
	targetElem = document.getElementById('button'),
	coordElem = document.getElementById('grandparent');


// let getMouseCoord = function(e) {
//
// 	let rectEl = coordElem.getBoundingClientRect(),
// 		elemScrollTop = window.pageYOffset,
// 		elemScrollLeft = window.pageXOffset;
//
// 	let posLeft = e.clientX + elemScrollLeft,
// 		posTop = e.clientY + elemScrollTop,
// 		rectLeft = rectEl.left + elemScrollLeft,
// 		rectTop = rectEl.top + elemScrollTop;
//
// 	let x = posLeft - rectLeft - coordElem.clientLeft,
// 		y = posTop - rectTop - coordElem.clientTop;
//
// 	let result = [x, y];
//
// 	console.log('Result via coordinates',result);
// 	console.log(`RectLeft: ${rectLeft}, rectTop: ${rectTop}`);
// 	console.log(`PosLeft: ${posLeft}, posTop: ${posTop}`);
// 	console.log(`ClientLeft: ${coordElem.clientLeft}, ClientTop: ${coordElem.clientTop}`);
// 	console.log(`ScrollLeft: ${elemScrollLeft}, scrollTop: ${elemScrollTop}`);
// }
// targetElem.addEventListener('click', getMouseCoord, false);

var targetElemJ = $('#button');
var coordElemJ = $('#grandparent');

var eventHandlerJ = function (e) {
	var offset = this.offset();
	var xJ = e.pageX - offset.left - this[0].clientLeft,
		yJ = e.pageY - offset.top - this[0].clientTop;

	var resultJ = [xJ, yJ];

	$('#parent').append($(`<p id="X"> ${xJ} </p>`))
		.append($(`<p id="Y"> ${yJ} </p>`));

	// console.log(($('#X').text()));
	// console.log(resultJ)

	// console.log('ResultJ via coordinates',resultJ);
	// console.log(`OffsetLeft: ${offset.left}, OffsetTop: ${offset.top}`);
	// console.log(`PosLeftJ: ${e.pageX}, posTopJ: ${e.pageY}`);
	// console.log(`ClientLeftJ: ${this[0].clientLeft}, ClientTopJ: ${this[0].clientTop}`);
}

var getMouseCoordJ = function (targetEl, coordEl) {
	return targetEl.on('click', $.proxy(eventHandlerJ, coordEl));

}
getMouseCoordJ(targetElemJ, coordElemJ);


// Get mouse coordinates via pure js
// let GetMouseCoord = function(targetElem, coordElem) {
//
// 	this.handleEvent = (e) => {
// 		let rectEl = coordElem.getBoundingClientRect(),
// 			elemScrollTop = window.pageYOffset,
// 			elemScrollLeft = window.pageXOffset;
//
// 		let posLeft = e.clientX + elemScrollLeft,
// 			posTop = e.clientY + elemScrollTop,
// 			rectLeft = rectEl.left + elemScrollLeft,
// 			rectTop = rectEl.top + elemScrollTop;
//
// 		let x = posLeft - rectLeft - coordElem.clientLeft,
// 			y = posTop - rectTop - coordElem.clientTop;
//
// 		let result = [x, y];
// 		console.log('Result via coordinates',result);
// 		console.log(`RectTop: ${rectTop}, rectLeft: ${rectLeft}`);
// 		console.log(`PosTop: ${posTop}, posLeft: ${posLeft}`);
// 		console.log(`ScrollTop: ${elemScrollTop}, scrollLeft: ${elemScrollLeft}`);
// 	}
// 	targetElem.addEventListener('click', this, false);
// }
//
// let mouseCoord = new GetMouseCoord(button, grandParent);
// console.log( mouseCoord.this);

// Get mouse coordinates via offsets method, won`t be received accurate result

// let GetMouseCoordOff = function(targetElem, coordElem) {
// 	let el = coordElem.getBoundingClientRect(),
// 		btn = button.getBoundingClientRect(),
// 		body = document.body.getBoundingClientRect();
//
// 	this.handleEvent = (e) => {
//
// 			let x = 0,
// 				y = 0;
//
// 			while(coordElem) {
// 				if(coordElem.tagName == "BODY"){
// 					x += body.left + document.body.clientLeft;
// 					y += body.top + document.body.clientTop;
// 				} else {
// 					x += coordElem.offsetLeft + coordElem.clientLeft;
// 					y += coordElem.offsetTop + coordElem.clientTop;
// 				}
//
// 				coordElem = coordElem.offsetParent;
// 			}
//
// 			let result = [ e.clientX - x, e.clientY - y];
// 			console.log('Result via offset',result);
// 			return result
// 	}
// 	targetElem.addEventListener('click', this, false);
// }

// let mouseCoordOff = new GetMouseCoordOff(button, button);