import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface LAUnit1Props {
  onBack: () => void;
}

export default function LAUnit1({ onBack }: LAUnit1Props) {
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
              Communication: Process, Elements, and Barriers
            </h1>
            <p className="description text-gray-600 leading-relaxed">
              This guide breaks down the core components of human communication to help you understand how messages are sent, received, and sometimes lost.
            </p>
          </header>

          <section id="section-definition" className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">1. Definition of Communication</h2>
            <p className="mt-4">
              Communication is the process of conveying <strong>information, ideas, attitudes, or feelings from one person (or group) to another.</strong> It is successful when the receiver understands the message exactly as the sender intended.
            </p>
            <p className="mt-4">
              Essentially, it is about creating <strong>shared meaning</strong>. Without common understanding, communication is just transmission of sound or symbols, not true connection.
            </p>
          </section>
          
          <section id="section-purpose" className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">2. Purpose of Communication Skills in Technical and Professional Training</h2>
            <p className="mt-4">
              Developing strong communication skills is vital for success in professional and technical fields, extending far beyond basic classroom learning.
            </p>
            <ul className="simple-list list-disc ml-6 mt-3 space-y-2">
              <li>
                <strong>Collaboration:</strong> Facilitates effective teamwork, problem-solving, and coordination on complex projects.
              </li>
              <li>
                <strong>Documentation:</strong> Essential for writing clear reports, proposals, technical manuals, and specifications that meet industry standards.
              </li>
              <li>
                <strong>Client/Stakeholder Management:</strong> Enables professionals to clearly explain complex technical information to non-technical audiences.
              </li>
              <li>
                <strong>Safety and Compliance:</strong> Ensures instructions, warnings, and safety procedures are communicated accurately to prevent accidents and maintain regulatory adherence.
              </li>
              <li>
                <strong>Career Advancement:</strong> Strong oral and written skills are often required for leadership roles, presentations, and interviewing.
              </li>
            </ul>
          </section>

          <section id="section-english" className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">3. Technical English and Common Core English</h2>
            <p className="mt-4">
              While both are forms of English, they serve different purposes and follow distinct rules regarding vocabulary, style, and tone.
            </p>
            <ul className="simple-list list-disc ml-6 mt-3 space-y-4">
              <li>
                <strong>Common Core English:</strong> Focuses on general communication, including literature, creative writing, and everyday conversation.
                <ul className="simple-list list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Goal:</strong> To entertain, express emotion, or inform a general audience.</li>
                  <li><strong>Characteristics:</strong> Subjective, evocative, uses varied vocabulary, focuses on flow and expressiveness.</li>
                </ul>
              </li>
              <li>
                <strong>Technical English:</strong> The style of writing used in fields like engineering, science, IT, and vocational training.
                <ul className="simple-list list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Goal:</strong> To inform, instruct, or persuade a specific, technical audience.</li>
                  <li><strong>Characteristics:</strong> Objective, precise, uses specialized terminology (jargon), focuses on clarity and conciseness.</li>
                </ul>
              </li>
            </ul>
            <p className="mt-4">
              <strong>Professional Requirement:</strong> Technical and professional training emphasizes the mastery of <strong>Technical English</strong> because ambiguity can lead to major errors in the workplace.
            </p>
          </section>

          <section id="section-process" className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">4. The Communication Process</h2>
            <p className="mt-4">
              Communication is the two-way process of sharing ideas, feelings, and information in a way that creates mutual understanding. It is a cycle that starts and ends with shared meaning. 
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">4.1 The Communication Cycle (Simplified Steps)</h3>
            <p>The process is a continuous loop involving distinct steps taken by the sender and the receiver.</p>
            <ol className="numbered-list list-decimal ml-6 mt-3 space-y-2">
              <li><strong>Formulation (Sender):</strong> The sender develops an idea or intention they want to share.</li>
              <li><strong>Encoding (Sender):</strong> The sender translates the idea into a message using words, symbols, or gestures (the code).</li>
              <li><strong>Transmission (Sender):</strong> The sender sends the encoded message through a chosen channel (e.g., face-to-face, email, phone call).</li>
              <li><strong>Reception (Receiver):</strong> The receiver physically receives the message through their senses (hearing, seeing, etc.).</li>
              <li><strong>Decoding (Receiver):</strong> The receiver interprets or translates the message back into a meaningful idea. This step is key to understanding.</li>
              <li><strong>Feedback (Receiver to Sender):</strong> The receiver creates a response or signal to show whether the message was understood (e.g., nodding, asking a question, replying to an email). This closes the loop.</li>
            </ol>
          </section>

          <section id="section-elements" className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">5. The Seven Elements of Communication</h2>
            <p className="mt-4">
              Effective communication requires all these elements to work together smoothly. When one element is weak or disrupted, the whole process suffers.
            </p>
            <ul className="simple-list list-disc ml-6 mt-3 space-y-3">
              <li>
                <strong className="text-teal-700">Sender (or Source):</strong> The person who initiates the communication and has the idea or information to share.
              </li>
              <li>
                <strong className="text-teal-700">Message:</strong> The information, idea, or feeling that the sender wants to transmit. It is the encoded content.
              </li>
              <li>
                <strong className="text-teal-700">Encoding:</strong> The process of converting the idea into a set of symbols (words, expressions, gestures).
              </li>
              <li>
                <strong className="text-teal-700">Channel (or Medium):</strong> The pathway or method used to deliver the message (e.g., airwaves, written document, video call).
              </li>
              <li>
                <strong className="text-teal-700">Decoding:</strong> The process by which the receiver interprets the symbols and converts them back into meaning.
              </li>
              <li>
                <strong className="text-teal-700">Receiver:</strong> The person to whom the message is directed, who must interpret and understand the message.
              </li>
              <li>
                <strong className="text-teal-700">Feedback:</strong> The receiver's response to the sender's message. It confirms that the message was received and understood (or misunderstood).
              </li>
              <li>
                <strong className="text-teal-700">Noise:</strong> <i className="font-medium italic">(Often considered an eighth, external element)</i> Any disturbance or distraction that interferes with the transmission or reception of the message.
              </li>
            </ul>
          </section>

          <section id="section-barriers" className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">6. Barriers to Effective Communication</h2>
            <p className="mt-4">
              A communication barrier is anything that prevents the receiver from getting or understanding the message exactly as the sender intended. Overcoming these is crucial for clarity.
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">6.1 Types of Barriers</h3>
            
            <h4 className="font-bold text-gray-800 mt-4">a. Physical Barriers (Environmental)</h4>
            <ul className="simple-list list-disc ml-6 mt-2 space-y-1">
              <li><strong>Noise:</strong> Loud machinery, distracting background chatter, poor sound quality on a phone call.</li>
              <li><strong>Distance/Time:</strong> Geographical separation or delays in transmission (e.g., slow internet connection, time zone differences).</li>
              <li><strong>Faulty Equipment:</strong> Broken microphone, illegible handwriting, or a bad screen connection.</li>
            </ul>

            <h4 className="font-bold text-gray-800 mt-4">b. Psychological Barriers (Emotional/Mental)</h4>
            <ul className="simple-list list-disc ml-6 mt-2 space-y-1">
              <li><strong>Prejudice/Assumptions:</strong> Judging the message based on who the sender is, rather than the content itself.</li>
              <li><strong>Filtering/Selective Attention:</strong> The receiver only hears or sees what they want to, ignoring parts of the message that conflict with their beliefs.</li>
              <li><strong>Emotional State:</strong> Being angry, stressed, or overly excited can prevent clear thinking and accurate decoding.</li>
            </ul>
            
            <h4 className="font-bold text-gray-800 mt-4">c. Semantic Barriers (Language)</h4>
            <ul className="simple-list list-disc ml-6 mt-2 space-y-3">
              <li>
                <strong>Jargon/Technical Language:</strong> Using complex terms only understood by a specific group (e.g., your partner or friend doing nursing comes and say, "that patient is experiencing dysphagia and odynophagia" and there looking like your landlord just told you that your rent is 3 months overdue LOL).
                <p className="mt-2 text-gray-600 italic">
                  my friend tekanya the nurse just said "the patient is having trouble swallowing and it's painful"
                </p>
              </li>
              <li><strong>Different Meanings:</strong> When a word or phrase means something different to the sender than it does to the receiver.</li>
              <li><strong>Poorly Expressed Message:</strong> Vague, confusing, or grammatically incorrect sentences.</li>
              <li><strong>Body Language Mismatch:</strong> When non-verbal signals (like a frown) contradict the verbal message (like saying "I'm fine").</li>
            </ul>

            <h4 className="font-bold text-gray-800 mt-4">d. Organizational/Cultural Barriers</h4>
            <ul className="simple-list list-disc ml-6 mt-2 space-y-1">
              <li><strong>Lack of Clear Rules:</strong> An unclear chain of command or poorly defined roles leading to confusion about who should communicate what.</li>
              <li><strong>Information Overload:</strong> Receiving too much information at once, making it impossible to process it all effectively.</li>
              <li><strong>Cultural Differences:</strong> Differences in etiquette, norms, non-verbal cues (e.g., eye contact, personal space) across cultures leading to misunderstanding.</li>
            </ul>
          </section>

          <section id="section-forms" className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">7. Forms of Communication</h2>
            <p className="mt-4">Communication can be categorized based on how the message is delivered, which involves four main forms.</p>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">7.1 Based on Channel Used</h3>
            <ul className="simple-list list-disc ml-6 mt-2 space-y-3">
              <li><strong>Verbal Communication:</strong> Uses spoken words. It is effective for immediate feedback and clarification.</li>
              <li><strong>Non-Verbal Communication:</strong> Messages sent without words, often complementing or contradicting verbal messages.</li>
              <li><strong>Written Communication:</strong> Uses written or typed words. It is permanent, formal, and allows for careful thought.</li>
              <li><strong>Visual Communication:</strong> Uses images, graphics, and symbols. It is effective for quickly conveying complex data.</li>
            </ul>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">7.2 Based on Organizational Relationship</h3>
            <ul className="simple-list list-disc ml-6 mt-2 space-y-2">
              <li><strong>Formal Communication:</strong> Follows the officially prescribed channels, hierarchy, and rules of the organization.</li>
              <li><strong>Informal Communication:</strong> The unofficial exchange of information, often known as the 'grapevine'. It is fast but can be inaccurate.</li>
            </ul>
          </section>

          <section id="section-patterns" className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">8. Patterns of Communication in Organisations</h2>
            <p className="mt-4">Organizational communication follows structured patterns (or flows) to manage information and decision-making within a hierarchy.</p>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">8.1 Directional Flows</h3>
            <ul className="simple-list list-disc ml-6 mt-2 space-y-2">
              <li><strong>Downward Communication:</strong> Flows from superiors to subordinates (e.g., managers giving instructions to employees). Its purpose is to inform, instruct, or justify decisions.</li>
              <li><strong>Upward Communication:</strong> Flows from subordinates to superiors (e.g., employees submitting reports, feedback, or suggestions to management). Its purpose is to provide feedback and report progress.</li>
              <li><strong>Horizontal (Lateral) Communication:</strong> Flows between employees at the same organizational level (e.g., colleagues in different departments coordinating on a project). Its purpose is to coordinate and solve problems.</li>
              <li><strong>Diagonal Communication:</strong> Flows between individuals who are in different departments and at different levels (e.g., a junior engineer consulting directly with a senior manager in the finance department). It speeds up action but can bypass the formal chain of command.</li>
            </ul>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">8.2 Network Structures (Small Group)</h3>
            <p>These describe how communication links are structured within small teams or groups.</p>
            <ul className="simple-list list-disc ml-6 mt-2 space-y-2">
              <li><strong>Chain Network:</strong> Communication flows sequentially in a line (A to B to C). Slow but highly accurate.</li>
              <li><strong>Wheel Network:</strong> All communication flows through one central person (the leader). Fast for problem-solving but can lead to overload for the central figure.</li>
              <li><strong>All-Channel Network:</strong> Everyone communicates with everyone else. Fastest for sharing information and best for morale, but can be chaotic for decision-making.</li>
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
