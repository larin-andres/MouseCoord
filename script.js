'use strict'

let button = document.getElementById('button');
let grandParent = document.getElementById('grandparent');
let parent = document.getElementById('parent');


let GetMouseCoord = function(targetElem, coordElem) {
	let result = [],
		el = coordElem.getBoundingClientRect();
	this.handleEvent = (e) => {
		let x = e.clientX - el.left - coordElem.clientLeft;
		let y = e.clientY - el.top - coordElem.clientTop;

		result = [x, y];
		console.log('Result via coordinates',result);
	}
	targetElem.addEventListener('click', this, false);
}



let GetMouseCoordOff = function(targetElem, coordElem) {
	let el = coordElem.getBoundingClientRect(),
		btn = button.getBoundingClientRect(),
		body = document.body.getBoundingClientRect();

	this.handleEvent = (e) => {

			let x = 0,
				y = 0;

			while(coordElem) {
				if(coordElem.tagName == "BODY"){
					x += body.left + document.body.clientLeft;
					y += body.top + document.body.clientTop;
				} else {
					x += coordElem.offsetLeft + coordElem.clientLeft;
					y += coordElem.offsetTop + coordElem.clientTop;
				}

				coordElem = coordElem.offsetParent;
			}

			let result = [ e.clientX - x, e.clientY - y];
			console.log('Result via offset',result);
			return result
	}
	targetElem.addEventListener('click', this, false);
}

let mouseCoord = new GetMouseCoord(button, button);
let mouseCoordOff = new GetMouseCoordOff(button, button);