import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import { Button } from "react-daisyui";
import HomeNavbar from "./components/navbars/HomeNavbar.tsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full md:w-auto">
        <HomeNavbar />
        <Button color="primary" variant="outline">
          Button
        </Button>
        <Button className="btn btn-secondary btn-outline">Button</Button>
        <Button className="btn btn-neutral w-64 rounded-full">Button</Button>
        <Button className="btn btn-accent w-64 rounded-full">Button</Button>
        <Button className="btn btn-success w-64 rounded-full">Button</Button>
        <Button className="btn btn-warning w-64 rounded-full">Button</Button>
        <Button className="btn btn-error w-64 rounded-full">Button</Button>
        <Button className="btn btn-info w-64 rounded-full">Button</Button>
      </div>
      {/* <div className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>New software update available.</span>
        </div>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1 className="text-3xl text-orange-600 font-bold underline">
        Hello world!
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div
        className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </div>
      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">Danger alert!</span> Change a few things
        up and try submitting again.
      </div>
      <div
        className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
        role="alert"
      >
        <span className="font-medium">Success alert!</span> Change a few things
        up and try submitting again.
      </div>
      <div
        className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
        role="alert"
      >
        <span className="font-medium">Warning alert!</span> Change a few things
        up and try submitting again.
      </div>
      <div
        className="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
        role="alert"
      >
        <span className="font-medium">Dark alert!</span> Change a few things up
        and try submitting again.
      </div> */}

      {/* <div
        id="sticky-banner"
        tabIndex="-1"
        className="fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
      >
        <div className="flex items-center mx-auto">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span className="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center">
              <svg
                className="w-3 h-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
              </svg>
              <span className="sr-only">Light bulb</span>
            </span>
            <span>
              New brand identity has been launched for the{" "}
              <a
                href="https://flowbite.com"
                className="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
              >
                Flowbite Library
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <button
            data-dismiss-target="#sticky-banner"
            type="button"
            className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close banner</span>
          </button>
        </div>
      </div> */}
    </>
  );
}

export default App;
