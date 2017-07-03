function rwayTrie(){
	/*
		this.root = new Node()
		rwayTrie.prototype.charMap = map of each char to Idx
 
		Node has array where each idx points to node of that character if there is one
		Node has value undefined


	*/
}



rwayTrie.prototype.insertWord = function(key, val){
			this.root = recursInsert(this.root, key, val, 0)
}

rwayTrie.prototype.recursInsert = function(nodeExistingHere, key, val, d){
	if (nodeExistingHere === undefined){
		nodeExistingHere = new Node();
	}
	if (d === key.length){
		nodeExistingHere.val = val;
	} else {
		nodeExistingHere.chars[charAt(key[d])] = this.recursInsert(nodeExistingHere.chars[charAt(key[d])], key, val, d + 1);
	}

	return nodeExistingHere;
}

rwayTrie.prototype.getVal = function(key){
	return this.recursGetVal(this.root, key, 0)
}

rwayTrie.prototype.recursGetVal = function(nodeExistingHere, key, idxOfNextNode){
	if (nodeExistingHere === undefined){
		return undefined;
	}

	if (d === key.length){
		return nodeExistingHere.val
	} else {
		return this.recursGetVal(nodeExistingHere.chars[charAt(key[idxOfNextNode])], key, idxOfNextNode + 1);
	}
}
