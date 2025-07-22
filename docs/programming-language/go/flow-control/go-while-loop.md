---
title: 'Go while Loop'
---

In Go, we use the **while loop** to execute a block of code until a certain condition is met.

Unlike other programming languages, Go doesn't have a dedicated keyword for a `while` loop. However, we can use the `for` loop to perform the functionality of a `while` loop.

**Syntax of Go while loop**

```go
for condition {
  // code block
}
```

Here, the loop evaluates the `condition`. If the condition is:

- `true` - statements inside the loop are executed and `condition` is evaluated again
- `false` - the loop terminates

## Flowchart of while loop in Go

![Working of Go while loop](/images/programming-language/go/flow-control/while-loop/go-while-loop.png)

### Example: Go while loop

```go
// Program to print numbers between 1 and 5

package main
import ("fmt")

func main() {
  number := 1

  for number <= 5 {
    fmt.Println(number)
    number++
  }
}
```

**Output**

```text
1
2
3
4
5
```

Here, we have initialized the `number` to **1**.

1. During the first iteration, the condition `number <= 5` is `true`. Hence, **1** is printed on the screen. Now, the value of `number` is increased to **2**.
2. Again the test condition, `number <= 5` is true. Hence, **2** is also printed on the screen and the value of `number` is increased to **3**.
3. This process continues until `number` becomes **6**. Then, the condition `number <= 5` will be `false` and the loop terminates.

## Create multiplication table using while loop

```go
// Program to create a multiplication table of 5 using while loop

package main
import ("fmt")

func main() {
  multiplier := 1

  // run while loop for 10 times
  for multiplier <= 10 {

    // find the product
    product := 5 * multiplier

    // print the multiplication table in format 5 * 1 = 5
    fmt.Printf("5 * %d = %d\n", multiplier, product)
    multiplier++
  }

}
```

**Output**

```text
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
```

Here, we have initialized the `multiplier := 1`. In each iteration, the value of the `multiplier` gets incremented by 1 until `multiplier <= 10`.

## Go do...while Loop

In Go, we can use the same `for` loop to provide the functionality of a **do while loop**. For example,

```go
// Program to print number from 1 to 5

package main
import "fmt"

func main(){
  number := 1

  // loop that runs infinitely
  for {

    // condition to terminate the loop
    if number > 5 {
      break;
    }

    fmt.Printf("%d\n", number);
    number ++

  }
}
```

**Output**

```text
1
2
3
4
5
```

Notice the `if` statement inside the `for` loop.

```go
if number > 5 {
  break;
}
```

This statement acts as the **while** clause inside a **do...while loop** and is used to terminate the loop.
