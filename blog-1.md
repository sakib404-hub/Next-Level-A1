          ANY

In TypeScript, any disables type checking. Once a value is marked as any, TypeScript stops enforcing rules on it.
This is why it’s called a type safety hole:
i.You can assign anything to any
ii.You can perform any operation on it
iii.TypeScript will not warn you about errors

              UNKNOWN

Unknown is a safer alternative because it still represents an unknown type, but it does not allow unsafe operations directly.You can store any value in unknown
But you cannot use it until you check its type
Advantage of Unknown:
i.Keeps type safety intact
ii.Forces validation before usage
iii.Prevents accidental runtime errors

              TYPE NARROWING

Type narrowing is the process of refining a broader type into a more specific type using checks. Since unknown cannot be used directly, TypeScript requires you to narrow it down first.
