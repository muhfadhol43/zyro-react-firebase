import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-8xl font-bold text-purple-500">
        404
      </h1>

      <p className="text-2xl font-semibold mt-6">
        Page Not Found
      </p>

      <p className="text-gray-400 mt-4 max-w-md">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl font-semibold transition"
      >
        Back Home
      </Link>

    </div>
  )
}

export default NotFound