var cheat_meals = [
	{ Name: "Lazzarone" },
	{ Name: "Sciamannato" },
	{ Name: "Buzzurro" },
	{ Name: "Gaglioffo" },
	{ Name: "Filibustiero" },
	{ Name: "Malandrino" },
	{ Name: "Manigoldo" },
	{ Name: "Pusillanime" },
	{ Name: "Lestofante" },
	{ Name: "Mascalzone" },
	{ Name: "Citrullo" },
	{ Name: "Meretrice" },
	{ Name: "Sciocchino" },
	{ Name: "Canaglia" }
]

var $roulette = $(".roulette")

$(".spin").on("click", function() {
	$roulette.removeClass("tada").animate({ "font-size": "16px" }, 0)
	var total = cheat_meals.length,
		selected = Math.floor(Math.random() * total * 5),
		i = 0

	for (i = 0; i <= total * 5; i++) {
		setTimeout(
			(function(i) {
				return function() {
					$roulette.text(cheat_meals[i % total].Name.toUpperCase())
					if (i === selected) {
						$roulette.animate({ "font-size": "30px" }, "fast").addClass("tada")
					}
				}
			})(i),
			i * 100
		)

		if (i === selected) {
			break
		}
	}
})
