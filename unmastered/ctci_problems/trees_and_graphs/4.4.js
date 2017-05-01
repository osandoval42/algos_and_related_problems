class Node{
	constuctor(val){
		this.val = val;
		this.left = undefined;
		this.right = undefined;
	}
}
/*
  Height is defined as maximum height.  Read the question carefully.
*/
function checkBalanced(treeNode){
	
}

































	/*
 DFS a binary tree, passing pointer to array of depths, as well as curr Depth 
 When undefined is hit, check depth against array of depths. 
 If array of depths shows inequality, demand either length == 2 or one off difference
 If one off difference then push the depth onto the array
 if the condition is not met then return false.  Else return true 

 in the dfs if at any point we receive back false then return false.  Else return true
*/


// class Node{
// 	constuctor(val){
// 		this.val = val;
// 		this.left = undefined;
// 		this.right = undefined;
// 	}
// }

// function checkBalanced(treeNode){
// 	return recursHelper(treeNode, [], 0);
// }

// function recursHelper(node, depthsSeen, currDepth){
// 	if (!node){
// 		if (depthsSeen.length > 0){
// 			if(depthsSeen.some(function(depth){return (depth === currDepth)}))
// 				return true;
// 			} else {
// 				if (depthsSeen.length === 2){
// 					return false;
// 				} else {
// 					if (Math.abs(depthsSeen[0] - currDepth) === 1){
// 						depthsSeen.push(currDepth)
// 						return true;
// 					} else {
// 						return false;
// 					}
// 				}
// 			}
// 		} else {
// 			depthsSeen.push(currDepth);
// 			return true;
// 		}
// 	}

// 	return (recursHelper(node.left, depthsSeen, currDepth + 1) && recursHelper(node.right, depthsSeen, currDepth + 1))
}