---
sidebar_position: 1
---


# Python

***Python Code Style Guide and Best Practices for the "Automation Team"***

**1. Naming Conventions:** 
- Variables, Functions, and Modules: Use lowercase with words separated by underscores (snake_case).
- Classes: Use CamelCase, starting with an uppercase letter.

- Constants: Use all uppercase with words separated by underscores.

- Private Variables and Functions: Prefix with a single underscore (_variable, _function).

---

**2. Indentation and Line Length:**
- Use 4 spaces for indentation, not tabs.
- Limit lines to 79 characters for code and 72 for comments and docstrings. If necessary, you can extend to a specific number of characters but avoid excessively long lines. (Remember to disable this in your linter if necessary).
---
**3. Imports:**
-  Import modules on separate lines.

- Group imports into three sections: standard library imports, third-party library imports, and local project imports, with each section separated by a blank line.

- Avoid using wildcard imports (e.g., from module import *).
---
**4. Function and Method Definitions:**
- Define functions and methods with a single space after the function name and before the opening parenthesis.

- Place default arguments at the end of the argument list (if using default arguments).

- Use descriptive names for function arguments, and always provide clear explanations using docstrings.

```Python
# Good: Descriptive names
def calculate_area(width, height):
    return width * height

# Avoid: Non-descriptive names
def calculate_area(x, y):
    return x * y
```
---
**5.  Avoid Mutable Default Arguments in Functions:**
```Python
# Good:
def func(arg1, arg2=None):
    if arg2 is None:
        arg2 = []

# Avoid:
def func(arg1, arg2=[]):
    pass
```


---
 **6. Comments:**
- Use comments to explain complex logic, algorithms, or intentions.

- Write descriptive comments to aid understanding.

- Avoid unnecessary comments that do not add value.

---
**7. String Formatting:**
   - Prefer f-strings for string formatting when possible.
   
```Python
val = 'Geeks'
print(f"{val} for {val} is a portal for {val}.")
```
---
**8. Error Handling**
-   Use appropriate exception handling to prevent unexpected program crashes.

- Avoid using bare except: statements. Be specific about the exceptions you catch (e.g., except SpecificExceptionType as e:).

---
**9. Recommendations:**

- Avoid comparing with == when checking for None. Use is instead.

- Use is not instead of if not.

- Avoid using the type() function. Use isinstance() instead.

- Add TODO: comments as placeholders where future work is needed.

---
**10. Function and Module Documentation:** 
- Clearly document functions and modules using docstrings, providing examples where necessary.
  **Example 1:**
```Python
def function1(arg1: int, arg2: str) -> bool:
    """
    Description of function1.

    Args:
        arg1 (int): Description of arg1.
        arg2 (str): Description of arg2.

    Returns:
        bool: Description of the return value.
    """
    # Implementation of function1
    pass
```

**Example 2: for exceptions**
```Python
def connect_to_next_port(self, minimum: int) -> int:
    """Connects to the next available port.

    Args:
      minimum: A port value greater or equal to 1024.

    Returns:
      The new minimum port.

    Raises:
      ConnectionError: If no available port is found.
    """
    if minimum < 1024:
      # Note that this raising of ValueError is not mentioned in the doc
      # string's "Raises:" section because it is not appropriate to
      # guarantee this specific behavioral reaction to API misuse.
      raise ValueError(f'Min. port must be at least 1024, not {minimum}.')
    port = self._find_next_open_port(minimum)
    if port is None:
      raise ConnectionError(
          f'Could not connect to service on port {minimum} or higher.')
    assert port >= minimum, (
        f'Unexpected port {port} when minimum was {minimum}.')
    return port
```
---
**11. Module documentation:**
**Example:**
```Python
# module_name.py

"""
This module provides functions to perform specific tasks.

Functions:
    function1(arg1, arg2): Description of function1.
    functio

n2(arg1): Description of function2.
"""
```
---
**12. TODO Comments**
`# # TODO(yourusername): File an issue and use a '*' for repetition.`

---
**13.Logical Grouping of Imports:**
- Group imports according to their origin: standard libraries, third-party libraries, and local imports.
```Python
# Standard library imports
import os
import sys

# Third-party imports
import numpy as np
import pandas as pd

# Your own module imports
from my_module import MyClass, my_function
```
---
**14. String formating (continued) :** 
- Use f-strings for clean and readable string concatenation.
```Python
name = "Alice"
age = 30

# Good:
message = f"Hello, my name is {name} and I am {age} years old."

# Avoid:
message = "Hello, my name is " + name + " and I am " + str(age) + " years old."
```
---
**15.List comprehension and generator expressions:**
  - Prefer these expressions for clean and efficient code.

