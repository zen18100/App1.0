import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface PHUnit1Props {
  onBack: () => void;
}

export default function PHUnit1({ onBack }: PHUnit1Props) {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-700 font-sans pb-20 text-sm md:text-base leading-relaxed">
      {/* Navigation */}
      <nav className="bg-blue-600 sticky top-0 z-[100] shadow-md py-4">
        <div className="max-w-[900px] mx-auto px-4 flex items-center justify-between">
          <h2 className="text-white font-bold font-serif text-lg md:text-xl truncate">Units and Measurements (PH 110)</h2>
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
          
          <header className="mb-8 pb-4 border-b border-slate-300">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">PH 110</p>
            <h1 className="text-2xl md:text-4xl font-extrabold font-serif text-gray-900 mb-4 leading-tight">
              Units and Measurements
            </h1>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              Physics is the study of changes in the universe based on measurement. A measurement involves comparing a physical quantity (like length or time) to a standardized reference known as a <strong>unit</strong>. The result is a numerical <strong>magnitude</strong> which indicates how many times the unit fits into the quantity.
            </p>
          </header>

          <nav className="mb-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-sm">
            <p className="font-bold text-blue-800 mb-4 text-base border-b border-blue-200 pb-2">Unit Contents</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <a href="#section-types" className="hover:text-blue-600 transition-colors">1. Types of Quantities & Units</a>
              <a href="#section-si" className="hover:text-blue-600 transition-colors">2. The International System (SI)</a>
              <a href="#section-conversion" className="hover:text-blue-600 transition-colors">3. Unit Conversion & Standards</a>
              <a href="#section-dimensions" className="hover:text-blue-600 transition-colors">4. Dimensional Analysis</a>
              <a href="#section-sigfigs" className="hover:text-blue-600 transition-colors">5. Significant Figures & Rounding</a>
              <a href="#section-errors" className="hover:text-blue-600 transition-colors">6. Errors in Measurement & Propagation</a>
              <a href="#section-density" className="hover:text-blue-600 transition-colors">7. Density & Atomic Mass</a>
              <a href="#section-magnitude" className="hover:text-blue-600 transition-colors">8. Order of Magnitude</a>
            </div>
          </nav>

          <section id="section-types" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">1. Types of Quantities & Units</h2>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">1.1 Fundamental Quantities</h3>
            <p>A <strong>fundamental quantity</strong> is a physical quantity that is considered independent of all other quantities. It cannot be defined using any other physical quantity. Its unit is called a <strong>fundamental unit</strong>.</p>
            <p className="mt-4">For example, you cannot define mass using only length and time. In the field of mechanics, the three core fundamental units are <strong>Length (m), Mass (kg), and Time (s)</strong>.</p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-8 mb-3 font-serif">1.2 Derived Quantities</h3>
            <p>A <strong>derived quantity</strong> is any physical quantity that is formed by the mathematical combination (multiplication, division, etc.) of two or more fundamental quantities. Its unit is called a <strong>derived unit</strong>.</p>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mt-4 shadow-sm">
                <p className="font-bold text-blue-800 mb-3">Example: Velocity and Force</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Velocity</strong>: Defined as distance (Length) / time. Unit: m/s.</li>
                    <li><strong>Force</strong>: Defined as mass × acceleration (acceleration is length / time²). Unit: kg·m/s², which is specially named the <strong>Newton (N)</strong>.</li>
                </ul>
            </div>
          </section>
          
          <hr className="my-10 border-slate-200" />

          <section id="section-si" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">2. The International System (SI)</h2>
            <p>The <strong>International System of Units (SI)</strong> is the globally accepted standard.</p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">2.1 The Seven Base Units</h3>
            <div className="overflow-x-auto border border-slate-300 rounded-lg shadow-sm mt-4">
                <table className="w-full border-collapse text-left text-sm">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-3 font-bold text-gray-700 uppercase tracking-wider text-xs">Quantity</th>
                            <th className="p-3 font-bold text-gray-700 uppercase tracking-wider text-xs">Unit Name</th>
                            <th className="p-3 font-bold text-gray-700 uppercase tracking-wider text-xs">Symbol</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        <tr><td className="p-3">Length</td><td className="p-3">Meter</td><td className="p-3">m</td></tr>
                        <tr><td className="p-3">Mass</td><td className="p-3">Kilogram</td><td className="p-3">kg</td></tr>
                        <tr><td className="p-3">Time</td><td className="p-3">Second</td><td className="p-3">s</td></tr>
                        <tr><td className="p-3">Electric Current</td><td className="p-3">Ampere</td><td className="p-3">A</td></tr>
                        <tr><td className="p-3">Temperature</td><td className="p-3">Kelvin</td><td className="p-3">K</td></tr>
                        <tr><td className="p-3">Amount of Substance</td><td className="p-3">Mole</td><td className="p-3">mol</td></tr>
                        <tr><td className="p-3">Luminous Intensity</td><td className="p-3">Candela</td><td className="p-3">cd</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-10 mb-3 font-serif">2.2 Prefixes for SI Units</h3>
            <p>SI prefixes are powers of ten used to scale units, avoiding the need to write out long strings of zeros.</p>
            <div className="overflow-x-auto border border-slate-300 rounded-lg shadow-sm mt-4">
                <table className="w-full border-collapse text-left text-sm">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-2 md:p-3 font-bold text-gray-700 uppercase tracking-wider text-xs">Factor</th>
                            <th className="p-2 md:p-3 font-bold text-gray-700 uppercase tracking-wider text-xs">Prefix</th>
                            <th className="p-2 md:p-3 font-bold text-gray-700 uppercase tracking-wider text-xs">Symbol</th>
                            <th className="p-2 md:p-3 font-bold text-gray-700 uppercase tracking-wider text-xs">Factor</th>
                            <th className="p-2 md:p-3 font-bold text-gray-700 uppercase tracking-wider text-xs">Prefix</th>
                            <th className="p-2 md:p-3 font-bold text-gray-700 uppercase tracking-wider text-xs">Symbol</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        <tr><td className="p-2 md:p-3">10¹²</td><td className="p-2 md:p-3">tera-</td><td className="p-2 md:p-3">T</td><td className="p-2 md:p-3">10⁻³</td><td className="p-2 md:p-3">milli-</td><td className="p-2 md:p-3">m</td></tr>
                        <tr><td className="p-2 md:p-3">10⁹</td><td className="p-2 md:p-3">giga-</td><td className="p-2 md:p-3">G</td><td className="p-2 md:p-3">10⁻⁶</td><td className="p-2 md:p-3">micro-</td><td className="p-2 md:p-3">μ</td></tr>
                        <tr><td className="p-2 md:p-3">10⁶</td><td className="p-2 md:p-3">mega-</td><td className="p-2 md:p-3">M</td><td className="p-2 md:p-3">10⁻⁹</td><td className="p-2 md:p-3">nano-</td><td className="p-2 md:p-3">n</td></tr>
                        <tr><td className="p-2 md:p-3">10³</td><td className="p-2 md:p-3">kilo-</td><td className="p-2 md:p-3">k</td><td className="p-2 md:p-3">10⁻¹²</td><td className="p-2 md:p-3">pico-</td><td className="p-2 md:p-3">p</td></tr>
                    </tbody>
                </table>
            </div>
          </section>

          <hr className="my-10 border-slate-200" />

          <section id="section-conversion" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">3. Unit Conversion & Standards</h2>
            
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">3.1 The Chain-Link Conversion Method</h3>
            <p>This method uses a <strong>conversion factor</strong> (a fraction equal to 1) to change the units of a quantity. The unit to eliminate must be in the denominator so it cancels algebraically.</p>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mt-6 shadow-sm">
                <p className="font-bold text-blue-800 mb-4">Step-by-Step Example: Convert 25.0 meters per second (m/s) to kilometers per hour (km/h).</p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-1">1</span>
                    <p>Convert meters (m) to kilometers (km). Use the factor (1km / 1000m).</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-1">2</span>
                    <p>Convert seconds (s) to hours (h). We know 1h = 3600s. Use the factor (3600s / 1h).</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-1">3</span>
                    <p>Set up the calculation and cancel units:</p>
                  </div>
                </div>
                <div className="bg-slate-100 p-4 rounded-md font-mono text-blue-900 mt-4 overflow-x-auto">
                    25.0m/s × (1km / 1000m) × (3600s / 1h)
                    <br />
                    = (25.0 × 3600) / 1000 km/h
                    <br />
                    = 90 km/h
                </div>
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-10 mb-3 font-serif">3.2 Official Standards</h3>
            <p>Fundamental SI units are based on intrinsic, invariant properties of nature:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
                <li><strong>Meter (Length)</strong>: Defined via the constant speed of light.</li>
                <li><strong>Second (Time)</strong>: Defined via the fixed frequency of radiation emitted by a Cesium-133 atom.</li>
                <li><strong>Kilogram (Mass)</strong>: Defined via the fixed value of the Planck constant (h).</li>
            </ul>
          </section>
          
          <hr className="my-10 border-slate-200" />

          <section id="section-dimensions" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">4. Dimensional Analysis</h2>
            <p>Dimensional analysis checks equation consistency using fundamental dimensions: <strong>Mass [M], Length [L], and Time [T]</strong>.</p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">4.1 Principle of Homogeneity</h3>
            <p>Core rule: <strong>all terms in a valid physical equation must have the exact same dimensions</strong>.</p>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mt-8 shadow-sm">
                <p className="font-bold text-blue-800 mb-4">Example: Deriving a Formula (Oscillating Spring)</p>
                <p className="text-sm mb-4 italic text-gray-600">Find period T = kᵃ mᵇ where k is spring constant [MT⁻²].</p>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-1">1</span>
                        <div>
                          <p>Substitute dimensions:</p>
                          <div className="bg-slate-100 p-3 rounded mt-2 font-mono">[T] = [MT⁻²]ᵃ × [M]ᵇ = [Mᵃ⁺ᵇ T⁻²ᵃ]</div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-1">2</span>
                        <div>
                          <p>Equate powers:</p>
                          <div className="bg-slate-100 p-3 rounded mt-2 font-mono">
                            For M: 0 = a + b<br />
                            For T: 1 = -2a
                          </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-1">3</span>
                        <div>
                          <p>Solve: a = -1/2, b = 1/2</p>
                          <div className="bg-slate-100 p-3 rounded mt-2 font-mono">T ∝ √(m/k)</div>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          <hr className="my-10 border-slate-200" />
          
          <section id="section-sigfigs" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">5. Significant Figures & Rounding Off</h2>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">5.1 Rules for Identifying Sig Figs</h3>
            <ul className="list-disc ml-6 space-y-3">
                <li><strong>Non-zeros:</strong> Always significant (e.g., 123 has 3).</li>
                <li><strong>Sandwich Zeros:</strong> Always significant (e.g., 102 has 3).</li>
                <li><strong>Leading Zeros:</strong> Not significant (e.g., 0.0078 has 2).</li>
                <li><strong>Trailing Zeros:</strong> Significant only with a decimal (e.g., 400. has 3).</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-8 mb-3 font-serif">5.2 Calculation Rules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="font-bold text-gray-900 border-b border-slate-200 pb-1 mb-2">Addition/Subtraction</p>
                <p className="text-sm">Round to the fewest <strong>decimal places</strong>.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="font-bold text-gray-900 border-b border-slate-200 pb-1 mb-2">Multiplication/Division</p>
                <p className="text-sm">Round to the fewest <strong>significant figures</strong>.</p>
              </div>
            </div>
          </section>
          
          <hr className="my-10 border-slate-200" />

          <section id="section-errors" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">6. Errors in Measurement & Propagation</h2>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">6.1 Calculating Error Components</h3>
            <p>Measured value A: <strong>A ± ΔA</strong> (Mean Value ± Absolute Error).</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
                <li><strong>Absolute Error (ΔA):</strong> Uncertainty in same units as A.</li>
                <li><strong>Relative Error:</strong> ΔA / A (dimensionless).</li>
                <li><strong>Percent Error:</strong> (ΔA / A) × 100%.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-10 mb-3 font-serif">6.2 Combination of Errors</h3>
            <div className="overflow-x-auto border border-slate-300 rounded-lg shadow-sm mt-4">
                <table className="w-full border-collapse text-left text-sm">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-3 font-bold text-gray-700 uppercase tracking-wider text-xs">Function</th>
                            <th className="p-3 font-bold text-gray-700 uppercase tracking-wider text-xs">Error Formula</th>
                            <th className="p-3 font-bold text-gray-700 uppercase tracking-wider text-xs">Description</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        <tr>
                            <td className="p-3 font-bold">Sum/Difference</td>
                            <td className="p-3 font-mono">ΔX = ±(ΔA + ΔB)</td>
                            <td className="p-3">Absolute errors are added.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-bold">Product/Quotient</td>
                            <td className="p-3 font-mono">ΔX/X = ±(ΔA/A + ΔB/B)</td>
                            <td className="p-3">Fractional errors are added.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-bold">Power (Aⁿ)</td>
                            <td className="p-3 font-mono">ΔX/X = ±|n|(ΔA/A)</td>
                            <td className="p-3">Fractional error multiplied by power n.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-8 space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-sm">
                    <p className="font-bold text-blue-800 mb-2">Example: Density ρ = M / V</p>
                    <p className="text-sm italic mb-4">Given: M = 20g ± 1g, V = 5cm³ ± 0.1cm³</p>
                    <div className="space-y-2 text-sm font-mono bg-slate-100 p-4 rounded">
                        ρ = 20 / 5 = 4 g/cm³<br />
                        Δρ/ρ = (1/20) + (0.1/5) = 0.05 + 0.02 = 0.07<br />
                        Δρ = 0.07 × 4 = 0.28 g/cm³<br />
                        Result: 4 g/cm³ ± 0.28 g/cm³
                    </div>
                </div>
            </div>
          </section>

          <hr className="my-10 border-slate-200" />

          <section id="section-density" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">7. Density and Atomic Mass</h2>
            <div className="bg-slate-100 p-4 rounded-md font-mono text-center text-blue-900 mb-6">
                Density (ρ) = Mass / Volume
            </div>
            
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3 font-serif">7.1 Atomic Mass and Moles</h3>
            <ul className="list-disc ml-6 space-y-2">
                <li><strong>Atomic Mass Unit:</strong> 1u = 1.66 × 10⁻²⁷ kg (1/12th Carbon-12 atom).</li>
                <li><strong>Avogadro's Number (Nₐ):</strong> 6.02 × 10²³ particles/mole.</li>
            </ul>
          </section>

          <hr className="my-10 border-slate-200" />

          <section id="section-magnitude" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">8. Order of Magnitude</h2>
            <p>Used for quick estimation by rounding the power of 10.</p>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mt-6 shadow-sm">
                <p className="font-bold text-blue-800 mb-4">Rule for A × 10ᵇ:</p>
                <ul className="list-none space-y-2">
                    <li className="flex gap-2"><span>•</span> If A &lt; 5: Order = 10ᵇ</li>
                    <li className="flex gap-2"><span>•</span> If A ≥ 5: Order = 10ᵇ⁺¹</li>
                </ul>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-slate-100 p-4 rounded font-mono">
                  <div>3.8 × 10⁴ → 10⁴ (Since 3.8 &lt; 5)</div>
                  <div>7.5 × 10⁻¹⁵ → 10⁻¹⁴ (Since 7.5 &gt; 5)</div>
                </div>
            </div>
          </section>

          <div className="mt-12 text-center border-t pt-10">
            <button 
              onClick={onBack}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg shadow-blue-900/20 transition-all hover:scale-105 active:scale-95"
            >
              Finish Module
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
