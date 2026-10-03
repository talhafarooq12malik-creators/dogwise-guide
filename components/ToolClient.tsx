"use client";
import { useState } from "react";

export default function ToolClient({ slug }: { slug: string }) {
  const [w, setW] = useState("");
  const [a, setA] = useState("");
  const [f, setF] = useState("3500");
  const [res, setRes] = useState("");

  function calc() {
    const x = Number(w), age = Number(a), food = Number(f);
    if (slug === "dog-age-calculator") {
      if (!Number.isFinite(age) || age <= 0 || age > 30) return setRes("Enter an age between 0.1 and 30 years.");
      const human = age <= 1 ? 15 : age <= 2 ? 24 : 24 + (age - 2) * 5;
      return setRes(`Approximate human-age comparison: ${human.toFixed(0)} years. This is only a general comparison, not a veterinary measure.`);
    }
    if (!Number.isFinite(x) || x <= 0 || x > 200) return setRes("Enter a body weight between 0.1 and 200 kg.");
    if (slug === "dog-calorie-calculator") {
      const cal = 70 * Math.pow(x, 0.75) * 1.6;
      return setRes(`Educational starting estimate: ${cal.toFixed(0)} kcal/day. Individual needs can differ substantially.`);
    }
    if (slug === "dog-feeding-calculator") {
      const cal = 70 * Math.pow(x, 0.75) * 1.6;
      if (!Number.isFinite(food) || food <= 0 || food > 10000) return setRes("Enter food energy between 1 and 10,000 kcal/kg.");
      return setRes(`At ${food} kcal/kg, this estimate is about ${((cal / food) * 1000).toFixed(0)} g/day. Check the food label and discuss portions with your veterinarian.`);
    }
    if (slug === "puppy-feeding-schedule") {
      if (!Number.isFinite(age) || age <= 0 || age > 24) return setRes("Enter a puppy age between 0.1 and 24 months.");
      return setRes(`At about ${age} months, many puppies still need multiple meals, but the right schedule depends on size, diet and individual needs.`);
    }
    if (slug === "puppy-growth-calculator") return setRes(`Current weight: ${x} kg. Growth varies widely by breed and expected adult size; use repeated measurements and veterinary guidance.`);
    return setRes(`At ${x} kg, weight alone cannot determine ideal body condition. Use a body-condition assessment with your veterinarian.`);
  }

  return <div className="toolbox">
    <div className="formgrid">
      <div className="field"><label htmlFor="weight">Weight (kg)</label><input id="weight" type="number" min="0.1" max="200" step="0.1" value={w} onChange={e => setW(e.target.value)} inputMode="decimal" /></div>
      <div className="field"><label htmlFor="age">Age (years or months)</label><input id="age" type="number" min="0.1" max="30" step="0.1" value={a} onChange={e => setA(e.target.value)} inputMode="decimal" /></div>
      {slug === "dog-feeding-calculator" && <div className="field"><label htmlFor="food">Food energy (kcal/kg)</label><input id="food" type="number" min="1" max="10000" step="1" value={f} onChange={e => setF(e.target.value)} inputMode="decimal" /></div>}
    </div>
    <button className="btn" type="button" onClick={calc}>Calculate</button>
    {res && <div className="result" role="status" aria-live="polite">{res}</div>}
  </div>;
}
