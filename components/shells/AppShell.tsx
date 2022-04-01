import Footer from '../navigation/footer/Footer';
import Header from '../navigation/header/Header';

interface IAppShell {}

const AppShell: React.FC<IAppShell> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header className="mb-48" />
      <main>{children}</main>
      <div className="m-auto" />
      <Footer />
    </div>
  );
};

export default AppShell;
