(function() {
	var deletedCallback = function deletedCallback(data) {
		document.location = '/projects';
	};

	$(document).ready(function() {
		$('a.project-link').click(function() {
			var id = this.getAttribute('data-id');

			$.ajax({
				url: '/project/' + id,
				type: 'DELETE',
			})
			.done(deletedCallback);

		});
	});

})();
