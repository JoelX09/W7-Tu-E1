import { Node } from "./Node";
export class LinkedList<T> {
  private head: Node<T> | null = null;
  private length: number = 0;

  get size(): number {
    return this.length;
  }

  public add(data: T) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new Node(data);
    }
    this.length++;
  }

  public addFirst(data: T) {
    let temp = this.head;
    this.head = new Node(data);
    this.head.next = temp;

    this.length++;
  }

  public remove() {
    if (this.head !== null) {
      this.head = this.head.next;
      this.length--;
    }
  }

  public removeLast() {
    if (this.head != null) {
      let temp = this.head;
      while (temp.next !== null) {
        if(temp.next.next === null) {
          temp.next = null;
          break;
        }
        temp = temp.next;
      }
      this.length--;
    }
  }

  public toString(): string {
    if (this.head === null) return `[]`;
    let representation = "";
    let node = this.head;
    while (node.next !== null) {
      representation = `${representation}${JSON.stringify(node.data)},`;
      node = node.next;
    }
    representation = `${representation}${JSON.stringify(node.data)}`;
    representation = `[${representation}]`;
    return representation;
  }
}
