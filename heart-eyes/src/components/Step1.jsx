import React from 'react';

const Step1 = ({ formData, handleChange, nextStep }) => {
    return (
        <div>
            <h2>Step 1: Preferences</h2>
            <div>
                <label>What gender would you like to date?</label>
                <select
                    name="preferredGender"
                    value={formData.preferredGender}
                    onChange={handleChange}
                >
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="no-preference">No preference</option>
                </select>
            </div>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step1;
