---
title: 'Go Comments'
---

In computer programming, comments are hints that are used to describe a piece of code. For example,

```go
// declare a variable
age := 24

// print variable
fmt.Println(age)
```

Here, `// declare a variable` and `// print variables` are two comments used in the code.

Comments have nothing to do with code logic. They are meant for fellow programmers and are completely ignored by the compiler.

## Types of Go Comments

In Go, there are two types of comments:

- `//` - Single Line comments

- `/*...*/` - Multiline Comments

## 1. Single Line Comment in Go

In Go, we use two forward slashes // to create a single-line comment. For example,

```go
package main
import "fmt"

func main() {

  // declare a variable
  age := 25

  // print the variable
  fmt.Println("Age is", age)
}
```

**Output**

```text
Age is 25
```

In the above example, we have created a variable named age and printed it. Here, `// declare a variable` and `// print the variable` are two single-line comments.

We can also use the single-line comment in the same line as the code. For example,

```go
age := 25    // declare a variable
```

In this case, the compiler

- executes the code statement before `//`

- ignores the text after `//`

## 2. Multiline Comments in Go

In Go, a multiline comment starts with `/*` and ends with `*/`. For example,

```go
package main
import "fmt"

func main() {

  /* creates a variable
  to store the salary of the employee
  */

  salary := 30000
  fmt.Println("Salary:", salary)
}
```

**Output**

```text
Salary: 30000
```

Here,

```text
/* create a variable
to store the salary of the employee
*/
```

is a multiline comment.

Multiline comments are also called block comments and they extend for multiple lines.

:::note
Multiline comments are generally used for debugging and testing purposes. In regular use, it is recommended to use multiple single-line comments instead of `/*...*/` to comment multiple lines. For example,

```text
// create a variable
// to store salary of the employee
```

:::

## Go Comments for Testing Code

Comments are helpful while debugging our code. For example,

Suppose we get an error while running a program. Instead of removing the whole code, we can comment on some parts of the code and test the program.

Let's understand it with the following examples.

```go
package main
import "fmt"

func main() {
  age := 25
  height := 170

  fmt.Println("Age is", age)
}
```

This code throws an error because we have declared the `height` but have not used it anywhere.

Instead of removing the code of `height`, we can comment that. For example,

```go
package main
import "fmt"

func main() {
  age := 25

  // height := 170

  fmt.Println("Age is", age)
}
```

**Output**

```text
Age is 25
```

Now, the code runs without any error.

Here, we have resolved the error by commenting the code related to height. Now, if we need the value of height in the near future, we can simply uncomment it.
