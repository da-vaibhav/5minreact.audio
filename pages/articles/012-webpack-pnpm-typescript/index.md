---
title: "#12 - webpack 3.0.0, pnpm 1.0, TypeScript 2.4"
date: "2017-07-06"
layout: post
path: "/012-webpack-pnpm-typescript/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/331989237&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

- https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b
- https://twitter.com/dan_abramov/status/880457799272210432
- https://medium.com/@TheLarkInn/leaving-for-microsoft-4f386c458693
- https://medium.com/pnpm/pnpm-version-1-is-out-935a07af914
- https://github.com/pnpm/awesome-pnpm
- https://blogs.msdn.microsoft.com/typescript/2017/06/27/announcing-typescript-2-4/
- http://isfiberreadyyet.com/


---
**Transcript**

The final webpack 3 release is out. I usually don't rush it with installing versions ending with .0.0, but this time I decided to give webpack 3.0.0 a try.
 
There is a new feature description post in the webpack blog, and the so-called Scope Hoisting caught my eye right away. This piece won't work right away after the upgrade - a special plugin called ModuleConcatenationPlugin has to be added to the configuration. As a result by bundle.js file now only contains 7 functions instead of a hundred tiny module wrappers. Why is it seven and not one? We can get some clues via a certain command line flag which outputs additional information about the module assembly process and helps understand why some modules couldn't be combined into one.
 
As a person who hasn't dug too deep into webpack algorithms, I can only see that the modules from node_modules folder and the external ones remained apart, but the reason is still to be figured out.
 
Another mystery is why adding ModuleConcatenationPlugin causes watch mode to stop. It's not just me: there is already an issue on Github and many users have run into this problem. In addition, ModuleConcatenationPlugin breaks Hot Module Replacement. 
 
Actually, adding a new plugin and a new compiler option is so typical of webpack and our whole Javascript ecosystem!
 
This matter was recently raised in a small Twitter thread, where Dan Abramov once again claimed that the less configuration, the better.
Quote:

Libraries shouldn't ask users to modify configs. This is unsustainable and often very hard to compose. Very hostile to beginners.
Being official, Create React App makes it harder for those libraries to justify this. Helping move ecosystem to less config solutions.

End quote.

 
Getting back to webpack itself.
 
One of webpack core developers, Sean Larkin, wrote in his blog that he is getting a new job and will join Microsoft in two weeks to work on Developer Tools for Edge browser! I'm not sure what his previous job was - I may have seen finance industry mentioned somewhere. I do like this kind of transition: if Sean used to work on a project for finance and devise utilities for us developers as a pastime, now he can work on development utilities full-time. As Sean pointed out in his blog, he will have more time to dedicate to webpack in particular.
 
As for me, to keep things interesting, along with upgrading to webpack 3, I've tested the new pnpm 1.0 package manager release. I have already talked about its specifics compared to npm and yarn in one of the earlier episodes of "5 minutes of React". For instance, rather than copying files to the node_modules folder, pnpm package manager creates hard links to its cache. This saves a considerable amount of space if multiple projects are using the same packages.
 
So I deleted node_modules, added webpack 3.0 to package.json, and launched pnpm install - and it's impressively fast!
 
On the downside, I noticed that the "pnpm outdated" results in the same output as "npm outdated", which means all my packages are linked and it's not clear which versions are in fact up-to date.
I had to use an external tool: npm-check.
There is a corresponding ticket on Github issues and looking forward "pnpm outdated" command to be fixed.
 
After the installation pnpm generated a shrinkwrap.yaml file for me. To check how shrinkwrap.yaml works for second installation, I deleted node_modules and executed a "time pnpm install" command. The second installation took 4.5 seconds, out of which the packages themselves were linked in about a second, while the rest of the time was spent on webpack post-install scripts, uglifyjs-webpack-plugin, and fsevents.
 
I even tried installing the packages in offline mode, just turning off Wi-Fi, then delete node_modules and run "pnpm install" again. The packages got installed just as fast (in a little over a second), but then the fsevents installation script froze while downloading binaries for my operating system.
 
How will pnpm develop further on? In a blog post about the version 1.0 there are a few paragraphs shedding some light on this matter.
 
First of all, even faster speed! If the packages are already downloaded into cache, pnpm install should be done in no longer than a second.
 
Secondly, although the hard link and symlink approach makes it even faster than yarn, there are a few edge cases where yarn still excels. There are plans to handle this so that in the end pnpm is faster in any circumstances.    
 
Thirdly, pnpm code base should be simplified, as currently contributing to it is rather complicated.
 
Finally, a PR campaign is required (PR as in publicity, not Pull Request). Although pnpm is public for a longer period of time than Yarn, it is far less popular. So more articles, more documentation, and more interesting tools will be created to promote pnpm. Let’s make our awesome list huge!
 
The installation is very straightforward: "npm install -g pnpm" - give it a try after this episode!
 
But I didn't stop here. As soon as I upgraded to webpack 3 via pnpm, I realized that TypeScript 2.4 was already out! Dynamic import, string enums, and a some type inference improvements, which are, as always, accompanied by an excellent description and examples in the Typescript blog. Everything worked out of the box in my project after I upgraded to Typescript 2.4.
 
All in all, an upgrade of three tools at once to their new cutting-edge versions didn't bring me any trouble (apart from the broken watch mode in webpack with ModuleConcatenationPlugin). 
 
Finally, just before recording this episode, I decided to take a look at the isfiberreadyyet.com page - and there are just 4 warning messages left to be fixed! 
 
Code with React and prosper!
 
