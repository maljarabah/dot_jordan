import Navbar from "../components/Navbar.jsx"
import Section from "../components/Section"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects.jsx"
import Recommendations from "../components/Recommendations.jsx"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home({ data }) {
    return (
        <>
            <Navbar />

            <Hero />

            <Section sectionId="about" sectionName="About">
                <About data={data.about} />
            </Section>

            <Section sectionId="experience" sectionName="Experience">
                <Experience data={data.experience} />
            </Section>

            <Section sectionId="projects" sectionName="Projects">
                <Projects data={data.projects} />
            </Section>

            <Section sectionId="recommendations" sectionName="Recommendations">
                <Recommendations data={data.recommendations} />
            </Section>

            <Section sectionId="contact" sectionName="Contact">
                <Contact />
            </Section>

            <Footer />
        </>
    )
}

export default Home
