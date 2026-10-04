"use client";

import { useState } from "react";

export default function ToolClient({ slug }: { slug: string }) {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [unit, setUnit] = useState("kg");
  const [activity, setActivity] = useState("neutered");
  const [foodEnergy, setFoodEnergy] = useState("");
  const [meals, setMeals] = useState("3");
  const [result, setResult] = useState("");

  const weightKg =
    unit === "lb" ? Number(weight) * 0.453592 : Number(weight);

  function clearResult() {
    setResult("");
  }

  function calculate() {
    const w = Number(weight);
    const a = Number(age);

    // DOG AGE CALCULATOR
    if (slug === "dog-age-calculator") {
      if (!Number.isFinite(a) || a <= 0 || a > 30) {
        return setResult("Please enter a dog age between 0.1 and 30 years.");
      }

      const years = Math.floor(a);
      const months = Math.round((a - years) * 12);

      let humanAge: number;

      if (a <= 1) {
        humanAge = 15 * a;
      } else if (a <= 2) {
        humanAge = 15 + (a - 1) * 9;
      } else {
        humanAge = 24 + (a - 2) * 5;
      }

      return setResult(
        `A ${years} year${years === 1 ? "" : "s"}${
          months > 0 ? ` and ${months} month${months === 1 ? "" : "s"}` : ""
        } old dog is roughly comparable to a ${humanAge.toFixed(
          0
        )}-year-old human. This is a simple age comparison, not a scientific way to measure biological aging. Breed and size can affect how dogs age.`
      );
    }

    // PUPPY FEEDING SCHEDULE
    if (slug === "puppy-feeding-schedule") {
      if (!Number.isFinite(a) || a <= 0 || a > 24) {
        return setResult(
          "Please enter a puppy age between 0.1 and 24 months."
        );
      }

      let mealsPerDay: number;
      let advice: string;

      if (a < 3) {
        mealsPerDay = 4;
        advice =
          "Young puppies commonly do best with several small meals because their stomachs are still small.";
      } else if (a < 6) {
        mealsPerDay = 3;
        advice =
          "Many puppies can move to three meals a day during this stage.";
      } else {
        mealsPerDay = 2;
        advice =
          "Many puppies can move toward two meals a day around this stage, although large and giant breeds may need a different plan.";
      }

      return setResult(
        `General starting point: about ${mealsPerDay} meals per day. ${advice} Use the feeding amount recommended on the puppy food label as a starting point and adjust with your veterinarian based on growth and body condition.`
      );
    }

    // ALL OTHER WEIGHT-BASED TOOLS
    if (!Number.isFinite(w) || w <= 0) {
      return setResult("Please enter a valid body weight.");
    }

    if (unit === "kg" && w > 200) {
      return setResult("Please enter a weight of 200 kg or less.");
    }

    if (unit === "lb" && w > 440) {
      return setResult("Please enter a weight of 440 lb or less.");
    }

    if (!Number.isFinite(weightKg) || weightKg <= 0 || weightKg > 200) {
      return setResult("Please enter a realistic dog weight.");
    }

    // DOG CALORIE CALCULATOR
    if (slug === "dog-calorie-calculator") {
      const rer = 70 * Math.pow(weightKg, 0.75);

      let factor = 1.6;
      let description = "neutered adult";

      if (activity === "intact") {
        factor = 1.8;
        description = "intact adult";
      }

      if (activity === "weight-loss") {
        factor = 1.0;
        description = "weight-management starting estimate";
      }

      if (activity === "puppy") {
        factor = 2.0;
        description = "growing puppy starting estimate";
      }

      if (activity === "high") {
        factor = 2.0;
        description = "high-activity starting estimate";
      }

      const calories = rer * factor;

      return setResult(
        `Estimated starting energy need: about ${calories.toFixed(
          0
        )} kcal/day for a ${description}. The calculation starts with RER (resting energy requirement) and applies a general life-stage/activity factor. Real calorie needs can vary considerably with age, breed, health, exercise and body condition.`
      );
    }

    // DOG FEEDING CALCULATOR
    if (slug === "dog-feeding-calculator") {
      const energy = Number(foodEnergy);

      if (!Number.isFinite(energy) || energy <= 0 || energy > 10000) {
        return setResult(
          "Enter the food's energy value from the label, between 1 and 10,000 kcal/kg."
        );
      }

      const rer = 70 * Math.pow(weightKg, 0.75);
      const dailyCalories = rer * 1.6;
      const grams = (dailyCalories / energy) * 1000;

      return setResult(
        `Using an educational starting estimate of ${dailyCalories.toFixed(
          0
        )} kcal/day and food containing ${energy.toFixed(
          0
        )} kcal/kg, the calculation gives approximately ${grams.toFixed(
          0
        )} g of food per day. Divide that amount between ${meals} meals if appropriate. Always use the food label and your veterinarian's advice as the final guide.`
      );
    }

    // PUPPY GROWTH CALCULATOR
    if (slug === "puppy-growth-calculator") {
      if (!Number.isFinite(a) || a <= 0 || a > 24) {
        return setResult(
          "Enter the puppy's current age in months, between 0.1 and 24 months."
        );
      }

      let roughEstimate = "";

      if (a <= 3) {
        roughEstimate =
          "At this young age, adult-size estimates can change substantially as the puppy grows.";
      } else if (a <= 6) {
        roughEstimate =
          "Your puppy is in an important growth period, but breed and expected adult size make a major difference.";
      } else if (a <= 12) {
        roughEstimate =
          "Growth is usually slowing compared with early puppyhood, although larger breeds may continue growing for much longer.";
      } else {
        roughEstimate =
          "Many dogs are approaching adult size by this stage, but large and giant breeds can continue developing beyond their first year.";
      }

      return setResult(
        `Current weight: ${weightKg.toFixed(
          1
        )} kg (${(weightKg * 2.20462).toFixed(
          1
        )} lb). ${roughEstimate} Rather than relying on a single predicted adult weight, track your puppy's weight and body condition over time. Your veterinarian can compare the growth pattern with an appropriate breed/size growth chart.`
      );
    }

    // DOG WEIGHT GUIDE
    if (slug === "dog-weight-guide") {
      return setResult(
        `For a ${weightKg.toFixed(
          1
        )} kg dog, weight alone cannot tell you whether the dog is at a healthy body condition. A useful check is to look for ribs that can be felt without a thick fat layer, a visible waist when viewed from above, and an abdominal tuck when viewed from the side. Very prominent ribs, no visible waist, or a heavy fat covering can all be reasons to have your dog's condition assessed by a veterinarian.`
      );
    }

    return setResult("Choose a tool and enter the requested information.");
  }

  const isAge = slug === "dog-age-calculator";
  const isPuppySchedule = slug === "puppy-feeding-schedule";
  const isCalories = slug === "dog-calorie-calculator";
  const isFeeding = slug === "dog-feeding-calculator";
  const isGrowth = slug === "puppy-growth-calculator";
  const isWeightGuide = slug === "dog-weight-guide";

  return (
    <div className="toolbox">
      <div className="formgrid">
        {!isAge && !isPuppySchedule && (
          <div className="field">
            <label htmlFor="weight">Dog weight</label>

            <div style={{ display: "flex", gap: "8px" }}>
              <input
                id="weight"
                type="number"
                min="0.1"
                max={unit === "kg" ? "200" : "440"}
                step="0.1"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                  clearResult();
                }}
                inputMode="decimal"
                placeholder={unit === "kg" ? "e.g. 12" : "e.g. 26"}
              />

              <select
                value={unit}
                onChange={(e) => {
                  setUnit(e.target.value);
                  clearResult();
                }}
                aria-label="Weight unit"
              >
                <option value="kg">kg</option>
                <option value="lb">lb</option>
              </select>
            </div>
          </div>
        )}

        {(isAge || isPuppySchedule || isGrowth) && (
          <div className="field">
            <label htmlFor="age">
              {isAge ? "Dog age (years)" : "Age (months)"}
            </label>

            <input
              id="age"
              type="number"
              min="0.1"
              max={isAge ? "30" : "24"}
              step="0.1"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                clearResult();
              }}
              inputMode="decimal"
              placeholder={isAge ? "e.g. 5" : "e.g. 4"}
            />
          </div>
        )}

        {isCalories && (
          <div className="field">
            <label htmlFor="activity">Dog's life stage / activity</label>

            <select
              id="activity"
              value={activity}
              onChange={(e) => {
                setActivity(e.target.value);
                clearResult();
              }}
            >
              <option value="neutered">Neutered adult</option>
              <option value="intact">Intact adult</option>
              <option value="high">Highly active adult</option>
              <option value="puppy">Growing puppy</option>
              <option value="weight-loss">Weight-management estimate</option>
            </select>
          </div>
        )}

        {isFeeding && (
          <>
            <div className="field">
              <label htmlFor="food">
                Food energy (kcal/kg)
              </label>

              <input
                id="food"
                type="number"
                min="1"
                max="10000"
                step="1"
                value={foodEnergy}
                onChange={(e) => {
                  setFoodEnergy(e.target.value);
                  clearResult();
                }}
                inputMode="decimal"
                placeholder="Check the food label"
              />
            </div>

            <div className="field">
              <label htmlFor="meals">Meals per day</label>

              <select
                id="meals"
                value={meals}
                onChange={(e) => {
                  setMeals(e.target.value);
                  clearResult();
                }}
              >
                <option value="1">1 meal</option>
                <option value="2">2 meals</option>
                <option value="3">3 meals</option>
                <option value="4">4 meals</option>
              </select>
            </div>
          </>
        )}
      </div>

      <button className="btn" type="button" onClick={calculate}>
        Calculate
      </button>

      {result && (
        <div className="result" role="status" aria-live="polite">
          {result}
        </div>
      )}

      {(isCalories || isFeeding || isGrowth || isWeightGuide) && (
        <p
          style={{
            marginTop: "14px",
            fontSize: "0.9rem",
            lineHeight: 1.6,
            opacity: 0.75,
          }}
        >
          These tools provide general educational estimates. They are not a
          diagnosis or a substitute for veterinary care, especially for
          puppies, senior dogs, pregnant dogs, dogs with medical conditions,
          or dogs with sudden weight changes.
        </p>
      )}
    </div>
  );
}
