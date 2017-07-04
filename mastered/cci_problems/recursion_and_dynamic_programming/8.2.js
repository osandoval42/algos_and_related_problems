/*
	if last point entered == destination, then return arr.  

	At each point, attempt to move to each open point
	open point -> point thats open and that we havnt seen
	
	if entering a point returns the path rather than undefined, then return it.

	if entering every point didnt work then pop curr path and return undefined
	
	When we move to a point, mark it as seen
*/

function findPath(grid){
	recursHelper(grid, [[0, 0]])
}

const DELTAS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

function recursHelper(grid, path){
	const currSquare = path[path.length - 1]
	if (currSquare[0] === grid.length && currSquare[1] === grid[0].length){
		return path;
	}
	let currDelta;
	let thisMove
	for (let i = 0; i < DELTAS.length; i++){
		currDelta = DELTAS[i];
		thisMove = [currSquare[0] + currDelta[0], currSquare[1] + currDelta[1]];
		if (isValidMove(grid, thisMove)){
			path.push(thisMove);
			if (recursHelper(grid, path)){
				return path;
			}
		}
	}
	path.pop();
	return;	
}

function isValidMove(grid, move)
{
	const squareToMoveTo = grid[move[0]][move[1]];
	return (move[0] < grid.length && move[1] < grid[0].length && !squareToMoveTo.isBlocked && !squareToMoveTo.hasMoved)
}