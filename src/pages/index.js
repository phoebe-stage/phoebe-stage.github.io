import Head from 'next/head';
import NavBar from '../components/NavBar';
import TypeWriter from '../components/Typewriter';
import Layout from '../components/Layout';
export default function Home() {
  return (
    <>
      <Layout>
        <div >
        <title>Phoebe Stage</title>
          <TypeWriter text="Who's Phoebe Stage?" textType = "h1" speed={100}/>
        </div>
      </Layout>
    </>
  );
}
