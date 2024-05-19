---
sidebar_position: 1
---

# Singleton

## **Singleton Design Pattern**: 
This pattern ensures that a class has only one instance and provides a global point of access to that instance. It's useful when you want to ensure something is only done once, like initializing a configuration or making a single connection to a database.

## **Example:**

```python
class ApplicationState:
    instance = None

    def __init__(self):
        self.isLoggedIn = False

    @staticmethod
    def getAppState():
        if not ApplicationState.instance:  
            ApplicationState.instance = ApplicationState()
        return ApplicationState.instance

appState1 = ApplicationState.getAppState()
print(appState1.isLoggedIn)

appState2 = ApplicationState.getAppState()
appState1.isLoggedIn = True

print(appState1.isLoggedIn)
print(appState2.isLoggedIn)

```

