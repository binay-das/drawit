import React from 'react';
import { 
  Pencil, 
  Share2, 
  Users, 
  Shapes, 
  Download, 
  Palette, 
  ArrowRight,
  Github
} from 'lucide-react';
import Link from 'next/link';

function Feature({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:bg-gray-800/70 transition-colors">
      <div className="p-3 bg-blue-500/10 rounded-full mb-4">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  );
}

export default function () {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Shapes className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">DrawIt</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Features</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Examples</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Docs</Link>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Start Drawing
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-20 lg:pt-0 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:min-h-screen lg:flex lg:items-center lg:gap-8">
            <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Create, Collaborate, and Share
                <span className="text-blue-400"> Beautiful Drawings</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                A powerful and intuitive whiteboard that helps you bring your ideas to life. 
                Perfect for diagrams, sketches, and collaborative brainstorming.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
                  Start Drawing Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-gray-700 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center">
                  <Github className="mr-2 w-5 h-5" />
                  View on GitHub
                </button>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <div className="relative">
                <div className="relative mx-auto max-w-[800px] bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700/50">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
                  <div className="relative z-10 aspect-[16/10]">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-lg border-2 border-blue-400/40"></div>
                    <div className="absolute top-1/3 right-1/4 w-40 h-24 bg-purple-500/20 rounded-lg border-2 border-purple-400/40"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-green-500/20 rounded-full border-2 border-green-400/40"></div>
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <path d="M200 120 L400 150" stroke="#60A5FA" strokeWidth="2" strokeDasharray="4 4"/>
                      <path d="M400 150 L300 250" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 4"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Everything you need to create amazing drawings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature 
              icon={Pencil}
              title="Intuitive Drawing Tools"
              description="Powerful yet simple tools that make drawing feel natural and effortless"
            />
            <Feature 
              icon={Share2}
              title="Easy Sharing"
              description="Share your drawings with a single click and collaborate in real-time"
            />
            <Feature 
              icon={Users}
              title="Real-time Collaboration"
              description="Work together with your team in real-time, see changes as they happen"
            />
            <Feature 
              icon={Download}
              title="Export Options"
              description="Export your drawings in multiple formats including PNG, SVG, and PDF"
            />
            <Feature 
              icon={Palette}
              title="Customizable Styles"
              description="Personalize your drawings with a wide range of colors and styles"
            />
            <Feature 
              icon={Shapes}
              title="Shape Library"
              description="Access a vast library of pre-made shapes and components"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to start creating?
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already creating amazing drawings with DrawCanvas.
                No sign-up required - start drawing right away!
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                Get Started for Free
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800/30 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm text-center">
              © 2025 DrawIt. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
