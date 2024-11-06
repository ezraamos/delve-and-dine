# Delve and Dine

## Project Overview

An suggests recipes based on ingredients users have, with filters for diet and meal type. It ranks recipes by available ingredients, helping users decide what to cook.

## Getting Started

To get the project up and running on your local machine, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/ezraamos/delve-and-dine.git
   cd nextjs-soopancular-app
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your SpoonaCular API key:

   ```
   SOOPANCULAR_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```
   pnpm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Architectural Decisions

1. **Next.js**: Chosen for its server-side rendering capabilities, optimized performance, and seamless integration with React. The App Router provides an intuitive file-based routing system.

2. **Tailwind CSS**: Utilized for rapid UI development with its utility-first approach, allowing for easy customization and maintaining a consistent design system.

3. **shadcn/ui**: Integrated for its high-quality, accessible components that work seamlessly with Tailwind CSS, reducing development time and ensuring a polished user interface.

4. **Tanstack Query**: Implemented for efficient server state management and data synchronization. It simplifies data fetching, caching, and updating, reducing boilerplate code and improving application performance through optimized request handling and caching strategies.

5. **Spoonacular API**: The Spoonacular API provides access to a vast database of recipes, nutrition info, and meal planning tools. It supports filters like diet, cuisine, and meal type, ideal for apps focused on personalized recipes and nutrition.

6. **API Routes**: Leveraged Next.js API routes to create a backend layer, securely handling API keys and providing a clean separation between frontend and backend logic.
