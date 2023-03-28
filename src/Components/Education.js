import React, { useRef, useState } from 'react';

function Education() {
  const [education, setEducation] = useState([
    { institute: '', year: '', degree: '' },
  ]);
  const instituteRef = useRef(null);
  const yearRef = useRef(null);
  const degreeRef = useRef(null);

  const handleAddEducation = (e) => {
    e.preventDefault();
    const newEducation = {
      institute: instituteRef.current.value,
      year: yearRef.current.value,
      degree: degreeRef.current.value,
    };
    setEducation([...education, newEducation]);
    instituteRef.current.value = '';
    yearRef.current.value = '';
    degreeRef.current.value = '';
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-3">
          <h5 className="mb-0">{edu.institute}</h5>
          <p className="mb-0">{edu.degree}</p>
          <p className="text-muted mb-0">{edu.year}</p>
        </div>
      ))}
      <form onSubmit={handleAddEducation}>
        <div className="form-group">
          <label htmlFor="institute">Institute:</label>
          <input type="text" className="form-control" id="institute" ref={instituteRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input type="text" className="form-control" id="year" ref={yearRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="degree">Degree:</label>
          <input type="text" className="form-control" id="degree" ref={degreeRef} required />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}

export default Education;
