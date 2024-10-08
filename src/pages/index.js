import Head from 'next/head';
import NavBar from '../components/NavBar';
import TypeWriter from '../components/Typewriter';
import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout>
      <div >
        <TypeWriter text="Who's Phoebe Stage?" style = "text-light-mid m-10 text-8xl" speed={100}/>
      </div>
    </Layout>
  );
}
