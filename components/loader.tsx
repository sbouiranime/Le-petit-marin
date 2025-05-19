export function Loader() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-cyan-900 to-blue-950">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 border-4 border-t-teal-400 border-b-teal-400 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-12 w-12 border-4 border-t-transparent border-b-transparent border-l-cyan-500 border-r-cyan-500 rounded-full animate-spin animation-delay-150"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 border-4 border-t-blue-600 border-b-blue-600 border-l-transparent border-r-transparent rounded-full animate-spin animation-delay-300"></div>
        </div>
      </div>
      <p className="text-white text-xl ml-4 animate-pulse">Diving in...</p>
    </div>
  )
}
