import Link from 'next/link';

import { Fragment } from "react";

function NewsPage() {
    return <Fragment>
         <h1>news page</h1>
         <ul>

            <li>
                <Link href="/news">
                    Vaibhav
                </Link>
            </li>

            <li>
                <Link href="/news">
                    Yash
                </Link>
            </li>
            
         </ul>

    </Fragment>
    
}

export default NewsPage;