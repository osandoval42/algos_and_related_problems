const letters = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4};

function TrieNode(character){
	this.left = undefined;
	this.right = undefined;
	this.middle = undefined;
	this.character = character;
	this.val = undefined;
}

function TernaryTrie(){
	this.root = undefined;
}

TernaryTrie.prototype.put = function(key, val){
	this.root = this.recursPut(this.root, key, 0, val)
}

TernaryTrie.prototype.recursPut = function(currNode, key, keyIdx, val){
	const targetChar = key[keyIdx];
	if (!currNode){
		currNode = new TrieNode(targetChar);
	}
	if (letters[targetChar] < letters[currNode.character]){
		currNode.left = this.recursPut(currNode.left, key, keyIdx, val);
	} else if (letters[targetChar] > letters[currNode.character]){
		currNode.right = this.recursPut(currNode.right, key, keyIdx, val);
	} else if (keyIdx < key.length - 1){
		currNode.middle = this.recursPut(currNode.middle, key, keyIdx + 1, val)
	} else {
		currNode.val = val;
	}
	return currNode;
}

TernaryTrie.prototype.get = function(key){
	return (this.recursGet(this.root, key, 0))
}

TernaryTrie.prototype.doesContain = function(str){
	return (this.get(str) !== undefined);
}

TernaryTrie.prototype.recursGet = function(currNode, key, keyIdx){
	if (!currNode){
		return undefined;
	}
	const targetChar = key[keyIdx];
	if (letters[targetChar] < letters[currNode.character]){
		return (this.recursGet(currNode.left, key, keyIdx));
	} else if (letters[targetChar] > letters[currNode.character]){
		return (this.recursGet(currNode.right, key, keyIdx));
	} else if (keyIdx < key.length - 1){
		return(this.recursGet(currNode.middle, key, keyIdx + 1))
	} else {
		if (currNode.val !== undefined){
			return currNode
		} else{
			return undefined;
		}
	}
}

function test(){
	let trie = new TernaryTrie();
	const testStrs = ["abc", "cab", "decab", "baced"].map((str) => {
		return str.split("");
	})
	testStrs.forEach((strArr) => {
		trie.put(strArr, 5);
	})
	console.log(`${trie.doesContain("eac".split(""))} === false`)
	console.log(`${trie.doesContain("abcdcs".split(""))} === false`)
	console.log(`${trie.doesContain("cabb".split(""))} === false`)
	console.log(`${trie.doesContain("ab".split(""))} === false`)
	console.log(`${trie.doesContain("decab".split(""))} === true`)
	console.log(`${trie.doesContain("abc".split(""))} === true`)
	console.log(`${trie.doesContain("baced".split(""))} === true`)
}

test();