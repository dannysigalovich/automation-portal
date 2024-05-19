---
sidebar_position: 1
---

# Stack

**Definition**
A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. It has two main operations:

Push: To add an element onto the stack.
Pop: To remove the most recently added element from the stack.

**Usecases**
* **Undo/Redo Features**: In text editors or graphic design software.
* **Expression Evaluation**: In calculators for postfix or prefix notation.
* **Backtracking Algorithms**: Such as maze solving and tree traversal.
* **Call Stack**: In programming languages for function calls.
* **Parentheses Matching**: In compilers to check for balanced symbols.

**Operations**
* push(item): Adds item to the top of the stack.
* pop(): Removes and returns the item from the top.
* peek(): Views the top item without removing it.
* isEmpty(): Checks if the stack is empty.

**Complexity**
* Push: O(1)
* Pop: O(1)
* Peek: O(1)

**Implementations**
Commonly implemented using arrays or linked lists.