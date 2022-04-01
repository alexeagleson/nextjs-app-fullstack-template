interface IAppShell {}

const AppShell: React.FC<IAppShell> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <header className="mb-48">HEADER!!</header>
      <main>{children}</main>
      <div className="m-auto" />
      <footer>FOOTER!!</footer>
    </div>
  );
};

export default AppShell;
