import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/50 border-t border-emerald-500/20 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              About
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Junior Backend Developer passionate about building scalable solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Quick Links
            </h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>
                <a href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-emerald-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Arun2226"
                className="text-slate-400 hover:text-emerald-400 text-2xl transition-all hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/arun-bondada-3a588a236"
                className="text-slate-400 hover:text-cyan-400 text-2xl transition-all hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 text-2xl transition-all hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 text-2xl transition-all hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-500/20 pt-6 text-center">
          <p className="text-slate-500 text-sm mb-2">
            &copy; {currentYear} Bondada Arun. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with{' '}
            <span className="text-emerald-400">Next.js</span> &{' '}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
