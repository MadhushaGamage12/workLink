import React, { useState } from 'react';
import EditableField from "./EditableField"; // Assuming EditableField is in the same folder
import axios from 'axios';


function ProfileHeader() {
  const [formData, setFormData] = useState({  
  name: "",
  title: "",
  bio: "",
  email: "",
  skills: [],
  portfolio: [],
  });

  // const [name, setName] = useState("");
  // const [title, setTitle] = useState("");
  // const [otherTitle, setOtherTitle] = useState("");
  // const [bio, setBio] = useState("");
  // const [email, setEmail] = useState("");
  // const [skills, setSkills] = useState([]); // Skills, typed by user
  // const [projects, setProjects] = useState([]); // List of added projects
  // const [projectName, setProjectName] = useState("");
  // const [projectImage, setProjectImage] = useState(null);
 



  
  // Handle expertise change (from the dropdown)
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // Handle adding skills (typed by user)
  const handleSkillChange = (event) => {
    setOtherTitle(event.target.value);
  };

  const handleAddSkill = () => {
    if (otherTitle && !skills.includes(otherTitle)) {
      setSkills([...skills, otherTitle]);
      setOtherTitle(""); // Reset input after adding
    }
  };

  // Handle project name and image input
  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleProjectImageChange = (event) => {
    setProjectImage(event.target.files[0]);
  };

  const handleAddProject = () => {
    if (projectName && projectImage) {
      setProjects([...projects, { projectName, projectImage }]);
      setProjectName("");
      setProjectImage(null);
    }
  };






  // Handle saving the profile to the backend
  const handleSave = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("title", title);
    formData.append("bio", bio);
    formData.append("email", email);
    formData.append("skills", JSON.stringify(skills));
    formData.append("projects", JSON.stringify(projects));

    if (projectImage) formData.append("projectImage", projectImage);

    //"mongodb://localhost: 27017/freelancers" . 3000
    
    try { 
      const response = await axios.post("http://localhost:3000/api/freelancer/profile", formData);
      console.log(response);               
      alert("Profile saved successfully!");
    } 
    catch (error) {
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
            <EditableField label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <div className="editable-field">
              <label htmlFor="Title">Title:</label>
              <select id="title" value={title} onChange={handleTitleChange}>
                <option value="" disabled>
                  Select your Title
                </option>
                <option value="WebDevelopmentProgramming">Web Development & Programming</option>
                <option value="GraphicDesignMultimedia">Graphic Design & Multimedia</option>
                <option value="WritingContentCreation">Writing & Content Creation</option>
                <option value="DigitalMarketing">Digital Marketing</option>
                <option value="DataAnalytics">Data & Analytics</option>
                <option value="other">Other</option>
              </select>
            </div>
            <EditableField label="Bio" type="text" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Enter your bio" />
            <EditableField label="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          </div>


          {/* Right Column */}
          <div className="profile-right">
            {title === "other" && (
              <EditableField
                label="Other Title"
                type="text"
                value={otherTitle}
                placeholder="Specify your Title"
                onChange={handleSkillChange}
              />
            )}
            <div className="editable-field">
              <label>Skills:</label>
              <div>
                <input
                  type="text"
                  value={otherTitle}
                  onChange={handleSkillChange}
                  placeholder="Add custom skill"
                />
                <button type="button" onClick={handleAddSkill}>
                  Add
                </button>
              </div>
              <div className="selected-skills">
                <h4>Your Skills:</h4>
                <ul>
                  {skills.map((skill, index) => (
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
                value={projectName}
                onChange={handleProjectNameChange}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleProjectImageChange}
              />
              <button type="button" onClick={handleAddProject}>
                Add Project
              </button>
            </div>
            <div className="projects-portfolio">
              <h4>Your Projects Portfolio:</h4>
              <div className="projects-list">
                {projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <h5>{project.projectName}</h5>
                    <img
                      src={URL.createObjectURL(project.projectImage)}
                      alt={project.projectName}
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
