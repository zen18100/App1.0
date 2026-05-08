import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface LAUnit4Props {
  onBack: () => void;
}

export default function LAUnit4({ onBack }: LAUnit4Props) {
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
          
          {/* Title and Header */}
          <header className="mb-8 pb-4 border-b border-slate-300">
            <p className="subtitle text-[11px] md:text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">Effective Communication</p>
            <h1 className="text-2xl md:text-4xl font-extrabold font-serif text-gray-900 mb-4 leading-tight">
              Essential Writing Skills
            </h1>
            <p className="description text-sm md:text-lg text-gray-600 leading-relaxed">
              A guide to structuring clear, persuasive, and well-supported academic and professional documents.
            </p>
          </header>

          {/* Section 1: The Paragraph and Paragraph Organisation */}
          <section id="section-paragraph" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              1. The Paragraph and Paragraph Organisation
            </h2>

            <p className="mt-4">
              A well-organized paragraph is the foundation of effective writing. It focuses on a single main idea, which is supported by evidence and explanation.
            </p>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">1.1 The Essential Components</h3>
            <ol className="list-decimal ml-6 mt-3 space-y-3">
              <li>
                <strong>Topic Sentence (TS):</strong> The very first sentence. It states the main idea or argument of the paragraph clearly and concisely. Everything else in the paragraph supports this single idea.
              </li>
              <li>
                <strong>Supporting Details (SD):</strong> The middle sentences that provide evidence, examples, facts, statistics, or explanations to back up the Topic Sentence.
              </li>
              <li>
                <strong>Concluding/Transition Sentence (CS):</strong> The final sentence. It either summarizes the paragraph's main point or acts as a bridge, smoothly guiding the reader to the topic of the next paragraph.
              </li>
            </ol>
            
            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-8 mb-3">1.2 Example of a Well-Organized Paragraph</h3>
            <div className="bg-slate-50 border-l-4 border-teal-500 p-6 rounded-r-lg leading-relaxed shadow-sm">
              <p className="mb-3"><span className="font-bold text-teal-700">Topic Sentence:</span> Effective time management is crucial for student success in technical fields.</p>
              <p className="mb-3"><span className="font-bold text-teal-700">Supporting Detail 1 (Example):</span> For example, students who utilize daily planners are often able to allocate sufficient hours to complex tasks like coding assignments, preventing last-minute rushes.</p>
              <p className="mb-3"><span className="font-bold text-teal-700">Supporting Detail 2 (Explanation):</span> This structured approach reduces psychological stress, allowing the mind to focus entirely on learning the material rather than worrying about deadlines.</p>
              <p className="mb-0"><span className="font-bold text-teal-700">Concluding Sentence:</span> Therefore, implementing clear time organization strategies directly leads to better academic performance and retention of technical knowledge.</p>
            </div>
          </section>
          
          {/* Section 2: Collecting and Organising Information */}
          <section id="section-info-organise" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              2. Collecting and Organising Information
            </h2>
            <p className="mt-4">
              Before writing, information must be gathered and arranged logically. This pre-writing stage saves time and ensures a cohesive argument.
            </p>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">2.1 Collecting Information</h3>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Identify Sources:</strong> Determine if you need primary sources (original research) or secondary sources (analysis of primary sources).</li>
              <li><strong>Active Reading/Note-Taking:</strong> Use skills like SQ3R and the Cornell Method (Unit 2) to capture quotes, facts, and key concepts accurately.</li>
              <li><strong>Maintain a Research Log:</strong> Keep track of every source used (author, title, page number, URL) from the start.</li>
            </ul>
            
            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">2.2 Organizing Information (Structuring the Draft)</h3>
            <p>
              The best organization follows a clear logical pattern that suits the topic.
            </p>
            <ol className="list-decimal ml-6 mt-3 space-y-3">
              <li><strong>Outline (The Skeleton):</strong> Create a detailed outline that translates your research into Topic Sentences and supporting evidence.</li>
              <li><strong>Logical Order:</strong> Arrange your body paragraphs using appropriate patterns:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Chronological:</strong> Best for historical events or step-by-step processes.</li>
                  <li><strong>Order of Importance:</strong> Starting with the least important point and building up.</li>
                  <li><strong>Compare and Contrast:</strong> Grouping similarities first, then differences.</li>
                  <li><strong>Cause and Effect:</strong> Showing how one set of events leads to another.</li>
                </ul>
              </li>
            </ol>
          </section>
          
          {/* Section 3: Introducing a Topic and Concluding a Topic */}
          <section id="section-intro-conclusion" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              3. Introducing a Topic and Concluding a Topic
            </h2>
            <p className="mt-4">
              The introduction and conclusion act as the 'bookends' of your essay, framing the argument for the reader.
            </p>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">3.1 The Introduction (Hook, Bridge, Thesis)</h3>
            <p>
              The introduction moves from general context to a specific argument.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Hook:</strong> The opening statement designed to grab the reader's attention.</li>
              <li><strong>Bridge:</strong> Sentences that provide necessary background information and narrow the focus.</li>
              <li><strong>Thesis Statement:</strong> The final sentence of the introduction that clearly states the paper's main argument and scope.</li>
            </ul>

            <div className="bg-slate-50 border-l-4 border-teal-500 p-6 rounded-r-lg mt-4 shadow-sm italic text-gray-800">
              <p className="font-bold mb-2 not-italic text-teal-700">Example Introduction:</p>
              <p>
                (Hook) In the past decade, the rapid advancement of Artificial Intelligence has transformed nearly every industry... (Bridge) While AI offers undeniable efficiency gains... (Thesis Statement) <strong>Therefore, this paper will argue that while AI is an essential tool for economic growth, its integration must be strictly regulated to protect worker rights and ensure public transparency.</strong>
              </p>
            </div>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-8 mb-3">3.2 The Conclusion (Restate, Summarize, Final Thought)</h3>
            <p>
              The conclusion reverses the funnel of the introduction.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Restate Thesis:</strong> Rephrase the original thesis statement using new words.</li>
              <li><strong>Summarize Main Points:</strong> Briefly review the Topic Sentences of the body paragraphs.</li>
              <li><strong>Concluding Statement (Implication/Call to Action):</strong> A final, powerful thought.</li>
            </ul>
          </section>

          {/* Section 4: Documenting Sources */}
          <section id="section-sources" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              4. Documenting Sources (Citations and References)
            </h2>
            <p className="mt-4">
              Documenting sources gives credit to original authors and allows your readers to verify information. Failure to do so is plagiarism.
            </p>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">4.1 Key Terms</h3>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>In-text Citation:</strong> A brief reference within the body of the paper.</li>
              <li><strong>Reference List/Bibliography:</strong> A complete, alphabetized list at the end of the paper.</li>
              <li><strong>Citation Style:</strong> The specific format used (e.g., APA, MLA, Chicago).</li>
            </ul>
            
            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-8 mb-3">4.2 Example: APA Style (Common in Technical Fields)</h3>
            <p>
              APA style is often used in social sciences, nursing, and technical reports.
            </p>
            
            <h4 className="font-bold text-gray-800 mt-4 mb-2">In-text Citation Examples:</h4>
            <div className="bg-slate-50 border-l-4 border-teal-500 p-4 rounded-r-lg space-y-2">
              <p><span className="font-bold text-teal-700">Direct Quote:</span> "The critical factor in signal integrity is electromagnetic noise" (Chen, 2022, p. 45).</p>
              <p><span className="font-bold text-teal-700">Paraphrase:</span> Electromagnetic noise is the primary influence on signal quality (Chen, 2022).</p>
            </div>
            
            <h4 className="font-bold text-gray-800 mt-4 mb-2">Reference List Entry Example (for a Book):</h4>
            <div className="bg-slate-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
              <p><span className="font-bold text-teal-700">Reference:</span> Chen, L. (2022). <i>Essentials of Modern Circuitry</i>. Wiley Press.</p>
            </div>
            <p className="mt-4 text-sm font-semibold">
              Always check your assignment instructions to confirm the required citation style (APA, MLA, etc.).
            </p>
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
