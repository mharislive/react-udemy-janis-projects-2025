type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <main className="flex bg-blue-950 text-gray-300 min-h-dvh">
      <div className="container max-w-5xl mx-auto py-10">{children}</div>
    </main>
  );
};

export default Page;
