---
title: "#8 - pnpm"
date: "2017-05-23"
layout: post
path: "/008-pnpm/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/324063275&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

pnpm - fast, disk space efficient package manager, drop-in replacement for npm.

- https://pnpm.js.org
- https://twitter.com/pnpmjs
- https://www.kochan.io/nodejs/why-should-we-use-pnpm.html

---
**Transcript**

pnpm is an alternative package manager for Node.js. It is a drop-in replacement for npm, but faster and more efficient.

Why not Yarn?
After a few days of Yarn release, author of pnpm, Zoltan Kochan, realized that Yarn is just a small improvement over npm. Although it makes installations faster and it has some nice new features, it uses the same flat node_modules structure that npm does (since version 3).

Prior to npm version 3, the node_modules structure was predictable and clean, as every dependency in node_modules had its own node_modules folder with all of its dependencies specified in package.json.

This approach had two serious issues:
- frequently packages were creating too deep dependency trees, which caused long directory paths issue on Windows
- packages were copy pasted several times when they were required in different dependencies

To solve these issues, npm rethought the node_modules structure and came up with flattening in npm version 3.

And flattened dependency trees come with a bunch of issues:
- modules can access packages they don’t depend on
- the algorithm of flattening a dependency tree is pretty complex
- some of the packages have to be copied inside one project’s node_modules folder

Unlike npm vesion 3, pnpm tries to solve the issues that npm version 2 had, without flattening the dependency tree. 

In a node_modules folder created by pnpm, all packages have their own dependencies grouped together, but the directory tree is never as deep as with npm2. pnpm keeps all dependencies flat but uses symlinks to group them together.

Flattening is hard. A package manager can be deterministic but no human can easily predict how will a flattened dependency tree look like. Pnpm not only has a lockfile, the files in its node_modules folder are organized always the same way, the way they are described in package.json files.

To understand pnpm algorithm in details I recommend to read a blog post by Zoltan: "Why should we use pnpm?".

Pnpm is very efficien in Disk Space usage.
When you install a package, it is saved in a global store on your machine, then pnpm creates a hard link from it instead of copying. For each version of a module, there is only ever one copy kept on disk. When using npm or yarn for example, if you have 100 packages using lodash, you will have 100 copies of lodash on disk. Pnpm allows you to save gigabytes of disk space!

And all these hadrlinks and symlinks also work on Windows operating system!

 What about speed: pnpm is not only faster than npm, it is faster than Yarn. It is faster than Yarn both with cold and hot cache. Yarn copies files from cache whereas pnpm just links them from the global store.

 pnpm is 10 times faster than npm and 30% faster than Yarn - see benchmarks on GitHub.

pnpm supports offline mode - it saves all the downloaded package tarballs in a local registry mirror. It never makes requests when a package is available locally. With the --offline parameter, HTTP requests can be prohibited at all.

By default pnpm connects to registry.npmjs.org and works as a drop-in replacement for npm.

Visit pnpm.js.org website and follow the @pnpmjs Twitter account for updates.

Code with React and prosper!
