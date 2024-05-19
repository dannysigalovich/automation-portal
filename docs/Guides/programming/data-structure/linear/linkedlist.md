---
sidebar_position: 1
---

# Linked List 

**Overview**
A linked list is a linear data structure where elements are stored in nodes, each linking to the next node.

**Types**
* Singly Linked List: Each node has a value and a pointer to the next node.
* Doubly Linked List: Nodes have pointers to both next and previous nodes.
* Circular Linked List: The last node links back to the first.

**Operations**
* Insertion: Add a new node. Time complexity O(1) or O(n).
* Deletion: Remove a node. Time complexity O(1) or O(n).
* Traversal: Visit each node. Time complexity O(n).

**Use Cases**
* Stack, Queue implementations
* Browser history
* Music playlists

**Advantages**
* Dynamic size
* Efficient insertions/deletions

**Disadvantages**
* Extra memory for pointers
* No direct access to elements; must traverse.