function Board(dimensions){
	this.grid = new Array(dimensions);
	this.grid.forEach((row) => {
		row = new Array(dimensions);
	})
}

function Game(dimensions){
	this.players = ["WHITE", "BLACK"];
	this.board = new Board(dimensions);
	this.board.populate();
	this.toMove = this.players[0];
}

/*
	Checking if move is valid asks moving laterally twice do we find opposite then actual
*/
Game.prototype.executeMove = function(dimensions){
	if (Game.p)
}