function Profile(props) {
  return (
    <>
      <div className="profile_card">
        <img
          className={props.classname}
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
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