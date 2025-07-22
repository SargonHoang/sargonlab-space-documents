---
title: 'Go Data Types'
---

We use data types in Golang to determine the type of data associated with variables. For example,

```go
var age int
```

Here, int is a data type that specifies that the age variable can store integer data.

The basic data types in Golang are

| Data Type | Description                                              | Examples                           |
| --------- | -------------------------------------------------------- | ---------------------------------- |
| int       | Integer numbers.                                         | 7123, 0, -5, 7023                  |
| float     | Numbers with decimal points.                             | 20.2, 500.123456, -34.23           |
| complex   | Complex numbers.                                         | 2+4i, -9.5+18.3i                   |
| string    | Sequence of characters.                                  | "Hello World!", "1 is less than 2" |
| bool      | Either true or false.                                    | true, false                        |
| byte      | A byte (8 bits) of non-negative integers.                | 2, 115, 97                         |
| rune      | Used for characters. Internally used as 32-bit integers. | 'a', '7', '<'                      |

Now, let's discuss the commonly used data types in detail.

## 1. Integer Data Type

Integers are whole numbers that can have both zero, positive and negative values but no decimal values. For example, 0, 5, -1340.

We commonly use the int keyword to declare integer numbers.

```go
var id int
```

Here, **id** is a variable of type integer.

You can declare multiple variables at once in the same line.

```go
var id, age int
```

In Go programming, there are two types of integers:

- signed integer int - can hold both positive and negative integers

- unsigned integer uint - can only hold positive integers

There are different variations of integers in Go programming.

| Data Types   | Size                                          |
| ------------ | --------------------------------------------- |
| int/uint     | either 32 bits (4 bytes) or 64 bits (8 bytes) |
| int8/uint8   | 8 bits (1 byte)                               |
| int16/uint16 | 16 bits (2 bytes)                             |
| int32/uint32 | 32 bits (4 bytes)                             |
| int64/uint64 | 64 bits ( 8 bytes)                            |

:::note
Unless we have a specific requirement, we usually use the int keyword to create integers.
:::

### Example: Understanding Integer Type

```go
package main
import "fmt"

func main() {
  var integer1 int
  var integer2 int

  integer1 = 5
  integer2 = 10

  fmt.Println(integer1)
  fmt.Print(integer2)
}
```

**Output**

```text
5
10
```

If you want to learn more about creating variables, visit [Go Variables](./go-variables.md).

## 2. Float Data Type

The float type is used to hold values with decimal points. For example, 6.7, -34.2

Keywords used: **float32**, **float64**

Here's an example,

```go
var salary float64
```

There are two sizes of floating-point data in Go programming.

| Data Types | Size              |
| ---------- | ----------------- |
| float32    | 32 bits (4 bytes) |
| float64    | 64 bits (8 bytes) |

:::note
If we define float variables without specifying size explicitly, the size of the variable will be 64 bits. For example,

```go
// the size of the variable is 64
salary := 5676.3
```

:::

### Example: Understanding Float Type

```go
// Program to illustrate float32 and float64 with example

package main
import "fmt"

func main() {
  var salary1 float32
  var salary2 float64

  salary1 = 50000.503882901

  // can store decimals with greater precision
  salary2 = 50000.503882901

  fmt.Println(salary1)
  fmt.Println(salary2)

}
```

**Output**

```text
50000.504
50000.503882901
```

## 3. String Data Type

A string is a sequence of characters. For example, "Hello", "Hey there"

Keyword: string

Here's an example,

```go
var message string
```

In Go, we use either double quotes or backticks to create strings.

```go
var message string = "Hello World "
var message string =  `Hello World`
```

### Example: Understanding String Type

```go
// Program to create string variables

package main
import "fmt"

func main() {
  var message string
  message = "Welcome to Programiz"

  fmt.Println(message)

}
```

**Output**

```text
Welcome to Programiz
```

## 4. Boolean Data Type

The boolean data type has one of two possible values either true or false.

Keyword: bool

```go
var isValid bool
```

### Example: Understanding bool Type

```go
// Program to create boolean variables

package main
import "fmt"

func main() {
  var boolValue bool
  boolValue = false

  fmt.Println(boolValue)
}
```

**Output**

```text
false
```

We will learn about booleans in detail in the [Go Comparison and Logical Operators](../../../Go/Flow_Control/Boolean_Expression/doc.md) tutorial.
