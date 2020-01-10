// Head, tail and length property. Linked List consist of nodes, and each node has a value and a poitner

class Node {
    constructor(val){
        this.val= val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail= null;
    }

    push(val){
        let node = new Node(val)

        if(this.length===0){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    pop(){
        
        let node  = this.head;
        for(let i =1; i<this.length-1; i++ ){
            node = node.next;
        }
        node.next=null;
        this.length=this.length-1;
        this.tail=node;
        console.log(node)
    }
}


let list = new SinglyLinkedList()
list.push(1);
list.push(2);
list.push(3)