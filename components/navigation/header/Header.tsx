interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const Header: React.FC<IHeader> = ({ children, className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="space-x-5 m-5">
        <a href="/" className="hover:underline">
          Gmail
        </a>
        <a href="/" className="hover:underline">
          Store
        </a>
      </div>
      <div className="space-x-5 m-5">
        <a href="/" className="hover:underline">
          Gmail
        </a>
        <a href="/" className="hover:underline">
          Images
        </a>
        <button className="border-1 p-2 px-6 bg-blue-500 rounded text-white">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
