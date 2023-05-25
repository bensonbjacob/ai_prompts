# Prompts

[Live App](https://share-prompts-gamma.vercel.app)

Prompts is a CRUD application built with Next.js, Tailwind CSS, and MongoDB. It allows users to create, discover, and share AI prompts, fostering a collaborative environment for creative writing and ideation. With Prompts, you can unleash your imagination and explore a diverse range of prompts contributed by others.

## Features

- Create AI Prompts: Generate and submit your own AI prompts to inspire others and spark their creativity.
- Explore the Feed: Browse through a dynamic feed of AI prompts contributed by users worldwide.
- Search and Filter: Find specific prompts or narrow down your search based on different categories or tags.
- Responsive Design: Enjoy a seamless experience on different devices, thanks to the app's responsive layout.

## Installation

### Clone the repository and install dependencies   

```bash
git clone https://github.com/bensonbjacob/ai_prompts.git
cd ai_prompts
npm install
```

### Configure Environment Variables

1.  Create an .env file
2.  Add the following fields along with your own environment variables

```javascript
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
```

### Start the Development Server

```bash
npm run dev
```