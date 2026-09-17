const discount = document.getElementById("discount");
const description = document.querySelectorAll(".description");

discount.addEventListener("click", function() {
	if (discount.textContent == "Click to get a discount !") {
		discount.textContent = "Thanks !";
	} else {
		discount.textContent = "Click to get a discount !";
	}
	description.forEach(description => description.classList.toggle('hidden'));
});

const nav = document.querySelector(".navigation");
const burger = document.getElementById("burger");

burger.addEventListener("click", () => {
	nav.classList.toggle('open');
});