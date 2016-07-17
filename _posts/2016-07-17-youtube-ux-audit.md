---
title: YouTube UX Audit
author: Nick Hoobin
summary: >
 Recently I decided to take the plunge into the world of content creation and created a YouTube channel for my business. I assumed the process would be straightforward and simple. However, as I soon discovered, the steps to creating a channel were far from being easy to understand. Every action, every button clicked, led to more frustration and unease. Only a full UX audit of the process would help me work through my frustration.
excerpt: After an incident where Nick had to delete his whole YouTube channel, he delves into a full UX audit of YouTube's channel creation process.
ogimage: build/images/youtube-ux-audit/3-2-use-youtube-as.png
---

Recently I decided to take the plunge into the world of content creation and created a [YouTube channel for my business](https://www.youtube.com/channel/UCsJl3cLAA4xBVgKHQmprKOQ). I assumed the process would be straightforward and simple. I frequently use YouTube in an advanced capacity: API, manipulating embed codes and URLs, and offering guidance to clients as to when using YouTube is appropriate. I would consider myself a power user of the service, yet, as I discovered, the process of creating a channel was far from being easy to understand. Every action, every button I clicked, led to more frustration and unease. I was required to learn a whole other _service_ before I could start uploading videos. I share the user flow below with my notes on what I found frustrating with the hope of drumming up discussion around user experience (UX).

## The Use Case

For this article I’ll create a YouTube channel for the fictional business “Achievable Cobalt”. The channel will use a slightly different name, “That Achievable Cobalt”. We have a master Google account that acts as the hub for all of our Google products. The channel will be registered under that account. After the channel is created I should be able to brand the channel with our logo as the icon and upload other related image assets.

There’s a real possibility that I’m not the target audience for the channel creation process--that the steps are hyper focused towards the users who are creating personal channels rather than business channels. That doesn’t mean my frustrations aren’t valid, though, and many of my observations apply to both business and personal channel creators.

## Task 1: Creating the Channel

My first attempt at creating a channel was unsuccessful. Somewhere along the way I messed up and had to delete the channel. See if you can spot the mistake I made.

__1.1 The Initial State__

<img src="/build/images/youtube-ux-audit/1-1-initial-state.png" alt="1.1 The Initial State">

In his book [Cadence & Slang](https://cadence.cc/) Nick Disabato describes the initial state as the first screen the user sees, the blank slate when there’s no data. He mentions that the user will try to explore the service’s capability on the initial state, that they’ll click on buttons (“invitations”) to try and fill the initial state with data. The initial state is the key to the first impression a user has of a service. The chapter of this book is even called Empathy & Kindness, the two factors that are central to providing your user with the best experience. An empathetic and kind initial state would guide the user into taking action and using the application.

This is the initial state the user is presented with after signing up for YouTube with their existing Google Account. I’ll give props for this screen. I understand what a channel is and why it is a requirement to have one to upload videos.The screen gives me one path forward, one invitation: to create a new channel. That action is linked as text and provides the user only one option to move forward with the experience. I click on “Create a channel” to move to the next step.

__1.2 Entering in My Name__

<img src="/build/images/youtube-ux-audit/1-2-use-youtube-as.png" alt="1.2 Entering in My Name">

I then was presented with this screen, which was asking for my name. A little odd, I already named the account when I signed up for Gmail, but it’s a small step. Because I’m signing up with my business, I entered its name as best as I could into the first and last name fields. I then clicked Create Channel to proceed to the next step, where I can name the channel.

__1.3 Wait__

<img src="/build/images/youtube-ux-audit/1-3-wait.png" alt="1.3 Wait">

I created the channel already? That’s not right, where do I rename it? There is no way for the user to rename their channel after creation, the only way is to delete it and start over. Something went wrong, in two steps I’ve already messed up creating a channel? How did that happen?

## False Assumptions

My assumptions about the “Use YouTube as...” modal were completely wrong.

Clicking on the Create Channel button created the channel. Of course it did, what else would it have done? The main point of confusion I had was that the modal seemed like it was asking for the user to enter their profile name. This profile name would be used for comments and the like and could be changed later. This would make sense for a business if the company was named, for instance, Jackal Crepes, and you were using YouTube as Patricia Jackal, founder and face of said company.

The assumption that I was naming my YouTube _account_ came from the heading “Use YouTube as...” The primary call to action, “Create Channel” said one thing. The heading, which is most important in the modal’s hierarchy, made it seem like I was doing something else. “Use YouTube as...” is a very confusing way of asking the user to “Name your channel”.

## Trying Again

I had to delete my channel and start over because I messed up. It did not leave me feeling delighted to be using YouTube as a content creator. I wonder if later down the line I could significantly mess something else up and have to delete my channel again in order to fix it.

The discerning reader would see the mistake I made. On the “Use YouTube as...” modal I should have clicked the small blue link to “Use a business or other name”. If I start over and click the call to action, I end up on the following screen.

__1.4 Business Channel Creation Screen__

<img src="/build/images/youtube-ux-audit/1-4-business-channel-creation-screen.png" alt="1.4 Business Channel Creation Screen">

This screen looks like it’ll accomplish what I’ve set out to do. I see that I can name my channel and assign and industry to it. On the right I see actions that a user can take once they’ve created the channel.

Because I had to click on a small link in the modal to get to this screen, and the fact that it’s an entirely separate interface, leads me to believe that there is a significant distinction between the personal and business user. The extra clicks needed to get here shows that my use case is the less important of the two. Later on I’ll touch on whether this is necessary and if the two experiences can be combined into a more streamlined and easier to understand process for both types of users.

__1.5 First Task Complete__

<img src="/build/images/youtube-ux-audit/1-5-first-task-complete.png" alt="1.5 First Task Complete">

Success! Clicking on “Done” creates my business channel. Of note here is that the layout and features for this business channel (at least on this screen) are identical to when I created the personal channel. That raises the question, if there are two different screens for channel creation that produce the same end result, why have them be separate at all? My guess would be because they’re stored separately in the database, and there’s extra information associated, such as the industry dropdown. It’s important to remember, however, that the end user doesn’t care how the data is stored or the code is architected. They care about the usability of the interfaces.

## Task 2: Branding the Channel

Now that I’ve created a YouTube channel the next step is to brand it. I’m given the option to upload an icon (sidebar, why does nobody use the word avatar anymore?) and a channel banner. I’ve had to do this on other platforms before so I have an expectation of what this should entail.

I’ll first upload my channel’s icon.

__2.1 Now Entering Google+__

<img src="/build/images/youtube-ux-audit/2-1-now-entering-google-plus.png" alt="2.1 Now Entering Google+">

In the previous screens, there’s been mention that a business channel is linked to a Google+ page. Now it’s finally going to happen. To me, this dialog seems to be warning the user that they’re now going to have to enter Google+ to do YouTube things. Starting out a process with a warning is never a good thing.

__2.2 This is Really Happening__

<img src="/build/images/youtube-ux-audit/2-2-this-is-really-happening.jpg" alt="2.2 This is Really Happening">

As a business user creating a YouTube channel I never expected that I’d also be creating a Google+ page. I’m working in the context of YouTube. My actions on YouTube are impacting another service entirely. The necessity to pair the two services is not apparent to me. It’s frustrating and unexpected. Now there’s another service that I have to keep maintained on top of my YouTube channel. I’m not going to use Google+ for my business (we use Facebook) so it’s going to sit untouched and hopefully not appear in search results.

Before I levy any more criticism against this paradigm, I’ll be upfront and admit I am guilty of forcing similar behavior onto users of my own sites I’ve developed. A site I recently launched had a WordPress powered user facing portion and a Laravel powered sales system that provided some of the content that appeared on the WordPress site. The users of both sites overlapped so it is not uncommon for a user to click a button on the WordPress site and be ported over to the Laravel site. The two sites have two entirely separate interfaces and branding, the only way a user knows they’re related is through the URL. In the perfect world, I would have made the integration between the two into a less jarring, more seamless experience. In a perfect world, [Alphabet](https://abc.xyz/) (née Google) would figure out how to better merge Google+ with YouTube. I had a hard deadline, tight budget, and only myself to create both sites. Alphabet has (seemingly) unlimited time, resources, and manpower to get it right.

In his book _Cadence & Slang_, Nick Disabato talks about the importance of consistency with interfaces in the chapter Consistency & Character. I won’t pretend to know him, but I imagine that he’d raise a giant red flag at this step. To quote the book, “Every time a non-traditional element appears, people have to expend mental effort  to understand its purpose and function.” Here the user has to learn an entirely new _site_ to upload an icon for their channel. The book talks about how on a macro scale, when a user is presented with a new interface, they have to learn new functions, goals, and ways to complete the task. With Goolge+ the user even has to learn a new color scheme (green, instead of YouTube’s red). In this case, all of the mental energy the user expends learning these new functions are spent on a system _that has nothing to do with their YouTube channel._ The user tried to complete one task, adding an icon to their newly created channel, and fell down a rabbit hole the size of an entire segment of the internet.

__2.3 I Have to Share My Icon?__

<img src="/build/images/youtube-ux-audit/2-3-i-have-to-share-my-icon.png" alt="2.3 I Have to Share My Icon?">

The process to upload and select the icon was straightforward. However after selecting it, I’m presented with this modal, prompting me to share the experience of uploading an icon. Did my icon save? If I don’t want to share and hit cancel, will that erase my icon? Am I confirming to use this icon, or did I already select it and am now talking about it?

To answer those questions, I am able to hit cancel and my icon is still saved. If I, as a tech savvy user, have these concerns, I shudder at the thoughts of the average user when they’re presented with a modal like this one.

__2.4 An Album of My Logos?__

<img src="/build/images/youtube-ux-audit/2-4-an-album-of-my-logos.png" alt="2.4 An Album of My Logos?">

I have an album of my logos now. I only have one logo and don’t plan on changing it anytime soon, unless there’s something catastrophic like a trademark dispute. An entire album dedicated to my one logo seems a bit narcissistic and doesn’t mesh with my business’ mission statement and value declaration. I kid.

The real problem here is not that I have an album of logos; it’s that my Google+ experience isn’t being tailored to my business user needs. Remember that I’m a business user, with a business channel, with a business Google+ page. Why are they treating me like I’m a stay at home dad sharing photos of my children? If I’m not going to be treated like a business user, why even tie Google+ into YouTube at all? I feel like my expectations are being mismanaged here. I expect to use Google+ in a different way than the average user (if at all) and they’re shoehorning my needs into the context of an everyday user.

I do want to bring up that I’m being contradictory here. Earlier in the article, I talk about how the end result of creating a channel is the same between a personal and business user so there shouldn’t be a distinction. Here I talk about how it’s frustrating that I’m not being treated differently as a business user of Google+. Why are the needs different between the two sites for the same use case? I think it has to do with the type of content being created for the services. YouTube is all about videos, and videos only. I’m posting videos to my channel and all the videos are created by me. Whereas with Google+ (and Facebook) we’re creating more types of content. We’re not only creating our own content, we’re liking and sharing other’s. When we like and share as my business we’re giving that content a stamp of approval. I want that stamp of approval to be separate from our personal social media profiles. Facebook handles this situation with pages and page ownership. YouTube and Google+ doesn’t seem to separate the two.

This article was supposed to be about the UX frustrations I had with creating a channel on YouTube. It has now evolved into a critique on the UX of Google+ and social media in general. Combining the two sites makes both of their design decisions impact the experience as a whole. Let’s move back to branding my channel.

__2.5 Editing My Channel Art__

<img src="/build/images/youtube-ux-audit/2-5-editing-my-channel-art.png" alt="2.5 Editing My Channel Art">

I’m ready to select my channel art (banner). It’s not through Google+ like my icon was; instead I’m presented with a new interface. I’ve written in the past about how [it is hard to use programs when every click produces a new interface](http://www.webspecdesign.com/2016/02/dev-corner-a-wpml-case-study/). Why couldn’t they use this interface for editing the icon? The upside to this screen is that it’s not Google+, so I don’t have to worry about sharing the change to my banner. Like my logo, I don’t plan on changing the banner too often.

__2.6 Applause__

<img src="/build/images/youtube-ux-audit/2-6-applause.png" alt="2.6 Applause">

As an aside, I’d like to applaud the nice art direction preview of the selected image. I especially love the well written, descriptive “Your channel art is going to look a bit different across devices.” I should find something like this to show my clients when they try to place portrait photos into a landscape image area and something gets cut off.

__2.7 Still Google+__

<img src="/build/images/youtube-ux-audit/2-7-still-google-plus.png" alt="2.7 Still Google+">

Actually, the banner image was Google+ all along. Why did I have to switch contexts over to Google+ to edit and share my icon when I could upload the banner image through YouTube?

The process of branding the channel, and my full use case, has been completed.

-----

## UX Audit

Now that I’ve gone through all of the steps of creating a business channel it’s time to move from how it made me feel to actual, actionable advice.

## Task 1: Creating the Channel

__3.1 The Initial State__

<img src="/build/images/youtube-ux-audit/3-1-the-initial-state.png" alt="3.1 The Initial State">

__A:__ The only action the user can take here is to create a channel, from a nicely linked call to action. The user will know what to click on to move to the next step. No changes need to be made to this screen.

__3.2 Use YouTube As__

<img src="/build/images/youtube-ux-audit/3-2-use-youtube-as.png" alt="3.2 Use YouTube As">

This screen isn’t nearly as effective as the previous due to the mixed call to actions. The heading of the modal implies that the user is naming their account, which they already did upon signing up for the master Google account, while the submit button says that they’re creating a channel. To me this modal meant that the user needed to enter their name (for commenting) and that they’d be creating the channel on the next screen. The submit button seems to be a “continue to the next step” type of button.

__A:__ This call to action makes it seem like the user is only naming their account for comments. To me the user is entering something they can change later in their profile.

__B:__ The user is given a first and last name field to enter their name. However, they’ve already done this upon creating the Google account. Furthermore, for the business use case, they don’t have a first and last name, so they have to fake it in the field. They’re under the assumption that this is something they can change later. There are also no labels for these fields--it relies on placeholders only.

__C:__ The business user should click on this to create a business account. It’s really small, and they might not even see it. It blends in with the terms & conditions rabble. From the size of the link, I’d guess the business user is not the main audience for channel creation.

__D:__ The name of the modal, “Use YouTube as…”, does not match the submit action, “Create Channel”. This makes the user think by clicking on this button they’ll be taken to a next step to name their channel.

__3.3 Creating a Business Channel__

<img src="/build/images/youtube-ux-audit/3-3-creating-a-business-channel.png" alt="3.3 Creating a Business Channel">

This screen lets the user accomplish the task of creating the business channel. While this page makes it more obvious that a channel is being created, it’s not without its shortcomings. The first of note that this is a _new page_ while the previous was a modal. This means that the user has to learn an entirely separate interface for this process when YouTube could have combined these fields into the same modal.

__A:__ This is a non-ambiguous heading. The user will not be confused as to what will happen when they submit the form. It’s night and day between “Create a new channel” and “Use YouTube as...”

__B:__ The user is presented with a single text field, with a proper label. This is the best choice for a business user.

__C:__ They couldn’t be more explicit that creating the channel creates a Google+ page. That’s front and center on this form, so it’s less jarring when the user finds out they have to manage a Google+ page too.

__D:__ While the heading on this page is effective, the call to action “done” has its problems. The first modal had a much more straightforward “Create Channel”, and that wording should be used here too. Of note is the camelcase of “Done” and the all caps “CREATE CHANNEL” While I won’t continue to nitpick differences like these, the difference in editorial style only enhances the inconsistencies between each screen of the experience.

__E:__ This section is telling me available actions I can take once the channel’s completed. However, isn’t this information also relevant to the personal user? A personal user can also upload videos and comment. Why were those stated only here and not on the personal modal too?

__3.4 Now Entering Google+__

{% comment %}Note to self: I reuse the 2.1 image here, but change its alt tag, to reduce requests. I do this a couple more times.{% endcomment %}
<img src="/build/images/youtube-ux-audit/2-1-now-entering-google-plus.png" alt="3.4 Now Entering Google+">

I recommend getting rid of this dialog. In its place, the functionality should be added to the initial state of a newly created channel. The initial state already prompts the user to upload a video. Add a call to action to upload an icon, and an additional one to upload a banner image to the initial state. Display the text of this modal to these prompts. By adding to the initial state the user will be more easily able to brand their channel.

__3.5 Google+__

<img src="/build/images/youtube-ux-audit/2-2-this-is-really-happening.jpg" alt="3.5 Google+">

Make the creation of a Google+ page optional when creating an account. I know that’s easier said than done.

__3.6 Sharing the Icon__

<img src="/build/images/youtube-ux-audit/3-6-sharing-the-icon.png" alt="3.6 Sharing the Icon">

Displaying this modal after a user uploads an icon for the first time is confusing. They’re not used to this behavior yet, so they may get confused as to whether the icon was actually saved. Displaying some sort of confirmation that the icon was indeed saved, and that sharing is optional, will help reinforce that the action completed successfully.

__A:__ This screen mentions that the user is sharing their photo. The user didn’t upload a photo--they uploaded a logo of their business. This distinction is important because the messaging when using Google+ as a business needs to remain consistent.

__B:__ The modal popped up right after the user selected the icon. Did the icon save? If the user doesn’t want to share and hit cancel, will that undo the change? Is the user confirming the use of this icon, or did it already save and they are now talking about it? Having a success message such as “Your icon has been saved, why not share the update?” would reinforce the user that sharing is optional.

__3.7 An Album of Logos?__

<img src="/build/images/youtube-ux-audit/2-4-an-album-of-my-logos.png" alt="3.7 An Album of Logos?">

Business pages shouldn’t have a gallery of profile pictures. They’re not changing their logo too often. Also easier said than done. While they will have galleries in the future, a gallery specifically of profile pictures doesn’t fit in with a business use case.

__3.8 Editing Channel Art__

<img src="/build/images/youtube-ux-audit/3-8-editing-channel-art.png" alt="3.8 Editing Channel Art">

The user is presented with a new interface for uploading a banner image. The icon interface and experience should reflect this one.

__A:__ The title of this modal is different than the previous ones. The previous ones were actions: “Use YouTube as...” and “Create a new channel”, while this one is a noun, “Channel art”. It might seem like a nitpicky thing, but once again, Nick Disabato touches upon this in the _Consistency & Character_ chapter of _Cadence & Slang_. He mentions that the words presented in an interface are just as important as the functions it provides. Tone, copy, and labels should all be consistent in a system.

__B:__ I’ll give props to displaying the file requirements in this fashion. The user is told beforehand how the files are needed to be set up before they upload it. I’ve encountered services where file requirements are displayed after the file has failed validation, causing the user to have to fix their submission.

__3.9 The Finished Products__

<img src="/build/images/youtube-ux-audit/1-3-wait.png" alt="3.9 The Finished Products. Initial state after creating a personal channel. Almost identical to the screenshot below.">

<img src="/build/images/youtube-ux-audit/1-5-first-task-complete.png" alt="3.9 The Finished Products. Initial state after creating a business channel. Almost identical to the screenshot above.">

The first image is the result of creating a personal channel. The second image is the result of creating a business channel. Note that they’re almost identical. Why are they identical if there’s different paths to creating the two types of channels? Why can’t there be one single entry point and experience of creating a channel and then differentiating them later based on the type of user?

### A Solution

I’ve levied a lot of criticism towards YouTube and want to put my money where my mouth is by redesigning one of the screens. I chose to work on the “Use YouTube as...” modal as it was the one that caused me quite a bit of confusion and frustration, and was the catalyst to write this article.

__4.1 A Wireframe__

<img src="/build/images/youtube-ux-audit/4-1-a-wireframe.png" alt="4.1 A Wireframe">

This is what I envision the dialog formally known as “Use YouTube as...” looking like. The biggest change in functionality is that the user can create a personal or business channel in the same modal--instead of using two separate screens. The user is able to select whether they are creating a personal or business channel and the fields they fill out change based on this decision. The rest are text changes, explicitly describing what the options entail and providing context as to what the user is getting into. Just because they’re text changes doesn’t mean that they aren’t important to the overall experience.

__A:__ First, I’d change the title of the modal to a more straightforward “Create a new channel”, using the action on the previously separate business channel creation page. Both types of channels can be created in this one modal.

__B:__ Be explicit that personal channels use your name. The user already enters their name when creating a Google account, so it can be autofilled when a user selects this option. Explicitly stating that personal channels use the user’s name reinforces that they’re naming their channel, not their profile.

__C:__ Allow the user to create a business channel within this modal. Be explicit that it’s their business name and that it comes with a Google+ page. In a perfect world, I’d say to remove the mandatory Google+ integration, but that’s beyond the scope of this UX report.

__D:__ If the personal option is selected, provide a user with a place to enter the name of their channel. Use proper inputs and labels for the user. If the user already entered their name elsewhere, it will autofill here.

__E:__ For the business user, don’t show the icon, because they can set it later, and it’s assumed it’ll be their logo. Give them a single text field to enter their business name and have the industry dropdown here.

__F:__ Provide the user an option to cancel (also present in the top right corner). The form will save its contents and display it again if the modal is reopened to prevent frustrations if it is accidently closed.

__G:__ Keep “Create Channel” for the call to action. The user will be more assured that they are creating the right type of channel and have selected the right name.

-----

## Thanks

If you’re still with me, you’re a champion for UX. I hope you’ll start using this as practice to ensure the interfaces and experiences you’re designing are clear and thoughtful, and avoid frustrations for the user.
