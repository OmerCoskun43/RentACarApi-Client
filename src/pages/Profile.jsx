import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  //   console.log("user :>> ", user);
  return (
    <div
      className="
    flex
        gap-2
    p-5
    mt-[30px]
    mb-[35px]
    bg-slate-200
    rounded-2xl
    w-[350px]
    md:w-[500px]
   
    bg-white
    mx-auto    
    justify-between
    items-center
    shadow-3xl
    "
    >
      <div>
        <img
          className="w-[150px] h-[150px] rounded-full mx-auto shadow-avatar"
          src={
            user?.image ||
            "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Download.png"
          }
          alt=""
        />
      </div>
      <div>
        <h1 className="text-lg sm:text-2xl font-bold text-center text-indigo-600">
          Profile
        </h1>
        <h3>
          Name :{" "}
          {user?.username?.charAt(0).toUpperCase() + user.username?.slice(1)}
        </h3>
        <h3>Email : {user?.email}</h3>
        <h3>Password : {user?.password?.slice(0, 20) + "..."}</h3>
        <h3>Admin : {user?.isAdmin ? "Yes" : "No"}</h3>
        <h3>Account Date: {user?.createdAt?.split("T")[0]}</h3>
        <h3>Id : {user?._id}</h3>
      </div>
    </div>
  );
};

export default Profile;