```Python
# List comprehension
squares = [x**2 for x in range(10)]

# Generator expression
squares_gen = (x**2 for x in range(10))
```
---
**16. Function and method chaining:**
- Utilize chaining for clean, readable code.
```Python
# Chaining methods
result = some_string.strip().lower().replace('a', 'b')
```
---
**17.Context Managers and the with Statement:**
- Use context managers for managing resources, such as files, to ensure proper cleanup.

```Python
# Good:
with open("file.txt", "r") as file:
    content = file.read()

# Avoid:
file = open("file.txt", "r")
content = file.read()
file.close()
```
---
**18.Use is and is not for Identity Comparison**:
 - Prefer these keywords for comparing object identities.

```Python
# Good:
if x is None:
    pass

if y is not None:
    pass

# Avoid:
if x == None:
    pass

if y != None:
    pass
```
---
**19.Use parentheses for multiline expressions:**
- Enhance readability by enclosing multiline expressions in parentheses.

```Python
# Good:
result = (10 + 20 +
          30 + 40 +
          50)

# Avoid:
result = 10 + 20 +
         30 + 40 +
         50
```

---

**20.Use enumerate for Iterating with an Index:**
- Utilize enumerate for cleaner, more Pythonic iteration with indices.
```Python
# Good:
fruits = ["apple", "banana", "orange"]
for idx, fruit in enumerate(fruits):
    print(f"Index {idx}: {fruit}")

# Avoid:
fruits = ["apple", "banana", "orange"]
for i in range(len(fruits)):
    print(f"Index {i}: {fruits[i]}")
```

---

**21.Use descriptive names for function arguments:**
- Choose meaningful argument names for clarity.
```Python
# Good:
def calculate_area(base, height):
    return 0.5 * base * height

# Avoid:
def calculate_area(b, h):
    return 0.5 * b * h
```
---

**22. Use the in Keyword for Membership Tests:**
- Prefer in over other methods for checking membership in a collection
```Python
# Good:
if element in my_list:
    pass

if key in my_dict:
    pass

# Avoid:
if my_list.count(element) > 0:
    pass

if my_dict.has_key(key):
    pass
```

---

**23. Use Tuple Unpacking for Multiple Return Values:**
- Prefer tuple unpacking for clean, readable code.

```Python
# Good:
def get_name_and_age():
    return "John", 30

name, age = get_name_and_age()
print(name, age)  # Output: John 30

# Avoid:
result = get_name_and_age()
name = result[0]
age = result[1]
```

---

**24. Avoid Single-Character Names for Common Objects :** 
- e.g like "user_list" don't name it "l".

- Choose descriptive names that convey the purpose of the object.

```Python
# Good: 
user_list = ["Shimon","Havazelet","Pinhas"]

# Avoid:
l = ["Shimon","Havazelet","Pinhas"]
```


---
**25. Use isinstance() instead of type comparisons:**
- Utilize isinstance() for type checks, especially when dealing with inheritance.


```Python
# Good:
if isinstance(my_var, int):
    pass

# Avoid:
if type(my_var) is int:
    pass
```

---

** 26ץ Exception classes should end in “Error”:


```Python
class MyCustomError(Exception):
    pass

# Good:
try:
    raise MyCustomError("Something went wrong.")
except MyCustomError as e:
    print(f"Caught custom error: {e}")
```

---
**27.Use Underscores for Large Number Literals:**
- For better readability, use underscores to separate digits in large number literals.


```Python
# Good:
million = 1_000_000

# Avoid:
million = 1000000
```

**28. Prefer Generators for Large Datasets:**
- Use generators instead of lists when working with large datasets to save memory.

```Python
# Good:
numbers = (x for x in range(1, 1000000))

# Avoid:
numbers = [x for x in range(1, 1000000)]
```
**29. Embrace Modular Programming:**
- Break down large functions and classes into smaller, more manageable pieces to improve reusability and maintainability.


**30. Optimize Import Statements:**
- Remove unnecessary import statements and only import what you need.
```Python
# Good:
from os import path

# Avoid:
import os
```
**31. Use Decorators to Enhance Functions:**
- Utilize decorators for cross-cutting concerns like logging, timing, or access control.


```Python
from functools import wraps

def log_function_call(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        print(f"Calling {f.__name__}")
        return f(*args, **kwargs)
    return wrapper

@log_function_call
def my_function():
    pass
```

---

**32. Avoid Over-Optimization:**

- Write clear and readable code first; optimize only when necessary, based on actual performance measurements.