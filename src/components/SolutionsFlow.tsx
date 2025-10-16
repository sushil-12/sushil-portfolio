import { useMemo, useState } from 'react';

type StepKey = 'goal' | 'budget' | 'timeline' | 'plan';

function SolutionsFlow() {
  const [step, setStep] = useState<StepKey>('goal');
  const [goal, setGoal] = useState('Leads');
  const [budget, setBudget] = useState('Mid');
  const [timeline, setTimeline] = useState('4-8 weeks');

  const plan = useMemo(() => {
    const items: string[] = [];
    if (goal === 'Leads') items.push('Revamp hero, add high-contrast CTA, simplify forms.');
    if (goal === 'Content') items.push('Editorial calendar and SEO-optimized blog pipeline.');
    if (goal === 'Automation') items.push('Integrate CRM and AI assistant for FAQs and intake.');
    if (budget === 'Low') items.push('Focus on highest ROI quick wins first.');
    if (budget === 'High') items.push('Add experiments and A/B testing framework.');
    if (timeline.includes('2')) items.push('Ship in sprints with weekly demos.');
    return items;
  }, [goal, budget, timeline]);

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Solution Maker</h1>
      <p className="text-gray-600 mb-8">An interactive flow to draft a practical plan.</p>

      {step === 'goal' && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Choose primary goal</h2>
          <div className="flex gap-2 flex-wrap">
            {['Leads', 'Content', 'Automation'].map((g) => (
              <button key={g} onClick={() => setGoal(g)} className={`px-3 py-2 rounded border ${goal === g ? 'bg-black text-white' : ''}`}>{g}</button>
            ))}
          </div>
          <button onClick={() => setStep('budget')} className="px-4 py-2 rounded bg-black text-white">Next</button>
        </div>
      )}

      {step === 'budget' && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Budget level</h2>
          <div className="flex gap-2 flex-wrap">
            {['Low', 'Mid', 'High'].map((b) => (
              <button key={b} onClick={() => setBudget(b)} className={`px-3 py-2 rounded border ${budget === b ? 'bg-black text-white' : ''}`}>{b}</button>
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setStep('goal')} className="px-4 py-2 rounded border">Back</button>
            <button onClick={() => setStep('timeline')} className="px-4 py-2 rounded bg-black text-white">Next</button>
          </div>
        </div>
      )}

      {step === 'timeline' && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Timeline</h2>
          <div className="flex gap-2 flex-wrap">
            {['2-4 weeks', '4-8 weeks', '8+ weeks'].map((t) => (
              <button key={t} onClick={() => setTimeline(t)} className={`px-3 py-2 rounded border ${timeline === t ? 'bg-black text-white' : ''}`}>{t}</button>
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setStep('budget')} className="px-4 py-2 rounded border">Back</button>
            <button onClick={() => setStep('plan')} className="px-4 py-2 rounded bg-black text-white">Generate Plan</button>
          </div>
        </div>
      )}

      {step === 'plan' && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Proposed Plan</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {plan.map((p, i) => (<li key={i}>{p}</li>))}
          </ul>
          <div className="flex gap-2">
            <button onClick={() => setStep('timeline')} className="px-4 py-2 rounded border">Back</button>
            <a href="/contact" className="px-4 py-2 rounded bg-black text-white">Discuss This Plan</a>
          </div>
        </div>
      )}
    </section>
  );
}

export default SolutionsFlow;


