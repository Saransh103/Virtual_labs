import React, { useState } from 'react';
import "./RTD.css";

const MyComponent = () => {
  const [isBare, setIsBare] = useState(false);
  const [material, setMaterial] = useState('Platinum');
  const [sheathMaterial, setSheathMaterial] = useState('Platinum');
  const [sheathThickness, setSheathThickness] = useState('2');
  const [sheathLength, setSheathLength] = useState('15');
  const [thermowellMaterial, setThermowellMaterial] = useState('Platinum');
  const [thermowellThickness, setThermowellThickness] = useState('2.5');
  const [thermowellLength, setThermowellLength] = useState('15');

  const handleBareCheckboxChange = (e) => {
    setIsBare(e.target.checked);
  }

  const handleSheathChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'sheathMaterial':
        setSheathMaterial(value);
        break;
      case 'sheathThickness':
        setSheathThickness(value);
        break;
      case 'sheathLength':
        setSheathLength(value);
        break;
      default:
        break;
    }
  }

  const handleThermowellChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'thermowellMaterial':
        setThermowellMaterial(value);
        break;
      case 'thermowellThickness':
        setThermowellThickness(value);
        break;
      case 'thermowellLength':
        setThermowellLength(value);
        break;
      default:
        break;
    }
  }

  const handleReloadClick = () => {
    setIsBare(false);
    setMaterial('Platinum');
    setSheathMaterial('Platinum');
    setSheathThickness('2');
    setSheathLength('15');
    setThermowellMaterial('Platinum');
    setThermowellThickness('2.5');
    setThermowellLength('15');
  }

  const handlePlotClick = () => {
    // Perform calculations and plot the graphs
    // You can implement the calculation and graph plotting logic here.
  }

  return (
    <div className="container">
      <div className="left-part">
        {/* Left part is blank */}
      </div>
      <div className="right-part">
        <h1>Headings</h1>
        <div className = "sub-divs">
          <h3>First Div</h3>
          <input type="checkbox" id="bare" onChange={handleBareCheckboxChange} />
          <label htmlFor="bare">Bare</label>
          <br />
          <label>Material: Platinum</label>
        </div>
        <div className="sub-divs">
          <h3>Second Div</h3>
          <input type="checkbox" id="sheath" />
          <label htmlFor="sheath">With Sheath</label>
          <br />
          <select name="sheathMaterial" value={sheathMaterial} onChange={handleSheathChange}>
            <option value="Platinum">Platinum</option>
            <option value="SS304">SS304</option>
            <option value="SS316">SS316</option>
            <option value="SS410">SS410</option>
          </select>
          <input type="text" name="sheathThickness" value={sheathThickness} onChange={handleSheathChange} placeholder="Thickness" />
          <input type="text" name="sheathLength" value={sheathLength} onChange={handleSheathChange} placeholder="Length" />
        </div>
        <div className = "sub-divs">
          <h3>Third Div</h3>
          <input type="checkbox" id="thermowell" />
          <label htmlFor="thermowell">Thermowell</label>
          <br />
          <select name="thermowellMaterial" value={thermowellMaterial} onChange={handleThermowellChange}>
            <option value="Platinum">Platinum</option>
            <option value="SS304">SS304</option>
            <option value="SS316">SS316</option>
            <option value="SS410">SS410</option>
          </select>
          <input type="text" name="thermowellThickness" value={thermowellThickness} onChange={handleThermowellChange} placeholder="Thickness" />
          <input type="text" name="thermowellLength" value={thermowellLength} onChange={handleThermowellChange} placeholder="Length" />
        </div>
        <div className = "sub-divs">
          <h3>Fourth Div</h3>
          <button onClick={handleReloadClick}>Reload</button>
          <button onClick={handlePlotClick}>Plot</button>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
