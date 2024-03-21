import React, { useEffect, useState } from "react";

function ProfilePic() {
  const [profilePic, setProfilePic] = useState(null);

  function handleProfile(event) {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
    }
  }
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleProfile}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          {profilePic && (
            <div>
              <img
                src={profilePic}
                type="application/pdf"
                alt="Profile"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
              {profilePic && <p>PDF uploaded successfully!</p>}
            </div>
          )}
        </div>
      </div>
      <button>save</button>
    </div>
  );
}

export default ProfilePic;
