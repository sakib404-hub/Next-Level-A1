                 Generics in TypeScript

In TypeScript, generics are a tool for creating reusable components that can work with a variety of data types while maintaining strict type safety. Generics allow you to build reusable components by using type parameters (placeholders), typically denoted as <T>, instead of concrete types like string or number Instead of locking a function or component to one specific type, generics let it adapt to whatever type you pass in, while still remembering that type.

It mainly works in the following way:
i. A generic acts as a placeholder for a type
ii. The actual type is provided when the function or class is called
iii. TypeScript ensures that the same type is used consistently throughout the code

Key Advantages of Generics:
i. Code Reusability
ii. Type Safety
iii. Flexibility
