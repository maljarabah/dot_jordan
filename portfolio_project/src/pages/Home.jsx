import Navbar from "../components/Navbar.jsx"
import Section from "../components/Section"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects.jsx"
import Testimonials from "../components/Testimonials.jsx"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home({ data }) {
    return (
        <>
            <Navbar />

            <Hero />

            <Section sectionId="about" sectionName="About">
                <About />
            </Section>

            <Section sectionId="experience" sectionName="Experience">
                <Experience />
            </Section>

            <Section sectionId="projects" sectionName="Projects">
                <Projects />
            </Section>

            <Section sectionId="testimonials" sectionName="Testimonials">
                <Testimonials />
            </Section>

            <Section sectionId="contact" sectionName="Contact">
                <Contact />
            </Section>

            <Footer />
        </>
    )
}

export default Home
