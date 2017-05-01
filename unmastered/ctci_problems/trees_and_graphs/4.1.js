var GraphFile = require('../../data_structures/graph');
var Graph = GraphFile.Graph;
var Node = GraphFile.Node;


/*
	if src === dst return true
	iterate through each childTo, returning true if recursHelper for that child with same dst is true
*/

function routeBetweenNodes(src, dst){
	return recursHelper(src, dst, {});
}

function recursHelper(src, dst, hasSeen){
	if (src === dst){
		return true;
	}

	for (let i = 0; i < src.childrenTo.length; i++){
		let child = src.childrenTo[i];
		if (hasSeen[child] === undefined){
			hasSeen[child] = true;
			if (recursHelper(child, dst, hasSeen)){
				return true;
			}
		}
	}

	return false;
}

//ARE CONNECTED TEST
let areConnectedTest = new Graph();
let nodeA = new Node(0);
let nodeB = new Node(0);
let nodeC = new Node(0);
let nodeD = new Node(0);
let nodeE = new Node(0);
let nodeF = new Node(0);
let nodeG = new Node(0);
let nodeH = new Node(0);
nodeA.addRouteTo(nodeF)
nodeF.addRouteTo(nodeG);
nodeA.addRouteTo(nodeG);
nodeA.addRouteTo(nodeB);
nodeA.addRouteTo(nodeC);
nodeB.addRouteTo(nodeC);
nodeC.addRouteTo(nodeD);
nodeC.addRouteTo(nodeE);
nodeE.addRouteTo(nodeH)
areConnectedTest.addNode(nodeA);
areConnectedTest.addNode(nodeB);
areConnectedTest.addNode(nodeC);
areConnectedTest.addNode(nodeD);
areConnectedTest.addNode(nodeE);
areConnectedTest.addNode(nodeF);
areConnectedTest.addNode(nodeG);
areConnectedTest.addNode(nodeH);
if(!routeBetweenNodes(nodeA, nodeH)){
	throw 'FAILED TEST 1';
}

let notConnectedTest = new Graph();
let node1 = new Node(0);
let node2 = new Node(0);
let node3 = new Node(0);
let node4 = new Node(0);
notConnectedTest.addNode(node1);
notConnectedTest.addNode(node2);
notConnectedTest.addNode(node3);
notConnectedTest.addNode(node4);
node1.addRouteTo(node2);
node1.addRouteTo(node3);
node2.addRouteTo(node3);
node4.addRouteTo(node1);
if(routeBetweenNodes(node1, node4)){
	throw 'FAILED TEST 2';
}


console.log("success");
