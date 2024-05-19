---
sidebar_position: 1
---

# Builder

## **Builder Design Pattern**:
 The Builder pattern is used to construct a complex object step by step, and the final step returns the object. It separates the construction of a complex object from its representation so that the same construction process can produce different representations.

## **Example:**

```python
class Burger:
    def __init__(self):
        self.buns = None
        self.patty = None
        self.cheese = None

    def setBuns(self, bunStyle):
        self.buns = bunStyle
    
    def setPatty(self, pattyStyle):
        self.patty = pattyStyle
    
    def setCheese(self, cheeseStyle):
        self.cheese = cheeseStyle

class BurgerBuilder:
    def __init__(self):
        self.burger = Burger()

    def addBuns(self, bunStyle):
        self.burger.setBuns(bunStyle)
        return self
    
    def addPatty(self, pattyStyle):
        self.burger.setPatty(pattyStyle)
        return self
    
    def addCheese(self, cheeseStyle):
        self.burger.setCheese(cheeseStyle)
        return self  

    def build(self):
        return self.burger

burger = BurgerBuilder() \
            .addBuns("sesame") \
            .addPatty("fish-patty") \
            .addCheese("swiss cheese") \
            .build()

```


