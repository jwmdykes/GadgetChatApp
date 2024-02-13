# Trying out [Gadget](gadget.dev)

I tried making a simple chat app using Gadget to see how the experience is versus what you would need to do to create an app with similar features from scratch.

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

## Features that would be nice to have

### Admin panel

Gadget could try to compete with CMSs like Wordpress, or headless CMSs like Strapi by providing a built in admin dashboard for site administration. Some features that would be useful are:

- Simple, customizable web forms for performing CRUD operations on the database.
  - For example, when making a blog it is useful to have a markdown editor for adding blog posts.
  - This is more user friendly than having to edit the fields in a GraphQL query when trying to modify the database.

Gadget could be a great option for example when building a website for a small business or a blog which can rely on server side rendered pages for the vast majority of requests but still needs to periodically rebuild those static pages when there are changes to the database.

In some sense Gadget could aim to be a middle-ground between inevitably slower server side generated WordPress websites, and faster but harder to setup and host websites using a headless CMS.

### More options in templates

It would be nice to have more control over the template that is created when creating a new application. We just get a new React app using Javascript. If there were a few dialogs asking if we want to use Javascript, if we want to use Typescript, if we want to use a particular CSS framework like tailwindCSS or Sass, or even if we want to use another framework like Vue that would make it even easier to get started.

I was able to get Typescript and TailwindCSS working without too much trouble, but having to set these up myself is definitely not ideal for a platform that tries to make developing as fast and hassle-free as possible!

### Better typescript support

When trying to use the Rest or GraphQL apis, it would be awesome if we had access to typescript definitions of the data models. For example, I was building a `MessageBubble` react component for my chat app. This component should take in as props a `message` object and a `user` object which come from my database. It would make it super fast to build components if these types were provided!

I was able to access the types like this:

```
message: GadgetRecord<{
  __typename: 'Message';
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
}>;
```

but hardcoding this value means I have to update my component props when my data model changes. Maybe there is already a way to do what I want, but I couldn't find it in the documentation. Since the backend already knows the types, it shouldn't be too difficult to provide them to the user in an easily consumable manner.

### A more powerful cli

Also it would be awesome if the cli was more powerful. If we could create new projects (also with an interactive dialog!), and have more functions available to manage our projects that would be very useful.

Also, when using `ggt sync`, the CLI should forward build errors to the console. When I was building my chat app, I periodically got build errors and had to run `yarn vite:build` in order to see them in my code editor. The errors also appear in the web app, but can be easily missed when working in a separate code editor.

### More supported frameworks!

I love using React, so it's great that Gadget supports React. But given that they use Vite which supports other frameworks, I wonder why Gadget doesn't support these too. It seems like this should be possible.

### Better collaborative workflow

The workflow for Gadget makes sense when there is a single developer, but when working in a team it seems like it would be difficult to collaborate without running the website locally and using version control. If it were possible to run the app completely locally (at least for the frontend), and have the development website only update after a git commit for example, it may be easier to work in teams.

I haven't tried the "pro" offerings from Gadget so I don't know if there is already a satisfactory solution for working collaboratively.

## Small issues

- When deleting an action, filter or model, you should be prompted to ask if you would like to delete the corresponding Javascript file as well.
- The font size in the monaco code editor in the website is quite small for me. It would be nice to be able to resize the font only rather than the entire page (perhaps with control + scroll like in Visual Studio Code).
