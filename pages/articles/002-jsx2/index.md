---
title: "#2 - JSX 2.0"
date: "2017-05-03"
layout: post
path: "/002-jsx2/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/320721705&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

The next version of JSX proposals.
- https://github.com/facebook/jsx/issues/65
- https://facebook.github.io/reason/

---
**Transcript**

We all like JSX, don't we? JSX is a markup syntax similar to HTML used for describing component appearance. It has been around since the beginning and practically hasn't changed. Since then many ideas and suggestions have surged that could improve JSX and streamline the process of writing and reading code. However, releasing a new JSX with the next version of React isn't so simple, as compatibility could be broken. Just imagine how many external tools rely on the current version! That includes the Babel plugin, the highlight and autofill plugins in such text editors as Sublime, Atom, and Vim, as well as the built-in support in WebStorm and Visual Studio Code; even the TypeScript compiler can convert JSX into native Javascript on its own.

Introducing these changes requires thorough preparation, along with an extensive collection of features to be implemented all in a single simultaneous release! The release would be huge, and its details should be published in advance to allow the developers of external tools, editors and IDEs some time to adjust. Let's call this massive update JSX 2.0 - this is the name Sebastian, one of the key React developers, used for his GitHub ticket about a month ago. 

By the way, JSX is not only used by React, but also by Facebook's own Reason project. Reason is a language that resembles Javascript with a functional twist, built upon the OCaml compiler. The JSX variation there is slightly different from the one we use in React. The Facebook team would like to have React and Reason variations unified as a part of the JSX 2.0 effort.

Getting back to the ticket number 65 in Facebook's JSX repository, here are the ideas already suggested there.

Attribute names should be evaluated. How are the attributes in JSX written at the moment? For instance, I open a tag for MyButton component, write an attribute name such as "text", followed by an equals sign, and a variable with its value in curly brackets. However, I can't put a variable to the left of the equals sign in order to set the attribute name to its value at runtime.

Technically we can already use the "object spread" operator (triple dot) to evaluate attribute names dynamically. JSX 2.0 is, in turn, offering a possibility to specify a variable or a Javascript expression in the left part of the assignment so that its value becomes the attribute name.

Another suggestion is to add some sugar into passing parameters to a component. How often do you have to write key={key}, item={item}, color={color} in tag attributes, where the attribute name coincides with the name of the variable storing the attribute value? A parallel can be drawn with ES2015 and its handy object creation syntax: variable names are listed in curly brackets separated by commas, resulting in an object whose fields correspond to the specified variables in names and values.

It would be great to have a similar mechanism in JSX: for example, when I open the MyComponent tag and list a few variables such as key, item, and color, separated by commas in curly brackets right after the tag name, these variables are passed to the component as props named key, item, and color.

There is another inconvenience here: if an attribute value should be passed as a number, it has to be enclosed in curly brackets, for instance, count={10}. Why not simply write count=10 with no brackets or quotations? Looking forward to get this in JSX 2.0!

What about if/else branching in JSX? Now, whenever we need to return a component, we have to resort to a ternary operator or a logical AND operator (that is, conjunction, or double ampersand). A more straightforward if construction in Javascript doesn't return anything, so the current version of JSX doesn't allow to use a simple if statement in curly brackets. Hence the suggestion to introduce the so-called do expressions that would allow to use if, for, and other purely imperative constructions within JSX.

Finally, why do we need curly brackets around expressions at all? What if I do following: open a div tag, write an x+y expression, close the div tag. I would see the x+y text wrapped in div. In order for the x+y expression to be evaluated as a sum of two variables, they have to be enclosed in curly brackets. However, as the author of the suggestion points out, experience shows that simple static text is much less common in JSX than computable expressions. Let's change the syntax so that Javascript expressions don't require curly brackets, while text should be enclosed in quotation marks. We would thus give up curly brackets in one case and add quotation marks in another, so what is more preferable, more readable? This discussion is still ongoing, and some alternative suggestions can be found in the comments.

And what do you think of XML namespaces in JSX? One of the arguments in their favor is the following: currently there are two reserved attributes, key and ref, which could belong to their own namespace, and the components themselves could be distributed into namespaces as well. Although, in my view, this can go too far into XML imitation. Just remember the epic XSLT technology!

I have mentioned just a few basic points from the original ticket number 65. It is followed by a thread of more than a hundred comments linking to other tickets - a perfect read for quiet evenings.

In any case, when the release day approaches (which isn't happening any time soon), we will not miss it.

Code with React and prosper!



