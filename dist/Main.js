"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const LinkedList_1 = require("./LinkedList");
class Main {
    start() {
        //Example
        // // FIFO (FIRST IN, FIRST OUT)
        // // GARBAGE COLLECTOR
        // let list = new LinkedList<number>();
        // list.add(40);
        // list.add(60);
        // list.add(100);
        // list.add(900000);
        // console.log(list.toString());
        // console.log(list.size);
        // list.remove();
        // console.log(list.toString());
        // console.log(list.size);
        //Exercise
        let list = new LinkedList_1.LinkedList();
        list.add(1); // [1]
        list.add(2); // [1,2]
        list.add(3); // [1,2,3]
        list.add(4); // [1,2,3,4]
        list.addFirst(5); // [5,1,2,3,4]
        console.log(list.toString()); // [5,1,2,3,4]
        console.log(list.size); // 5
        list.remove(); // [1,2,3,4]
        console.log(list.toString()); // [1,2,3,4]
        console.log(list.size); // 4
        list.removeLast(); // [1,2,3]
        console.log(list.toString()); // [1,2,3]
        console.log(list.size); // 3
    }
}
exports.Main = Main;
