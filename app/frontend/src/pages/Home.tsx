import { useEffect } from 'react';
import Header from '../components/Header';

function Home() {
  const fetchPosts = async () => {
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      const response = await fetch(`${url}/posts`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <p>FEFEFE</p>
    </>
  );
}

export default Home;
