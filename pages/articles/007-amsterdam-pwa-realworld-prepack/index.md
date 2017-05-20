---
title: "#7 - Amsterdam, PWA, RealWorld, Prepack"
date: "2017-05-20"
layout: post
path: "/007-amsterdam-pwa-realworld-prepack/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/323677823&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

News: 
- React Amsterdam 2017
- Hacker News readers as Progressive Web Apps written in React, Preact, Svelte, Vue, Angular and viperHTML
- TodoMVC for the RealWorld™ — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more
- Prepack - a tool for making JavaScript code run faster.

Links:
- https://twitter.com/ReactAmsterdam
- https://www.youtube.com/playlist?list=PLNBNS7NRGKMHxfm0CcYNuINLdRw7r4a9M - React Amsterdam 2017 playlist
- https://youtu.be/3J9EJrvqOiM?list=PLNBNS7NRGKMHxfm0CcYNuINLdRw7r4a9M - Complexity: Divide and Conquer
- http://divideandconquer.surge.sh/#1
- https://github.com/tastejs/hacker-news-pwas
- https://medium.com/@ericsimons/introducing-realworld-6016654d36b5
- https://github.com/gothinkster/realworld
- https://prepack.io

---
**Transcript**

On the 21st of April 2017 the yearly React Amsterdam conference took place. It is a major event in the React world, and interesting reports and videos have already been posted. The conference was divided into a main track for React and another one for React Native. The organizers have launched a contest for the best conference review post, and React Amsterdam’s Twitter page is constantly updated with links to new materials.

A talk called «Complexity: Divide and Conquer» by Michel Weststrate, the MobX creator, particularly caught my attention. Its main point was breaking tasks into smaller ones. It is a simple and ordinary piece of advice, but the example Michael presented is much less obvious: a bookstore website where the UI is fundamentally separated from the business logic. First we can see the website where a book can be selected, added to cart and checked out. Then the whole application render is removed, and the browser screen turns empty, but we can still choose a book, add it to cart, and purchase it by calling certain methods on Store object in the console. Meanwhile, the application responds properly to changing the URL in the browser, the server receives the requests correctly, and the necessary data gets loaded.

This can be achieved by following a few hygiene rules. React’s Life cycle methods should be avoided, in particular componentDidMount, which is often used to request data from the server. Additionally, the router shouldn’t select the components to render on its own, but rather change the state in Store. These and other useful tips will certainly help us divide and conquer!

Another point for today’s podcast, apart from React Amsterdam, are Progressive web apps. You can check out the repository with PWA implemented in several frameworks: React, Preact, Svelte, Vue, Angular, and viperHTML. The application itself is a clone of Hacker News.

If Hacker News clones are not your thing, here is a similar initiative: a blog platform called Real World, which is written using different technology stacks. 

What’s interesting is that apart from such front-end frameworks as React and Elm, the Real World repository also contains back-end implementations, including Node Express, Django, Rails, and Laravel. All of them rely on the same API, the front end is separate from the back end, and they can be combined. The author is planning to implement more examples based on various front- and back-end technologies, and contributors are welcome. There is a Medium post to accompany the repository.  

Another Hot topic is the Prepack tool which speeds up JavaScript code initialization. A sensational new project by the Facebook team! It is still in early development and is not recommended for production use, but Twitter is already full of application benchmarks that show double startup speed.

Prepack is a tool used on application source code, transforming it in order to speed up initialization at runtime. The idea is simple: any static computations that can be done at compile time should be done at compile time and not at runtime. Here is a clear example: imagine we want to write:

const x = 2 + 3;

this source code line would better be written as

const x = 5

to avoid computation while running the program in the browser or on the node.

Internally Prepack uses Babel to parse the source code and construct an abstract syntactic tree (AST). Then it needs to be able to interpret Javascript code and evaluate expressions, and it can indeed do that! 

At the core of Prepack is an almost ECMAScript 5 compatible interpreter — implemented in JavaScript! The interpreter closely follows the ECMAScript 2016 Language Specification, with a focus on correctness and spec conformance. You can think of the interpreter in Prepack as a clean reference implementation of JavaScript.

The interpreter has the ability to track and undo all effects, including all object mutations. This enables speculative optimizations.

In addition to elementary Javascript expressions, Prepack optimization makes use of symbolic expressions traversing all possible options. For example, Date.now can return an abstract value. Prepack tracks all operations that are performed over abstract values. When branching over abstract values, Prepack will fork execution and explore all possibilities. Thus, Prepack implements a Symbolic Execution engine for JavaScript.

There is a roadmap on prepack.io website. In the near future the developers plan to integrate Prepack into React Native tool chain and build some optimizations based on assumptions of the module system used by React Native.

Medium term goals include full ECMAScript 6 conformance and lots of further optimizations, such as elimination of unused exported properties (similar to what treeshake in webpack does, although webpack can’t compute js code and only operates on AST level, so Prepack is expected to do a more thorough cleanup than webpack).

In the long run the team plans to introduce execution flow analysis for bug hunting, side effect detection, type control,  as well as automated test generation leveraging symbolic execution features, and even a JavaScript virtual machine written in Javascript hosted in the browser for trying out new language features that can’t be transpiled with Babel. 

Check out the prepack.io website and try it on your own code base.

Code with React and prosper!
