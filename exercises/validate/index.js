// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;

  //     if (node.left) {
  //     max = node.data;
  //     if (node.left.data < max) {
  //       node = node.left;
  //       validate(node, min, max);
  //     } else {
  //       return false;
  //     }
  //   } else if (node.right) {
  //     min = node.data;
  //     if (node.right.data > min) {
  //       node = node.right;
  //       validate(node, min, max);
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return true;
  //   }

  //   const arr = [node];
  //   while (arr.length) {
  //     const currentNode = arr.shift();
  //     if (currentNode.left) {
  //       max = currentNode.data;
  //       if (currentNode.left < max) {
  //         arr.unshift(currentNode.left);
  //         validate(currentNode);
  //       } else {
  //         return false;
  //       }
  //     } else if (currentNode.right) {
  //       min = currentNode.data;
  //       if (currentNode.right > min) {
  //         arr.unshift(currentNode.right);
  //         validate(currentNode);
  //       } else {
  //         return false;
  //       }
  //     }
  //   }
  //   return true;
}

module.exports = validate;
