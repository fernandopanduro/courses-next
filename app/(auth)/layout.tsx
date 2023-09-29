type Props = {};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full grid place-items-center">{children}</div>
  );
};

export default AuthLayout;
