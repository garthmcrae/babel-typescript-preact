import { ReactNode, useEffect } from "react";

export const RefreshOnFocus = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const handleFocus = () => {
      window.location.reload();
    };
    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);
  return <>{children}</>;
};
