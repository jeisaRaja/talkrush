import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-[#0f172a] to-[#1e293b] text-gray-100 p-6">
      {/* Logo / Brand */}
      <div className="inline-block group">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 group-hover:-translate-y-1 ease-out duration-300 transform-gpu">
          <span className="text-transparent bg-clip-text bg-linear-to-br from-blue-600 to-cyan-100 cursor-pointer">
            TalkRush
          </span>
        </h1>
      </div>

      {/* Tagline */}
      <p className="text-gray-400 text-lg sm:text-xl max-w-lg text-center mb-10 leading-relaxed">
        Connect instantly. Speak confidently.
        <span className="block text-gray-300 mt-1">
          Practice real conversations — anytime, anywhere.
        </span>
      </p>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/chat">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold text-lg transition-all shadow-md hover:shadow-blue-500/30 cursor-pointer">
            Start Chat
          </button>
        </Link>
        <button className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-xl font-semibold text-lg text-gray-300 hover:text-white transition-all cursor-pointer">
          Learn More
        </button>
      </div>

      {/* How It Works */}
      <div className="mt-20 w-full max-w-3xl grid sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 transition-all">
          <span className="text-3xl mb-2 block">🎧</span>
          <h3 className="font-semibold text-lg mb-1">Enable</h3>
          <p className="text-gray-400 text-sm">
            Allow camera and microphone access
          </p>
        </div>
        <div className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 transition-all">
          <span className="text-3xl mb-2 block">⚡</span>
          <h3 className="font-semibold text-lg mb-1">Match</h3>
          <p className="text-gray-400 text-sm">
            Get paired instantly with someone new
          </p>
        </div>
        <div className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 transition-all">
          <span className="text-3xl mb-2 block">💬</span>
          <h3 className="font-semibold text-lg mb-1">Talk</h3>
          <p className="text-gray-400 text-sm">
            Start a real conversation — face to face
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-500">
        © {new Date().getFullYear()} TalkRush · Built for real conversations.
      </footer>
    </div>
  );
}
