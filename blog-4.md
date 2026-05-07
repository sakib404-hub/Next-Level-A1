                                                                  Inheritance

Inheritance means taking or deriving something from a parent. In this case, one class can use the properties and behaviors of another class. A child class extends a parent class and shares common properties. It reduces duplication (follows the DRY principle — Don’t Repeat Yourself). In large projects, it is useful for shared models, base services, and UI components. Changes in the parent class automatically propagate to child classes.

                                                                  Polymorphism

Polymorphism means “many forms”. It occurs when multiple classes are related through inheritance.Different classes can implement the same method in different ways.It reduces complexity because you can treat different objects uniformly and avoid excessive conditional logic (like multiple if/else statements).

                                                                  Abstraction

Abstraction is the process of hiding unnecessary details and showing only essential information to the user. It mainly focuses on what to do, not how to do it. This reduces complexity because developers don’t need to understand the entire system to use a part of it. You can also change the implementation without affecting users of that code. In TypeScript, interface and abstract class are key tools used to achieve abstraction.

                                                                  Encapsulation

Encapsulation acts like a “capsule” where the capsule protects the medicine inside. Similarly, encapsulation protects the data (variables) and methods inside a class. In one line Encapsulation keeps data safe inside a class and does not allow direct modification from outside. It helps prevent mistakes and keeps data secure. Example: In a bank app, you can deposit money, but you cannot directly change your balance.
