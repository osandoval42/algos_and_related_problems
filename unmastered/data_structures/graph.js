/*
	node has childrenTo
	node has childrenFrom
*/

class Graph{
	constructor(){
		this.nodes = [];
		this.nodesAdded = 0;
	}
}

class Node{
	constructor(val){
		this.val = val;
		this.childrenTo = [];
		this.childrenFrom = [];
	}
}

Graph.prototype.addNode = function(node){
	node.graph = this;
	node.ID = this.nodesAdded;
	this.nodes.push(node);
	this.nodesAdded++;
}

Node.prototype.toString = function(){
	return `${this.ID}`;
}

Node.prototype.addRouteTo = function(node){
	this.childrenTo.push(node);
	node.childrenFrom.push(this);
}

Node.prototype.addRouteFrom = function(node){
	node.childrenTo.push(this);
	this.childrenFrom.push(node);
}

Node.prototype.addRoute = function(node){
	this.addRouteTo(node);
	this.addRouteFrom(node);
}


module.exports.Node = Node;
module.exports.Graph = Graph;