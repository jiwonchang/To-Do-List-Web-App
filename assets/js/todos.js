// when an element with class "task" INSIDE a <ul> is clicked, run the code
$("ul").on("click", ".task", function() {
	$(this).toggleClass("completed");
});

// when an element with class "delete" INSIDE a <ul> is clicked, run the code
$("ul").on("click", ".delete", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// adding the value of the input field when we press "enter", and clearing the input field
$("input[type = 'text']").on("keypress", function(event) {
	if (event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();
		// create a new li and add to ul
		$(this).val("");
		$("ul").append("<li><span class='delete'><i class='fas fa-trash-alt'></i></span> <span class='task'>" + todoText + "</span></li>");
	}
})

$(".fa-plus").on("click", function() {
	$("input[type = 'text']").fadeToggle();
})