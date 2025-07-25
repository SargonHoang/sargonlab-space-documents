---
title: 'Go String'
---

A string is a sequence of characters. For example, **"Golang"** is a string that includes characters: **G, o, l, a, n, g**.

We use double quotes to represent strings in Go. For example,

```go
// using var
var name1 = "Go Programming"

// using shorthand notation
name2 := "Go Programming"
```

Here, both `name1` and `name2` are strings with the value **"Go Programming"**.

## Example: Golang String

```go
// Program to create a string in Golang

package main
import "fmt"

func main() {

  // create string using var
  var message1 = "Hello,"

  // create string using shorthand notation
  message2 := "Welcome to Programiz"

  fmt.Println(message1)
  fmt.Println(message2)
}
```

**Output**

```text
Hello,
Welcome to Programiz
```

## Golang String using backtick (` `)

In Go, we can also represent strings using the tick mark notation. For example,

```go
Program to represent a string with a backtick

package main
import "fmt"

func main() {

  //  represent string with `  `
  message := `I love Go Programming`

  fmt.Println(message)
}
```

**Output**

```text
I love Go Programming
```

## Access Characters of String in Go

We know that a string is a sequence of characters. Hence, we can access individual characters of a string.

Just like the [Go array](../data-structures/go-arrays.md), we use index numbers to access string characters. For example,

```go
// Program to access individual character of string

package main
import "fmt"

func main() {

  // create and initialize a string
  name := "Programiz"

  // access first character
  fmt.Printf("%c\n", name[0])  // P

  // access fourth character
  fmt.Printf("%c\n", name[3])  // g

  // access last character
  fmt.Printf("%c", name[8])  // z
}
```

Remember a string index starts from **0**, not **1**.

## Find the length of a string

In Go, we use the `len()` function to find the length of a string. For example,

```go
// Program to count the length of a string

package main
import "fmt"

func main() {

  // create string
  message := "Welcome to Programiz"

  // use len() function to count length
  stringLength := len(message)

  fmt.Println("Length of a string is:", len(stringLength))

}
```

**Output**

```text
Length of a string is: 20
```

Here, `len()` returns the number of characters present inside the string.

## Join Two Strings Together

In Go, we can use the `+` operator to join (concatenates) strings together. For example,

```go
// Program to concatenate two strings

package main
import "fmt"

func main() {
  message1 := "I love"
  message2 := "Go programming"

  // concatenation using + operator
  result := message1 + " " + message2

  fmt.Println(result)
}
```

**Output**

```text
I love Go programming
```

Here, we have used the `+` operator to join three strings: `message1`, `" "`, and `message2`.

## Golang String Methods

In Go, the strings package provides various methods that can be used to perform different operations on strings.

| Functions    | Descriptions                                     |
| ------------ | ------------------------------------------------ |
| `Compare()`  | compares two strings                             |
| `Contains()` | checks if a substring is present inside a string |
| `Replaces()` | replaces a substring with another substring      |
| `ToLower()`  | converts a string to lowercase                   |
| `ToUpper()`  | converts a string to uppercase                   |
| `Split()`    | splits a string into multiple substrings         |

To use these methods, we must first import the strings package in our code.

```go
import (
  "fmt"
  "strings"
)
```

## Compare Two Strings in Go

We use the `Compare()` of the `strings` package to compare two strings. For example,

```go
// Program to compare string using Compare()

package main
import (
  "fmt"
  "strings"
)

func main() {

  // create three strings
  string1 := "Programiz"
  string2 := "Programiz Pro"
  string3 := "Programiz"

  // compare strings
  fmt.Println(strings.Compare(string1, string2))  // -1
  fmt.Println(strings.Compare(string2, string3))  // 1
  fmt.Println(strings.Compare(string1, string3))  // 0

}
```

Here, we have used

```go
strings.Compare(string1, string2)
```

to compare two strings: `string1` and `string2`. The function returns:

- **-1** because `string1` is smaller than `string2`
- **1** because `string2` is greater than `string3`
- **0** because `string1` and `string3` are equal

:::note
We have imported `strings` at the beginning of the program and used `strings.Compare()` not `Compare()`.
:::

## Check if String contains Substring

To check if a substring is present inside a string, we use the `Contains()` method of the Go `strings` package.

Let's see an example,

```go
// Program to illustrate the use of Contains()

package main
import (
  "fmt"
  "strings"
)

func main() {

  text := "Go Programming"
  substring1 := "Go"
  substring2 := "Golang"

  // check if Go is present in Go Programming
  result := strings.Contains(text, substring1)
  fmt.Println(result)

  // check if Golang is present in Go Programming
  result = strings.Contains(text, substring2)
  fmt.Println(result)
}
```

**Output**

```text
true
false
```

Here, we get the output

- `true` because the substring **"Go"** is present inside the string **"Go Programming"**
- `false` because the substring **"Golang"** is not present inside the string **"Go Programming"**

## Replace a String in Go

To replace a string, we use the `Replace()` method present inside the strings package. For example,

