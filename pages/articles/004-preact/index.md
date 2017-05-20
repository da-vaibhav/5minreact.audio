---
title: "#4 - Preact"
date: "2017-05-11"
layout: post
path: "/004-preact/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322073604&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

Preact - Fast 3kB alternative to React with the same ES6 API. My experience.

- https://preactjs.com/
- https://www.youtube.com/watch?v=ETjTVV4qGoY - "React 30" podcast episode about Preact with author of the library Jason Miller

---
**Transcript**

I have recently tried out the Preact library. P as in letter “P”, “P React”.

According to the preactjs.com website, it is a faster alternative to React with the same API, packed into merely a 3-kB gzip.

Respecting our 5-minute format, let’s go over the main features and contrasts with React, and move on to my personal impression and conclusions based on few weeks of in real production.

Before we get to it, I just recommend you check out an interview with Preact author Jason Miller at "React 30" podcast, where he gets into the details of how it was created and what motivated him.

So here we go, some basic facts about Preact.

Take the preact.min.js file, version 8.1 is 8kB in size (not gzipeed), versus React 15.5.4 with its 150 kB - the difference is clear. 

However, Preact itself, as small as 8kB, uses a slightly different API which can’t simply work as a drop-in replacement for React.

That’s where the preact-compat package comes in, providing a compatibility layer with React API and adding up to 9kB more. Thus the 17kB combo of preact and preact-compat can completely replace React in your application right now - sounds great!

Now, a fair question: why is it so small? There must be something wrong. The main reason is that Preact is geared exclusively towards working with DOM in a browser, so it has no separate renderers like ReactDOM and React Native, which means no extra abstractions. It’s just as close to the metal as it gets (that is, to the browser).   

Secondly, Preact doesn’t make use of a synthetic event system like React does, but rather relies on native browser events.

Just like React, Preact supports all modern browsers including Internet Explorer versions 9 and newer.

It should also work in older IE versions with the help of es5-shim or babel-polyfill packages.

So there is a main Preact library and a preact-compat helper library. Here are some points to have in mind when using Preact without the React compatibility layer.

The render component method explicitly takes props, state, and context as arguments. If needed, props, state, and context can be addressed via this. By the way, that’s the kind of API developers of React themselves are aiming for.

HTML attribures "class" and "for" are called just "class" and "for" in JSX syntax, rather than "className" and "htmlFor".

Given that Preact makes use of native DOM events exclusively, it has no onChange handler so popular in React. Instead, onInput and onClick sould be used. 

Some sugar is added by "linkState" function, initially a core method that has recently been moved to a separate module.

Another difference is the fact that props.children in Preact is a simple JavaScript array, while React uses a more complex structure.

As for PropTypes, Preact has none at all.

The global render() function, which is the basis of our whole application DOM construction, has a third optional parameter here, in contrast with React.
 
Preact's render() is non-destructive, so rendering into <body> is perfectly fine (encouraged, even). This is possible because Preact does not assume it controls the entire root element you pass it. The second argument to render() is actually parent - meaning it's a DOM element to render into. If you would like to re-render from the root (perhaps for Hot Module Replacement), render() accepts an element to replace as a third argument.

Simply put, if global render is called with just two parameters, in every subsequent render call, React substitutes the parent element contents, while Preact appends it so that the application multiplies on the screen. To avoid this, a third parameter should be passed to Preact render - for instance, lastElementChild.

By the way Preact is compatible with React Developer Tools.

Peract's core diff algorithm is different from React. Preact compares the current virtual DOM against the real DOM!

This and other features allow to claim that Preact outperforms React, and some benchmarks have even been established. Yet this is a controversial matter: nowadays each and every virtual DOM implementation gets compared to React and outclasses it in its own contrived benchmarks. Then React Fiber will be released, and we’ll be back to square one. A sort of an endless arms race.

So much for the short overview, let’s move on to my experience. I delved into Preact for a few weeks, rewriting old code and creating something new, reviewing issues from the Preact repository, reading articles and investigating. 

