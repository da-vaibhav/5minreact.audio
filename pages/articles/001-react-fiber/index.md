---
title: "#1 - React Fiber"
date: "2017-05-02"
layout: post
path: "/001-react-fiber/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/320475678&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.
- http://isfiberreadyyet.com
- https://github.com/facebook/react/issues/7942
- https://github.com/acdlite/react-fiber-architecture
- https://www.facebook.com/groups/2003630259862046/permalink/2054053404819731/


---
**Transcript**

The main idea behind React is full rerendering upon any change in data. However, as we all know, there is much more to React operation than that. An internal data structure called Virtual DOM comes into action to describe the appearance of our application.

When a page is loaded and the ReactDOM.render() function is called in our Javascript code, React builds a tree component, the Virtual DOM, which is then rendered and displayed by the browser.

By the way, the fact that the process of Virtual DOM construction is separate from the rendering itself gave rise to React Native, which renders into native mobile operating system components for iOS and Android.

So the Virtual DOM is constructed, stored in the memory and displayed on the screen. Then an event occurs that prompts React to perform a new Virtual DOM construction: for example, the "setState" method or the "forceUpdate" method is called. This new Virtual DOM is compared to the old one stored the application memory, the changes are evaluated, and a procedure is drawn up to update the actual DOM in the browser (or update the application screen in iOS or Android, if React Native is involved). 

The algorithm of Virtual DOM comparison is called Reconciliation, and it contains a variety of optimization routines. For instance, if a tree component has been substituted by another one, the whole subtree is treated as a new one, and further comparison deeper into the tree is not performed. Another example of optimization is the key attribute essential for lists of nodes of the same type.

We thus have the core Reconciliation algorithm at our disposal, along with several rendering engines: for browsers, for iOS, and for Android.

Fiber is a new implementation of the algorithm still in development, based on two years of research and experiments. Although the Reconciliation and the rendering stages are separate, the final DOM and Native rendering engines will require some revision or rewriting in order to support the new architecture and make use of all the React Fiber advantages.

What are these advantages?

The current implementation implies traversing the tree recursively and calling all render() functions within the same tick of the Javascript event loop. The upcoming implementation may postpone calls to render() for some components (or subtrees) giving way to some desynchronization. For example, if a certain part of the application does not rely on the screen, why construct a Virtual DOM for it then? In addition, prioritized rendering would be helpful, so that high-priority tasks like user action animation would be carried out without skipping any frames, which would be achieved by postponing the less important tasks, such as displaying a large downloadable element of content. 

What matters most when visualizing the user interface is maintaining smooth transitions and high FPS, and simultaneous rendering of all elements is by no means a must. However, React should smarten up in this case, so that calls to the render() function are planned correctly, and this is the very basis of the new React Fiber algorithm.

So we can conclude that Fiber's primary goal is providing planning mechanisms. In particular, it should enable us to do the following:
 - Pause a task to get back to it later
 - Set priorities for routines
 - Reuse the results of previous work
 - Halt a task if it is no longer needed

The whole process of Virtual DOM construction then has to be broken down into smaller tasks which can be launched, paused and arranged by priority. From here arises the idea of a unit of work.

React has promoted the approach of pure functions for user interface rendering. Thus a particular component can be treated as a function of certain data that returns an instance of that component. However, as it can include other components, nested function calls are generated. If we put React aside and focus on functions that call each other, we end up with the idea of a stack. Every time a nested function call is made, a new stack frame is created to store the data for the function currently being executed.

What if React could manage this stack by itself, halt execution or prioritize certain functions? We would end up with a virtual stack machine. It would no longer be Javascript handling the function call stack, but React itself!

This approach has obvious performance drawbacks: apart from the overhead of implementing a specific Javascript stack machine, all data is stored in a heap, as opposed to a native Javascript stack, which is a bit less efficient.

On the other hand, if the function call tree is broken into smaller units of work, a dedicated stack implementation allows to set priorities for some functions with requestAnimationFrame, and postpone others in requestIdleCallback. As a bonus, the results of individual render functions can be reused, as they are no longer destroyed along with the native Javascript stack, but are in heap instead.

Fiber offers a few other handy benefits. One of them is the render() function returning an array of components, removing the need to group them into an additional div.

I will include some links to further technical specifications in the notes for this podcast.

An important aspect of the new React Fiber algorithm development is the support for all the features provided in the current version, including lifecycle hooks and such methods as setState, forceUpdate, and shouldComponentUpdate. It is still a work in progress, and React Fiber is the team’s main project and focus point for the rest of the year. Development progress is even tracked as percentage at isfiberreadyyet.com.

This is it for now. Code with React and prosper.








