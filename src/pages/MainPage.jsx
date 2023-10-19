import Background from "../features/auth/Background";
import Button from "../features/auth/Button";

export default function MainPage() {
  return (
    <Background
      backgroundImage="https://images.unsplash.com/photo-1597633611385-17238892d086?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      details={
        <>
          <div>Welcome to Paw Shelter</div>
          <div>
            Join us in giving a loving home <br /> to countless dogs in need of
            a second chance
          </div>
          <div className="text-[36px]">
            <Button
              bg="bg-[#0EA5E9]"
              text="text-white"
              action="Sign Up"
              padding="px-[30px] py-[14px]"
            />
            <Button
              bg="bg-[#FB7185]"
              text="text-white"
              action="Log In"
              padding="px-[30px] py-[14px]"
            />
          </div>
        </>
      }
    />
  );
}