Firstly, I’d rate the website documentation at a solid C. It inevitably assumes that the developer is already familiar with React, but even with that in mind, the documentation appears superficial and inconsistent, and questions often arise from clear gaps in reasoning. Luckily, there is an official boilerplate repository where I could find some answers and avoid spending time on trial and error.

Remember I mentioned that there is no synthetic event system in Preact and its library relies on native DOM events? In particular, onInput should be used instead of onChange. Well, how come are there examples involving onChange all over the documentation? onChange is only available with the added React compatibility layer (preact-compat), but these examples don’t clarify this at all. 

The Preact library seems to be presented as a drop-in replacement for React, in other words, the use of preact-compat is implied by default. It’s a great fit for those developers who are already comfortable in the React ecosystem: they are not looking for a new library with a new API, but rather are interested in shrinking downloadable Javascript code in an existing application, hopefully to boost its performance. This can be particularly useful for mobile websites and Progressive Web Apps.

Another bonus I see as a developer is low risk. If Preact goes down, I can always return to React with no changes in code required (if I use preact-compat ofcause) 

The question remains whether the React compatibility layer is reliable enough for all React ecosystem components to work seamlessly. The developers have clearly set this objective, and I haven’t run into any issues. Although, I figure, some hidden edge cases and bugs are inevitable. 

How difficult can it be to implement this drop-in replacement in an actual project? Would it be hard to reconfigure webpack, babel, or browserify? The website provides a few instructions, although very brief and sketchy. The way I do it is by embedding React via a separate script tag described as externals in webpack config. In this case the website instructions weren’t helpful and I had to figure some of the steps out on my own.

In addition, I use TypeScript instead of Babel, and there is no mention of it at all on the official page. However, I got it to work with the help of some external resources like webpack-ts-preact boilerplate on github. The official DefinitelyTyped repository doesn’t include any type definitions for Preact, although some links can be found in the issues section of the Preact repository. I ended up turning to React type definitions along with preact-compat compatibility layer, and it’s working out pretty well.

There is a separate preact-redux library which allows to integrate redux into native Preact with no compatibility layer required. I haven’t tried it out yet, so I’m not sure how it works. If the compatibility layer is used, a separate library is no longer needed.

I make use of MobX in my projects, and there are two native libraries for it. The first one is outdated, and its Readme clearly suggests to use the second library. The latter, in turn, recommends using the compatibility layer and the official mobx-react library in its Readme. This is what I ended up doing. 

I have been writing small widgets in native Preact and working with the compatibility layer in a bigger React project. Native Preact didn’t strike me as particularly impressive or groundbreaking. There is little more to it than just a decent library with its own API peculiarities and some syntactic sugar.

From my perspective and from the way Preact is presented, its usage apart from the React compatibility layer is limited to a narrow realm of hobby projects. It is highly unlikely that full-fledged applications relying on React ecosystem will be rewritten into native Preact. The only feasible way to include Preact in a major project is via the compatibility layer.

To sum it up, could I confirm that the code I translated into Preact showed any performance improvements noticeable to the user? I haven’t taken measurements of the actual interaction with my application, but I have measured the initial render time and found that it went down by a factor of 1.5. This doesn’t include the time it takes to load js files from the server, as my users work in a local network and the scripts have surely been cached in their browsers already. The improvement I am referring to corresponds to the time for script evaluation and initial rendering. 

Thus I’ll keep using Preact along with the compatibility layer, as there are practically no disadvantages to it, and the advantages are clear, although not very significant. When React Fiber is released, we’ll take another look and compare the features once again.

Was the result worth spending time on investigation, webpack setup, typescript and other arrangements? Not in my case, even considering the initial render speedup. I haven’t really struggled with performance issues so far. As a way of broadening one’s outlook and exploring new areas, Preact hardly pays off, considering the tedious webpack setup. There are far more efficient ways to broaden the outlook and spend time on something truly distinct, like experimenting with Angular 2 or diving into Elm.

Code with React and prosper!
