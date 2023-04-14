//dave TODO
import Navbar from "../components/Navbar";
import { FiCheckCircle } from 'react-icons/fi';

export default function Home() {
  
  const todos = [
    { title: 'Todo 1', description: 'Todo 1 description'},
    { title: 'Todo 2', description: 'Todo 2 description'},
    { title: 'Todo 3', description: 'Todo 3 description'},
  ]
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {todos.map((data, index) => {
            return(
              <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-green-500 mr-2">
                    <FiCheckCircle size={20} />
                  </div>
                  <div className="text-lg font-bold">{data.title}</div>
                </div>
                <div className="text-gray-600">{data.description}</div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
