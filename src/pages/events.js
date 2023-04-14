import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

export default function Events() {
  const router = useRouter();

  const [person, setPerson] = useState({
    name: 'Dave Andrew Arafol',
    address: 'Island Garden City of Samal'
  })

  function buttonClicked() {
    setPerson({ ...person, name: 'DAVE ANDREW ARAFOL' })
  }

  function inputChange(e) {
    setPerson({ ...person, name: e.target.value })
  }

  useEffect(() => {
    console.log("useEffect")
  }, [person])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="text-3xl font-bold mb-6">Person Details</div>
          <div className="text-xl mb-4">Name: {person.name}</div>
          <div className="text-xl mb-4">Address: {person.address}</div>
          <input
            type="text"
            name="personName"
            className="border border-black px-4 py-2 mb-4 w-full"
            onChange={inputChange}
            placeholder="Enter name..."
            autocomplete="off"
          />
          <button
            className="border border-black mt-10"
            onClick={buttonClicked}
          >
            Click me
          </button>
        </div>
      </div>
    </div>
  )
}
