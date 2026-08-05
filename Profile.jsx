function Profile(props) {
  return (
    <>
      <div className="profile_card">
        <img
          className={props.classname}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        />
        <div>
          <h4>{props.employee}</h4>
          <p>{props.role}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;