import auth from "../assets/auth.webp";

const AuthImage = () => (
  <div className="flex-1">
    <img
      src={auth}
      alt="auth cover"
      className="h-64 lg:h-screen w-screen object-cover"
    />
  </div>
);

export default AuthImage;
