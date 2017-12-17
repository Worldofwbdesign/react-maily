import React from 'react'

const surveyField = ({ input, label, meta: { touched, error } }) => {
  return (
    <label className="survey-field">
      <div>{label}</div>
      <input { ...input } style={{ marginBottom: '5px' }}/>
      <span className="field-error">
        {touched && error}
      </span>
    </label>
  );
};

export default surveyField