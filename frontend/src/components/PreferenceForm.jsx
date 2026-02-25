import React from "react";

function PreferenceForm() {
  return (
    <div>
      <h2>StyleIQ Preference Form</h2>

      <form>
        <div>
          <label>Gender:</label>
          <select>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div>
          <label>Height (cm):</label>
          <input type="number" placeholder="Enter height" />
        </div>

        <div>
          <label>Budget (₹):</label>
          <input type="number" placeholder="Enter budget" />
        </div>

        <div>
          <label>Occasion:</label>
          <select>
            <option>Casual</option>
            <option>Party</option>
            <option>Formal</option>
            <option>Wedding</option>
          </select>
        </div>

        <div>
          <label>Style:</label>
          <select>
            <option>Minimal</option>
            <option>Trendy</option>
            <option>Ethnic</option>
            <option>Sporty</option>
          </select>
        </div>

        <button type="submit">Get Recommendations</button>
      </form>
    </div>
  );
}

export default PreferenceForm;