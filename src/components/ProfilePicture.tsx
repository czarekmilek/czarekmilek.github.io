import { Component } from "react";

export class ProfilePicture extends Component {
  render() {
    return (
      <div className="fixed border-l-2 border-slate-600">
        <img src="./github_profile.jpg" className="h-screen object-cover w-screen"></img>
      </div>
    );
  }
}

export default ProfilePicture;
