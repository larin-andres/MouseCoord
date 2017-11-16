describe('getMouseCoord', function () {

	beforeEach(function () {
		loadFixtures('button.html');
		this.targetElem = $('#button');
		this.coordElem = $('#grandparent');

	})

	describe('button click event', function () {

		it('click button', function () {
			var spyEvent = spyOnEvent('#button', 'click');
			this.targetElem.click();
			expect('click').toHaveBeenTriggeredOn('#button');
			expect(spyEvent).toHaveBeenTriggered();
		})
	})

	describe('get click coordinates', function () {
		beforeEach(function () {
			var spy = spyOn(window, 'getMouseCoordJ').and.callThrough();
			spy(this.targetElem, this.coordElem);

		})
		it('return X coordinate', function(){
			this.targetElem.clickInside(45, 45, this.coordElem);
			console.log($('#X').text());
			expect( parseInt($('#X').text())).toEqual(45);
		});

		it('return Y coordinate', function(){
			this.targetElem.clickInside(4, 55, this.coordElem);
			console.log($('#Y').text());
			expect( parseInt($('#Y').text())).toEqual(55);
		});
	});
})
