(function() {
	var deletedCallback = function deletedCallback(data) {

    console.log('and we are in the deletedCallback');
		document.location = "/projects";
	};

	$(document).ready(function() {
		$('a.project-link').click(function() {
			var id = this.getAttribute('data-id');

      console.log('calling the ajax');
			$.ajax({
				url: '/project/' + id,
				type: 'DELETE',
			})
				.done(deletedCallback);
		});
	});

})();
