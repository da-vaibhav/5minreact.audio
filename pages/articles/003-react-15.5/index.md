---
title: "#3 - React 15.5 and news"
date: "2017-05-04"
layout: post
path: "/003-react-15.5/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/320951134&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

React 15.5 released, Andrew Clark‏ on reactiflux, React London 2017, Twitter mobile PWA, codesandbox.io

- https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html
- https://twitter.com/acdlite/status/852267670560923648
- https://www.reactiflux.com/transcripts/andrew-clark/
- https://www.youtube.com/channel/UCV4LIEkC0S9KUAPDm2g4mNQ
- https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3
- https://codesandbox.io/

---
**Transcript**

The latest version of React 15.5, was released on April 7th. The main aim of this version is the transition to version 16.0. The things which will be removed in 16 are now labeled deprecated and display a corresponding warning message in the console. 

The biggest change is that React.PropTypes and React.createClass were extracted into their own packages. Both are still accessible via the main React object, but using either will log a one-time deprecation warning to the console when in development mode.

But, it turns out that PropTypes isn’t quite working, that there have been problems. Some on Twitter have even called it PropTypeGate! So version 15.5.1 released, and then .2, .3 and .4! This is reminiscent of old Windows jokes, that you should not install it before the first service pack available.

By the way, the only 15.5.0 core release is mentioned on the official site and the GitHub repository "releases" tab. Four other patch versions can be found on npm – download them there.

In other interesting news, there was a question and answer session with Andrew Clark (who is on the core React team) on reactiflux chat.

He sad  that they did this for a few reasons. It’s not really about code size, since the validators are mostly stripped out in production, anyway.

One, there’s really nothing React-specific about PropTypes. They are generic runtime type validators. In fact, there were already many packages on npm that mirrored the PropTypes from React (literally just a copy-paste from the React source). Splitting PropTypes out makes it easier for other projects to depend on them, without taking a dependency on React.

Another reason is that React team wanted to communicate that PropTypes are only one possible way to do type checking in React. You can also use static typing via Flow or TypeScript.

Finally, splitting PropTypes into a separate repo helps keep the React issue tracker focused on actual React issues.



There are a couple other questions from the chat session that I’d like to quote.

Question: Since the purpose of fiber is essentially being able to achieve 60fps on the web, will react ever have some helpers built-in for animation?

Answer: React team feels we’re not in the business of providing built-in solutions for animation or state management or other areas that can be solved in userland by our awesome community. Fiber will have some really cool scheduling capabilities that will enable animation library authors to do exciting things that aren’t currently possible. I can’t wait to see what y’all build! - said Andrew Clark.

Question: What’s the most difficult or challenging work left to officially ship v16?

Answer: React 16 is running for 100% of users on facebook and messenger. So it’s basically done. The biggest remaining step I believe is to figure out our sever-side renderering story. We don’t really use SSR at Facebook, which is why this has come last. And then of course we need to get Fiber rolled on for React Native, too. Hopefully we’ll get 16 out sometime this summer!

Also, it’s important to note that React 16 is our first Fiber release, but it will be Fiber running in compatibility mode — that is, with synchronous scheduling that mimics how React-of-today works. The more exciting release will be React 17, which will enable async scheduling by default and will help us realize the true promise of the new Fiber architecture. There’s still lots of work to be done on this front. We just this week have first round of meetings to discuss how to incrementally adopt async Fiber internally at Facebook.

But React 16 will have improved error boundaries and you’ll be able to return arrays and strings from render! So still exciting!

- answered Andrew Clark.

Take time and read the entire text of this question and answer session, where you can also learn about future versions of recompose, context, rollup, about functional components versus classes, about styles and CSS-in-JS and other things. I’ll include the link in shownotes.



The React London 2017 conference was held at the end of March, the video has been available for a while, and I’ve watched one thing so far: the question and answer session with React developers. By the way, the format of the interview with unrehearsed questions from the audience is very interesting, you can learn a lot. For example, someone once asked 
- Hey Mark! How many push-ups can you do?!
- More than you.
Apparently, Mark won…

Another interesting I want to point is an article about mobile web version of Twitter from the developers. As you may know, the mobile web version was recently relaunched under the hood with React and Redux, and the article shows some performance optimisations they did. In addition to the usual advice about code splitting and shouldComponentUpdate, there were also a couple of clever tricks: move the heavy calculations from componentWillMount to componentDidMount, don’t use dangerouslySetInnerHTML (which is very slow), delay rendering big components (for example: switching between Search and Home tabs is pretty slow, so the user might think he simply missed the Home button and clicked elsewhere. To give the user instant feedback – first we render the Home button with blue highlighting, which shows that the app has acknowledged the button press, and then, later, we render all the content of your feed.

Also interesting fact: by removing the draft Tweet state from updating the main Redux state on every keypress and keeping things local in the React component’s state, they were able to reduce the overhead by over 50%.


Have you tried a new online playground: https://codesandbox.io/ - its like jsfiddle, jsbin or codepen, but focused on React! Very usefull for small React experiments and sharing examples. React and React-Dom are immediately available, and it’s easy to add Redux or any npm package, and it supports modern javascript syntax, with a built-in prettifier, and hot reload. The result can be downloaded in a zip file, in the form of a Create React App project. It’s great for demos, which I’d like to show colleagues or use for a question or answer on StackOverflow.

So that’s the mix of news we have, I hope you’ve heard something interesting.

Code with React and prosper!






