---
title: "#10 - React Wishlist"
date: "2017-06-15"
layout: post
path: "/010-react-wishlist/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328216510&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

Dan Abramov asked his Twitter audience: “What would you want the React team to focus on in the next 6 months? Reply with a new thing, or Iike existing replies”. This request inspired a massive thread of a few hundred tweets...

- https://twitter.com/dan_abramov/status/871406752016863232
- https://twitter.com/dan_abramov/status/871769329079025664
- https://github.com/Microsoft/TypeScript-React-Starter
- https://5minreact.audio/002-jsx2/
- https://github.com/facebook/jsx/issues/65


---
**Transcript**

Dan Abramov asked his Twitter audience: “What would you want the React team to focus on in the next 6 months? Reply with a new thing, or Iike existing replies”. This request inspired a massive thread of a few hundred tweets. People suggested new ideas or liked the ones proposed earlier, while Dan commented and reviewed pretty much every suggestion, so the discussion turned out to be lively and bilateral. The next day Dan compiled and posted a community wishlist. It is definitely not an official roadmap for the team, but it’s nevertheless interesting by itself. Obviously, some points are already on the team’s agenda. The list is brief, so I can outline it:
 
- A new API for components. Functional components need lifecycle methods, and classes make teaching quite hard

- Smaller bundle size

- Animation for component mounting and unmounting

- Fixing the context feature

- Functional component optimization (as a reminder, right now functional components aren’t optimized for performance, and in some cases they are slower compared to classes, although they seem more lightweight)

- Better diversity on the team

- Better typescript support: in particular, official definitions should be released and built into Create React App. I’m personally all for this one. Although the current community versions of TypeScript typings for React are rather decent, and using Typescript with Create React App is a well-established practice. Microsoft even has their own template TypeScript-React-Starter, which relies on Create React App

- Make setState great again! Just kidding, the idea is to make setState a viable alternative to Redux

- Official custom rerenderer API. What is a rerenderer? The most well-known examples are ReactDOM and ReactNative. There are also rerenderers aimed at virtual or augmented reality. Any of us can write our own rerenderers as well, but there is no offiicial API for them yet

- Server-side rendering: fixes for some issues along with Create React App support

- Official hot reloading mechanism

- JSX version 2. By the way, I have discussed its new syntax version in the second episode of “5 minutes of React”, and you can check it out for more details. 

Our best wishes for the team’s endeavors.

Code with React and prosper!
