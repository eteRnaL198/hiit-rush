type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <main className="flex flex-col text-2xl w-5/6 mt-6 mx-auto">
      {children}
    </main>
  );
};

export default Main;
