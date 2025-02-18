const UserProfile = ({ user }) => (
    <div>
      <p style={{textAlign: "center"}}>
        Hello, {user.name}, {user.age} tuổi
      </p>
    </div>
  );
  
export default UserProfile;
  