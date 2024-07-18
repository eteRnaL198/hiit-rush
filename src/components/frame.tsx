type Props = {
  children: React.ReactNode;
  className?: string;
};

const Frame = ({ children, className }: Props) => {
  return (
    <div className={`p-6 rounded-xl shadow-lg ${className}`}>{children}</div>
  );
};

export default Frame;
