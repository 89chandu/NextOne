import {useRouter} from 'next/router';

function Details() {

    const router = useRouter();

   const newsId =  router.query.newsId;

   //send a request to backend api
   // to fetch the news item
   
    return <h1>deatils</h1>
}

export default Details;