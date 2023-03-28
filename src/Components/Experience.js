import React, { useRef, useState } from 'react';

function Experience() {
  const [experience, setExperience] = useState([
    { company: '', year: '', designation: '' },
  ]);
  const companyRef = useRef(null);
  const yearRef = useRef(null);
  const designationRef = useRef(null);

  const handleAddExperience = (e) => {
    e.preventDefault();
    const newExperience = {
      company: companyRef.current.value,
      year: yearRef.current.value,
      designation: designationRef.current.value,
    };
    setExperience([...experience, newExperience]);
    companyRef.current.value = '';
    yearRef.current.value = '';
    designationRef.current.value = '';
  };

  return (
    <div className="experience">
      <h2 className="mb-3">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{exp.company}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {exp.year} - {exp.designation}
            </h6>
          </div>
        </div>
      ))}
      <form onSubmit={handleAddExperience}>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" className="form-control" ref={companyRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input type="text" id="year" className="form-control" ref={yearRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <input type="text" id="designation" className="form-control" ref={designationRef} required />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}

export default Experience;