```go
// Program using Replace() to replace strings

package main
import (
  "fmt"
  "strings"
)

func main() {

  text := "car"
  fmt.Println("Old String:", text)

  // replace r with t
  replacedText := strings.Replace(text, "r", "t", 1)

  fmt.Println("New String:", replacedText)
}
```

**Output**

```text
Old String: car
New String: cat
```

Notice the use of the `Replace()` method

```go
strings.Replace(text, "r", "t", 1)
```

Here,

- `text` - string where we perform the replace operation
- `"r"` - old character that needs to be replaced
- `"t"` - new character that replaces the old character
- `1` - represents how many old characters to be replaced

:::note
If we need to replace multiple characters, we can change the value of numbers from **1** to any other. For example,

```go
// replace 2 r with 2 a
strings.Replace("Programiz", "r", "R", 2)

// Output: PRogRamiz
```

:::

## Change Case of Go String

The strings package provides

- `ToUpper()` - to change string to uppercase
- `ToLower()` - to change string to lowercase

We use the `ToUpper()` function to change the given string to uppercase. The function `ToUpper()` is provided by the package `strings`. For example,

```go
// Program to convert a string to uppercaseand lowercase

package main
import (
  "fmt"
  "strings"
)

func main() {

  text1 := "go is fun to learn"

  // convert to uppercase
  text1 = strings.ToUpper(text1)

  fmt.Println(text1)

  text2 := "I LOVE GOLANG"

  // convert to lowercase
  text2 = strings.ToLower(text2)
  fmt.Println(text2)
}
```

**Output**

```text
GO IS FUN TO LEARN
i love golang
```

## Split Strings in Golang

In Go, we can split a string into multiple substrings using the `Split()` method. For example,

```go
package main
import (
  "fmt"
  "strings"
)

func main() {
  var message = "I Love Golang"

  // split string from space " "
  splittedString := strings.Split(message, " ")

  fmt.Println(splittedString)
}

// Output: [I Love Golang]
```

Notice the code,

```go
strings.Split(message, " ")
```

Here, we split the string at `" "`. Hence, we get individual words as output.

The `Split()` method returns a slice of all the substrings. In our example, `[I Love Golang]` is a slice.

## Other String Operations

### Compare Golang Strings using ==

In Go, we can also use the `==` operator to compare two strings. For example,

```go
// Program to compare two strings using == operator

package main
import "fmt"

func main() {

// create 2 strings
  string1 := "Programiz"
  string2 := "programiz"

  // compare two strings
  result := string1 == string2

  fmt.Println(result)
}

// Output: false
```

The `==` operator returns

- `true` - if two strings are equal
- `false` - if two strings are not equal

:::note
The `==` operator is case sensitive. Hence, `Programiz` and `programiz` are not equal.
:::

### Create Strings from a Slice

In Go, we can also create a string by joining all the elements of a string slice. For example,

```go
// Program to create a single string from slices of strings using Join()

package main
import (
  "fmt"
  "strings"
)

func main() {

  // create a string slice
  words := []string{"I", "love", "Golang"}

  // join each element of the slice
  message := strings.Join(words, " ")
  fmt.Println(message)
}

// Output: I love Golang
```

Here, we have used the `Join()` method of the `strings` package to join each element of the slice.

To learn more about slice, visit [Golang Slice](../data-structures/go-slice.md).

### Loop Through Strings in Golang

We use for range loop to iterate through each character of a Golang string. For example,

```go
// Program to iterate through a string

package main
import "fmt"

func main() {
  text := "Golang"

  // for range loop to iterate through a string
  for _, character := range text  {
  fmt.Printf("%c\n", character)
  }

}
```

**Output**

```text
G
o
l
a
n
g
```

To learn about the for range loop, visit [Go for range](../flow-control/go-range.md).

## Escape Sequence in Golang String

We use escape characters to escape some of the characters present inside a string. For example,

Suppose we need to include double quotes inside a string.

```go
// include double quote
message := "This article is about "String" in Go Programming."
```

Since strings are represented by double quotes, the compiler will treat `"This article is about "` as the string. Hence, the above code will cause an error.

To solve this issue, we can use the escape character `\` in Go. For example,

```go
// use the escape character
message := "This article is about \"String\" in Go Programming."
```

Now, the escape characters tell the compiler to escape double quotes and read the whole text.

## Example: Escape Sequence

```go
package main
import "fmt"

func main() {

  // use escape character in string
  message := "This article is about \"String\" in Go Programming."

  fmt.Println(message)
}

// Output: This article is about "String" in Go Programming.
```

:::note
`\n` and `\t` are other popular escape sequences that add a new line and tab inside a string.
:::

## Go Strings are Immutable

In Go, strings are immutable. This means once we create a string, we cannot change it.

To understand it, consider an example,

```go
// create a string
message := "Go"
```

Here, we have created a string variable named message with the value `"Go"`.

Now, suppose we want to change the string.

```go
// add another string "String" to the previous string
message = message + " " + "String"
```

Here, we are using the `+` operator to add another string `"String"` to the previous string.

It looks like we can change the value of the previous string. However, this is not true. Let's see what has happened here,

- go creates the first string `"Go"`
- It then creates another string by joining the first string with `"String"`
- assigns the new string to `message`
- the first string `"Go"` remains unchanged.
