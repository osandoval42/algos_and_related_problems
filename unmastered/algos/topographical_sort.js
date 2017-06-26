function Graph(){
	this.nodes = [];
}

Graph.prototype.addNode = function(node){
	this.nodes.push(node);
}

function Node(key){
	this.key = key;
	this.requires = [];
	this.suffices = [];
}

Node.prototype.addPrereq = function(prereq){
	this.requires.push(prereq);
	prereq.suffices.push(this);
}

const ERROR = "CYCLIC REFERENCE";
const seen = {};
const finished = {};

function getPath(graph){
	let path = [];
	for (let i = 0; i < graph.nodes.length; i++){
		if (!seen[graph.nodes[i].key]){
			if (dfs(graph.nodes[i], path) === ERROR){
				return p(ERROR);
			}
		}
	}
	return p(path.reverse());
}

function dfs(node, path){
	let currNode;
	seen[node.key] = true;
	for (let i = 0; i < node.suffices.length; i++){
		currNode = node.suffices[i];
		if (seen[currNode.key]){
			if (!finished[currNode.key]){
				return (ERROR)
			}
		} else {
			if (dfs(currNode, path) === ERROR){
				return ERROR;
			}
		}
	}
	finished[node.key] = true;
	path.push(node);
}

function p(answer){
	if (answer === ERROR){
		console.log(answer);
	} else {
		answer.forEach((node) => {
			console.log(node.key);
		})
	}
}

function test1(){
	let zero = new Node(0);
	let one = new Node(1);
	let two = new Node(2);
	let three = new Node(3);
	let four = new Node(4);
	let five = new Node(5);
	let six = new Node(6);
	six.addPrereq(three);
	five.addPrereq(three);
	five.addPrereq(zero);
	four.addPrereq(six);
	four.addPrereq(three);
	four.addPrereq(one);
	two.addPrereq(five);
	two.addPrereq(three);
	two.addPrereq(zero);
	one.addPrereq(zero);
	zero.addPrereq(six);
	let graph = new Graph();
	graph.addNode(zero);
	graph.addNode(one);
	graph.addNode(two);
	graph.addNode(three);
	graph.addNode(four);
	graph.addNode(five);
	graph.addNode(six);

	getPath(graph);
}

function test2(){
	let zero = new Node(0);
	let one = new Node(1);
	let two = new Node(2);
	let three = new Node(3);
	let four = new Node(4);
	let five = new Node(5);
	let six = new Node(6);
	six.addPrereq(three);
	five.addPrereq(three);
	five.addPrereq(zero);
	four.addPrereq(six);
	four.addPrereq(three);
	four.addPrereq(one);
	two.addPrereq(five);
	two.addPrereq(three);
	two.addPrereq(zero);
	one.addPrereq(zero);
	zero.addPrereq(six);

	six.addPrereq(two);

	let graph = new Graph();
	graph.addNode(zero);
	graph.addNode(one);
	graph.addNode(two);
	graph.addNode(three);
	graph.addNode(four);
	graph.addNode(five);
	graph.addNode(six);

	getPath(graph);
}

// test1();
test2();