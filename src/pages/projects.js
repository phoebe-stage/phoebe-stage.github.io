import NavBar from '../components/NavBar';
import Layout
from '../components/Layout';
import TypeWriter from '../components/Typewriter';
export default function About() {

    return (
        <Layout>
          <div >
            <title>Phoebe Stage - Projects</title>
            <TypeWriter text="Projects" textType = "h1" speed={100}/>
          </div>
        </Layout>
      );
    }
    
