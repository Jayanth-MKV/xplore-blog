---
title: 'Zustand Tutorial: Managing React State'
description: 'Get started with Zustand in React and learn how to manage a global state efficiently.'
publishedAt: '2023-02-03 10:20:00'
updatedAt: '2023-02-13 10:20:00'
# featured: '/static/images/react-context-api/react-context-api.png'
category: 'React'
author_avatar: '/ibas_ibaslogic.jpeg'
toc: true
blogorder: 3
---

State management is an essential topic in React. In the previous lessons, we covered the built-in global state management solutions like useState with prop drilling implementation and the context API.  

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.


Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

<a href="http://www.youtube.com/watch?feature=player_embedded&v=z2DI9ekwxV4
" target="_blank"><img src="http://img.youtube.com/vi/z2DI9ekwxV4/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" /></a>

---


<iframe width="100%" height="315" src="https://www.youtube.com/embed/z2DI9ekwxV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



term
: definition

### My Great Heading {#custom-id}

These built-in solutions have their use cases in applications with low-frequency updates and when prop drilling is feasible. However, they are not practically suitable for apps with frequent global state changes that cause unnecessary re-render and when prop drilling becomes a nightmare. 

> That is where state management libraries like redux, zustand, jotai and recoil come in. Naturally, these libraries can re-render the app components efficiently by ensuring that only the component that references a particular state is updated. 

```
// contant.json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

*This lesson introduces [the zustand state management library](https://github.com/pmndrs/zustand) in React. We will use it in our todos application and see how it behaves compared to the previous prop drilling and context API implementations.*

**This guide is a follow-up to the React context implementation lesson. We advise you to read that lesson first to understand the todos project structure if you are just joining the React series.**
<img style="margin:auto; width:100px" src="/logo.png" alt="Hii" />

After that, let’s get started!