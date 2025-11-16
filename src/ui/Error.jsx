import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  //get the error
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong !!!</h1>
      <p>{error.data || error.message}</p>
      {/* button to be styled as a link */}
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
