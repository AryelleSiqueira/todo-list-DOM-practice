document.querySelector(".btn").addEventListener("click", addTask);
document.addEventListener("keydown", addTask);

function addTask(event) {
	if (event.type == "click" || (event.type == "keydown" && event.key == "Enter")) {
		let inputBox = document.querySelector(".input-text");

		if (inputBox.value.length !== 0) {
			let newListItem = document.createElement("li");

			let span = document.createElement("span");

			let newCheckbox = document.createElement("input");
			newCheckbox.setAttribute("type", "checkbox");
			newCheckbox.addEventListener("click", function() {
				this.parentElement.classList.toggle("crossed-out");
			});

			span.append(inputBox.value, newCheckbox);

			let trashCanIcon = document.createElement("span");
			trashCanIcon.classList.add("far", "fa-trash-alt", "trash-can-icon");
			trashCanIcon.addEventListener("click", function() {
				this.parentElement.remove();
			});

			newListItem.append(span, " ", trashCanIcon);
			document.querySelector("ul").append(newListItem);
			
			inputBox.value = "";
		}
	}
}

