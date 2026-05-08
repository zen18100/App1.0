import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface LAUnit1Props {
  onBack: () => void;
}

export default function LAUnit1({ onBack }: LAUnit1Props) {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-700 font-sans pb-20">
      <nav className="bg-black sticky top-0 z-[100] shadow-md py-4">
        <div className="max-w-[900px] mx-auto px-4 flex items-center justify-between">
          <h2 className="text-white text-xl font-bold font-serif m-0">The Three Models of Communication</h2>
          <button 
            onClick={onBack}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md font-semibold text-sm transition-all flex items-center gap-2"
          >
            <ChevronLeft size={16} /> Back to LA111
          </button>
        </div>
      </nav>

      <div className="max-w-[900px] mx-auto mt-6 md:mt-12 px-4">
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-6 md:p-10">
          <header className="mb-8 pb-4 border-b border-slate-300">
            <p className="text-[11px] md:text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">Communication Theory</p>
            <h1 className="text-3xl md:text-5xl font-extrabold font-serif text-gray-900 mb-4 leading-tight">
              Communication: Process, Elements, and Barriers
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              This guide breaks down the core components of human communication to help you understand how messages are sent, received, and sometimes lost.
            </p>
          </header>

          <section className="mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              1. Definition of Communication
            </h2>
            <p className="mt-4 leading-relaxed">
              Communication is the process of conveying <strong className="text-gray-800 font-semibold">information, ideas, attitudes, or feelings from one person (or group) to another.</strong> It is successful when the receiver understands the message exactly as the sender intended.
            </p>
            <p className="mt-4 leading-relaxed">
              Essentially, it is about creating <strong className="text-gray-800 font-semibold">shared meaning</strong>. Without common understanding, communication is just transmission of sound or symbols, not true connection.
            </p>
          </section>

          <section className="mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              2. Purpose of Communication Skills in Technical and Professional Training
            </h2>
            <p className="mt-4 leading-relaxed">
              Developing strong communication skills is vital for success in professional and technical fields, extending far beyond basic classroom learning.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong className="text-gray-800 font-semibold">Collaboration:</strong> Facilitates effective teamwork, problem-solving, and coordination on complex projects.</li>
              <li><strong className="text-gray-800 font-semibold">Documentation:</strong> Essential for writing clear reports, proposals, technical manuals, and specifications that meet industry standards.</li>
              <li><strong className="text-gray-800 font-semibold">Client/Stakeholder Management:</strong> Enables professionals to clearly explain complex technical information to non-technical audiences.</li>
              <li><strong className="text-gray-800 font-semibold">Safety and Compliance:</strong> Ensures instructions, warnings, and safety procedures are communicated accurately to prevent accidents and maintain regulatory adherence.</li>
              <li><strong className="text-gray-800 font-semibold">Career Advancement:</strong> Strong oral and written skills are often required for leadership roles, presentations, and interviewing.</li>
            </ul>
          </section>

          <section className="mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              3. Technical English and Common Core English
            </h2>
            <p className="mt-4 leading-relaxed">
              While both are forms of English, they serve different purposes and follow distinct rules regarding vocabulary, style, and tone.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-4">
              <li>
                <strong className="text-gray-800 font-semibold">Common Core English:</strong> Focuses on general communication, including literature, creative writing, and everyday conversation.
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Goal:</strong> To entertain, express emotion, or inform a general audience.</li>
                  <li><strong>Characteristics:</strong> Subjective, evocative, uses varied vocabulary, focuses on flow and expressiveness.</li>
                </ul>
              </li>
              <li>
                <strong className="text-gray-800 font-semibold">Technical English:</strong> The style of writing used in fields like engineering, science, IT, and vocational training.
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Goal:</strong> To inform, instruct, or persuade a specific, technical audience.</li>
                  <li><strong>Characteristics:</strong> Objective, precise, uses specialized terminology (jargon), focuses on clarity and conciseness.</li>
                </ul>
              </li>
            </ul>
            <p className="mt-4 font-semibold text-gray-800">
              Professional Requirement: Technical and professional training emphasizes the mastery of Technical English because ambiguity can lead to major errors in the workplace.
            </p>
          </section>

          <section className="mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              4. The Communication Process
            </h2>
            <p className="mt-4 leading-relaxed">
              Communication is the two-way process of sharing ideas, feelings, and information in a way that creates mutual understanding. It is a cycle that starts and ends with shared meaning. 
            </p>
            <h3 className="text-xl md:text-2xl font-semibold font-serif text-gray-800 mt-6 mb-3">4.1 The Communication Cycle (Simplified Steps)</h3>
            <ol className="list-decimal ml-6 mt-3 space-y-3">
              <li><strong>Formulation (Sender):</strong> The sender develops an idea or intention they want to share.</li>
              <li><strong>Encoding (Sender):</strong> The sender translates the idea into a message using words, symbols, or gestures (the code).</li>
              <li><strong>Transmission (Sender):</strong> The sender sends the encoded message through a chosen channel (e.g., face-to-face, email, phone call).</li>
              <li><strong>Reception (Receiver):</strong> The receiver physically receives the message through their senses (hearing, seeing, etc.).</li>
              <li><strong>Decoding (Receiver):</strong> The receiver interprets or translates the message back into a meaningful idea. This step is key to understanding.</li>
              <li><strong>Feedback (Receiver to Sender):</strong> The receiver creates a response or signal to show whether the message was understood (e.g., nodding, asking a question, replying to an email). This closes the loop.</li>
            </ol>
          </section>

          <section className="mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              5. The Seven Elements of Communication
            </h2>
            <ul className="list-disc ml-6 mt-3 space-y-3">
              <li><strong className="text-teal-700 font-semibold">Sender (or Source):</strong> The person who initiates the communication.</li>
              <li><strong className="text-teal-700 font-semibold">Message:</strong> The information, idea, or feeling that the sender wants to transmit.</li>
              <li><strong className="text-teal-700 font-semibold">Encoding:</strong> The process of converting the idea into symbols.</li>
              <li><strong className="text-teal-700 font-semibold">Channel (or Medium):</strong> The pathway used to deliver the message.</li>
              <li><strong className="text-teal-700 font-semibold">Decoding:</strong> The process by which the receiver interprets the symbols.</li>
              <li><strong className="text-teal-700 font-semibold">Receiver:</strong> The person to whom the message is directed.</li>
              <li><strong className="text-teal-700 font-semibold">Feedback:</strong> The receiver\'s response to the sender\'s message.</li>
              <li><strong className="text-teal-700 font-semibold">Noise:</strong> Any disturbance that interferes with communication.</li>
            </ul>
          </section>

          <section className="mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              6. Barriers to Effective Communication
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold font-serif text-gray-800 mt-6 mb-3">6.1 Types of Barriers</h3>
            
            <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">a. Physical Barriers (Environmental)</h4>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Noise:</strong> Loud machinery, distracting background chatter.</li>
              <li><strong>Distance/Time:</strong> Geographical separation or delays.</li>
              <li><strong>Faulty Equipment:</strong> Broken microphone, illegible handwriting.</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">b. Psychological Barriers (Emotional/Mental)</h4>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Prejudice/Assumptions:</strong> Judging the message based on who the sender is.</li>
              <li><strong>Selective Attention:</strong> The receiver only hears what they want to.</li>
              <li><strong>Emotional State:</strong> Being angry or stressed.</li>
            </ul>
            
            <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">c. Semantic Barriers (Language)</h4>
            <ul className="list-disc ml-6 mt-2 space-y-3">
              <li>
                <strong>Jargon/Technical Language:</strong> Using complex terms only understood by a specific group.
                <p className="text-sm italic text-gray-600 mt-1">Example: "The patient is experiencing dysphagia and odynophagia" instead of "difficulty and painful swallowing".</p>
              </li>
              <li><strong>Different Meanings:</strong> Words meaning different things to different people.</li>
              <li><strong>Body Language Mismatch:</strong> Non-verbal signals contradicting verbal ones.</li>
            </ul>
          </section>

          <section className="mb-8 md:mb-10 text-center">
            <button 
              onClick={onBack}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all"
            >
              Finish Module
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
