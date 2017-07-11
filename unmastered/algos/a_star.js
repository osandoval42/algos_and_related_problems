/*
	create a maze with nodes that are closed and open
*/

function Node(isOpen, maze, row, col){
	this.maze = maze;
	this.isOpen = isOpen;
	this.row = row;
	this.col = col;
	this.isPath = false;
}
Node.prototype.close = function(){
	this.isOpen = false;
}
Node.prototype.isDest = function(){
	return (this === this.maze.dest);
}
Node.prototype.setGValue = function(val){
	this.gValue = val;
	this.fValue = this.gValue + this.hValue;
}

Node.prototype.toString = function(){
	if (this.isPath){
		return 'X';
	}
	if (this === this.maze.src){
		return 'S';
	}
	if (this === this.maze.dest){
		return 'E';
	}
	if (this.isOpen){
		return " ";
	} else {
		return "*";
	}
}

Node.prototype.addNeighbors = function(queue){
	const deltas = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
	deltas.forEach((delta) => {
		let row = delta[0] + this.row;
		let col = delta[1] + this.col;
		if (this.maze.isInBounds(row, col)){
			let neighbor = this.maze.grid[row][col];
			if (neighbor.isOpen){
				let existingNodeInQueue = queue.get(neighbor);
				let diff = ((delta[0] + delta[1]) !== 1) ? 14 : 10;
				let potentialNewGval = diff + this.gValue;
				if (existingNodeInQueue === neighbor){
					if (potentialNewGval < neighbor.gValue){
						neighbor.setGValue(potentialNewGval)
						neighbor.parent = this;
						queue.internal.sort((a, b) => {
							return a.fValue - b.fValue;
						})
					}
				} else {
					neighbor.setGValue(potentialNewGval)
					neighbor.parent = this;
					queue.insert(neighbor);
				}
			}
		}
	})
}



function Maze(mazeStr){
	this.grid = [];
	this.createGrid(mazeStr);
}

Maze.prototype.print = function(){
	this.grid.forEach((row) => {
		let rowStr = "";
		row.forEach((node) => {
			rowStr += node.toString();
		})
		console.log(rowStr);
	})
}

Maze.prototype.isInBounds = function(row, col){
	return (row >= 0 && col >= 0 && row < this.grid.length && col < this.grid[0].length);
}

Maze.prototype.setHValues = function(){
	this.grid.forEach((row, rowIdx) =>{
		row.forEach((node, colIdx) => {
			if (node.isOpen){
				node.hValue = Math.abs(node.row - this.dest.row) + Math.abs(node.col - this.dest.col);
				node.fValue = node.hValue;
			}
		})
	})
}

Maze.prototype.createGrid = function(mazeStr){
	let rowStrs = mazeStr.split('\n');
	rowStrs.forEach((rowStr, rowIdx) => {
		this.grid.push([]);
		let thisRowColStrs = rowStr.split('');
		thisRowColStrs.forEach((colStr, colIdx) => {
			let thisNode = colStr === '*' ? new Node(false, this) : new Node(true, this, rowIdx, colIdx);
			if (colStr === 'E'){
				this.dest = thisNode;
			}
			if (colStr === 'S'){
				this.src = thisNode;
				thisNode.setGValue(0);
			}
			this.grid[rowIdx].push(thisNode)
		})
	})
}

Maze.prototype.buildPath = function(){
	let path = [];
	let currPathNode = this.dest.parent;
	while (currPathNode.parent !== undefined){
		path.unshift([currPathNode.row, currPathNode.col]);
		currPathNode = currPathNode.parent;
	}
	return path;
}

function PriorityQueue(){
	this.internal = [];
}

PriorityQueue.prototype.get = function(node){
	for (let i = 0; i < this.internal.length; i++){
		if (this.internal[i] === node){
			return node;
		}
	}
}

PriorityQueue.prototype.insert = function(node){
	this.internal.push(node);
	this.internal.sort((a, b) => {
		return a.fValue - b.fValue;
	})
}

PriorityQueue.prototype.extractMin = function(){
	return this.internal.shift();
}

PriorityQueue.prototype.isEmpty = function(){
	return (this.internal.length === 0)
}

function solveMaze(mazeStr){
	let maze = new Maze(mazeStr);
	maze.setHValues();
	let open = new PriorityQueue();
	open.insert(maze.src);
	let isSolved = false;
	while (!open.isEmpty()){
		let currNode = open.extractMin();
		currNode.close();
		if (currNode === maze.dest){
			isSolved = true
			break;
		}
		currNode.addNeighbors(open);
	}
	if (!isSolved){
		throw 'Insolvable';
	}
	let path = maze.buildPath();
	let mazeResult = new Maze(mazeStr);
	path.forEach((coord) => {
		let node = mazeResult.grid[coord[0]][coord[1]]
		node.isPath = true;
	})
	return mazeResult;
	/*
		create new maze with mazeStr.  Fill in Path.  Create a toStringMethod
	*/
}

function test(){
 let maze = "****************\n*         *   E*\n*    *    *  ***\n*    *    *    *\n*    *    *    *\n*    *    *    *\n*S   *         *\n****************"
 let solvedMaze = solveMaze(maze);
 solvedMaze.print();
}

test();
// setTimeout(test, 7000);