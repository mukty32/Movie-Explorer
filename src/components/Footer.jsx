export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Application Name */}
        <div className="flex items-center gap-2">
          <span className="text-xl">🎬</span>
          <span className="text-lg font-bold text-white tracking-wide">MovieExplorer</span>
        </div>

        {/* Copyright Information */}
        <p className="text-sm">
          © 2026 MovieExplorer. All rights reserved.
        </p>

        {/* Optional Social Media / GitHub Links */}
        <div className="flex gap-4 text-sm font-medium">
          <a 
            href="https://github.com/mukty32" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-indigo-400 transition"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/kamrunnahar-mukty-16483b2ab?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-indigo-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}