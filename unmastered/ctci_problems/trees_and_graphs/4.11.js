/* BINARY TREE CLASS

function insert(val){
	insert val in correct position
	increment length

	if in the search we find something equal to val, make new node the left of this duplicate, and make old left the new guys left
}

function find(val){
	go left or right depending on comparison to val.  return node when we get there
}

function delete(val){
	go left or right based on comparison to val.  when val is found point parent to left node if it exists, else right.
	if val is found decrement length
}

function getRandomNode(){
	get random number Math.floor(Math.random() * this.length)

	perform pre-order traversal, incrementing count each time.  
	{
		if count === random, return node
		if (node = recursiveLeft(++count)){
			return node;
		}
		if (node = recursiveRight(++count)){
			return node;
		}
		return false
	}
}

*/