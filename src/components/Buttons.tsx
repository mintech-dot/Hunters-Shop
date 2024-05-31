import google from "../assets/google.svg";

export const GoogleLoginButton = () => (
  <button className="flex items-center justify-center gap-2 w-full md:w-[420px] py-2.5 bg-white border-2 border-[#DED2D9] hover:border-[#7F265B] text-[#828282] font-bold text-[14px] rounded-lg mt-8">
    <img src={google} alt="Google logo" />
    Continue with Google
  </button>
);

export const LoginButton = () => (
    <button type="submit" className="md:w-[420px] w-full h-12 bg-[#7F265B] hover:bg-[#7F265B]/95 text-white font-extrabold text-[18px] rounded-lg mt-4 lg:mt-8">
      Login
    </button>
  );