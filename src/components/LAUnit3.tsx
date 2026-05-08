import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface LAUnit3Props {
  onBack: () => void;
}

export default function LAUnit3({ onBack }: LAUnit3Props) {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-700 font-sans pb-20 text-sm md:text-base leading-relaxed">
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

      <div className="max-w-[900px] mx-auto mt-6 md:mt-12 px-4">
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-6 md:p-10">
          {/* Header Section */}
          <header className="mb-8 pb-4 border-b border-slate-300">
            <p className="text-[11px] md:text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">Guide to Writing Notes</p>
            <h1 className="text-2xl md:text-4xl font-extrabold font-serif text-gray-900 mb-4 leading-tight">
              Note Making, Note Taking, and Active Skills
            </h1>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              Mastering the art of capturing and processing information efficiently is essential for academic and professional success.
            </p>
          </header>

          {/* Section 1: Note Taking vs. Note Making */}
          <section id="section-notemaking" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              1. Note Taking vs. Note Making (Theory)
            </h2>
            <p className="mt-4">
              While often used interchangeably, these two processes serve distinct purposes in learning and retention.
            </p>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">1.1 Note Taking (Passive)</h3>
            <p>
              This is the <span className="text-teal-700 font-semibold">immediate recording</span> of information as it is delivered (e.g., during a lecture or while reading a book for the first time).
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Goal:</strong> To capture the main ideas and details quickly.</li>
              <li><strong>Action:</strong> Transcribing, abbreviating, or summarizing external content.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">1.2 Note Making (Active)</h3>
            <p>
              This is the <span className="text-teal-700 font-semibold">processing and restructuring</span> of information after it has been taken down. It involves linking new ideas to existing knowledge.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Goal:</strong> To achieve deeper understanding and memory retention.</li>
              <li><strong>Action:</strong> Adding personal comments, cross-references, interpretations, or creating summaries.</li>
            </ul>
          </section>

          {/* Section 2: Note Format Methods */}
          <section id="section-format" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              2. Note Format Methods (Theory)
            </h2>
            <p>
              Choosing the right format can optimize your notes for review and study.
            </p>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">2.1 The Cornell Method</h3>
            <p>
              This is a highly structured format that divides the page into four distinct sections.
            </p>
            <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg p-10 text-center italic text-gray-500 my-4">
              [Image of Cornell Note Taking Method]
            </div>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Cue Column (Left):</strong> Used for keywords, questions, prompts, and memory cues.</li>
              <li><strong>Note-Taking Area (Main Right):</strong> Used for taking notes during the lecture or reading (facts, definitions, dates).</li>
              <li><strong>Summary Area (Bottom):</strong> Used after the fact to summarize the entire page in a few sentences.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">2.2 Outlining Method</h3>
            <p>
              This method uses headings and subheadings (Roman numerals, capital letters, Arabic numerals) to show the hierarchical structure of the information.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>When to Use:</strong> When the lecture or text is well-organized and follows a logical sequence.</li>
              <li><strong>Benefit:</strong> Clearly shows the relationship between main points and supporting details.</li>
            </ul>
            
            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">2.3 Mapping/Mind Map Method</h3>
            <p>
              A visual method that organizes information spatially. The main topic is centered, and related ideas branch outward, allowing you to see connections quickly.
            </p>
            <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg p-10 text-center italic text-gray-500 my-4">
              [Image of Mind Map Note Taking]
            </div>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>When to Use:</strong> For brainstorming, relating concepts, or when the content is non-linear.</li>
              <li><strong>Benefit:</strong> Excellent for visual learners and for quick review of large topics.</li>
            </ul>
          </section>

          {/* Section 3: Practical Examples */}
          <section id="section-examples" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              3. Note Making and Taking: Practical Examples
            </h2>
            <p>
              These examples demonstrate how a short lecture can be captured and organized using the primary note formats.
            </p>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">3.1 Scenario: Sample Lecture Content</h3>
            <h4 className="font-bold text-gray-800 mb-2">Topic: Psychological Barriers to Communication</h4>
            <div className="bg-slate-50 border-l-4 border-teal-500 p-6 italic text-gray-800 leading-relaxed mb-6">
              "Today we'll focus on <strong>Psychological Barriers</strong>. These are internal states, like stress or distraction, that prevent effective listening. Two common types are <strong>Lack of Attention</strong> and <strong>Premature Evaluation</strong>. Lack of Attention occurs when the receiver's mind wanders, perhaps due to personal stress or simply being bored with the subject. Premature Evaluation is when the receiver judges the speaker or the message before it's fully delivered. For instance, if you dislike the speaker's accent, you might stop listening to the content entirely. Finally, <strong>Emotional Disconnect</strong> is critical. If the sender is speaking calmly but the receiver is highly angry or emotional, the message will be distorted through the filter of that intense feeling. Remember, these barriers are all about the internal state of the mind."
            </div>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-8 mb-3">3.2 The Cornell Method in Practice</h3>
            <p className="mb-4">
              This format captures the lecture content (Note Taking) and provides a space for synthesis (Note Making - the Summary).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300 text-sm md:text-base">
                <thead>
                  <tr className="bg-teal-500 text-white font-bold uppercase text-[11px] md:text-sm">
                    <th className="border border-slate-300 p-3 text-left w-1/3">Cue Column (Keywords & Questions)</th>
                    <th className="border border-slate-300 p-3 text-left w-2/3">Note-Taking Area (Lecture Content)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-4 bg-teal-50 align-top">
                      <div className="space-y-4">
                        <p><strong>Psychological Barriers (PB)?</strong></p>
                        <p>2 Main Types of PB?</p>
                        <p>Define Premature Evaluation (PE).</p>
                        <p>Emotional Disconnect?</p>
                        <p><strong>Key Takeaway?</strong></p>
                        <p className="italic text-gray-600">Self-Check question for study: How can a sender overcome receiver's emotional disconnect?</p>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-4 align-top">
                      <ul className="list-disc ml-6 space-y-3">
                        <li>PB are <strong>internal states</strong> (stress, distraction) that interfere w/ effective listening.</li>
                        <li>Two key types: <strong>1) Lack of Attention</strong> & <strong>2) Premature Evaluation.</strong></li>
                        <li>Lack of Attention caused by mind wandering (boredom, personal stress). Stops <em>intake</em> of message.</li>
                        <li>PE is <strong>judging speaker/message</strong> <em>before</em> they finish. E.g., disliking an accent and tuning out content.</li>
                        <li><strong>Emotional Disconnect:</strong> Message distorted because receiver's intense feeling (anger, etc.) acts as a filter.</li>
                        <li>PBs are focused entirely on the <strong>internal state of the receiver's mind</strong>.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 bg-teal-100 border-t-4 border-teal-600 p-6 rounded-b-lg">
              <h4 className="font-bold text-gray-900 mb-2 font-serif text-lg md:text-xl">SUMMARY (Note Making - Done AFTER the lecture/reading)</h4>
              <p className="text-gray-800">
                Psychological Barriers are internal mental states (stress, boredom, strong emotion) that prevent a receiver from accurately processing a message. The three main PBs discussed are Lack of Attention, Premature Evaluation, and Emotional Disconnect, all highlighting that the receiver's mental state is key to effective communication.
              </p>
            </div>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-10 mb-3">3.3 The Outlining Method in Practice</h3>
            <h4 className="font-bold text-gray-800 mb-4">Topic: Psychological Barriers to Communication</h4>
            <div className="ml-4 space-y-6">
              <div>
                <p className="font-bold">I. Definition of Psychological Barriers (PB)</p>
                <ul className="ml-8 mt-2 space-y-1">
                  <li>• A. Internal states (stress, distraction)</li>
                  <li>• B. Primary effect is preventing effective listening.</li>
                  <li>• C. Focus on the receiver's internal state.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold">II. Two Common Types of PB</p>
                <ul className="ml-8 mt-2 space-y-4">
                  <li>
                    <div>
                      • A. <strong>Lack of Attention</strong>
                      <ul className="ml-10 mt-1 list-decimal space-y-1 text-gray-600">
                        <li>Cause: Receiver's mind wanders (stress, boredom).</li>
                        <li>Result: Message intake stops.</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div>
                      • B. <strong>Premature Evaluation</strong>
                      <ul className="ml-10 mt-1 list-decimal space-y-1 text-gray-600">
                        <li>Definition: Judging the message or speaker before completion.</li>
                        <li>Example: Disliking a speaker's voice and ignoring their facts.</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold">III. Emotional Disconnect (Critical Barrier)</p>
                <ul className="ml-8 mt-2 space-y-1">
                  <li>• A. Occurs when receiver's intense emotion (e.g., anger) filters or distorts the message.</li>
                  <li>• B. Message received is not the same as the message sent.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-10 mb-3">3.4 The Mapping/Mind Map Method in Practice</h3>
            <p className="mb-4">
              This method emphasizes relationships and is often used visually during the Note Making stage to connect ideas.
            </p>
            <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg p-10 text-center italic text-gray-500 my-4">
              [Image of Mind Map for Communication Barriers]
            </div>
            <ol className="list-decimal ml-6 mt-4 space-y-4">
              <li><strong>Start in the Center:</strong> Write the central idea: <strong>Psychological Barriers</strong></li>
              <li><strong>Draw Main Branches (Categories):</strong> Draw four main branches radiating from the center: <strong>Definition</strong>, <strong>Lack of Attention</strong>, <strong>Premature Evaluation</strong>, and <strong>Emotional Disconnect</strong>.</li>
              <li>
                <strong>Add Sub-Branches (Details):</strong>
                <ul className="list-disc ml-8 mt-2 space-y-3">
                  <li><strong>Definition branch:</strong> Sub-branches for "Internal States," "Stress," and "Prevents Listening."</li>
                  <li><strong>Lack of Attention branch:</strong> Sub-branches for "Mind Wandering," "Boredom," and "Personal Stress."</li>
                  <li><strong>Premature Evaluation branch:</strong> Sub-branches for "Judging Speaker," "Judging Message," and "Stops Content Intake."</li>
                  <li><strong>Emotional Disconnect branch:</strong> Sub-branches for "Intense Feeling (Anger)," and "Distorted Message."</li>
                </ul>
              </li>
              <li><strong>Use Color & Images:</strong> (Note Making step) Use different colored pens for each main branch and draw small icons (e.g., a frowning face for 'Premature Evaluation') to help memory recall.</li>
            </ol>
          </section>

          {/* Section 4: Guides to Writing Notes */}
          <section id="section-writing" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              4. Guides to Writing Notes (Structural Cues)
            </h2>
            <p>
              Effective notes are built around the structure of the source material. Recognizing key structural elements improves comprehension and makes review easier.
            </p>
            
            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">4.1 Thesis Statements</h3>
            <p>
              In academic writing, the <span className="text-teal-700 font-semibold">thesis statement</span> is the core argument or purpose of the entire essay or report.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Function:</strong> It controls the subject matter of the entire document.</li>
              <li><strong>Note-taking Tip:</strong> Identify and write down the thesis statement (usually in the introduction) as it tells you what the entire text will attempt to prove or explain.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">4.2 Topic Sentences</h3>
            <p>
              The <span className="text-teal-700 font-semibold">topic sentence</span> is the main idea of a single paragraph.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Function:</strong> It summarizes the content of its paragraph and relates back to the thesis statement.</li>
              <li><strong>Note-taking Tip:</strong> Most of your notes should be focused on the topic sentence and the three or four supporting points that follow it in the paragraph.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">4.3 Transitional Markers</h3>
            <p>
              <span className="text-teal-700 font-semibold">Transitional markers</span> (or linkers) are words or phrases that show the relationship between ideas, paragraphs, or sections.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Examples:</strong> <em>However, In addition, For example, Consequently, Similarly, Finally.</em></li>
              <li><strong>Function in Notes:</strong> They act as signposts. When you see a marker like "However," you know a contrast or counter-argument is coming. This helps you predict the flow of the information and structure your notes logically.</li>
            </ul>
          </section>

          {/* Section 5: Active Listening Skills */}
          <section id="section-listening" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              5. Active Listening Skills
            </h2>
            <p>
              Active listening is a communication skill where the listener fully concentrates, understands, responds, and remembers what is being said, both verbally and non-verbally.
            </p>
            
            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">5.1 Techniques for Active Listening</h3>
            <ol className="list-decimal ml-6 mt-3 space-y-4">
              <li><strong>Pay Attention:</strong> Look at the speaker, put aside distracting thoughts, and avoid mentally preparing your reply.</li>
              <li><strong>Show that You're Listening:</strong> Use non-verbal cues like nodding, making eye contact, and having an open posture.</li>
              <li><strong>Provide Feedback (Verbal):</strong> Use short verbal affirmations like "I see," "Yes," or "Mh-mm." Paraphrase the speaker's main points back to them to confirm understanding: "So, what you are saying is..."</li>
              <li><strong>Defer Judgment:</strong> Allow the speaker to finish their point without interruption or premature dismissal of the idea.</li>
              <li><strong>Respond Appropriately:</strong> This involves answering questions clearly, offering suggestions, and remembering key information for future discussion.</li>
            </ol>
          </section>
          
          {/* Section 6: Active Reading Skills */}
          <section id="section-reading" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              6. Active Reading Skills
            </h2>
            <p>
              Active reading is more than just passing your eyes over the text; it involves interacting with the material to improve comprehension and retention.
            </p>
            
            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">6.1 The SQ3R Method</h3>
            <p>
              SQ3R is a popular, five-step method for active reading and studying:
            </p>
            <ol className="list-decimal ml-6 mt-3 space-y-4">
              <li><strong>Survey (S):</strong> Skim the chapter, look at the headings, subheadings, captions, introduction, and summary to get an overview.</li>
              <li><strong>Question (Q):</strong> Turn the headings and subheadings into questions you hope to answer as you read.</li>
              <li><strong>Read (R1):</strong> Read the text actively, seeking the answers to your questions. Do not stop to take detailed notes yet.</li>
              <li><strong>Recite (R2):</strong> After reading a section, look away from the text and recite (out loud or mentally) the main ideas and answers to your questions in your own words.</li>
              <li><strong>Review (R3):</strong> Review your notes and the text immediately after finishing and again periodically to solidify the information in your long-term memory.</li>
            </ol>
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
