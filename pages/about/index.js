import Link from 'next/link';
import { Fragment } from 'react';

// Define your details data
const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function AboutUs() {
  return (
    <Fragment>
      <h1>About Page</h1>
      <ul>
        {details.map(detail => (
          <li key={detail.id}>
            <Link href={`/aboutus/${detail.id}`}>
              <a>{detail.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default AboutUs;
