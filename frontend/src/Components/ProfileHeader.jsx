import React, { useState } from "react";
import EditableField from "./EditableField"; // Assuming EditableField is in the same folder
import axios from "axios";

function ProfileHeader() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    otherTitle: "",
    bio: "",
    email: "",

    skills: [],
    projects: [],
    projectName: "",
    projectImage: null,
  });

  // Handle changes in form inputs
  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  // Handle adding a skill
  const handleAddSkill = () => {
    if (formData.otherTitle && !formData.skills.includes(formData.otherTitle)) {
      setFormData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, formData.otherTitle],
        otherTitle: "",
      }));
    }
  };

  // Handle adding a project
  const handleAddProject = () => {
    if (formData.projectName && formData.projectImage) {
      setFormData((prevData) => ({
        ...prevData,
        projects: [
          ...prevData.projects,
          { name: formData.projectName, image: formData.projectImage },
        ],
        projectName: "",
        projectImage: null,
      }));
    }
  };

  // Handle saving the profile to the backend
  const handleSave = async () => {
    const dataToSend = new FormData();
    dataToSend.append("name", formData.name);
    dataToSend.append("title", formData.title);
    dataToSend.append("bio", formData.bio);
    dataToSend.append("email", formData.email);
    dataToSend.append("skills", JSON.stringify(formData.skills));
    dataToSend.append("projects", JSON.stringify(formData.projects));

    if (formData.projectImage) {
      dataToSend.append("projectImage", formData.projectImage);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/freelancer/profile",
        dataToSend
      );
      console.log(response);
      alert("Profile saved successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile.");
    }
  };

  return (
    <div className="profile-header">
      <div className="profile-pic-container">
        <label htmlFor="uploadPicInput" className="upload-pic-icon">
          📷
        </label>
        <input type="file" id="uploadPicInput" accept="image/*" hidden />
        <div className="placeholder-pic">Upload Profile Picture</div>
      </div>

      <div className="profile-details">
        <div className="profile-layout">
          {/* Left Column */}
          <div className="profile-left">
            <EditableField
              label="Name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your name"
            />
            <div className="editable-field">
              <label htmlFor="title">Title:</label>
              <select
                id="title"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
              >
                <option value="" disabled>
                  Select your Title
                </option>
                <option value="WebDevelopmentProgramming">
                  Web Development & Programming
                </option>
                <option value="GraphicDesignMultimedia">
                  Graphic Design & Multimedia
                </option>
                <option value="WritingContentCreation">
                  Writing & Content Creation
                </option>
                <option value="DigitalMarketing">Digital Marketing</option>
                <option value="DataAnalytics">Data & Analytics</option>
                <option value="other">Other</option>
              </select>
            </div>
            <EditableField
              label="Bio"
              type="text"
              value={formData.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
              placeholder="Enter your bio"
            />
            <EditableField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          {/* Right Column */}
          <div className="profile-right">
            {formData.title === "other" && (
              <EditableField
                label="Other Title"
                type="text"
                value={formData.otherTitle}
                onChange={(e) => handleChange("otherTitle", e.target.value)}
                placeholder="Specify your Title"
              />
            )}
            <div className="editable-field">
              <label>Skills:</label>
              <div>
                <input
                  type="text"
                  value={formData.otherTitle}
                  onChange={(e) => handleChange("otherTitle", e.target.value)}
                  placeholder="Add custom skill"
                />
                <button type="button" onClick={handleAddSkill}>
                  Add
                </button>
              </div>
              <div className="selected-skills">
                <h4>Your Skills:</h4>
                <ul>
                  {formData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="editable-field">
              <h3>Add Project to Portfolio:</h3>
              <input
                type="text"
                placeholder="Enter project name"
                value={formData.projectName}
                onChange={(e) => handleChange("projectName", e.target.value)}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleChange("projectImage", e.target.files[0])
                }
              />
              <button type="button" onClick={handleAddProject}>
                Add Project
              </button>
            </div>

            <div className="projects-portfolio">
              <h4>Your Projects Portfolio:</h4>
              <div className="projects-list">
                {formData.projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <h5>{project.name}</h5>
                    <img
                      src={URL.createObjectURL(project.image)}
                      alt={project.name}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="save-button-container">
        <button onClick={handleSave} className="save-button">
          Save
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
