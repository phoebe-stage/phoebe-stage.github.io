import Head from 'next/head';
import NavBar from '../components/NavBar';
import TypeWriter from '../components/Typewriter';
import Layout from '../components/Layout';
import Colour from '../components/ColourTile';

export default function Colours() {
    return (
        <Layout>
            <div className='w-full flex justify-center mb-20 drop-shadow-2xl'>
            <div className="w-5/6 flex-col content-evenly items-center overflow-x-hidden overflow-y-hidden">
                <div className='flex 2-full'>
                    <Colour textcolour="dark" backgroundcolour="dark" />
                    <Colour textcolour="dark" backgroundcolour="mid" />
                    <Colour textcolour="dark" backgroundcolour="light-mid" />
                    <Colour textcolour="dark" backgroundcolour="light" />
                    <Colour textcolour="dark" backgroundcolour="accent" />
                </div>
                <div className='flex'>
                    <Colour textcolour="mid" backgroundcolour="dark" />
                    <Colour textcolour="mid" backgroundcolour="mid" />
                    <Colour textcolour="mid" backgroundcolour="light-mid" />
                    <Colour textcolour="mid" backgroundcolour="light" />
                    <Colour textcolour="mid" backgroundcolour="accent" />
                </div>
                <div className='flex'>
                    <Colour textcolour="light-mid" backgroundcolour="dark" />
                    <Colour textcolour="light-mid" backgroundcolour="mid" />
                    <Colour textcolour="light-mid" backgroundcolour="light-mid" />
                    <Colour textcolour="light-mid" backgroundcolour="light" />
                    <Colour textcolour="light-mid" backgroundcolour="accent" />
                </div>
                <div className='flex'>
                    <Colour textcolour="light" backgroundcolour="dark" />
                    <Colour textcolour="light" backgroundcolour="mid" />
                    <Colour textcolour="light" backgroundcolour="light-mid" />
                    <Colour textcolour="light" backgroundcolour="light" />
                    <Colour textcolour="light" backgroundcolour="accent" />
                </div>
                <div className='flex'>
                    <Colour textcolour="accent" backgroundcolour="dark" />
                    <Colour textcolour="accent" backgroundcolour="mid" />
                    <Colour textcolour="accent" backgroundcolour="light-mid" />
                    <Colour textcolour="accent" backgroundcolour="light" />
                    <Colour textcolour="accent" backgroundcolour="accent" />
                </div>
            </div>
            </div>
        </Layout>
      );
 
}
