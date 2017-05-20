---
title: "#5 - Idiomatic Redux"
date: "2017-05-13"
layout: post
path: "/005-idiomatic-redux/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322367043&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

Mark Erikson, one of Redux contributors, has published an article in his Idiomatic Redux series: "The Tao of Redux, Part 1 - Implementation and Intent." Thoughts on what Redux requires, how Redux is intended to be used, and what is possible with Redux.

- http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/
- http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/

---
**Transcript**

Mark Erikson, one of Redux contributors, has published another article in his Idiomatic Redux series.

The article is called “The Tao of Redux, Part 1 - Implementation and Intent”. It was a great read; Mark has made a considerable effort to study older discussions of Redux issues on Github as well as various posts and comments by Dan Abramov to tell us about the original ideas, goals, and decisions that emerged from designing Redux. This turned out to be a very thorough and detailed overview.

In this podcast I will indicate the main points of the article. So let’s get going!

First of all, Mark debunks a few myths about some of the basic redux requirements.

Let's start by taking a look at the now-famous Three Principles of Redux:

1. Single source of truth: The state of your whole application is stored in an object tree within a single store.
2. State is read-only: The only way to change the state is to emit an action, an object describing what happened.
3. Changes are made with pure functions: To specify how the state tree is transformed by actions, you write pure reducers.

In a very real sense, each one of those statements is a lie!

"Single source of truth" is wrong, because (per the Redux FAQ), you don't have to put everything into Redux, the store state doesn't have to be an object, and you don't even have to have a single store.
"State is read-only" is wrong, because there's nothing that actually prevents the rest of the application from modifying the current state tree.
And "Changes are made by pure functions" is wrong, because the reducer functions could also mutate the state tree directly, or kick off other side effects.

These principles aren't fixed rules or literal statements about the implementation of Redux. Rather, they form a statement of intent about how Redux should be used.

Moreover, the immutability of the state tree itself is a cornerstone of Redux as it contains a few smart optimizations that involve a simple comparison of objects by reference. It happens twice: first in the Redux itself before any calls to subscribers, and then independently in the react-redux package as a part of the connect method which also performs a shallow comparison of all current component props with previous props. Redux itself won’t break if state is mutated. Redux will just not notify subscribers (when the whole state object reference is the same), or connected components won’t be rerendered (when particular slice of the state is mutated so it's shallow equal).

We also know that action objects should be serializable, in other words, they shouldn’t contain symbols, promises, and such. In fact, this is not an actual Redux requirement, but rather a recommendation that is meant to facilitate debugging and is crucial for time travel debugger.

Redux's primary goal is to make state mutations predictable.

Constraints like immutability and serializability largely exist to make those development use cases possible, as well as making it easier for developers to trace data flow and update logic.

Redux combines those multiple "stores" into a single state tree to make debugging, state persistence, and features like undo/redo easier to work with.

Intended design and use of Redux was following:
- Redux Was Built As A Flux Architecture Implementation
- State Update Maintainability Is The Main Priority
- Action History Should Have Semantic Meaning:  action types should have some kind of meaning and information. The Redux DevTools and other logging utilities display the type field for each dispatched action. If only a single action type is used across the entire codebase (like SET_DATA), it will be harder to track down where a particular action was dispatched from, and the history log will be less readable.
- Redux Is Intended To Introduce Functional Programming Principles: this includes FP basics such as immutability and pure functions and ideas such as composing functions together to achieve a larger task. But not going deep into abstract FP concepts like "monads" or "endofunctors".
- Redux Promotes Testable Code
- Reducer Functions Should Be Organized By State Slice
- Update Logic And Data Flow Are Explicit: Redux does not contain any "magic", everything is intended to be explicit, clear, and traceable, with minimal abstraction.
- Redux's API Should Be Minimal: The best API is often no API. 
- Redux Should Be As Extensible As Possible. This ties in with the "minimal API" goal.

Mark, the author of the article, has certainly dedicated a lot of time to researching and reading back through early issues and discussions.

A substantial list of links to the sources is provided at the end of the article.

Read the full article to get more info.
http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/
http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/

Thank you, Mark, for your effort and for your excellent content!

Code with React and prosper!
