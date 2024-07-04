var enemy, me;

function reload() {
	var actionEnemy = enemy.getActionsPlay();
	var actionMe = me.getActionsPlay();
	var html = [];
	html.push(`<div class='historyEnemy flex'>`);
	for (const val of actionEnemy) {
		html.push(`<div class="item">${val}</div>`);
	}
	html.push(`</div>`);

	$("#historyEnemy").html("");
	$("#historyEnemy").append(html.join(''));
}

function main() {
	enemy = player();
	me = player();
}

main();

function player() {
	var actions = [];

	function getActionsPlay() {
		return actions;
	}

	function addAction(actionType) {
		if (actionType == 'enemy') {
			let val = $("#resultEnemy").html().trim();
			if (val != '?') {
				actions.push(val);
			}
			
		}
		reload();
	}

	function resetAction() {
		return actions = [];
	}

	return {
		getActionsPlay,
		addAction
	}
}

function changeItem(obj, val) {
	if (obj == 'enemy') {
		$("#resultEnemy").html(val);
	}
}