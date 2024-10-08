import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import Image from 'next/image';
import TypeWriter from '../components/Typewriter';
export default function About() {

    return (
        <Layout>
          <div >
            <title>Phoebe Stage - About</title>
            <TypeWriter text="About" textType = "h1" speed={100}/>
            <div className="p-2 flex justify-center">
                <Image
                    src="/white-circle.png"
                    alt="Picture of me"
                    width="500"
                    height="500"
                    className="bg-mint text-mint fill-current"
                ></Image>
                <div className = "outline outline-2 flex flex-col justify-center">
                    <h2> Hi, I'm Phoebe</h2>
                    <body1>Studying - Software Engineering and Mathematics</body1>
                    <body1>hello again</body1>
                </div>
            </div>

          </div>
        </Layout>
      );
    }
    

  