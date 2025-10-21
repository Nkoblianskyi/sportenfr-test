import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/50 z-50">
      <div className="container mx-auto max-w-[1200px] px-4 py-2 md:py-3">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg flex items-center justify-center">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h1 className="text-lg md:text-2xl font-bold text-white">SPORTENFR</h1>
          </Link>
        </div>
      </div>
    </header>
  )
}
