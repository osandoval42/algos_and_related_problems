const letters = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4};

/*
	put
	gets 
	contains
*/

function TrieNode(){
	this.val = undefined;
	this.children = new Array(letters.length);
}

function Trie(){
	this.root = new TrieNode();
}

Trie.prototype.put = function(key, val){
	this.root = this.putRecurs(this.root, key, 0, val)
}

Trie.prototype.putRecurs = function(thisCharNode, key, nextCharInKeyIdx, val){
	if (!thisCharNode){
		thisCharNode = new TrieNode();
	}
	if (nextCharInKeyIdx === key.length){
		thisCharNode.val = val;
	} else {
		const childrenIdx = letters[key[nextCharInKeyIdx]];
		thisCharNode.children[childrenIdx] = this.putRecurs(thisCharNode.children[childrenIdx], key, nextCharInKeyIdx + 1, val)
	}
	return thisCharNode;
}

Trie.prototype.getVal = function(key){
	let ret = this.getValRecurs(this.root, key, 0);
	return ret;
}

Trie.prototype.getValRecurs = function(thisCharNode, key, nextCharInKeyIdx){
	if (!thisCharNode){
		return undefined;
	}
	if (nextCharInKeyIdx === key.length){
		return thisCharNode.val;
	}
	const childrenIdx = letters[key[nextCharInKeyIdx]];
	return (this.getValRecurs(thisCharNode.children[childrenIdx], key, nextCharInKeyIdx + 1));
}

Trie.prototype.doesContain = function(key){
	return (this.getVal(key) !== undefined);
}

function test(){
	let trie = new Trie();
	const testStrs = ["abc", "cab", "decab", "baced"].map((str) => {
		return str.split("");
	})
	testStrs.forEach((strArr) => {
		trie.put(strArr, 5);
	})
	console.log(`${trie.doesContain("decab".split(""))} === true`)
	console.log(`${trie.doesContain("abc".split(""))} === true`)
	console.log(`${trie.doesContain("baced".split(""))} === true`)
	console.log(`${trie.doesContain("abcdcs".split(""))} === false`)
	console.log(`${trie.doesContain("cabb".split(""))} === false`)
	console.log(`${trie.doesContain("ab".split(""))} === false`)
}

test();