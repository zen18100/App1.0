/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Beaker, 
  Atom, 
  MessageSquare, 
  PencilRuler, 
  Monitor, 
  Dna, 
  Hash, 
  User, 
  LogOut, 
  Menu, 
  X, 
  Search, 
  ChevronLeft,
  Eye,
  EyeOff
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LAUnit1 from './components/LAUnit1.tsx';
import LAUnit2 from './components/LAUnit2.tsx';
import LAUnit3 from './components/LAUnit3.tsx';
import LAUnit4 from './components/LAUnit4.tsx';
import LAUnit5 from './components/LAUnit5.tsx';
import LAUnit6 from './components/LAUnit6.tsx';
import PHUnit1 from './components/PHUnit1.tsx';

// --- Types ---
interface Topic {
  id: string;
  title: string;
  description: string;
  moduleLink: string;
}

interface Subject {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  topics: Topic[];
}

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
}

// --- Data ---
const SUBJECTS: Subject[] = [
  {
    id: 'chem',
    title: 'Chemistry (CH 110)',
    description: 'Study of matter, its properties, how and why substances combine or separate.',
    icon: <Beaker className="w-12 h-12" />,
    colorClass: 'text-emerald-500',
    topics: [
      { id: 'ch1', title: '1. Introduction to General Chemistry', description: 'The Scientific Method, Dalton\'s Atomic Theory, Classification and Properties of Matter.', moduleLink: '#' },
      { id: 'ch2', title: '2. Stoichiometry', description: 'Chemical equations, mole concepts, and calculations.', moduleLink: '#' },
      { id: 'ch3', title: '3. Reaction to Aqueous Solutions', description: 'Types of chemical reactions, solubility rules, and net ionic equations.', moduleLink: '#' },
      { id: 'ch4', title: '4. Gases', description: 'Pressure, Gas Laws, and Diffusion of gases.', moduleLink: '#' },
    ]
  },
  {
    id: 'physics',
    title: 'Physics (PH 110)',
    description: 'The science concerned with the nature and properties of matter and energy.',
    icon: <Atom className="w-12 h-12" />,
    colorClass: 'text-orange-500',
    topics: [
      { id: 'ph1', title: '1. Units and Measurements', description: 'Dimensional Analysis, Solved Problem Examples.', moduleLink: '#' },
      { id: 'ph2', title: '2. Vectors', description: 'Vector addition, subtraction, scalar and vector products.', moduleLink: '#' },
      { id: 'ph3', title: '3. Kinematics', description: 'Motion in one and two dimensions, velocity, and acceleration.', moduleLink: '#' },
      { id: 'ph4', title: '4. Modern Physics', description: 'Quantum mechanics, relativity theory, and particle physics.', moduleLink: '#' },
    ]
  },
  {
    id: 'la111',
    title: 'Communication Skills (LA 111)',
    description: 'Developing effective verbal, non-verbal, and written communication techniques.',
    icon: <MessageSquare className="w-12 h-12" />,
    colorClass: 'text-purple-500',
    topics: [
      { id: 'la1', title: '1. Intro to Communication skills', description: 'The Communication Process, Elements, and Barriers.', moduleLink: '#' },
      { id: 'la2', title: '2. Models of Communication Skills', description: 'Theoretical frameworks and historical development.', moduleLink: '#' },
      { id: 'la3', title: '3. Note Making And Note Taking', description: 'Active listening and organizing information effectively.', moduleLink: '#' },
      { id: 'la4', title: '4. Writing Skills Essentials', description: 'Grammar, structure, and clarity in academic writing.', moduleLink: '#' },
      { id: 'la5', title: '5. Technical Writing', description: 'Definitions, descriptions, and manual creation.', moduleLink: '#' },
      { id: 'la6', title: '6. Information from Visual Sources', description: 'Data Visualization and Interpretation.', moduleLink: '#' },
    ]
  },
  {
    id: 'ed111',
    title: 'Engineering Drawing (ED 111-211)',
    description: 'Mastering technical drawings and blueprints for mechanical and structural designs.',
    icon: <PencilRuler className="w-12 h-12" />,
    colorClass: 'text-red-500',
    topics: [
      { id: 'ed1', title: '1. Orthographic Projection', description: 'First and third angle projection methods.', moduleLink: '#' },
      { id: 'ed2', title: '2. GD&T', description: 'Understanding tolerances and feature control frames.', moduleLink: '#' },
      { id: 'ed3', title: '3. Sectional Views', description: 'Cut-away representations and auxiliary views.', moduleLink: '#' },
      { id: 'ed4', title: '4. Assembly Drawings', description: 'Exploded views and parts lists (BOM).', moduleLink: '#' },
    ]
  },
  {
    id: 'cs110',
    title: 'Computer Science (CS 110)',
    description: 'Introduction to programming, hardware, software, and fundamental algorithms.',
    icon: <Monitor className="w-12 h-12" />,
    colorClass: 'text-blue-500',
    topics: [
      { id: 'cs1', title: '1. Data Structures and Algorithms', description: 'Stacks, queues, and complexity analysis.', moduleLink: '#' },
      { id: 'cs2', title: '2. Operating Systems Fundamentals', description: 'Process management and memory allocation.', moduleLink: '#' },
      { id: 'cs3', title: '3. Network Protocols', description: 'TCP/IP stack and the OSI model.', moduleLink: '#' },
      { id: 'cs4', title: '4. Database Systems', description: 'SQL querying and database normalization.', moduleLink: '#' },
    ]
  },
  {
    id: 'biology',
    title: 'Biology (Bio)',
    description: 'The natural science that studies life and living organisms.',
    icon: <Dna className="w-12 h-12" />,
    colorClass: 'text-cyan-500',
    topics: [
      { id: 'bio1', title: '1. Cell Structure and Function', description: 'Organelles and membrane transport.', moduleLink: '#' },
      { id: 'bio2', title: '2. Genetics and Inheritance', description: 'DNA, RNA, and protein synthesis.', moduleLink: '#' },
      { id: 'bio3', title: '3. Ecology', description: 'Ecosystems and population dynamics.', moduleLink: '#' },
      { id: 'bio4', title: '4. Human Anatomy', description: 'Body systems and homeostasis.', moduleLink: '#' },
    ]
  },
  {
    id: 'math',
    title: 'Math (MA 110)',
    description: 'De Morgan\'s laws, sets, algebra and more.',
    icon: <Hash className="w-12 h-12" />,
    colorClass: 'text-yellow-500',
    topics: [
      { id: 'ma1', title: '1. Sets', description: 'Subset, power sets, and De Morgan\'s laws.', moduleLink: '#' },
      { id: 'ma2', title: '2. Linear Algebra', description: 'Matrix operations and determinants.', moduleLink: '#' },
      { id: 'ma3', title: '3. Probability', description: 'Combinations and permutations.', moduleLink: '#' },
      { id: 'ma4', title: '4. Complex Numbers', description: 'Argand diagrams and Euler\'s formula.', moduleLink: '#' },
    ]
  },
];

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [view, setView] = useState<'home' | string>('home');
  const [modal, setModal] = useState<'login' | 'register' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Persistence simulation
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setCurrentUser(JSON.parse(savedUser));
  }, []);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
    setIsProfileDropdownOpen(false);
    setView('home');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const mockUser = { firstName: 'John', lastName: 'Doe', email: 'john@example.com' };
    setCurrentUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    setModal(null);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const mockUser = { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' };
    setCurrentUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    setModal(null);
  };

  const currentSubject = SUBJECTS.find(s => s.id === view);

  if (view === 'module-la1') {
    return <LAUnit1 onBack={() => setView('la111')} />;
  }

  if (view === 'module-la2') {
    return <LAUnit2 onBack={() => setView('la111')} />;
  }

  if (view === 'module-la3') {
    return <LAUnit3 onBack={() => setView('la111')} />;
  }

  if (view === 'module-la4') {
    return <LAUnit4 onBack={() => setView('la111')} />;
  }

  if (view === 'module-la5') {
    return <LAUnit5 onBack={() => setView('la111')} />;
  }

  if (view === 'module-la6') {
    return <LAUnit6 onBack={() => setView('la111')} />;
  }

  if (view === 'module-ph1') {
    return <PHUnit1 onBack={() => setView('physics')} />;
  }

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      {/* --- Navbar --- */}
      <nav className="fixed top-0 inset-x-0 h-[70px] bg-black/85 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-6 md:px-12 z-50 shadow-xl">
        <button 
          onClick={() => setView('home')}
          className="text-2xl font-bold text-blue-600 tracking-wider hover:opacity-80 transition-opacity"
        >
          JOBBIESAREA
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {!currentUser ? (
            <>
              <button 
                onClick={() => setModal('register')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg shadow-blue-600/20 transition-all hover:scale-105"
              >
                Register
              </button>
              <button 
                onClick={() => setModal('login')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-1.5 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Login
              </button>
            </>
          ) : (
            <div className="relative">
              <button 
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-full py-1.5 pl-1.5 pr-4 hover:border-blue-600 transition-all"
              >
                <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center font-bold shadow-lg shadow-blue-600/30">
                  {currentUser.firstName[0]}{currentUser.lastName[0]}
                </div>
                <span className="font-semibold">{currentUser.firstName}</span>
              </button>
              
              <AnimatePresence>
                {isProfileDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-48 bg-gray-900 border border-gray-800 rounded-xl p-2 shadow-2xl"
                  >
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-red-950/30 rounded-lg transition-colors font-semibold"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          {currentUser && (
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold shadow-lg">
              {currentUser.firstName[0]}{currentUser.lastName[0]}
            </div>
          )}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isMobileMenuOpen ? 'bg-blue-600' : 'bg-gray-900 border border-gray-800'}`}
          >
            {isMobileMenuOpen ? <X /> : <Menu className="text-blue-600" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100% cloud' }}
            className="fixed inset-y-0 right-0 w-64 bg-gray-950 border-l border-gray-800 z-40 pt-[70px] md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {!currentUser ? (
                <>
                  <button 
                    onClick={() => { setModal('register'); setIsMobileMenuOpen(false); }}
                    className="bg-blue-600 text-white w-full py-3 rounded-xl font-bold"
                  >
                    Register
                  </button>
                  <button 
                    onClick={() => { setModal('login'); setIsMobileMenuOpen(false); }}
                    className="border-2 border-blue-600 text-blue-600 w-full py-2.5 rounded-xl font-bold"
                  >
                    Login
                  </button>
                </>
              ) : (
                <button 
                  onClick={handleLogout}
                  className="bg-red-600/10 text-red-500 w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <LogOut size={20} /> Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Main Content --- */}
      <main className="pt-[100px] pb-20 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-blue-600 inline-block pb-2">
                  Explore Subjects
                </h1>
                <div className="mt-8 bg-gray-900/50 border border-dashed border-gray-700 p-4 rounded-xl text-gray-400">
                  <p><i>You can advertise your products here</i></p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {SUBJECTS.map((subject) => (
                  <motion.div 
                    key={subject.id}
                    whileHover={{ y: -8 }}
                    className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col items-center text-center group relative overflow-hidden transition-colors hover:border-blue-600"
                  >
                    {/* Accent bar */}
                    <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-transparent via-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className={`${subject.colorClass} mb-4 transition-transform group-hover:scale-110`}>
                      {subject.icon}
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-2">{subject.title}</h2>
                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                      {subject.description}
                    </p>
                    
                    <button 
                      onClick={() => setView(subject.id)}
                      className="mt-6 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
                    >
                      View Topics
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="subject"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-8">
                <button 
                  onClick={() => setView('home')}
                  className="flex items-center gap-2 text-blue-500 font-semibold hover:text-white transition-colors mb-6"
                >
                  <ChevronLeft size={20} /> Back to Subjects
                </button>
                
                <div className="md:flex items-center justify-between gap-6 mb-8">
                  <div className="text-center md:text-left mb-6 md:mb-0">
                    <h1 className="text-3xl md:text-4xl font-bold border-b-4 border-blue-600 inline-block pb-2">
                      {currentSubject?.title} Topics
                    </h1>
                  </div>
                  
                  <div className="relative max-w-md w-full">
                    <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                      <Search size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search topics..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-gray-900 border-2 border-blue-600 rounded-xl py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {currentSubject?.topics
                  .filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((topic) => (
                    <motion.div 
                      key={topic.id}
                      whileHover={{ x: 4 }}
                      className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden group hover:border-blue-600 transition-colors"
                    >
                      <div className="absolute inset-y-0 left-0 w-1.5 bg-blue-600 transition-opacity opacity-0 group-hover:opacity-100" />
                      
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{topic.title}</h3>
                        <p className="text-gray-400 text-sm">{topic.description}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button 
                          onClick={() => {
                            if (topic.id === 'la1') setView('module-la1');
                            if (topic.id === 'la2') setView('module-la2');
                            if (topic.id === 'la3') setView('module-la3');
                            if (topic.id === 'la4') setView('module-la4');
                            if (topic.id === 'la5') setView('module-la5');
                            if (topic.id === 'la6') setView('module-la6');
                            if (topic.id === 'ph1') setView('module-ph1');
                          }}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors shadow-lg shadow-emerald-900/20"
                        >
                          Start Module
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-1.5 rounded-lg font-bold text-sm transition-all">
                          Questions
                        </button>
                      </div>
                    </motion.div>
                  ))
                }
                {currentSubject?.topics.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
                  <div className="text-center py-20 bg-gray-900 rounded-2xl border border-gray-800 text-gray-500 italic">
                    No topics found matching your search.
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* --- Modals --- */}
      <AnimatePresence>
        {modal && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-gray-950 border border-gray-800 rounded-2xl shadow-2xl p-8 overflow-hidden"
            >
              <button 
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 p-1 text-gray-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 bg-blue-600 h-8 rounded-full shadow-lg shadow-blue-600/50" />
                <h2 className="text-2xl font-bold">{modal === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
              </div>

              <form className="space-y-4" onSubmit={modal === 'login' ? handleLogin : handleRegister}>
                {modal === 'register' && (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">First Name</label>
                      <input required type="text" placeholder="Jane" className="w-full bg-gray-900 border border-gray-800 focus:border-blue-600 rounded-lg p-2.5 outline-none transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Last Name</label>
                      <input required type="text" placeholder="Doe" className="w-full bg-gray-900 border border-gray-800 focus:border-blue-600 rounded-lg p-2.5 outline-none transition-colors" />
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Email</label>
                  <input required type="email" placeholder="jane@example.com" className="w-full bg-gray-900 border border-gray-800 focus:border-blue-600 rounded-lg p-2.5 outline-none transition-colors" />
                </div>

                {modal === 'register' && (
                  <>
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Phone</label>
                      <input required type="tel" placeholder="0971234567" className="w-full bg-gray-900 border border-gray-800 focus:border-blue-600 rounded-lg p-2.5 outline-none transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Gender</label>
                      <select required className="w-full bg-gray-900 border border-gray-800 focus:border-blue-600 rounded-lg p-2.5 outline-none transition-colors appearance-none">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </>
                )}

                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Password</label>
                  <div className="relative">
                    <input 
                      required 
                      type={showPassword ? 'text' : 'password'} 
                      placeholder="Min 6 characters" 
                      className="w-full bg-gray-900 border border-gray-800 focus:border-blue-600 rounded-lg p-2.5 pr-12 outline-none transition-colors" 
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-95"
                >
                  {modal === 'login' ? 'Login' : 'Create Account'}
                </button>

                <p className="text-center text-sm text-gray-500 mt-6">
                  {modal === 'login' ? "Don't have an account? " : "Already have an account? "}
                  <button 
                    type="button"
                    onClick={() => setModal(modal === 'login' ? 'register' : 'login')}
                    className="text-blue-500 font-bold hover:underline"
                  >
                    {modal === 'login' ? 'Register' : 'Login'}
                  </button>
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
