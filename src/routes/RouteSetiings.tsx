import Header from "../components/Header/Header";

interface PrivateRouteProps {
  children: React.ReactNode;
  permission?: string;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
