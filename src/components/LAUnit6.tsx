import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface LAUnit6Props {
  onBack: () => void;
}

export default function LAUnit6({ onBack }: LAUnit6Props) {
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
            <p className="subtitle text-[11px] md:text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">Data Visualization and Interpretation</p>
            <h1 className="text-2xl md:text-4xl font-extrabold font-serif text-gray-900 mb-4 leading-tight">
              Information from Visual Sources
            </h1>
            <p className="description text-sm md:text-lg text-gray-600 leading-relaxed">
              Mastering the technical skills required to use, present, and analyze data contained within tables, figures, and diagrams.
            </p>
          </header>

          {/* Section 1: Use and Value of Visual Sources in Communication */}
          <section id="section-value" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              1. Use and Value of Visual Sources in Communication
            </h2>

            <p className="mt-4">
              Visual sources (tables, graphs, diagrams, and figures) are essential tools in technical communication. They help the audience quickly process complex data and relationships that would be cumbersome to explain in text alone.
            </p>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">1.1 Why Use Visual Aids?</h3>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Clarity and Impact:</strong> Complex data trends are instantly recognizable in a line graph.</li>
              <li><strong>Space Saving:</strong> A table can summarize hundreds of data points in less space than paragraphs.</li>
              <li><strong>Increased Retention:</strong> Readers remember information presented visually longer.</li>
              <li><strong>Highlighting Relationships:</strong> Diagrams clearly show connections and structure.</li>
            </ul>
            
            <div className="bg-slate-100 border-2 border-dashed border-slate-300 p-10 text-center italic text-gray-500 rounded-lg my-6">
              [Image of a data flow diagram]
            </div>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">1.2 When to Choose a Visual Aid</h3>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>To show <strong>trends</strong> or changes over time (Line Graphs).</li>
              <li>To show <strong>distribution</strong> or parts of a whole (Pie Charts).</li>
              <li>To show <strong>comparisons</strong> between discrete categories (Bar Graphs).</li>
              <li>To organize <strong>detailed, precise, and numerical data</strong> (Tables).</li>
              <li>To show <strong>physical structure or process steps</strong> (Diagrams and Flowcharts).</li>
            </ul>
          </section>
          
          {/* Section 2: Description of Tables and Figures */}
          <section id="section-description" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              2. Description of Tables and Figures
            </h2>
            
            <p className="mt-4">
              A visual source should never "stand alone." It must be introduced, referenced, and explained within the body text to guide the reader's attention.
            </p>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">2.1 Referencing Rules</h3>
            <ol className="list-decimal ml-6 mt-3 space-y-3">
              <li><strong>Introduce Before Use:</strong> Always mention the table or figure in the text <em>before</em> it appears.</li>
              <li><strong>Specific Reference:</strong> Use the full title or number when referencing (e.g., "As demonstrated in <span className="font-bold text-teal-700 italic">Figure 2</span>,...").</li>
              <li><strong>Do Not Repeat Data:</strong> Do not simply list all data points. Refer the reader to the visual and discuss main implications.</li>
            </ol>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">2.2 Captioning and Labeling Conventions</h3>
            <ul className="list-disc ml-6 mt-3 space-y-3">
              <li><strong>Tables:</strong> Numbered consecutively and labeled <strong>above</strong> the table.</li>
              <li><strong>Figures:</strong> Numbered consecutively and labeled <strong>below</strong> the figure.</li>
              <li><strong>Axis/Labels:</strong> Every axis must be clearly labeled with variables and units.</li>
            </ul>

            <div className="bg-slate-50 border-l-4 border-teal-500 p-6 rounded-r-lg mt-6 shadow-sm">
              <p className="font-bold text-teal-700 mb-2 uppercase text-xs tracking-wider">Correct In-Text Reference</p>
              <p>
                The efficiency dropped significantly in the third hour, as indicated by the steep decline shown in Figure 2.
              </p>
            </div>
          </section>
          
          {/* Section 3: Presentation of Information in Tables and Figures */}
          <section id="section-presentation" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              3. Presentation of Information in Tables and Figures
            </h2>
            <p className="mt-4">
              Good presentation minimizes effort for the reader and maximizes understanding.
            </p>
            
            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">3.1 Table Presentation</h3>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Clear Headings:</strong> Column and row headings must be concise.</li>
              <li><strong>Units:</strong> Placed in column headings, not repeated in every cell.</li>
              <li><strong>Alignment:</strong> Numbers by decimal or right-justify; text left-align.</li>
              <li><strong>Consistency:</strong> Maintain consistent precision (e.g., decimal places).</li>
            </ul>
            
            <div className="example-table-container mt-6 overflow-x-auto bg-white border border-teal-100 rounded-lg p-6 shadow-sm">
              <p className="font-bold text-teal-700 mb-4 uppercase text-xs tracking-wider bg-teal-50 inline-block px-2 py-1 rounded">Example: Well-Formed Technical Table</p>
              <table className="w-full border-collapse text-sm">
                <caption className="text-left font-bold text-gray-900 mb-2 font-serif">Table 1: Monthly Power Consumption (kWh)</caption>
                <thead className="bg-teal-100">
                  <tr>
                    <th className="border border-slate-300 p-3 text-left text-teal-800 font-bold">Month</th>
                    <th className="border border-slate-300 p-3 text-right text-teal-800 font-bold">Baseline (kWh)</th>
                    <th className="border border-slate-300 p-3 text-right text-teal-800 font-bold">Current Use (kWh)</th>
                    <th className="border border-slate-300 p-3 text-right text-teal-800 font-bold">Difference (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 text-left">Jan</td>
                    <td className="border border-slate-300 p-3 text-right">1,500.5</td>
                    <td className="border border-slate-300 p-3 text-right">1,450.0</td>
                    <td className="border border-slate-300 p-3 text-right text-teal-600 font-bold">-3.4%</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 text-left">Feb</td>
                    <td className="border border-slate-300 p-3 text-right">1,480.0</td>
                    <td className="border border-slate-300 p-3 text-right">1,550.8</td>
                    <td className="border border-slate-300 p-3 text-right text-red-600 font-bold">+4.8%</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 text-left">Mar</td>
                    <td className="border border-slate-300 p-3 text-right">1,510.3</td>
                    <td className="border border-slate-300 p-3 text-right">1,505.0</td>
                    <td className="border border-slate-300 p-3 text-right text-teal-600 font-bold">-0.4%</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-xs text-gray-500 italic">Note: The baseline is derived from the previous year's average monthly usage.</p>
            </div>

            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-8 mb-3">3.2 Figure Presentation (Graphs and Charts)</h3>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Visual Simplicity:</strong> Avoid excessive colors or 3D effects.</li>
              <li><strong>Axis Scales:</strong> Start at zero unless a break is clearly indicated.</li>
              <li><strong>Legend:</strong> Provide a clear legend for multiple colors/labels.</li>
              <li><strong>Data Labels:</strong> Use sparingly; only if exact values are critical.</li>
            </ul>
          </section>
          
          {/* Section 4: Interpretation of Tables and Figures */}
          <section id="section-interpretation" className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
              4. Interpretation of Tables and Figures
            </h2>
            <p className="mt-4">
              Interpretation involves moving beyond merely stating the data and analyzing what the data <em>means</em> in context.
            </p>
            
            <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-800 mt-6 mb-3">4.1 Analytical Steps</h3>
            <ol className="list-decimal ml-6 mt-3 space-y-3">
              <li><strong>State the Focus:</strong> Tell the reader what the visual is about.</li>
              <li><strong>Identify the Main Trend/Pattern:</strong> What is the takeaway?</li>
              <li><strong>Highlight Extremes:</strong> Point out highest and lowest values.</li>
              <li><strong>Note Anomalies:</strong> Mention unexpected data points.</li>
              <li><strong>Draw Conclusions:</strong> Explain the significance of the findings.</li>
            </ol>
            
            <div className="bg-slate-50 border-l-4 border-teal-500 p-6 rounded-r-lg mt-6 shadow-sm">
              <p className="font-bold text-teal-700 mb-4 uppercase text-xs tracking-wider">Example: Interpreting Table 1</p>
              <ol className="list-decimal ml-6 space-y-4">
                <li><strong>State the Focus:</strong> Analysis centers on variance between current consumption and historical baseline.</li>
                <li><strong>Identify Pattern:</strong> Overall consumption remained stable around 1,500 kWh.</li>
                <li><strong>Highlight Extremes:</strong> Maximum deviation in Feb (+4.8%); Jan largest reduction (-3.4%).</li>
                <li><strong>Note Anomalies:</strong> Feb spike requires further investigation into logs.</li>
                <li><strong>Draw Conclusions:</strong> February spike indicates protocol inconsistency under cold weather operations.</li>
              </ol>
            </div>
            
            <div className="bg-amber-50 border border-amber-300 text-amber-900 p-4 rounded-lg font-semibold mt-8 shadow-sm">
              The interpretation section is where you connect the isolated data points back to your larger technical argument.
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
