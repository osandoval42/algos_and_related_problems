/*	space: 2N.  Time: factorial divided by something
	create alreadyPrintedBuffer (arr) and onDeckBuffer (hashMap)
	call recursHelper({root.val}, [])

	RECURS HELPER
	if onDeckBuffer is empty, print everything in On Deck buffer

	forEach node in onDeckBuffer{
		take node of onDeckBuffer and push it to alreadyPrintedBuffer
		
		place all of that nodes children, if any, into onDeckbuffer
		recursively call this function
		pop alreadyPrintedBuffer and place node back in onDeckBuffer
	}
*/

class Node{
	constuctor(val){
		this.val = val;
		this.left = undefined;
		this.right = undefined;
	}
}

function BSTSequence(root){

}

function recursHelper()

