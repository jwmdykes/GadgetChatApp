# Trying out [Gadget](gadget.dev)

I tried making a simple chat app using Gadget to see how the experience is versus what you would need to do to create an app with similar features from scratch. Here are my rough notes about what I found good, and what were my pain points that could be improved when working with Gadget.

## What Gadget comes with out of the box

- Google authentication
- A managed postgres database
- REST/graphql api for the postgres database
  - These are automatically generated based on user provided data models which is very convenient.
  - Database migrations are also managed automatically.
- A node.js backend using Fastify
- React support using vite for development
- Support for easily accessing Shopify and OpenAI APIs called "Connections".

## Initial thoughts

It's definitely faster to get started because you don't need to create a backend, frontend, a database and link everything together before you can start coding.

There are other services that allow you to get started quickly like this. Some very popular options for people wanting to make an app quickly would be to use a CMS like Strapi or an ORM like Prisma although you still need to figure out hosting for your application in that case.

## Documentation

My initial thoughts on the documentation is that it is relatively complete, but could use some pages explaining more what exactly Gadget is doing/trying to do from a technical perspective. For example, on this landing page:

![Gadget Homepage](./pictures/gadget_homepage.png)

Having a visible link right to the [What is gadget](https://docs.gadget.dev/guides/getting-started/what-is-gadget) page would be great for developers starting out.

The AI assistant is pretty awesome, though. When I started my application, I wanted to know whether or not I should include the `.gadget` folder in my `.gitignore`. As it turns out, this is covered in the documentation [here](https://docs.gadget.dev/guides/development-tools/cli#syncing-once). The assistant both answered my question about whether I should include the `.gadget` folder, and also linked to the correct page in the documentation!

![alt text](./pictures/assistant_is_helpful.png)

## Build in editor

The built in editor definitely leaves a lot to be desired, especially compared with something like Visual Studio Code. In particular with Typescript the intellisense did not work very well. This makes sense to me since building a fully featured code editor is a huge undertaking. I think the Gadget team could keep the in-website code editor as a simple way to edit files quickly, and focus more on improving the feature set of the command line tools.

In particular, I think creating a `create-gadget-app` npm package to match the style of `create-react-app`, `create-next-app` and for vite `create vite` would be a great step to making Gadget feel more familiar to developers in the React ecosystem.

In order to focus more on the cli, it would need to be more powerful. Some great features would be:

- Better logging of build errors and warnings
  - When I was building my chat app, I periodically got build errors and had to run `yarn vite:build` in order to see them in my code editor.
  - The errors also appear in the web app, but can be easily missed when working in a separate code editor.
- More options when creating a project.
  - Options for using typescript, tailwind, git, etc.
  - Discussed in [link](more-options-in-templates)

## Features that would be nice to have

### Better integration with git

Like most web developers I like to use git for version control in my projects. The git workflow with Gadget is a bit awkward. It feels like there is potential for data loss if the `ggt sync` tool gets confused about what files are the most recent. I don't know what the proper solution to this is, but at the very least being able to commit changes to git in the web interface would make me feel less nervous that any changes I make in the web interface (for example to this readme file) will be lost when I run `ggt sync` later.

However, to be fair this did not happen to me yet.

One potential solution that may work for multiple developers working on a project at the same time would be for there to be two versions of the website. One that follows the most HEAD in git, and one that follows the most recent commit. That way, we can always look at the most recent version of our website according to git, which should in theory always be working.

### Admin panel

Gadget could try to compete with CMSs like Wordpress, or headless CMSs like Strapi by providing a built in admin dashboard for site administration. Some features that would be useful are:

- Simple, customizable web forms for performing CRUD operations on the database.
  - For example, when making a blog it is useful to have a markdown editor for adding blog posts.
  - This is more user friendly than having to edit the fields in a GraphQL query when trying to modify the database.

Gadget could be a great option for example when building a website for a small business or a blog which can rely on server side rendered pages for the vast majority of requests but still needs to periodically rebuild those static pages when there are changes to the database.

In some sense Gadget could aim to be easier to set-up and more performant that both WordPress websites, and headless CMS websites.

### More options in templates

It would be nice to have more control over the template that is created when creating a new application. We just get a new React app using Javascript. If there were a few dialogs asking if we want to use Javascript, if we want to use Typescript, if we want to use a particular CSS framework like tailwindCSS or Sass, or even if we want to use another framework like Vue that would make it even easier to get started.

I was able to get Typescript and TailwindCSS working without too much trouble, but having to set these up myself is definitely not ideal for a platform that tries to make developing as fast and hassle-free as possible!

### Better typescript support

When trying to use the Rest or GraphQL apis, it would be awesome if we had access to typescript definitions of the data models. For example, I was building a `MessageBubble` react component for my chat app. This component should take in as props a `message` object and a `user` object which come from my database. It would make it super fast to build components if these types were provided! They seem to be listed in the API documentation, but I couldn't find the types in my project itself.

I had to create my own custom types like this:

```
message: GadgetRecord<{
  __typename: 'Message';
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
}>;
```

but hardcoding this value means I have to update my component props when my data model changes. This is more generally a pain point when using GraphQL with typescript, but there are tools that make it easier. Alternatively, focusing more on the simpler REST api could also be a good idea, especially considering that the focus of Gadget is on making apps as quickly and easily as possible.

### More supported frameworks!

I love using React, so it's great that Gadget supports React. But given that they use Vite which supports other frameworks, I wonder why Gadget doesn't support these too. It seems like this should be possible.

### Better collaborative workflow

The workflow for Gadget makes sense when there is a single developer, but when working in a team it seems like it would be difficult to collaborate without running the website locally and using version control. If it were possible to run the app completely locally (at least for the frontend), and have the development website only update after a git commit for example, it may be easier to work in teams.

I haven't tried the "pro" offerings from Gadget so I don't know if there is already a satisfactory solution for working collaboratively.

## Small issues

- When deleting an action, filter or model, you should be prompted to ask if you would like to delete the corresponding Javascript file as well.
- The font size in the monaco code editor in the website is quite small for me. It would be nice to be able to resize the font only rather than the entire page (perhaps with control + scroll like in Visual Studio Code).
- Since I use typescript, at some point I renamed my vite.config.js file to vite.config.ts, but this caused my build to fail without errors. These kinds of errors should be reported to the user better (and typescript should be supported eventually). It can be frustrating to debug issues like this when you don't have access to the running environment or the build logs.
- Debugging the server is difficult. At some point during development I got errors in my graphQL requests: ErrorWrapper: [Network] Missing data. This error message could be better.
