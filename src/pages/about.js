import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import Image from 'next/image';
import TypeWriter from '../components/Typewriter';
export default function About() {

    return (
        <Layout>
          <div >
            <title>Phoebe Stage - About</title>
            <TypeWriter text="About me" textType = "h1" speed={100}/>
            <div className="p-2 flex justify-center drop-shadow-lg">
                <Image
                    src="/me1.png"
                    alt="Picture of me"
                    width="500"
                    height="500"
                    className="bg-mint text-mint fill-current"
                ></Image>
                <div className = "outline outline-2 flex flex-col justify-center">
                    <h2> Hi, I'm Phoebe</h2>
                    <p>Studying - Software Engineering and Mathematics</p>
                    <p>hello again</p>
                </div>
            </div>

          </div>
        </Layout>
      );
    }
    

  