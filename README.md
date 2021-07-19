# Table of contents

- [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Getting Started](#getting-started)
  - [Learn More](#learn-more)
  - [Deploy on Vercel](#deploy-on-vercel)

## Introduction

This is part of a technical assesment I had to do for a Frontend Developer position with Mindworks Interactive, a digital agency in Malaysia. The website was built with Next.js and React, using the `getServerSideProps` function to fetch data from [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) upon each request.

I used Tailwind to apply CSS styling, and the built-in Next.js dynamic routes feature to handle routing for each post retrieved from {JSON} Placeholder. Comments for each post can be filtered based on the user's input for comment name, email and body using React's `useState` hook.

## Technologies

- React for creating UI components, React's `useState` hook for keeping track of the form state to filter comments in the post details page.
- Next.js' built in `next/routing` to handle dynamic routes for each post page, and `getServerSideProps` to fetch data for posts and comments from {JSON} Placeholder.
- Tailwind CSS for styling, with `jit` mode turned on to enable the cool floating labels for the form inputs. You can see that in action [in this component](components/InputWithLabel.js), and the video tutorial from Tailwind Labs [on YouTube](https://www.youtube.com/watch?v=nJzKi6oIvBA).

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
