---
title: "#6 - Runtyper"
date: "2017-05-14"
layout: post
path: "/006-runtyper/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322512146&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

Analyzing React’s Source Code for Type Mismatch Operations with a new Babel plugin: Runtyper. 

- https://github.com/vitalets/babel-plugin-runtyper
- https://medium.com/dailyjs/analyzing-reacts-source-code-for-type-mismatch-operations-9ca065e5b91

---
**Transcript**

One smart guy, Vitaliy Potapov, wrote a babel plugin for runtime type-checking in JavaScript. After testing the plugin on his own projects he applied it to React’s source code and got some interesting results. In this podcast, I will tell you some facts from that experiment described on a Medium post made by Vitaly.

What is checked?
Every math or comparison operation with different types in JavaScript is potentially unsafe. You can get silent unexpected result because values are converted by tricky rules. For example, 1 + 1 = 2 but if you accidentally add 1 + 1 as a string, you will get a string value 11. To avoid such errors you can use Flow, TypeScript or check operand types in runtime. I will apply the last approach to the React source code.

How it works?
The plugin called Runtyper wraps every operation into a function that performs some additional type checking. The plugin guess types by code itself with no manual annotations needed. That allows to apply such checking to any existing project with minimal effort. Let’s try it on React.

Plan
1. Get the React source code.
2. Include Runtyper into the build process.
3. Run all of React’s unit tests and analyze the output.

While setting up Runtyper for this experiment with React, author allowed some rules because the default configuration of plugin is very strict. For example, implicitAddStringNumber option allows concatenation ofstring + number. It is widely used in React code and will noise results if disabled.

Also hi disabled a few lines in DOMProperty.js and Transaction.js. React executes these lines many times and their warnings overfill the output. In results section he covers what is happening there.

React uses Jest for self-testing. so all tests results were piped output to log.txt for later analysis.

When tests finished there were 33 unique places with type-mismatch operations. full log published for everybody’s access.

In his post on Medium Vitaliy analyzes 5 most interesting cases he found in React source code - there are code examples you better look in text, than in audio podcast.

As Conclusion it was interesting experiment to perform runtime type-checking of React source code. Most of warnings are just “info” and intended by React design. Some can be fixed. Finally Vitaliy created two pull requests to React repositry.

Read the full article and try Runtyper Babel plugin, links are in shownotes.

Code with React and Prosper!

