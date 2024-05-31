import { EmailLabel, PasswordLabel, RememberMeLabel, ForgotPasswordLabel } from './Labels';
import { LoginButton } from './Buttons';
const LoginForm = () => (
  <form className="text-left">
    <div className="grid">
      <EmailLabel />
      <input
        type="email"
        placeholder="mail@abc.com"
        className="md:w-[420px] px-4 text-[#828282] text-[14px] h-12 border-2 border-[#DED2D9] focus:border-[#7F265B] rounded-lg" required
      />
      <PasswordLabel />
      <input
        type="password"
        placeholder="Password"
        className="h-12 md:w-[420px] text-[#828282] text-[14px] px-4 border-2 border-[#DED2D9] focus:border-[#7F265B] rounded-lg" required
      />
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            value=""
            className="w-3 h-3 text-[#7F265B] bg-[#DED2D9] border rounded"
          />
          <RememberMeLabel />
        </div>
        <ForgotPasswordLabel />
      </div>
    </div>
    <LoginButton />
  </form>
);

export default LoginForm;
