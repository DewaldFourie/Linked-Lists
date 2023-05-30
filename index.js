import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();

linkedList.prepend("test1");    // Add "test1" to the list at the begin
linkedList.append("test2");     // add "test2" to the end
linkedList.append("test3");     // add "test3" to the end
linkedList.prepend("test0");    // add "test0" to the list at the begin
console.log(linkedList.toString());     
console.log(linkedList.size());         // return the size of the list
console.log(linkedList.head());         // return the first node
console.log(linkedList.tail());         // return the last node
console.log(linkedList.at(2));          // return the node at index 2
linkedList.pop();                       // remove the last node
console.log(linkedList.toString());             
console.log(linkedList.contains("test1"));      // returns true if list contains "test1"
console.log(linkedList.find("test1"));          // return the node where "test1" is
linkedList.prepend("test3");                    // add "test3" to list at the begin
console.log(linkedList.toString());
linkedList.insertAt(2, "testInsert");           // insert "testInsert" at node 2
console.log(linkedList.toString())  
console.log(linkedList.size());                 // returns the size of the list now
linkedList.removeAt(2);                         // remove the value at node 2
console.log(linkedList.toString());     
console.log(linkedList.size());                 // returns the size of the list 