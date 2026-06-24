import { MovieGrid } from "@/components/MovieGrid.tsx"

function App() {
  return (
    <div className="bg-gray-500 px-5 py-10">
      <h1 className="text-4xl text-white py-10 text-center font-mono">My Movies Portfolio</h1>
      <MovieGrid />
      <footer className="text-center text-white py-10">
        <p>Powered by TMDB, this is a no-profit project for learning purposes</p>
      </footer>
    </div>
  )
}

export default App
