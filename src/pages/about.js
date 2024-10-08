import NavBar from '../components/NavBar';
import Layout
from '../components/Layout';
import TypeWriter from '../components/Typewriter';
export default function About() {

    return (
        <Layout>
          <div >
            <title>Phoebe Stage - About</title>
            <TypeWriter text="About" style = "text-light-mid m-10 text-8xl" speed={100}/>
          </div>
        </Layout>
      );
    }
    

  