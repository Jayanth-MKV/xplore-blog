---
title: 'Hello, World! - Your First Rust Program'
description: "Embark on your Rust journey with a classic and friendly 'Hello, World!' example. This article introduces you to the fundamentals of writing and running your first Rust program, setting the stage for an exciting exploration of the language."
category: '4. Getting Started'
tutorial: 'Rust Tutorial'
date: '2024-03-12'
order: 3
---

Welcome to the world of Rust! In this article, we'll kick off your Rust adventure with the timeless tradition of writing a "Hello, World!" program. Rust's syntax and structure may feel new, but fear not – we'll guide you through every step.

To get started, let's create a simple program that prints "Hello, World!" to the console. Open your favorite text editor or integrated development environment (IDE) and follow along.

```rust
fn main() {
    println!("Hello, World!");
}
```

Now, let's break down what's happening here:

- `fn main()`: This line declares the main function, which is the entry point for every Rust program.
- `println!("Hello, World!");`: This line prints the text "Hello, World!" to the console.

Once you've typed the code, save the file with a `.rs` extension, such as `hello_world.rs`. Now, let's run our program. Open your terminal, navigate to the directory where you saved the file, and enter the following command:

```bash
rustc hello_world.rs
./hello_world
```

Congratulations! You've just run your first Rust program. Stay tuned as we explore more exciting aspects of Rust in the upcoming articles.

[Continue Reading](https://doc.rust-lang.org/rust-by-example/)
