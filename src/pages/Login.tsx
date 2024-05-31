import AuthImage from '../components/AuthImage';
import { GoogleLoginButton } from '../components/Buttons';
import LoginForm from '../components/LoginForm';

// Main Login component
const Login = () => (
  <section className="flex flex-col lg:flex-row h-screen font-nunito">
    {/* Left side: Authentication image */}
    <AuthImage />
    {/* Right side: Login form and Google login button */}
    <div className="flex-1 flex flex-col items-center justify-center px-4 lg:px-0 pt-8 lg:pt-0">
      <div className="text-center lg:text-left lg:-ml-4">
        {/* Heading */}
        <h1 className="font-nunito text-[#525252] text-[28px] lg:text-[36px] font-bold">
          Login to your Account
        </h1>
        {/* Subheading */}
        <p className="text-[#525252] font-nunito text-base text-[16px]">
          See what is going on with your business
        </p>
        {/* Google login button */}
        <GoogleLoginButton />
        {/* Divider */}
        <h2 className="text-[#a1a1a1] text-center py-8">
          ------------- or Sign in with Email -------------
        </h2>
        {/* Login form */}
        <LoginForm />
      </div>
      {/* Footer: Registration link */}
      <div className="flex lg:flex-row gap-2 text-center text-[16px] lg:text-[18px] text-[#828282] my-8">
        <h1>Not Registered Yet?</h1>
        <h1 className="text-[#7F265B] hover:text-[#7F265B]/95 font-semibold text-[16px] lg:text-[18px] ">
         <a href='#'>Create an account</a> 
        </h1>
      </div>
    </div>
  </section>
);

export default Login;
