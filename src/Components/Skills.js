import React, { useState, useRef } from 'react';
import { FormGroup, Label, Input, Button, Badge } from 'reactstrap';
import { WithContext as ReactTags } from 'react-tag-input';

const Skill = (props) => {
  const [tags, setTags] = useState([]);
  const [suggestions, setSuggestions] = useState([
    { id: 'Javascript', text: 'Javascript' },
    { id: 'React', text: 'React' },
    { id: 'Node.js', text: 'Node.js' },
    { id: 'PHP', text: 'PHP' },
    { id: 'HTML', text: 'HTML' },
    { id: 'CSS', text: 'CSS' },
  ]);
  const tagsInput = useRef(null);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddSkill(tags);
    setTags([]);
    tagsInput.current.clearInput();
  };

  return (
    <div>
      <h4 className="mb-4">Skills</h4>
      <FormGroup>
        <Label>Skills</Label>
        <ReactTags
          ref={tagsInput}
          tags={tags}
          suggestions={suggestions}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          placeholder="Add skill"
        />
      </FormGroup>
      {tags.length > 0 && (
        <div className="mb-4">
          {tags.map((tag, index) => (
            <Badge color="secondary" className="mr-1" key={index}>
              {tag.text}
            </Badge>
          ))}
        </div>
      )}
      <Button color="primary" onClick={handleSubmit}>
        Add Skill
      </Button>
    </div>
  );
};

export default Skill;
