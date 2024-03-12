---
title: 'Custom Types: Structs and Enums in Rust'
description: "Dive into the world of custom data types and create your unique data structures with structs and enums. This article explores the power of custom types in Rust, allowing you to design and implement your data models effectively."
category: '4. Getting Started'
tutorial: 'Rust Tutorial'
date: '2024-03-12'
order: 5
---

Welcome to the exciting realm of custom data types in Rust! As your Rust journey progresses, you'll often find the need to define structures and enumerations tailored to your application's requirements. Let's explore how to create and utilize structs and enums in Rust.

## Structs: Defining Your Structure

Structs allow you to create your own data structures by grouping related data together. Here's an example:

```rust
struct Point {
    x: f64,
    y: f64,
}

fn main() {
    let origin = Point { x: 0.0, y: 0.0 };

    println!("The origin is at ({}, {})", origin.x, origin.y);
}
```

In this example, we define a `Point` struct with `x` and `y` fields, representing coordinates. We then create an instance of the `Point` struct called `origin` and access its fields.

## Enums: Defining Variants

Enums (enumerations) allow you to define a type by enumerating its possible variants. Consider the following example:

```rust
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}

fn main() {
    let penny = Coin::Penny;
    println!("A penny is worth {} cents", value_in_cents(penny));
}
```

Here, we define a `Coin` enum with variants representing different coins. The `value_in_cents` function calculates the value of a coin. We then create a `Penny` instance and print its value.

Custom types like structs and enums provide a powerful way to model your application's domain. Stay tuned as we delve deeper into Rust's features, including variable bindings, mutability, and type inference!

[Continue Reading](https://doc.rust-lang.org/rust-by-example/)
