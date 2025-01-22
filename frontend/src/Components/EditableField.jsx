import React from 'react';

function EditableField({ label, type, value, placeholder, onChange }) {
  return (
    <div className="editable-field">
      <label>{label}:</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default EditableField;
