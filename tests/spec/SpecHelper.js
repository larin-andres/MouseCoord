jQuery.fn.extend({
	clickInside : function(x, y, elem){
		var offset = elem.offset();
		var e = new jQuery.Event("click");
		e.pageX = offset.left + x + elem[0].clientLeft;
		e.pageY = offset.top + y + elem[0].clientTop;
		return this.trigger(e); // for chaining
	}
});