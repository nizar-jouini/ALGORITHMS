class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    // Adds a node to the Front
    addFront(value) {
        // Creating a new node object with the value provided
        let new_node = new Node(value);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head 
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list
        this.head = new_node;
        return this;
    }

    // Remove a node from the Front of the list
    removeFront() {
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, return null
        if(!this.head) {
            return null;
        }
        // Put the node that we want to remove in a variable
        var removedNode = this.head;
        // Moves the head of the list to 2nd node, wich will become the new head
        this.head = removedNode.next;
        // Make the old head to point to null
        removedNode.next = null;
        return this.head;
    }

    // Return the value at the Front (head) of the list
    front() {
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, return null
        if(!this.head) {
            return null;
        }
        return this.head.value;
    }
}

const SLL1 = new SLL();
console.log(SLL1.front());
SLL1.addFront(18);
console.log(SLL1.front());
SLL1.addFront(5);
console.log(SLL1);
SLL1.addFront(73);
console.log(SLL1);
SLL1.addFront(75);
console.log(SLL1);
SLL1.removeFront();
console.log(SLL1);
SLL1.removeFront();
console.log(SLL1);
console.log(SLL1.front());
SLL1.removeFront();
console.log(SLL1);