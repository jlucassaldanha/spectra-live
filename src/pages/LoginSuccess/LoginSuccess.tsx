import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function LoginSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      localStorage.setItem("@Spectra:token", token);
      
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [searchParams, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Autenticando na Spectra, aguarde...</p>
    </div>
  );
}