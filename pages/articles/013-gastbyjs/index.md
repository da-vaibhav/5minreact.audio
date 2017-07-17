---
title: "#13 - Gatsby"
date: "2017-07-06"
layout: post
path: "/013-gatsbyjs/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/333532468&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

Gatsby 1.0 - Blazing-fast static site generator for React.

https://www.gatsbyjs.org/


---
**Transcript**

The first stable version 1.0 of the static site generator Gatsby has just been released.

This project is notable for generating static sites from React templates. You'd think static sites and React are like apples and oranges, but let's start from the beginning.

I found out about Gatsby a couple of years ago in the context of React conquering all possible niches including static site generation. When I started working on "5 minutes of React", Gatsby occurred to me as quite a symbolic choice for building the podcast website.  A few ready-made templates were available then, and after some minor tweaks to one of them, I managed to launch a website with no trouble.   

Technically it works this way: a set of React components make up a website template, and the text for blog entries is stored in a few Markdown files. This is episode 13 of the podcast, so I've got 13 Markdown files by now. Executing gatsby build command in the console builds the project,
-  in other words, it generates 14 HTML files (including the main index.html and one HTML file for each post).
- In addition, images are compressed, a css file is generated (extended with SASS and PostCSS),
- and, most importantly,  a so-called bundle.js is created.

With all the files generated, we can upload them to a simple hosting platform such as Github pages. 
When a user opens the site via their browser, index.html is loaded containing the whole HTML markup for the main page, just like the other 13 HTML files generated for each post. Thanks to this structure, the site is easily indexed by search engines and works even if javascript is disabled in the browser. 

However, as soon as bundle.js is loaded, the site turns into a single-page application where internal links can be followed without reloading the page and React renders everything right on the client side. This means bundle.js includes all the template components, and, even more remarkably, the content of all the posts on our site is packed inside of it! The more podcast episodes I make, the bulkier bundle.js will get. And that is a problem. Perhaps the user doesn't plan to browse through all the posts on the site and is simply looking for the home page and the latest podcast episode. But the whole bundle.js will be loaded regardless.

Some kind of smart code splitting would come in handy, as well as background loading, service workers, Progressive Web Apps, offline first, and so on.

Finally, Gatsby 1.0 has fulfilled our wildest dreams and even more.

Here is what 1.0 brings us, apart from route-based code splitting, service workers, and offline support.

From now on, in addition to markdown files, remote sources such as WordPress, Drupal, and HackerNews are supported as data sources at build time.

A plugin system has been added, which, in particular, brought about this integration with Wordpress, Drupal, and other sources.     Kyle Mathews, the creator of Gatsby, is hoping for active community engagement in this matter: a wealth of useful and diverse plugins should help Gatsby get even more robust and popular.

Plugins can also be useful in implementing  Preact and Inferno support, which is especially appealing for lightweight static sites.

Another notable feature introduced in 1.0 is the use of GraphQL for filling pages with content. Just to make things clear, GraphQL doesn't run live on the site but rather operates at build time. GraphQL is involved in a whole bunch of tasks: querying data from markdown files, reading Wordpress data via a corresponding plugin, and even fetching the site title from global config. These GraphQL queries are located alongside components, and Gatsby knows which ones are required for every page, so it can perform some smart code splitting, inserting only the necessary data into each js bundle it's generating. 

All in all, sounds awesome, but what is the real deal?

In fact, meny of these plugins I've described are still at the prototype stage. The template I'm using for "5 minutes of React" website turned out to be incompatible with version 1.0. The documentation includes a guide on migrating to 1.0 which over 9000 items long, so I preferred to pass.  I grabbed another template compatible with 1.0, but it turned out to be quite a complex task, especially these GraphQL queries for each and every reason. For instance, I used to be able to adjust some global parameters just by importing a global config object, and now it has to be done via a GraphQL query to config. No more room for simplicity and playing by the ear. So I ended up postponing the podcast site transition to Gatsby 1.0. My current bundle.js built with the old Gatsby 0.12 version packs 13 podcast episodes and its size of 120Kb is bearable for now.

To sum it up, Gatsby is a cool and resourceful project, its popularity is surging (illustrated by a graph of downloads in the blog), and its basis is very solid: code splitting, service workers, offline first, and extensibility with plugins. My best wishes to the project and I will be looking forward to more ready-made templates and functional plugins, so a site can be all set in a few clicks by getting the packages together into package.json.

Build sites with Gatsby and prosper!
