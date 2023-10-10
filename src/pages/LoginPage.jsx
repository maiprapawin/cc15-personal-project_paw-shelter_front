import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-2 w-full h-full">
      <LoginContent />
      <LoginForm />
    </div>
  );
}
