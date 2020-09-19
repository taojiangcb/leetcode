/**
 * 节点
 */
class NNode {
    data:number = 0;        //当前节点的值
    left:NNode = null;      //左节点 
    right:NNode = null;     //又节点
    constructor(data:number,left?:NNode,right?:NNode) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

class BinaryTree {
    root:NNode;     //根节点
    constructor() { }
    /**插入节点------------- */
    private insertNode(oldNode:NNode,newNode:NNode) {
        if(newNode.data < oldNode.data) {
            if(oldNode.left == null) {
                oldNode.left = newNode;
            }
            else {
                this.insertNode(oldNode.left,newNode);
            }
        }
        else {
            if(oldNode.right == null) {
                oldNode.right = newNode;
            }
            else {
                this.insertNode(oldNode.right,newNode);
            }
        }
    }

    inster(data:number) {
        var newNode:NNode = new NNode(data);
        if(this.root == null) { this.root = newNode; }
        else { this.insertNode(this.root,newNode); }
    }
    /**插入节点 end ------------- */

    /**中序遍历=========================== */
    private inOrderTraverseNode(node:NNode,callBack:(data)=>void) {
        if(node != null) {
            //遍历左节点
            this.inOrderTraverseNode(node.left,callBack);
            callBack(node.data);
            //遍历又节点
            this.inOrderTraverseNode(node.right,callBack);
        }
    }
    
    inOrderTraverse(ballBack) {
        this.inOrderTraverseNode(this.root,ballBack);
    }

   
    /**中序遍历 end===================================== */

    //前序遍历===============================================
    preOrderTraverse(callBack) {
        this.preOrderTraverseNode(this.root,callBack)
    }

    private preOrderTraverseNode(node:NNode,callBack) {
        if(node != null) {
             callBack(node.data);
             this.preOrderTraverseNode(node.left,callBack);
             this.preOrderTraverseNode(node.right,callBack);
        }
    }
    //前序遍历结束=======================================

    /**后续遍历******************/
    /**
     * 应用场景 先遍历子集节点，在处理节点本身，例如文件系统，先遍历文件夹在处理文件夹里的文件
     * @param callBack 
     */
    posOrderTraverse(callBack) {
        this.posOrderTraverseNode(this.root,callBack);
    }

    posOrderTraverseNode(node:NNode,callBack) {
        if(node != null) {
            this.posOrderTraverseNode(node.left,callBack);
            this.posOrderTraverseNode(node.right,callBack);
            callBack(node.data);
        }
    }
    //后续遍历结束=========================================

    findCallBack(data:number) {
        console.log(data);
    }

    //二叉树节点查找================================
    min(node:NNode):number {
        return this.minNode(node);
    }

    /**最小左节点 */
    minNode(node:NNode):number {
        if(node) {
            while(node && node.left) { node = node.left; }
            return node.data;
        }
        return null;
    }

    max(node):number {
        return this.maxNode(node);
    }

    /**最大又节点 */
    maxNode(node:NNode):number {
        if(node) {
            while(node && node.right) { node = node.right;}
            return node.data;
        }
        return null;
    }

    search(node:NNode,data:number) {
        return this.searchNode(node,data);
    }

    searchNode(node:NNode,data:number) {
        if(node == null) return null;
        if(node.data > data) {
            console.log(node.data + '<<<<<' + data)
            return this.searchNode(node.left,data);
        }
        else if(node.data < data) {
            console.log(node.data + '>>>>>' + data)
            return this.searchNode(node.right,data);
        }
        else if(node.data === data) {
            console.log(`================`)
            return node.data;
        }
    }
    //======================二叉树节点========================

    remove(data:number) {
        this.root = this.removeNode(this.root,data);
        return this.root;
    }

    removeNode(node:NNode,data):NNode {
        if(node == null) return;
        //进入又节点
        if(node.data < data) {
            node.right = this.removeNode(node.right,data);
            return node;
        }
        //进入左节点
        else if(node.data > data) {
            node.left = this.removeNode(node.left,data);
            return node;
        }
        //匹配到节点
        else if(node.data === data) {
            //匹配到叶子节点
            if(node.left == null && node.right == null) {
                node = null;
                return node;
            }
            //匹配到只有左边的节点
            if(node.left == null) {
                console.log(`------------- ${node.data}`);
                node = node.right;
                console.log(JSON.stringify(node));
                return node;
            }
            //匹配到只有右边的节点
            else if(node.right == null) {
                node = node.left;
                return node;
            }
            //删除根节点
            else if(node == this.root) {
                let aux = this.findMixNode(node.right);
                node.data = aux.data;
                node.right = aux.right;
                this.removeNode(node.right,aux.data);
                return node;
            }
            //匹配到中间节点
            else {
                let aux = this.findMixNode(node.right);
                node.data = aux.data;
                this.removeNode(node.right,aux.data);
                return node;
            }
        }
    }

    findMixNode(node:NNode) {
        if(node != null) {
            while(node && node.left) {
                node = node.left
            }
            return node;
        }
        return null;
    }


}

/**构造二叉树 */
let nodes = [8,3,10,1,6,14,4,7,13];
let binaryTree = new BinaryTree();
nodes.forEach(element => {
    binaryTree.inster(element);
});

//中序遍历
//binaryTree.inOrderTraverse(binaryTree.inOrderCallBack);

//前序遍历
// binaryTree.preOrderTraverse(binaryTree.inOrderCallBack);

//后续遍历
//binaryTree.posOrderTraverse(binaryTree.findCallBack);

/**
 * 二叉数
 *  1.查找最小值
 *  2.查找最大值
 *  3.查找指定的节点
 */
//  console.log(`min:` + binaryTree.min(binaryTree.root));
//  console.log(`max:` + binaryTree.max(binaryTree.root));
//  console.log(`find 7 is :` + binaryTree.search(binaryTree.root,7));
//  console.log(`find 9 is :` + binaryTree.search(binaryTree.root,9));

/**删除节点 */

console.log(JSON.stringify(binaryTree.remove(14)));