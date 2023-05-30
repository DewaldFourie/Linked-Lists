import Node from "./node.js";

export default class LinkedList {
    constructor(){
        this.listHead = null;
        this.length = 0;
    }

    prepend(value) {
        let tmp = null;
        if (this.listHead != null){
            tmp = this.listHead;
        }
        this.listHead = new Node(value);
        this.listHead.nextNode = tmp;
        this.length++;
    }

    append(value) {
        if (this.listHead == null){
            this.prepend(value);
        }
        else{
            let tmp = this.listHead;
            while (tmp.nextNode != null){
                tmp = tmp.nextNode;
            }
            tmp.nextNode = new Node(value);
            this.length++;
        }
    }

    size() {
        let tmp = this.listHead;
        if (tmp == null){
            return null
        }
        return this.length;
    }    

    head() {
        return this.listHead;
    }

    tail() {
        let tmp = this.listHead;
        while(tmp.nextNode != null){
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    at(index){
        let tmp = this.listHead;
        for (let i = 0; i < index; i++){
            tmp = tmp.nextNode;
            if (tmp == null){
                return "There is no value for this Index";
            }
        }
        return tmp;
    }

    pop(){
        let cur = this.listHead;
        let prev = null;
        while (cur.nextNode != null){
            prev = cur;
            cur = cur.nextNode;
        }
        prev.nextNode = null;
        this.length--;
    }

    contains(value){
        let tmp = this.listHead;
        while (tmp != null){
            if (tmp.value === value) {
                return true;
            }
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value){
        let tmp = this.listHead;
        let index = 0;
        while (tmp != null){
            if (tmp.value === value){
                return index;
            }
            tmp = tmp.nextNode;
            index++;
        }
        return "There is no entry for that value";
    }

    toString(){
        let tmp = this.listHead;
        let stringList = "";
        while (tmp != null){
            stringList += `(${tmp.value}) -> `;
            tmp = tmp.nextNode;
        }
        return (stringList += "null");
    }

    insertAt(index, value){
        if (this.listHead == null || index == 0){
            this.prepend(value);
        }
        else{
            let cur = this.listHead;
            let prev = null;
            for (let i = 0; i < index; i++){
                prev = cur;
                cur = cur.nextNode;
                if (cur == null){
                    break
                }
            }
            const tmp = new Node(value);
            prev.nextNode = tmp;
            tmp.nextNode = cur;
            this.length++;
        }
    }

    removeAt(index) {
        if (this.listHead == null){
            return "List is Empty.";
        }
        let cur =  this.listHead;
        let prev = null;
        for (let i = 0; i < index; i++){
            prev = cur;
            cur = cur.nextNode;
            if (cur == null){
                return "There is no Item at this index.";
            }
        }
        prev.nextNode = cur.nextNode;

        this.length--;
    }
}
