jQuery.fn.dropdown = function() {
	return this.each(function() {
		var me = $(this);
		var toggler = me.find('.dropdown-toggle');

		toggler.on('click', function(event) {
			event.preventDefault();
			event.stopPropagation();
			if (!me.hasClass('open')) {
				$('.dropdown').removeClass('open');
			}
			me.toggleClass('open');
		});

		$(window).on('click', function(event){
			if (!(event.target.className == 'dropdown-toggle')) {
				$('.dropdown').removeClass('open');
			}
		});
	});
};