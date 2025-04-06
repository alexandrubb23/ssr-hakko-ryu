import Spinner from '@components/Spinner/Spinner';
import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

type Post = {
  id: number;
  title: string;
  body: string;
};

export const fetchPosts = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    res => res.json()
  );

  return posts;
};

const Home = ({ data }: { data: Post[] }) => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    // initialData: data.length ? data : undefined,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Typography variant='h4'>Error: {error.message}</Typography>;
  }

  return (
    <>
      <Typography color='primary' variant='h2' align='center' data-aos='fade'>
        Hakko Denshin Ryu Ju Jutsu
      </Typography>
      <Typography variant='h3' data-aos='fade' align='center'>
        Senshinkan Romania
      </Typography>
      <Typography variant='h4' data-aos='fade' align='center'>
        {/* {JSON.stringify(posts)} */}
      </Typography>
    </>
  );
};

export default Home;
