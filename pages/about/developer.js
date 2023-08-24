import { useRouter } from 'next/router';
import { Fragment } from 'react';

// Define your details data
const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function Developer() {
  const router = useRouter();
  const developerId = parseInt(router.query.id); // Parse the id from the URL

  // Find the developer in the details array based on the id
  const developer = details.find(item => item.id === developerId);

  return (
    <Fragment>
      {developer ? (
        <div>
          <h1>{developer.name}</h1>
          <p>{developer.role}</p>
        </div>
      ) : (
        <h1>Developer not exist</h1>
      )}
    </Fragment>
  );
}

export { details, Developer };
