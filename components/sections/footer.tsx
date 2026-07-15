import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-200/50 py-8 text-center">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>© {new Date().getFullYear()}</span>
            <span className="h-4 w-px bg-indigo-300"></span>
            <span className="font-medium text-gray-700">Raia Digna Amanda</span>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Built with</span>
            <span className="font-medium text-gray-600">Next.js</span>
            <span className="text-gray-300">•</span>
            <span className="font-medium text-gray-600">TypeScript</span>
            <span className="text-gray-300">•</span>
            <span className="font-medium text-gray-600">Tailwind CSS</span>
            <Heart className="h-3 w-3 text-rose-400/70 ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}