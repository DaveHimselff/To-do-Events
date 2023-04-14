import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function About() {
  const name = "Dave Andrew Arafol";
  
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <div className="text-lg mb-4">Name: {name}</div>
            <div className="text-lg mb-4">Course/year: BSIT 2nd year</div>
            <div className="text-lg mb-4">Address: Island Garden City of Samal</div>
          </div>
        </div>
      </div>
    </div>
  );
}
