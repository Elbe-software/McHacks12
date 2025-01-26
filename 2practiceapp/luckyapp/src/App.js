import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <h1 className="welcome-title">Welcome! Start Exploring...</h1>
        <p className="description">
          Enter your options, preferences, and choices. Don't worry – you can always change and add filters after you search.
        </p>
        <form className="options-form">
          <div className='form-group'>
            <label>Time Frame</label>
            <select>
              <option>Half-day</option>
              <option>Full-day</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Transportation Available</label>
            <div className="checkbox-group">
              <label><input type="checkbox" /> Car</label>
              <label><input type="checkbox" /> STM</label>
              <label><input type="checkbox" /> REM</label>
              <label><input type="checkbox" /> Walking</label>
              <label><input type="checkbox" /> Bike</label>
            </div>
          </div>
          <div className="form-group">
            <label>Number of People</label>
            <input type="number" defaultValue={4} />
          </div>
          <div className="form-group">
            <label>Cost per person</label>
            <input type="text" placeholder="<$10" />
          </div>
          <div className="form-group vibe-group"> 
            <label>Vibe</label>
            <textarea placeholder="e.g., outdoor, sports, fun"></textarea>
          </div>
          <button type="submit" className="explore-button">Explore Options!</button>
        </form>
      </main>
    </div>
  );
}

export default App;
