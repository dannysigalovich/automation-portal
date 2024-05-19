---
sidebar_position: 1
---

# Factory

## **Factory Design Pattern**: 
This pattern provides a way to create objects without specifying the exact class of object that will be created. Instead, a factory is responsible for creating and returning the object, abstracting the instantiation process.

## **SpongBob Example**:

```python
class Burger:
    def __init__(self, ingredients):
        self.ingredients = ingredients

    def print(self):
        print(self.ingredients)

class BurgerFactory:
    
    def createCheeseBurger(self):
        ingredients = ["bun", "cheese", "beef-patty"]
        return Burger(ingredients)
    
    def createDeluxeCheeseBurger(self):
        ingredients = ["bun", "tomatoe", "lettuce", "cheese", "beef-patty"]
        return Burger(ingredients)

    def createVeganBurger(self):
        ingredients = ["bun", "special-sauce", "veggie-patty"]
        return Burger(ingredients)

burgerFactory = BurgerFactory()
burgerFactory.createCheeseBurger().print()
burgerFactory.createDeluxeCheeseBurger().print()
burgerFactory.createVeganBurger().print()
```

 
