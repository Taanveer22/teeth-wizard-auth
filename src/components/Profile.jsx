const Profile = ({ element }) => {
  // console.log(element);

  return (
    <div>
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{element?.treatment}</h2>
          <p>{element?.firstName + element?.lastName}</p>
          <p>{element?.email}</p>
          <p>{element?.address}</p>
          <p>{element?.date}</p>
          <p>{element?.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
