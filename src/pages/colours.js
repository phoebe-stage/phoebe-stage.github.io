import Head from 'next/head';
import NavBar from '../components/NavBar';
import TypeWriter from '../components/Typewriter';
import Layout from '../components/Layout';
export default function Colours() {
    return (
        <Layout>
            <div className="min-h-screen flex flex-col items-center">
                <div className='flex'>
                    <p className='p-10  text-4xl text-dark bg-dark'> testing </p>
                    <p className='p-10  text-4xl text-dark bg-mid'> testing </p>
                    <p className='p-10  text-4xl text-dark bg-light-mid'> testing </p>
                    <p className='p-10  text-4xl text-dark bg-light'> testing </p>
                    <p className='p-10  text-4xl text-dark bg-accent'> testing </p>
                </div>
                <div className='flex'>
                    <p className='p-10  text-4xl text-mid bg-dark'> testing </p>
                    <p className='p-10  text-4xl text-mid bg-mid'> testing </p>
                    <p className='p-10  text-4xl text-mid bg-light-mid'> testing </p>
                    <p className='p-10  text-4xl text-mid bg-light'> testing </p>
                    <p className='p-10  text-4xl text-mid bg-accent'> testing </p>
                </div>
                <div className='flex'>
                    <p className='p-10  text-4xl text-light-mid bg-dark'> testing </p>
                    <p className='p-10  text-4xl text-light-mid bg-mid'> testing </p>
                    <p className='p-10  text-4xl text-light-mid bg-light-mid'> testing </p>
                    <p className='p-10  text-4xl text-light-mid bg-light'> testing </p>
                    <p className='p-10  text-4xl text-light-mid bg-accent'> testing </p>
                </div>
                <div className='flex'>
                    <p className='p-10  text-4xl text-light bg-dark'> testing </p>
                    <p className='p-10  text-4xl text-light bg-mid'> testing </p>
                    <p className='p-10  text-4xl text-light bg-light-mid'> testing </p>
                    <p className='p-10  text-4xl text-light bg-light'> testing </p>
                    <p className='p-10  text-4xl text-light bg-accent'> testing </p>
                </div>
                <div className='flex'>
                    <p className='p-10  text-4xl text-accent bg-dark'> testing </p>
                    <p className='p-10  text-4xl text-accent bg-mid'> testing </p>
                    <p className='p-10  text-4xl text-accent bg-light-mid'> testing </p>
                    <p className='p-10  text-4xl text-accent bg-light'> testing </p>
                    <p className='p-10  text-4xl text-accent bg-accent'> testing </p>
                </div>

            </div>
        </Layout>
      );
 
}
