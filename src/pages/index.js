import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-dark items-center">

      <NavBar />
        <title>Phoebe Stage</title>
        <link rel="icon" href="/favicon.ico" />

      <main>
        <h1 className="text-light-mid m-10 text-8xl">
          Phoebe Stage
        </h1>

      </main>

      <footer>

      </footer>


    </div>
  );
}
