import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface LAUnit5Props {
  onBack: () => void;
}

export default function LAUnit5({ onBack }: LAUnit5Props) {
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
            <p className="subtitle text-[11px] md:text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">Unit 4 & 5 Combined</p>
            <h1 className="text-2xl md:text-4xl font-extrabold font-serif text-gray-900 mb-4 leading-tight">
              Technical Writing: Definitions & Descriptions
            </h1>
            <p className="description text-sm md:text-lg text-gray-600 leading-relaxed">
              A consolidated guide to the foundational skills of technical communication: defining terms precisely and describing mechanisms and processes objectively.
            </p>
          </header>
          
          {/* Table of Contents */}
          <nav className="mb-8 bg-teal-50 border border-teal-100 rounded-lg p-6 text-sm">
            <p className="font-bold text-teal-700 mb-4 text-base border-b border-teal-200 pb-2">Table of Contents</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-gray-900 mb-2">UNIT 4: Definitions</p>
                <ul className="space-y-1.5 ml-4 border-l-2 border-teal-200 pl-4">
                  <li><a href="#u4-definitions" className="hover:text-teal-600">1. Definitions (The Core Purpose)</a></li>
                  <li><a href="#u4-when-what" className="hover:text-teal-600">2. When and What to Define</a></li>
                  <li><a href="#u4-how" className="hover:text-teal-600">3. How to Define (The Logical Pattern)</a></li>
                  <li><a href="#u4-forms" className="hover:text-teal-600">4. Forms of Definitions</a></li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">UNIT 5: Descriptions</p>
                <ul className="space-y-1.5 ml-4 border-l-2 border-teal-200 pl-4">
                  <li><a href="#u5-observation" className="hover:text-teal-600">5. Accurate Writing Based on Observation</a></li>
                  <li><a href="#u5-detailed" className="hover:text-teal-600">6. What Constitutes a Detailed Description?</a></li>
                  <li><a href="#u5-organization" className="hover:text-teal-600">7. Organizing and Presenting a Technical Description</a></li>
                </ul>
              </div>
            </div>
          </nav>

          {/* UNIT 4: DEFINITIONS */}
          <section id="u4-unit-title" className="mb-12">
            <h2 className="text-xl md:text-3xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-8">
              UNIT 4: Technical Writing (Definitions)
            </h2>

            <div id="u4-definitions" className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 font-serif">1. Definitions (The Core Purpose)</h3>
              <p className="mb-4">
                In technical communication, a definition is more than just a dictionary entry; it is a precise statement that specifies the meaning, limits, and function of a term for a specific audience.
              </p>
              <h4 className="font-bold text-gray-800 mb-2">1.1 Why Define Terms?</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Clarity:</strong> Eliminates confusion about specialized concepts.</li>
                <li><strong>Accuracy:</strong> Establishes a common, precise meaning.</li>
                <li><strong>Consistency:</strong> Ensures the term is used in the same way.</li>
                <li><strong>Reader Accessibility:</strong> Allows non-experts to follow complex instructions.</li>
              </ul>
            </div>

            <div id="u4-when-what" className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 font-serif">2. When and What to Define</h3>
              <div className="bg-amber-50 border border-amber-300 text-amber-900 p-4 rounded-lg font-semibold mb-6">
                The golden rule: Define terms based on your audience and the context of your document.
              </div>
              <h4 className="font-bold text-gray-800 mb-2">2.1 When to Define</h4>
              <ul className="list-disc ml-6 space-y-2 mb-6">
                <li><strong>First Appearance:</strong> Define the first time it is used.</li>
                <li><strong>Ambiguity:</strong> If a term has multiple meanings.</li>
                <li><strong>New Terms:</strong> Acronyms, novel concepts, or jargon.</li>
              </ul>
              <h4 className="font-bold text-gray-800 mb-2">2.2 What to Define</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Jargon:</strong> Specialized language like <span className="text-teal-700 font-semibold italic">Polymorphism</span>.</li>
                <li><strong>Acronyms:</strong> E.g., <span className="text-teal-700 font-semibold italic">CPU (Central Processing Unit)</span>.</li>
              </ul>
            </div>

            <div id="u4-how" className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 font-serif">3. How to Define (The Logical Pattern)</h3>
              <div className="bg-slate-100 border-2 border-dashed border-slate-300 p-10 text-center italic text-gray-500 rounded-lg mb-6">
                [Image: Term + Class + Characteristics]
              </div>
              <ol className="list-decimal ml-6 space-y-3">
                <li><strong>Term:</strong> The word being defined.</li>
                <li><strong>Class:</strong> The broad category the term belongs to.</li>
                <li><strong>Characteristics:</strong> Specific features that make it unique.</li>
              </ol>
              <div className="bg-slate-50 border-l-4 border-teal-500 p-6 rounded-r-lg mt-6 shadow-sm">
                <p className="font-bold text-teal-700 mb-2 uppercase text-xs tracking-wider">Example: Inductance</p>
                <p><strong>Term:</strong> Inductance</p>
                <p><strong>Class:</strong> is a property of an electrical conductor</p>
                <p><strong>Distinguishing Characteristics:</strong> that opposes a change in current flow.</p>
                <p className="mt-2 text-gray-900 font-medium">Result: Inductance is a property of an electrical conductor that opposes a change in current flow.</p>
              </div>
            </div>

            <div id="u4-forms" className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 font-serif">4. Forms of Definitions</h3>
              <div className="space-y-6">
                <div className="bg-slate-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                  <p className="font-bold text-teal-700 mb-1">Parenthetical (Briefest):</p>
                  <p>The engineer used a <span className="italic font-medium text-gray-900">potentiometer</span> (variable resistor) to tune the circuit.</p>
                </div>
                <div className="bg-slate-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                  <p className="font-bold text-teal-700 mb-1">Sentence (Standard):</p>
                  <p>A <span className="italic font-medium text-gray-900">firewall</span> is a network security system (Class) that monitors traffic (Characteristics).</p>
                </div>
                <div className="bg-slate-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                  <p className="font-bold text-teal-700 mb-2">Extended (Detailed):</p>
                  <p className="mb-2">Explands using: Analysis, Comparison, Negation, or Etymology.</p>
                  <p className="italic">"Bandwidth is a measure of data transfer rate... often confused with speed... unlike speed which is latency, bandwidth is volume..."</p>
                </div>
              </div>
            </div>
          </section>

          {/* UNIT 5: DESCRIPTIONS */}
          <section id="u5-unit-title" className="mb-8">
            <h2 className="text-xl md:text-3xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-8">
              UNIT 5: Technical Writing (Descriptions)
            </h2>

            <div id="u5-observation" className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 font-serif">5. Accurate Writing Based on Observation</h3>
              <p className="mb-4">Technical descriptions rely on objective, verifiable facts gathered through careful observation.</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Fact, not Opinion:</strong> Describe what is, not what you feel.</li>
                <li><strong>Measurable Data:</strong> Specific dimensions, weights, tolerances.</li>
                <li><strong>Eliminate Bias:</strong> Avoid emotionally loaded or judgmental words.</li>
              </ul>
              <div className="bg-slate-50 border-l-4 border-teal-500 p-6 rounded-r-lg mt-6 shadow-sm flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="font-bold text-red-600 mb-1 text-xs uppercase">Subjective (Bad)</p>
                  <p className="italic">"The sensor has a neat little housing and feels rugged."</p>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-emerald-600 mb-1 text-xs uppercase">Objective (Good)</p>
                  <p className="italic">"The sensor is encased in injection-molded ABS plastic, measuring 3.0 × 1.5 × 0.5 cm."</p>
                </div>
              </div>
            </div>

            <div id="u5-detailed" className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 font-serif">6. What Constitutes a Detailed Description?</h3>
              <p className="mb-4">It must provide information for the audience to visualize, understand, or replicate the mechanism.</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Nomenclature:</strong> Precise, standard names for parts.</li>
                <li><strong>Physical Properties:</strong> Material, color, weight, shape.</li>
                <li><strong>Spatial Relationship:</strong> Where parts are located relative to each other.</li>
                <li><strong>Function:</strong> What job each part performs.</li>
              </ul>
            </div>

            <div id="u5-organization" className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 font-serif">7. Organizing and Presenting a Technical Description</h3>
              <p className="mb-6">
                A well-organized description ensures the reader can mentally assemble the parts or follow the steps logically.
              </p>
              
              <h4 className="font-bold text-gray-900 mb-4 text-base">7.1 Standard Organizational Structure</h4>
              
              <div className="space-y-6">
                <div className="bg-slate-50 border-l-4 border-teal-500 p-6 rounded-r-lg shadow-sm">
                  <h5 className="font-bold text-gray-900 mb-2 font-serif">a. Introduction</h5>
                  <p className="mb-3">
                    States the definition, overall purpose, and function of the mechanism or process being described. It also lists the main parts.
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Definition:</strong> (Using Unit 4's sentence definition format) What is it?</li>
                    <li><strong>Function:</strong> What does it accomplish?</li>
                    <li><strong>Partition:</strong> A preview list of the main components or stages that will be described.</li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 border-l-4 border-teal-500 p-6 rounded-r-lg shadow-sm">
                  <h5 className="font-bold text-gray-900 mb-2 font-serif">b. Body (Detailed Description)</h5>
                  <p className="mb-3">
                    This section describes the components, parts, or stages in a systematic order. The most effective ways to order the body are:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Spatial Order:</strong> Describing parts from top to bottom, left to right, outside to inside, or front to back. (Best for mechanisms/objects)</li>
                    <li><strong>Functional Order:</strong> Describing parts in the sequence they operate. (Best for systems or processes)</li>
                    <li><strong>Chronological Order:</strong> Describing steps in the order they occur. (Best for processes)</li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 border-l-4 border-teal-500 p-6 rounded-r-lg shadow-sm">
                  <h5 className="font-bold text-gray-900 mb-2 font-serif">c. Conclusion</h5>
                  <p>
                    Summarizes the main function and perhaps the significance or application of the mechanism/process.
                  </p>
                </div>
              </div>
              
              <h4 className="font-bold text-gray-900 mt-10 mb-4 text-base">7.2 Use of Diagrams and Visual Aids</h4>
              <p className="mb-4">
                Diagrams are essential in technical descriptions as they provide visual context that text alone cannot match.
              </p>
              <div className="bg-slate-100 border-2 border-dashed border-slate-300 p-10 text-center italic text-gray-500 rounded-lg mb-6">
                [Image of a schematic diagram for a simple circuit]
              </div>
              <ul className="list-disc ml-6 space-y-3">
                <li><strong>Clarity and Labeling:</strong> Every diagram must have clear, accurate labels corresponding to the names used in the text.</li>
                <li><strong>Placement:</strong> Place diagrams as close as possible to the text that references them.</li>
                <li><strong>Referencing:</strong> Always reference the figure in the text (e.g., "As shown in Figure 3.1, the output signal is routed through the operational amplifier...").</li>
                <li><strong>Types:</strong> Use diagrams like exploded views (for assembly), flowcharts (for processes), or schematics (for electrical systems).</li>
              </ul>
              <div className="bg-slate-100 border-2 border-dashed border-slate-300 p-10 text-center italic text-gray-500 rounded-lg mt-6">
                [Image of an exploded view diagram]
              </div>
            </div>
          </section>

          <footer className="mt-12 text-center border-t pt-10">
            <button 
              onClick={onBack}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg shadow-emerald-900/20 transition-all hover:scale-105 active:scale-95"
            >
              Finish Module
            </button>
          </footer>

        </div>
      </div>
    </div>
  );
}
