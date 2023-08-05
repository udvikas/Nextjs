import { useRouter } from "next/router";
import { details } from "./index";

function Developer() {
  const router = useRouter();
  const { id } = router.query;
  // Find the developer object from the details array based on devId
  const developer = details.find((dev) => dev.id === parseInt(id));

  return (
    <>
      <h1>
        {developer ? (
          <p>
            {developer.name} - {developer.role}
          </p>
        ) : (
          <p>Developer not found.</p>
        )}
      </h1>
    </>
  );
}
export default Developer;
