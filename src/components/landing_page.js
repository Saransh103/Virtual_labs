import React, { useState } from "react";
import Graph from "./Graph";

const RTDExperiment = () => {
  const [initialTemp, setInitialTemp] = useState(0);
  const [initialResistance, setInitialResistance] = useState(0);
  const [finalTemp, setFinalTemp] = useState(0);
  const [finalResistance, setFinalResistance] = useState(0);
  const [material, setMaterial] = useState("material1"); // Default value for material
  const [resistanceData, setResistanceData] = useState([]);
  const [tempRange, setTempRange] = useState("0°C - 100°C");
  const [resistanceRange, setResistanceRange] = useState("0 Ω - 100 Ω");
  const [showChart, setShowChart] = useState(false);

  const handlePlotClick = () => {
    setShowChart(true);
  }; 


  const calculateResistance = (
    initialTemp,
    finalTemp,
    material,
    initialResistance
  ) => {
    // Implement your specific formula to calculate FinalResistance based on initialTemp and finalTemp.
    // Replace the following line with your actual formula.

    let alpha;
    if (material === "material1") {
      alpha = 3.43;
      if (
        !(
          initialTemp >= 0 &&
          initialTemp <= 100 &&
          finalTemp >= 0 &&
          finalTemp <= 100 &&
          initialResistance >= 0
        )
      ) {
        alert("Input value is out of range. Please enter correct value");
      }
    } else if (material === "material2") {
      alpha = 3.43;
      if (
        !(
          initialTemp >= 0 &&
          initialTemp <= 200 &&
          finalTemp >= 0 &&
          finalTemp <= 200 &&
          initialResistance >= 0
        )
      ) {
        alert("Input value is out of range. Please enter correct value");
      }
    } else if (material === "material3") {
      if (
        !(
          initialTemp >= 0 &&
          initialTemp <= 200 &&
          finalTemp >= 0 &&
          finalTemp <= 200 &&
          initialResistance >= 0
        )
      ) {
        alert("Input value is out of range. Please enter correct value");
      }
      alpha = 3432.43;
    }

    if (typeof alpha === "undefined") {
      alert("Please select a material before checking resistance.");
      return;
    }

    const Rfinalcalculated =
      initialResistance * (1 + alpha * (finalTemp - initialTemp));
    return Rfinalcalculated;
  };

  const calculateRange = (material) => {
    let tempRange, resistanceRange;
    if (material === "material1") {
      tempRange = "0°C - 100°C";
      resistanceRange = "0 Ω - 100 Ω";
    } else if (material === "material2") {
      tempRange = "0°C - 200°C";
      resistanceRange = "0 Ω - 200 Ω";
    } else if (material === "material3") {
      tempRange = "0°C - 300°C";
      resistanceRange = "0 Ω - 300 Ω";
    }
    setTempRange(tempRange);
    setResistanceRange(resistanceRange);
  };

  const handleMaterialChange = (e) => {
    const selectedMaterial = e.target.value;
    setMaterial(selectedMaterial);
    calculateRange(selectedMaterial);
  };

  const checkResistance = () => {
    const calculatedResistance = calculateResistance(
      initialTemp,
      finalTemp,
      material,
      initialResistance
    );

    if (Math.abs(calculatedResistance - finalResistance) < 0.101) {
      const newData = { x: finalTemp, y: finalResistance };
      setResistanceData([...resistanceData, newData]);
      alert("Resistance value is correct. Data saved.");
    } else {
      alert("Warning: Entered resistance value is incorrect.");
    }
  };

  return (
    <div className="rtd-experiment">
      <div className="results">
        <h3>Results</h3>
        {showChart && <Graph data={resistanceData} />} 
      </div>
      <div className="input-form">
        <h3>RTD Experiment</h3>
        <select
          className="material-input"
          value={material}
          onChange={handleMaterialChange}
        >
          <option value="material1">Material 1</option>
          <option value="material2">Material 2</option>
          <option value="material3">Material 3</option>
        </select>
        <span>Temperature Range: {tempRange}</span>
        <br />
        <label htmlFor="initialTemperature">Initial Temperature:</label>
        <input
          className="initial-temperature-input"
          type="number"
          id="initialTemperature"
          value={initialTemp}
          onChange={(e) => setInitialTemp(parseFloat(e.target.value))}
        />
        <br />
        <span>Resistance Range: {resistanceRange}</span>
        <br />
        <label htmlFor="initialResistance">Initial Resistance:</label>
        <input
          className="initial-resistance-input"
          type="number"
          id="initialResistance"
          value={initialResistance}
          onChange={(e) => setInitialResistance(parseFloat(e.target.value))}
        />
        <br />
        <label htmlFor="finalTemperature">Final Temperature:</label>
        <input
          className="final-temperature-input"
          type="number"
          id="finalTemperature"
          value={finalTemp}
          onChange={(e) => setFinalTemp(parseFloat(e.target.value))}
        />
        <br />
        <button className="plot-button" onClick={handlePlotClick}>
          Plot
        </button> 
        <label htmlFor="finalResistance">Final Resistance:</label>
        <input
          className="final-resistance-input"
          type="number"
          id="finalResistance"
          value={finalResistance}
          onChange={(e) => setFinalResistance(parseFloat(e.target.value))}
        />
        <br />
        <button className="check-button" onClick={checkResistance}>
          Check Resistance
        </button>
      </div>
    </div>
  );
};

export default RTDExperiment;
