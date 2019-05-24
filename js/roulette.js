var parolacce = [
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
	{ Name: "Canaglia" },
	{ Name: "Pezzente" }
]

var $roulette = $(".roulette")

$(".spin").on("click", function() {
	$roulette.removeClass("tada").animate({ "font-size": "16px" }, 0)
	var total = parolacce.length,
		selected = Math.floor(Math.random() * total * 5),
		i = 0

	for (i = 0; i <= total * 5; i++) {
		setTimeout(
			(function(i) {
				return function() {
					$roulette.text(parolacce[i % total].Name.toUpperCase())
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
