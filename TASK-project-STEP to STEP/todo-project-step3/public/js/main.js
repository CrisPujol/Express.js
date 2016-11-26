$('#tasks li').on('click', function(event) {

	event.preventDefault();
	const id = $(this).attr('data-index')
	let $currentElem = $(this);
	console.log(`${id} to be removed...`)

	$.ajax({
		url: '/task/' + id,
		type: 'DELETE'
	})
	.done(function() {
		$currentElem.remove();
	})

	/* Act on the event */
});