import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 p-6">
      {/* Header */}
      <h1
        className="text-4xl sm:text-6xl font-bold mb-4 text-center"
      >
        MeetStranger
      </h1>

      <p
        className="text-lg sm:text-xl text-gray-600 text-center mb-8 max-w-lg"
      >
        Practice English (or any language) with real people — instantly through
        face-to-face video chats.
      </p>

      {/* Start button */}
      <div
      >
        <Link to="/chat">
          <button className="rounded-2xl text-lg px-8 py-6">
            Start Chat
          </button>
        </Link>
      </div>

      {/* How it works */}
      <div
        className="mt-16 max-w-md text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">How it works</h2>
        <ul className="space-y-3 text-gray-600">
          <li>1️⃣ Allow camera and microphone access</li>
          <li>2️⃣ Get paired with a random person</li>
          <li>3️⃣ Practice speaking — face to face</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-400">
        © {new Date().getFullYear()} MeetStranger. Practice languages safely.
      </footer>
    </div>
  );
}
