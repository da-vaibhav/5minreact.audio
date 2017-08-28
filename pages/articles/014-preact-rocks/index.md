---
title: "#14 - Preact Rocks!"
date: "2017-08-28"
layout: post
path: "/014-preact-rocks/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339823001&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

Some of the latest news from the Preact world: the mobile version of Uber website uses Preact as well as the new Transformers promo site, and the author of Preact gave a great talk called "Preact: Into the void 0" at JSConf EU 2017. I will also share my impressions of an egghead.io course and take a look at preact-cli, a tool for quick PWA app creation.

- https://preactjs.com/
- https://eng.uber.com/m-uber/
- http://www.transformersmovie.com/
- https://youtu.be/LY6y3HbDVmg
- https://egghead.io/courses/up-and-running-with-preact
- https://github.com/developit/preact-cli

---
**Transcript**

Recently a poll was conducted on JavaScriptDaily Twitter, and the question was "Do you know what "Preact" is?". Nearly 4000 people replied with the following results: 10% already use Preact, 46% have heard about the library, So it rings a bell for 56% of all respondents. The rest have either seen mentions of it without going into details or have no idea about Preact at all.

Meanwhile, an article published on the Uber blog tells the story of how a mobile version of their website m.uber.com was created, which is, in fact, a progressive web application powered by Preact and Redux. It's a story of building a small and fast web application while keeping the entire functionality for getting an Uber ride. In the end, the whole app fit into 50 Kb after gzip.

I wonder if they are using preact-compat compatibility layer and standard react-redux bindings, or maybe, instead of a compatibility layer, they work with pure Preact and preact-redux bindings. Though I didn't manage to find the word "compat" anywhere in the minified code on their site.

By the way, the promo site for the latest Transformers movie is also built on Preact.

This week I finally had time to watch a talk called "Preact: Into the void 0" that Jason Miller, the author of the library, gave at JSConf EU 2017.

It is just 27 minutes long, with good information density and no rambling - a superb talk indeed! Jason showed how JSX is translated into common function calls which result in simple JavaScript objects describing the virtual DOM structure. He also demonstrated how to write a basic renderer that creates a real DOM based on a virtual one and gave a thorough explanation of the diff algorithm.  He wrapped up the speech revealing some performance optimization techniques for working with DOM and mentioned a few profiling tools he used:  Chrome DevTools, ESBench.com, and benchmark.js.

Definitely a must-watch!

Inspired by this video, I found some time to watch the Preact course at egghead.io that I mentioned a few episodes ago. However, it turned out to be too basic. Essentially it's an introduction to React with a couple of examples specific to Preact. It once again goes over what functional, stateless and stateful components are and how to query data in componentDidMount, with a few basic router and Redux examples. If you are a confident React user who wants to get to know Preact, a better choice would be to take 15 minutes and skim through the documentation on Preact website, instead of spending a whole hour on this video course. Or take it even further and watch the talk "Preact: Into the void 0", it gets pretty hardcore. 

Moving on, I've decided to try out Preact-cli, a console tool for launching a Preact project quickly, and not just any Preact project, but a full-fledged Progressive Web App:
- Lighthouse rates its performance at 100 points out of 100.
- Its features include: 
fully automatic code splitting for routes,
service workers and offline caching, 
server-side rendering,
CSS Modules, LESS, Sass, Stylus, and Autoprefixer (the only thing missing is PostCSS, although it is available via a plugin). 
- There are also debug helpers and hot module replacement. 

Judging by the description, Preact CLI looks way cooler than Create React App.
It even comes with a plugin system!

As soon as the global preact-cli package was installed, I ran preact create myapp and waited for all the dependencies to get installed under the hood. It took well over 10 minutes and the terminal froze in the end. I'd blame the terminal application: in my case, it was Hyper, which is written in JavaScript on top of Electron. Actually I have quite a few reasons to complain about Hyper, so I made another attempt in iTerm2. It took a while again, but this time it worked out, and 136 megabytes of dependencies were installed.

The demo project is rather straightforward: three routes broken down into tidy components. I ran a production build with a preact build command and got a separate js file for each route, plus a 5 kilobytes polyfills.js containing polyfills for fetch and Promise, then a 19 kilobytes bundle.js and a 4 kilobytes sw.js (some service workers stuff I think). Here I'm referring to file size on the hard drive before gzip compression. 

I haven't yet built a proper project with Preact CLI, but I'm really looking forward to it. To me, the most intriguing part is TypeScript support. There is a plugin for TypeScript support, but I have not tried it yet. A milestone for version 2.0 has already been created on GitHub. There are plenty of commits and a lot of action every day. 

Now a question in the spirit of Javascript fatigue: what is the best choice for creating a sleek offline-first PWA site - Preact CLI or Gatsby, which I told you about in the previous episode? I feel like Gatsby is a higher-level construct on top of React and it has more conventions, which eventually helps spend less time on development (if you figure out how to use it, of course). On the other hand, Preact CLI is a lower-level solution closer to the code, so it might be more flexible. But I'm just speculating for now. Feel free to share your experience in the comments if you have used Preact CLI or Gatsby.

Code with Preact CLI and prosper!



