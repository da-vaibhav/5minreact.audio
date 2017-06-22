---
title: "#11 - React 15.6, Webpack 3, Babel Notes, mobx-state-tree 0.7, Preact on egghead.io"
date: "2017-06-22"
layout: post
path: "/011-react15.6-webpack3-babel-notes-mobx-state-tree-preact-egghead/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/329453032&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

- https://facebook.github.io/react/blog/2017/06/13/react-v15.6.0.html
- https://twitter.com/dan_abramov/status/875149571688734721
- https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b
- https://github.com/babel/notes
- https://github.com/mobxjs/mobx-state-tree
- https://egghead.io/courses/up-and-running-with-preact


---
**Transcript**

On the 13th of June a new version of React has been released under the number of 15.6 - not yet 16 and not a fiber, but as mentioned in the accompanying blog post, the team is making some final arrangements and cleaning up in preparation for the big release. 
 
The new version 15.6 brings a few fixes for input field bugs, especially in IE11.
 
Deprecation warnings are now output as console.warning (which was done via console.error in the previous version). The main idea is to avoid confusing the user about which messages are actually important. Deprecation warnings don’t require immediate action and can be fixed later. Standard warnings, on the other hand, still use console.error - for instance, when there is no key attribute specified for repeated elements.
 
However, in the nature of things, right after the release a shocking iOS bug was revealed: onChange event didn’t get triggered by radio buttons, and it will be fixed in version 15.6.1.
 
Dan Abramov complained on Twitter:
 
Also, ugh, releasing 15.x gets harder and harder. Can't wait to get to 16 and release from master.
 
Have you already upgraded to webpack 2? If not, it’s too late to change horses in midstream: the new webpack 3 just have been released!
 
In fact, this release is not so major as webpack 2 once was, but the pace of development is exciting. 

By the way the webpack team is accepting donations via the Opencollective website; I have been their subscriber and supporter for a while now, and you are welcome to join - little drops make an ocean.
 
The Babel team doesn’t rest either and is putting all their effort into Babel 7, which is already available as alpha 12. Have you heard of Babel Notes, the monthly notes by developers on their progress, plans, and unresolved issues? I’m providing you a link, it is a great read: brief and informative enough to get an idea of where we are heading.
 
Guys on the React team used to provide a similar outline called core-notes, but, unfortunately, they are no longer doing it.
 
It recently crossed my mind: what about building a project with React 16 master, combined with webpack 3 and Babel 7 alpha? Quite a hardcore pack for a hackathon.
 
Moving on, a new version of mobx-state-tree 0.7 was released. It’s a state container created by MobX author which makes use of MobX internally while taking advantage of the best Redux and MobX practices. The good news is that the warning “This package is a work in progress, stay tuned” that was in the Readme just a couple of months ago, is now gone. There is a lot of healthy commit activity by the authors and the project is really great. I’m planning to use it in production soon and I’ll definitely let you know some details on how it goes in this podcast.
 
Another update: a new video course on Preact has been published on egghead.io, about an hour of content broken down into 12 parts. I haven’t had time to watch it yet, but the titles are very intriguing. A quick reminder: Preact is an alternative to React which can work as a drop-in replacement, I have talked about it in a one of previous episode of 5 minutes of React and I’ve been using it myself.
 
Code with React and prosper!

