---
title: "#9 - MobX over Redux"
date: "2017-05-31"
layout: post
path: "/009-mobx-over-redux/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/325420216&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

Should I use MobX over Redux? When, why and whom should try MobX?

- https://www.youtube.com/watch?v=83v8cdvGfeA - Understanding MobX vs Redux (4min)
- https://www.youtube.com/watch?v=76FRrbY18Bs - Preethi Kasireddy - MobX vs Redux: Comparing the Opposing Paradigms - React Conf 2017 (25m)
- https://www.youtube.com/watch?v=ZGVwMkrL2n0 - Comparing Redux and MobX with two CTO's and React experts (1h17m)
- https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx

---
**Transcript**


Is there any point in using MobX if we already have Redux? If there is, who could benefit from it, when and in what kind of projects?
 
Some introduction for starters. Everyone has heard about Redux - a library for state management in Javascript applications. Redux is not bound to React, and it can be combined with any framework or even used without any browser rendering framework at all, for instance, on the server, although it is most widely used in tandem with React.
 
You may have heard nothing but the name about MobX, so I’ll just briefly mention that it is also a state management library. MobX can be used in combination with any framework as well, but it has gained most recognition in the React ecosystem.
 
That said, MobX and Redux are poles apart, but that makes comparing them even more interesting.
 
- Redux requires immutable data structures, while MobX, on the contrary, embraces mutability.
- Redux takes a functional approach, but MobX promotes the use of classes, which is closer to the traditional - Java or C++ style of object-oriented programming
- Redux grants total control of data flow (which sometimes results in a lot of boilerplate code); in contrast, MobX is full of magic built into in the library itself, which allows for less coding in the end.
 
And so on.
 
So here is my view on the MobX versus Redux dilemma. 
 
If you are in the process of learning React and its ecosystem, if you are still on your way to be a top-notch frontend developer and you are looking for a project involving React - study Redux, practice it, as it can be found everywhere - there is a huge ecosystem of tools, utility libraries, middleware, and a multitude of production projects, which means a lot of job opportunities for React+Redux stack. 
 
If you have already passed a junior Redux developer stage, if you are the decision-maker when it comes to the technology stack, and you are a part of a team ready to experiment, you should definitely give MobX a try.
 
Note that I’m not emphasizing technicalities, but rather focusing on the business reality: today Redux is the ABC of React development, while MobX is complementary knowledge for enthusiasts.
 
Personally, when I discovered and tried MobX, I found my project development to be far more productive and effective!
 
Sometimes Redux and MobX are compared based on project size, for example, MobX is considered more suitable for smaller projects, while Redux serves best for the larger ones. However, I have also read completely opposite claims that small projects can be implemented in Redux, and MobX is more appropriate for larger enterprises. I think these arguments are too weak: experience shows that projects of all types and sizes succeed with both Redux and MobX. 
 
Regarding large projects, it is often claimed that the huge code base is too hard to decipher for  new developers. Redux is supposed to structure the project thanks to a clear separation into actors, reducers and selectors - just a few strands for weaving quite a spaghetti code! Same as MobX, in fact. Effective code structure is a matter equally important for both libraries. The only difference is the lack of articles on “how to structure a MobX application” all over the internet, simply due to MobX being less widespread. 
 
Moving on to criticism of excessive magic in MobX. Additional abstraction is vital for building complex systems, aren’t they? Indeed, we don’t write websites in machine code. The correct balance is what really matters here. Too much abstraction and magic can be inconvenient, but when is it too much exactly? This would be a subjective estimate. In my view, MobX has just the appropriate level of magic, and there is no need to graduate from Hogwarts to understand it and use it effectively.
 
As for performance, it also seems to be a draw. I’ll just point out that MobX delivers efficient applications “out of the box”, while Redux still requires learning some basic principles and best practices for performance. In the end a MobX application would be just as fast as a well-written Redux one.
 
In terms of the ecosystem of utility libraries, middleware and developer tools, Redux is definitely a step ahead. However, I would say MobX’s ecosystem is developed well enough to build actual applications conveniently and efficiently.
 
A major point to consider is whether the data is derived or computed. If an application relies heavily on derived data, its dependency graph would be much more straightford, clear and maintainable when described using MobX as opposed to Redux and its selectors.
 
We often hesitate to choose a less popular solution as we fear facing the problems and questions we might not find answers for on Stack Overflow. We fear the frustrating lack of documentation. We are afraid of being brought to a standstill by critical bugs that don’t get fixed for months or years as the community is small and the main developer’s priorities lie elsewhere. They might eventually give up, and we would be left with nothing but a sudden burden of legacy code. All these fears can apply to MobX, it is just a matter of how much risk we are willing to take.
 
I have been working in the MobX ecosystem for over a year, and I think the risk is considerably lower now; I feel I am standing on firm ground. After all, MobX is the state management library second only to Redux. Nowadays using cerebral or technologies like cycle.js, Inferno, or even  Elm and PureScript is a much duller choice, in my view.
 
Don’t be afraid of MobX, give it a go!
 
In this episode I have deliberately omitted the technical details and focused on the general philosophy instead.
 
Not to leave you thirsty for raw information, here are some links to useful resources. 
 
The first one is a pretty old four-minute video comparing the mechanisms of Redux and MobX. 
 
The second link is a video of a talk called "MobX vs Redux: Comparing the Opposing Paradigms" which was given by Preethi Kasireddy at React Conf 2017.
 
The third one is a live discussion between two great CTOs, Pau Ramon and Ilya Zayats. Make sure you don’t miss the Q&A part in the end.
 
Finally, following the good old principle of “Show me your code and I’ll tell you who you are”, check out this MobX course by the library author Michel Westrate at egghead.io, which includes a lot of comprehensive examples.
 
Code with React and MobX and prosper!
 
