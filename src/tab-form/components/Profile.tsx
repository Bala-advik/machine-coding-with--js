import { ErrorType, TabDataType } from "../Tab";

const Profile = ({
  individualTabData,
  setIndividualTabData,
  errors,
}: {
  individualTabData: TabDataType;
  errors: ErrorType;
  setIndividualTabData: any;
}) => {
  const { name, age, email } = individualTabData;

  const handleSetData = (e: any) => {
    setIndividualTabData((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="profile-container">
      <span>
        <label>Name:</label>
        <input
          name="name"
          id="name"
          type="text"
          value={name}
          onChange={handleSetData}
        />
      </span>
      <span>
        <p className="error-text">{errors.name}</p>
      </span>
      <span>
        <label>Age:</label>
        <input
          name="age"
          id="age"
          type="number"
          value={age}
          onChange={handleSetData}
        />
      </span>
      <span>
        <p className="error-text">{errors.age}</p>
      </span>
      <span>
        <label>Email:</label>
        <input
          name="email"
          id="email"
          type="email"
          value={email}
          onChange={handleSetData}
        />
      </span>
      <span>
        <p className="error-text">{errors.email}</p>
      </span>
    </div>
  );
};
export default Profile;
