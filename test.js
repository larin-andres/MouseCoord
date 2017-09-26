'use strict'

describe("getMouseCoord", () => {
	it('get mouse coordinates', () => {
		assert.deepEqual(mouseCoord(button, button), [0, 0])
	})
})
