'use strict'

let htmlDoc = document.documentElement,
	bodyDoc = document.body,
	button = document.getElementById('button'),
	grandParent = document.getElementById('grandparent'),
	parent = document.getElementById('parent');

let GetMouseCoord = function(targetElem, coordElem) {

	this.handleEvent = (e) => {
		let rectEl = coordElem.getBoundingClientRect(),
			elemScrollTop = window.pageYOffset,
			elemScrollLeft = window.pageXOffset;

		let clientLeft = e.clientX + elemScrollLeft,
			clientTop = e.clientY + elemScrollTop,
			rectLeft = rectEl.left + elemScrollLeft,
			rectTop = rectEl.top + elemScrollTop;

		let x = clientLeft - rectLeft - coordElem.clientLeft,
			y = clientTop - rectTop - coordElem.clientTop;

		let result = [x, y];
		console.log('Result via coordinates',result);
		console.log(`RectTop: ${rectTop}, rectLeft: ${rectLeft}`);
		console.log(`ClientTop: ${clientTop}, clientLeft: ${clientLeft}`);
		console.log(`ScrollTop: ${elemScrollTop}, scrollLeft: ${elemScrollLeft}`);
	}
	targetElem.addEventListener('click', this, false);
}

let mouseCoord = new GetMouseCoord(button, grandParent);

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