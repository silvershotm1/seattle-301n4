<a id="top"></a>
# Today's Plan: Week 2, Monday Lecture

#### We will start today by reviewing Quiz 2, which we should have done on Friday.

#### Quiz 3 is due tonight.

- Announcements
  - We need to finish class and clear the room at 11:50am this morning because of a meeting that will be in here that must start right at noon.

- Discuss the weekly student survey [comments](student-comments.md) *[15 minutes]*

- [Go over the domain modeling articles](#readings) *[15 minutes]*

- [The Document Object Model (JS book, Ch.5)](#dom) *[30 minutes]*

- [Objects (with Dan)](#objects) *[30 minutes]*

*10-minute break*

- [Discussion on this week's project](#code) *[70 minutes]*

## Readings

- [Article on Domain Modeling](https://github.com/codefellows/domain_modeling#domain-modeling) (Sobol)
- ["Understanding The Problem Domain Is The Hardest Part Of Programming"](http://simpleprogrammer.com/2013/07/15/understanding-the-problem-domain-is-the-hardest-part-of-programming/) (Sonmez)
- JS Chapter 3: "Functions, Objects, and Methods" (pp.101-144)
- JS Chapter 5: "The Document Object Model"

[-top-](#top)



<a id="dom"></a>
## Go over the domain modeling articles

**Article on Domain Modeling (Sobol)**

- Domain modeling is the process of creating a conceptual model for a specific problem. And a domain model that's articulated well can verify and validate your understanding of that problem.
- Here's some tips to follow when building your own domain models:
  - When modeling a single entity that'll have many instances, build self-contained objects with the same attributes and behaviors.
  - Model its attributes with a constructor function that defines and initializes properties.
  - Model its behaviors with small methods that focus on doing one job well.
  - Create instances using the new keyword followed by a call to a constructor function.
  - Store the newly created object in a variable so you can access its properties and methods from outside.
  - Use the this variable within methods so you can access the object's properties and methods from inside.

**"Understanding The Problem Domain Is The Hardest Part Of Programming" (Sonmez)**

- Why problem domains are hard
- Programming is easy if you understand the problem domain

[-top-](#top)


<a id="dom"></a>
## The document object model (DOM)

**JS Chapter 5: "The Document Object Model"**

- p.186: The DOM tree is a model of a web page (diagram on p.187)
- p.188: Overview working with the DOM tree (accessing elements, setting values, create, attributes)
- p.190: Caching DOM queries (i.e. variables)
- p.192: Accessing elements
- p.196: Nodelists: DOM queries that return more than one element
- p.208: Traversing the DOM
- p.212: How to get/update element content
- p.236: Examining the DOM in Chrome

[-top-](#top)

<a id="objects"></a>
## Objects

**JS Chapter 3: "Functions, Objects, and Methods" (pp.100-144)**

- p.101: Object literal notation
- p.102: Accessing an object and dot notation
- Using bracket notation for object access (not in Duckett book)
- p.106: Creating an object: constructor notation (‘this’ is shown but not explained)
- p.107: Updating an object
- p.108-112: Creating many objects: constructor notation (‘this’ explained on p.108)
- p.118: Arrays are objects
- p.119: Arrays of objects & objects in arrays
- p.120: What are built-in objects?
- p.124: Window object
- p.126: Document object
- p.128: String object
- p.130: Working with strings (concatenation)
- p.132: Number object
- p.134: Math object

[-top-](#top)


<a id="code"></a>
## Discussion on this week's project

We'll go over the basics of this week's assignment, address the problem domain, and discuss how it is going to evolve through the week.

Ultimately, we'll look at a fully functional version of this project, and talk about how to organize the steps that go into building it.

We'll also do a code demo to show some of the techniques that will be needed for lab today, including:
- Working with images
- Working with color
- Working with Google Fonts

[-top-](#top)
