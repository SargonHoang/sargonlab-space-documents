---
title: 'Go if...else'
---

In computer programming, we use the if statement to run a block code only when a certain condition is met.

For example, assigning grades **(A, B, C)** based on marks obtained by a student.

- if the percentage is above **90**, assign grade **A**
- if the percentage is above **75**, assign grade **B**
- if the percentage is above **65**, assign grade **C**

## Go if statement

The syntax of the `if` statement in Go programming is:

```go
if test_condition {
   // code
}
```

If **test_condition** evaluates to

- `true` - statements inside the body of `if` are executed.
- `false` - statements inside the body of `if` are not executed.

![Working of if statement in Go programming](/images/programming-language/go/flow-control/if-else/golang-if-statement.png)

### Example: Simple if statement in Golang

```go
// Program to display a number if it is positive

package main
import "fmt"

func main() {
  number := 15

  // true if number is less than 0
  if number > 0 {
    fmt.Printf("%d is a positive number\n", number)
  }

  fmt.Println("Out of the loop")
}
```

**Output**

```text
15 is a positive number
Out of the loop
```

In the above example, we have created a variable named `number`. Notice the condition,

```go
number > 0
```

Here, since the variable `number` is greater than **0**, the condition evaluates `true`.

If we change the variable to a negative integer. Let's say **-5**.

```go
number := 5
```

Now, when we run the program, the output will be:

```text
Out of the loop
```

This is because the value of `number` is less than **0**. Hence, the condition evaluates to `false`. And, the body of the `if` block is skipped.

## Go if...else statement

The `if` statement may have an optional `else` block. The syntax of the `if..else` statement is:

```go
if test_condition {
    // run code if test_condition is true
} else {
    // run code if test_condition is false
}
```

If **test_condition** evaluates to `true`,

- the code inside `if` is executed
- the code inside `else` is skipped

If **test_condition** evaluates to `false`,

- the code inside `else` is executed
- the code inside `if` is skipped

![Working of if...else in Go programming](/images/programming-language/go/flow-control/if-else/if-else-golang.png)

### Example: if...else statement in Golang

```go
package main
import "fmt"

func main() {
  number := 10

  // checks if number is greater than 0
  if number > 0 {
    fmt.Printf("%d is a positive number\n", number)
  } else {
    fmt.Printf("%d is a negative number\n", number)
  }
}
```

**Output**

```text
10 is a positive number
```

The `number` is **10**, so the test condition `number > 0` is evaluated to be `true`. Hence, the statement inside the body of `if` is executed.

If we change the variable to a negative integer. Let's say **-5**.

```go
number := -5
```

Now if we run the program, the output will be:

```text
-5 is a negative number
```

Here, the test condition evaluates to false. Hence code inside the body of else is executed.

:::note
The `else` statement must start in the same line where the `if` statement ends.
:::

## Go if...else if ladder

The `if...else` statement is used to execute a block of code among two alternatives.

However, if you need to make a choice between more than two alternatives, then we use the `else if` statement.

```go
if test_condition1 {
   // code block 1
} else if test_condition2 {
   // code block 2
} else {
   // code block 3
}
```

Here,

**if test_condition1 evaluates to true**

- `code block 1` is executed
- `code block 2` and `code block 3` are skipped

**if test_condition2 evaluates to true**

- `code block 2` is executed
- `code block 1` and `code block 3` are skipped

**if both test conditions evaluates to false**

- `code block 3` is executed
- `code block 1` and `code block 2` are skipped

![Working of if...else if...else in Go programming](/images/programming-language/go/flow-control/if-else/golang-if-else-ladder.png)

### Example: if...if else ladder statement in Golang

```go
// Program to relate two integers using =, > or < symbol

package main
import "fmt"

func main() {

  number1 := 12
  number2 := 20

  if number1 == number2 {
    fmt.Printf("Result: %d == %d", number1, number2)
  } else if number1 > number2 {
    fmt.Printf("Result: %d > %d", number1, number2)
  } else {
    fmt.Printf("Result: %d < %d", number1, number2)
  }
}
```

**Output**

```text
Result: 12 < 20
```

Here, both the test conditions `number1 == number2` and `number1 > number2` are `false`. Hence the code inside the `else` block is executed.

## Go nested if statement

You can also use an `if` statement inside of an `if` statement. This is known as a **nested if** statement.

```go
// outer if statement
if test_condition1 {
  // statements

  // inner if...else statement
  if test_condition2 {
    // statements
  }else {
    // statements
  }
}
```

### Example: Nested if statement in Golang

```go
package main
import "fmt"

func main() {

  number1 := 12
  number2 := 20

  // outer if statement
  if number1 >= number2 {

  // inner if statement
  if number1 == number2 {
    fmt.Printf("Result: %d == %d", number1, number2)
    // inner else statement
  } else {
    fmt.Printf("Result: %d > %d", number1, number2)
  }

  // outer else statement
  } else {
    fmt.Printf("Result: %d < %d", number1, number2)
  }
}
```

**Output**

```text
Result: 12 < 20
```

If the outer condition `number1 >= number2` is `true`

- inner `if` condition `number1 == number2` is checked
- if condition is `true`, code inside the inner `if` is executed
- if condition is `false`, code inside the inner `else` is executed

If the outer condition is `false`, the outer `else` statement is executed.
