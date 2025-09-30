import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
  //const [count, setCount] = useState(0)

  //return (
   // <>
     // <div className="min-h-screen bg-neutral-800 flex flex-col items-center justify-center text-center">
       // <div className="flex items-center justify-center space-x-8 mb-12">
       // <a href="https://vite.dev" target="_blank">
        //  <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
       // </a>
       // <a href="https://react.dev" target="_blank">
         // <img src={reactLogo} className="w-24 h-24 animate-spin" alt="React logo" style={{ animationDuration: "10s"}} />
       // </a>
     // </div>
     // <h1 className="text-white text-6xl font-bold mb-16">Vite + React</h1>
     // <div className="text-sm space-y-6 mb-8">
       // <button onClick={() => setCount((count) => count + 1)} className="bg-neutral-900 text-white py-2 px-6 rounded-lg text-lg">
        //  count is {count}
       // </button>
       // <p className="text-neutral-400">
         // Edit <code>src/App.jsx</code> and save to test HMR
       // </p>
     // </div>
     // <p className="text-neutral-500">
    //    Click on the Vite and React logos to learn more
    //  </p>
    //  </div>
  //  </>
 // )
//}

//export default App

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md flex w-[800px]">
        {/* Bagian Kiri (gambar placeholder) */}
        <div className="w-1/2 flex items-center justify-center bg-gray-300 rounded-l-lg">
          <span className="text-6xl font-semibold text-gray-400 text-2xl">600 × 500</span>
        </div>

        {/* Bagian Kanan (form login) */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

