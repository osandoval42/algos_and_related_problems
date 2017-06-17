/*
	base case: We get to node from A that has already been seen in B or vice versa

	need: 
		seenFromA
		seenFromB
		every time a node is selected, I need to know the path that is supposed, including who started it

	each node keeps a path (array) of everything up to that point.  Neighbors of x share copies of same paths.  Better yet
	these paths go inside seenFromA

	first check if its been seen by opposite angle.  If so return final path seenByOppositeAngle + currNode + pathWeWouldHavePlacedInSeenByThisAngle
	When we get to a neighbor we check if its already been seen by this angle and if it has disregard it.  Else place currPath up to this node in SeenByThisAngle, and place node in queque
*/

function shortestPathFinder(A, B){
	if (A === B){
		return [A];
	}

	let queque = [];
	let seenFromA = {A.id: []};
	let seenFromB = {B.id: []};
	let fromAInQueueCount = 1;
	let fromBInQueueCount = 1;
	let origin;
	let currNode;
	let pathUpToNeighbor;
	let oppositeSeenFrom;
	let thisSeenFrom;
	queque.push(A);
	queque.push(B);
	while (fromAInQueueCount > 0 && fromBInQueueCount > 0){
		currNode = queque.shift();
		origin = seenFromA[currNode.id] ? 'A' : 'B';
		origin === 'A' ? fromAInQueueCount-- : fromBInQueueCount--;
		pathUpToNeighbor = origin === 'A' ? seenFromA[currNode.id].concat([currNode.id]) : seenFromB[currNode.id].concat([currNode.id]);
		for (let neighborIdx = 0; neighborIdx < currNode.length; neighborIdx++){
			currNeighbor = currNode.neighbors[neighborIdx];
			oppositeSeenFrom = origin === 'A' ? seenFromB : seenFromA;
			thisSeenFrom = origin === 'A' ? seenFromA : seenFromB;
			if (oppositeSeenFrom[currNeighbor.id]){
				return (pathUpToCurrNode.concat([currNeighbor].concat(oppositeSeenFrom[currNeighbor.id].reverse())));
			}
			if (thisSeenFrom[currNeighbor.id] === undefined){
				thisSeenFrom[currNeighbor.id] = pathUpToNeighbor;
				queque.push(currNeighbor);
				origin === 'A' ? fromAInQueueCount++ : fromBInQueueCount++;
			}
		}
	}
	return undefined;
}