import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface LAUnit2Props {
  onBack: () => void;
}

export default function LAUnit2({ onBack }: LAUnit2Props) {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-700 font-sans pb-20 text-sm">
      {/* Navigation */}
      <nav className="bg-black sticky top-0 z-[100] shadow-md py-4">
        <div className="max-w-[900px] mx-auto px-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md font-semibold text-sm transition-all flex items-center gap-2"
          >
            <ChevronLeft size={16} /> Back
          </button>
        </div>
      </nav>

      <div className="main-wrapper py-6 md:py-12">
        <div className="container-notes max-w-[900px] mx-auto bg-white shadow-xl rounded-xl border border-slate-200 p-6 md:p-10">
          <header className="mb-8 pb-4 border-b border-slate-300">
            <p className="subtitle text-[11px] font-semibold uppercase tracking-widest text-teal-600 mb-2">Communication Theory</p>
            <h1 className="text-2xl md:text-4xl font-extrabold font-serif text-gray-900 mb-4 leading-tight">
              The Three Models of Communication
            </h1>
            <p className="description text-gray-600 leading-relaxed">
              Understanding the models helps to conceptualize the communication process, ranging from a simple one-way transfer to a complex, simultaneous exchange.
            </p>
          </header>

          <section id="section-overview" className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">1. Introduction to Models</h2>
            <p className="mt-4 leading-relaxed">
              Communication models are conceptual diagrams or frameworks used to explain how the communication process works. They simplify complex interactions and highlight key components like the sender, receiver, message, and feedback. The three main models represent an evolution in understanding, moving from simple, one-way action to complex, simultaneous exchange.
            </p>
          </section>
          
          <section id="section-linear" className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">2. The Linear Model of Communication</h2>
            <div className="image-placeholder bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg p-10 text-center italic text-gray-500 my-4">
              [Image of Linear Model of Communication]
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">2.1 Core Concept</h3>
            <p className="leading-relaxed">
              The Linear Model is the simplest model, conceptualizing communication as a <span className="text-teal-700 font-bold">one-way process</span> where a message travels from the sender to the receiver. It's often referred to as the "Action Model."
            </p>
            <p className="mt-4 leading-relaxed">
              Historically, the most famous Linear Model is the <strong>Shannon-Weaver Model</strong>, developed by <strong>Claude Shannon and Warren Weaver in 1949</strong>.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">2.2 Key Characteristics and Components</h3>
            <ul className="simple-list list-disc ml-6 mt-3 space-y-2">
              <li><strong>One-Way Flow:</strong> The process is a straight line: Sender sends, Receiver receives.</li>
              <li><strong>No Feedback Loop:</strong> In its earliest form, this model does not account for a response from the receiver.</li>
              <li><strong>Key Components:</strong> Sender (Source), Encoder, Message, Channel, Decoder, Receiver, and Noise (introduced by Shannon & Weaver).</li>
              <li><strong>Focus:</strong> Primarily focused on the <span className="text-teal-700 font-bold">channel</span> and avoiding <span className="text-teal-700 font-bold">noise</span>, as it originated in technical communication.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">2.3 Examples and Limitations</h3>
            <ul className="simple-list list-disc ml-6 mt-3 space-y-2">
              <li><strong>Examples:</strong> Public speaking, watching a news broadcast, reading a newspaper, or sending a mass email.</li>
              <li><strong>Limitation:</strong> It fails to capture the complexity of human interaction, especially the absence of immediate feedback and the assumption that the roles of sender and receiver are fixed.</li>
            </ul>
          </section>

          <section id="section-interactive" className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">3. The Interactive Model of Communication</h2>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">3.1 Core Concept</h3>
            <p className="leading-relaxed">
              The Interactive Model (also called the "Convergence Model" or "Schramm's Model") views communication as a <span className="text-teal-700 font-bold">two-way process</span> that includes feedback. It recognizes that communicators alternate roles as sender and receiver.
            </p>
            <p className="mt-4 leading-relaxed">
              A notable Interactive Model is <strong>Schramm's Model of Communication</strong>, developed by <strong>Wilbur Schramm in 1954</strong>.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">3.2 Key Characteristics and Components</h3>
            <ul className="simple-list list-disc ml-6 mt-3 space-y-2">
              <li><strong>Two-Way Process:</strong> After the initial message, the receiver processes the message and sends back feedback, becoming the new sender.</li>
              <li><strong>Feedback Loop:</strong> A response is incorporated, making the process cyclical rather than linear.</li>
              <li><strong>Field of Experience:</strong> This model introduces the importance of the communicators' <span className="text-teal-700 font-bold">Field of Experience</span> (shared knowledge, background, culture). Communication is easier when these fields overlap.</li>
              <li><strong>Time Delay:</strong> While it includes feedback, the model suggests that communication is a step-by-step process where roles switch sequentially.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">3.3 Examples and Limitations</h3>
            <ul className="simple-list list-disc ml-6 mt-3 space-y-2">
              <li><strong>Examples:</strong> Email exchanges, forum discussions, question-and-answer sessions, or old-fashioned letter writing.</li>
              <li><strong>Limitation:</strong> It still doesn't capture the real-time, simultaneous nature of face-to-face communication.</li>
            </ul>
          </section>

          <section id="section-transactional" className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">4. The Transactional Model of Communication</h2>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">4.1 Core Concept</h3>
            <p className="leading-relaxed">
              The Transactional Model is the most comprehensive and widely accepted model for interpersonal and face-to-face communication. It views communication as a <span className="text-teal-700 font-bold">simultaneous process</span> where communicators are both sending and receiving messages at the same time.
            </p>
            <p className="mt-4 leading-relaxed">
              Key theorists associated with developing the Transactional view include <strong>Barnlund (1970)</strong> and <strong>Dance (1967)</strong>, building on earlier work.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">4.2 Key Characteristics and Components</h3>
            <ul className="simple-list list-disc ml-6 mt-3 space-y-2">
              <li><strong>Simultaneous Exchange:</strong> Both participants are known as <span className="text-teal-700 font-bold">Communicators</span> rather than fixed senders and receivers. They encode and decode at the same moment.</li>
              <li><strong>Interdependence:</strong> Communication depends on the relationship between the communicators and the surrounding context.</li>
              <li><strong>Context:</strong> This model heavily emphasizes the role of context—cultural, relational, social, and environmental factors—in shaping the message.</li>
              <li><strong>Non-Verbal Focus:</strong> It acknowledges that non-verbal cues are messages being sent back even as verbal messages are being received.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">4.3 Examples and Importance</h3>
            <ul className="simple-list list-disc ml-6 mt-3 space-y-2">
              <li><strong>Examples:</strong> Face-to-face conversations, group discussions, video conferencing.</li>
              <li><strong>Importance:</strong> This model highlights the idea that communication is not just about conveying information, but about <span className="text-teal-700 font-bold">creating shared meaning</span> and <span className="text-teal-700 font-bold">building relationships</span>.</li>
            </ul>
          </section>

          <div className="mt-12 text-center border-t pt-10">
            <button 
              onClick={onBack}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg shadow-emerald-900/20 transition-all hover:scale-105 active:scale-95"
            >
              Finish Module
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
