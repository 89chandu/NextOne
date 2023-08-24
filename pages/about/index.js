import Link from 'next/link';
import { Fragment } from 'react';
import { details } from './developer';

function AboutUs() {
  return (
    <Fragment>
      <h1>About Page</h1>
      <ul>
        {details.map(detail => (
          <li key={detail.id}>
            <Link href={`/about/${detail.id}`}>
              {detail.name}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default AboutUs;
