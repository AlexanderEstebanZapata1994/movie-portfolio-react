import { MovieGrid } from "@/components/MovieGrid.tsx"

function App() {
  return (
    <div className="bg-gray-500 px-5 py-10">
      <h1 className="text-4xl text-white py-10 text-center font-mono">My Movies Portfolio</h1>
      <MovieGrid />
      <footer className="text-center text-white py-10">
        <p className="text-sm">Powered by TMDB, this is a no-profit project for learning purposes</p>
        <p className="mt-2 text-sm">Made with ❤️ by <a className="font-mono hover:text-blue-400 cursor-pointer" href="https://github.com/AlexanderEstebanZapata1994">Alexander Esteban</a></p>
        <a className="font-mono hover:text-blue-400 cursor-pointer" href="https://github.com/AlexanderEstebanZapata1994/movie-portfolio-react">Link to repository</a>
      </footer>
    </div>
  )
}

export default App
