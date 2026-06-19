interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-full max-w-360 mx-auto px-5 lg:px-27">{children}</div>
  );
}
