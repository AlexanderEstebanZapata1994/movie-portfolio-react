import { MovieGrid } from "@/components/MovieGrid.tsx"
import SearchBar from '@/components/SearchBar';

function App() {
  return (
    <div className="h-dvh w-dvw overflow-x-hidden bg-linear-to-t from-black via-red-900 to-yellow-600">
      <section className="py-2 bg-transparent">
        <h1 className="text-4xl xs:text-2xl sm:text-6xl text-white py-5 px-2.5 text-center font-sans">What Movie is next...</h1>
        <SearchBar />
      </section>
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
