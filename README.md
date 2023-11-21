#LMS Frontend

#Setup instruction 

1.Clone the project
``````
         https://github.com/RaiNigam/lms-frontend-hn
``````

2.Move into the directory
``````
cd lms-frontend-hn
``````

3.Install dependencies
``````
    yarn
``````

4.Run the server
``````
yarn dev
``````


###Setup instructions for tailwind

[Tailwind official instruction doc](https://tailwindcss.com/docs/guides/vite)

1.Install Tailwind 
``````
npx tailwindcss init -p
``````
2.Configure your template paths
``````
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
``````
3.Add the tailwind directive to your CSS
``````
@tailwind base;
@tailwind components;
@tailwind utilities;
``````
4.Run the server
``````
yarn run dev
``````
