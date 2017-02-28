(function() {
	var deletedCallback = function deletedCallback(data) {
    toastr.success('Project deleted.');
	};

	$(document).ready(function() {
		$('a.project-link').click(function() {
			var id = this.getAttribute('data-id');
      $(this.parentElement).remove();

			$.ajax({
				url: '/project/' + id,
				type: 'DELETE',
			})
      .done(deletedCallback);
		});
	});

})();
