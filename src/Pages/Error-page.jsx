import { useRouteError } from "react-router-dom";
import "./Error-page.css";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="errorTitle">Error</h1>
      <img src="./images/abra.png"/>
      <p className="errorMessage">¿Se te ha perdido un Pokemon? </p>
    </div>
  );
}

export default ErrorPage;