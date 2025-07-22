---
title: 'Go Print Statement'
---

We use these three functions to print output messages in Go programming.

- fmt.Print()

- fmt.Println()

- fmt.Printf()

!!! Note
All these functions are defined under the **fmt** package. So, we must import the **fmt** package before we can use these functions.

## Go fmt.Print()

Let's take an example.

```go
// Program to illustrate fmt.Print()

package main

// import fmt package
import "fmt"

func main() {

  fmt.Print("Hello, ")
  fmt.Print("World!")

}
```

**Output**

```text
Hello World!
```

Here, the **fmt.Print()** function prints the content inside parentheses **()**.

## Print Variables

Here's how we print variables in Go programming.

```go
// Program to illustrate fmt.Print()

package main

// import the fmt package
import "fmt"

func main() {

  name := "John"
  fmt.Print(name)

}
```

**Output**

```text
John
```

!!! Note
We must not wrap variables inside quotation marks while printing. Otherwise, it's considered as a string.

## Printing Multiple Values At Once

We can print multiple values and variables at once by separating them with commas. For example,

```go
// Program to illustrate fmt.Print()

package main

// import the fmt package
import "fmt"

func main() {

  name := "John"
  fmt.Print("Name: ", name)
}
```

**Output**

```text
Name: John
```

## Go fmt.Println()

The way **fmt.Println()** works is similar to how **fmt.Print()** works with a couple of differences.

1. **fmt.Println()** prints a new line at the end by default.

2. If we print multiple values and variables at once, a space is added between the values by default.

```go
// Program to illustrate the use of Println() function

package main
import "fmt"

// prints output in different lines
func main() {

  currentSalary := 50000

  fmt.Println("Hello")
  fmt.Println("World!")
  fmt.Println("Current Salary:", currentSalary)

}
```

**Output**

```text
Hello
World!
Current Salary: 50000
```

**Things to notice**

- All the output messages are printed in separate lines

- A space is added after **Current Salary**: by default

## Go fmt.Printf()

The `fmt.Printf()` function formats the strings and sends them to the screen. Let's see an example.

```go
currentAge := 21
fmt.Printf("Age = %d", currentAge)
```

Here, the `fmt.Printf()` function replaces the `%d` with the value of `currentAge`.

By the way, `%d` is a format specifier that replaces **integer variables** with their values.

![Printf() function in Go programming](/images/programming-language/go/introduction/print-statement/go-printf-function.png)

In Go, every data type has a unique format specifier.

| Data Type | Format Specifier |
| --------- | ---------------- |
| integer   | `%d`             |
| float     | `%g`             |
| string    | `%s`             |
| bool      | `%t`             |

### Example: Using %g to print Float Values

```go
// Program to print an integer using its format specifier %g

package main
import "fmt"

func main() {
  var number annualSalary = 65000.5

  fmt.Printf("Annual Salary: %g", annualSalary)
}
```

**Output**

```text
Annual Salary:  65000.5
```

Here, `fmt.Printf()` converts the `"Annual Salary: %g"` string to `"Annual Salary: 65000.5"`.

### Example: Using format specifiers to hold value of a variable

A format string may also have multiple format specifiers.

```go
package main
import "fmt"

func main() {
  var name = "John"
  age := 23

  fmt.Printf("%s is %d years old.", name, age)
}
```

**Output**

```text
John is 23 years old.
```

Here's how this code works:

![Working of Format Specifier in Go](/images/programming-language/go/introduction/print-statement/go-format-specifier.png)

## Printing Without Package

It's also possible to print output without using the `fmt` package. For that, we use `print()` and `println()`. For example,

```go
// Program to print output using print() function

package main

func main() {
  println("Using println instead of fmt.Println")

  print("Using print instead of fmt.Print")
}
```

**Output**

```text
Using println instead of fmt.Println
Using print instead of fmt.Print
```

Here, we have used `println()` and `print()` instead of `fmt.Println()` and `fmt.Print()` respectively.

:::note
It's recommended to use the fmt package for printing. We usually use println(), print() only for debugging purposes. To learn more, visit fmt.Println() Vs println() in Go programming.
:::
