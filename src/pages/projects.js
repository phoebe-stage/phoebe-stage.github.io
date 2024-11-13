import NavBar from '../components/NavBar';
import Image from "next/image";
import Layout from '../components/Layout';
import ProjectSideBar from '../components/ProjectSideBar';
import TypeWriter from '../components/Typewriter';
import ProjectPage from '../components/ProjectPage';
import Carousel from '../components/Carousel';

export default function About() {

    return (
        <Layout>
          <div className='relative z-10'>
            <title>Phoebe Stage - Projects</title>
            <TypeWriter text="Projects" textType = "h1" speed={100}/>
            <ProjectSideBar></ProjectSideBar>
            <Carousel></Carousel>
          </div>
        </Layout>
      );
    }
    
