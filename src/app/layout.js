import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons"; // Add this
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience"; // NEW
import Contact from "@/components/Contact";

export const metadata = {
  title: "Arun's Portfolio",
  description: "Backend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white">
        <div className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="fixed inset-0 -z-20 bg-grid-pattern opacity-10" />

        <FloatingIcons /> {/* Add this */}

        <Header />
        <main className="min-h-screen ">
          {children}
          <Hero /> {/* Add this */}
           <About />
        <Skills />
        <Experience /> 
        <Projects />
        <Education />
        <Contact />
        </main>
        <Footer />
      </body>
    </html>
  );
}
