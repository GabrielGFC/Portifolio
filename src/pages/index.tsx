import { useEffect, useRef, useContext } from 'react';
import './style.scss';

/* ─────────── Components ─────────── */
import Header from '../components/header';
import Footer from '../components/footer';

/* ─────────── Assets ─────────── */
import LinkedInLogo from '../assets/images/linkedin.svg';
import GithubLogo   from '../assets/images/github.svg';
import MailLogo     from '../assets/images/mail.svg';
import CodeIcon     from '../assets/images/code.svg';
import ToolIcon     from '../assets/images/tool.svg';
import Divisor      from '../assets/images/experience-divisor.svg';
import Arrow        from '../assets/images/arrow.svg';

/* ─────────── Content (JSON) ─────────── */
import { LanguageContext } from '../contexts/LanguageContext';
import English    from '../mocks/english.json';

/* inferências de tipo a partir do JSON */
type Lang = typeof English;
type Job     = Lang['section3']['jobData'][number];
type Project = Lang['section4']['projects'][number];

// eslint-disable-next-line no-undef
const MainPage: React.FC = () => {
    // Consome o contexto de idioma global
    const { data } = useContext(LanguageContext);

    /* refs para animações */
    const sectionRef      = useRef<HTMLDivElement>(null);
    const divisorRef      = useRef<HTMLDivElement>(null);
    const jobBoxesRef     = useRef<Array<HTMLDivElement | null>>([]);
    const projectBoxesRef = useRef<Array<HTMLDivElement | null>>([]);

    /* animações IntersectionObserver */
    useEffect(() => {
        const section  = sectionRef.current;
        const divisor  = divisorRef.current;

        if (!section || !divisor) return;

        const sectionObs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add('show');
                    sectionObs.unobserve(section);
                }
            },
            { threshold: 0.4 }
        );

        const divisorObs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    jobBoxesRef.current.forEach((box, i) =>
                        box && setTimeout(() => box.classList.add('show'), i * 200)
                    );
                    divisorObs.unobserve(divisor);
                }
            },
            { threshold: 0.3 }
        );

        const projectObs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    projectBoxesRef.current.forEach((box, i) =>
                        box && setTimeout(() => box.classList.add('show'), i * 200)
                    );
                    projectObs.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );

        sectionObs.observe(section);
        divisorObs.observe(divisor);
        projectBoxesRef.current.forEach(box => box && projectObs.observe(box));

        return () => {
            sectionObs.disconnect();
            divisorObs.disconnect();
            projectObs.disconnect();
        };
    }, []);

    /* ─────────── TSX ─────────── */
    return (
        <div className="body-container">
            <Header />

            {/* SECTION 1 – Hero */}
            <div id="section1" className="hero-container">
                <h1 dangerouslySetInnerHTML={{ __html: data.section1.title }} />
                <h3 dangerouslySetInnerHTML={{ __html: data.section1.subtitle }} />

                <div className="contacts-row">
                    <a
                        href="/gabriel_fernandes_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-button"
                    >
                        <button>{data.section1.contacts.resumeButton}</button>
                    </a>

                    <div className="divider-line" />

                    <div className="social-media">
                        <a href={data.section1.contacts.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInLogo} alt="LinkedIn" />
                        </a>
                        <a href={data.section1.contacts.socialMedia.github} target="_blank" rel="noopener noreferrer">
                            <img src={GithubLogo} alt="GitHub" />
                        </a>
                        <a href={data.section1.contacts.socialMedia.email}>
                            <img src={MailLogo} alt="Mail" />
                        </a>
                    </div>
                </div>
            </div>

            {/* SECTION 2 – Skills & Tools */}
            <div ref={sectionRef} id="section2" className="capabilities-container">
                <div className="skills-box">
                    <div className="title">
                        <img src={CodeIcon} alt="Code" />
                        <h3>{data.section2.skillsBox.title}</h3>
                    </div>
                    {data.section2.skillsBox.skills.map((skill:string, i) => (
                        <p key={i}>{skill}</p>
                    ))}
                </div>

                <div className="tools-box">
                    <div className="title">
                        <img src={ToolIcon} alt="Tools" />
                        <h3>{data.section2.toolsBox.title}</h3>
                    </div>

                    <p>
                        Front-end<br />
                        <span>{data.section2.toolsBox.tools.frontEnd}</span>
                    </p>
                    <p>
                        Back-end<br />
                        <span>{data.section2.toolsBox.tools.backEnd}</span>
                    </p>
                    <p>
                        {data.section2.toolsBox.interface}
                        <br />
                        <span>{data.section2.toolsBox.tools.design}</span>
                    </p>
                </div>

            </div>


            <div id="section3" className="experience-container">
                <h2>{data.section3.title}</h2>

                <div className="divisor" ref={divisorRef}>
                    <img src={Divisor} alt="Divider" />
                </div>

                {data.section3.jobData.map((job: Job, idx) => (
                    <div
                        key={idx}
                        className="job-box"
                        ref={el => (jobBoxesRef.current[idx] = el)}
                    >
                        <p>1  <span>var</span> {job.job} = &#123;</p>
                        <p>2   {data.section3.categories[0]}: <span dangerouslySetInnerHTML={{ __html: job.title }} /></p>
                        <p>3   {data.section3.categories[1]}: <span dangerouslySetInnerHTML={{ __html: job.startDate }} /></p>
                        <p>4   {data.section3.categories[2]}: <span dangerouslySetInnerHTML={{ __html: job.endDate }} /></p>
                        <p>5   {data.section3.categories[3]}: <span dangerouslySetInnerHTML={{ __html: job.company }} /></p>
                        <p>6  &#125;</p>
                    </div>
                ))}
            </div>

            {/* SECTION 4 – Projects */}
                <div id="section4" className="project-container">
                    <h2>{data.section4.title}</h2>

                    <div className="line-projects">
                        {data.section4.projects.map((project: Project, i) => (
                            <div
                                key={i}
                                className="project-box"
                                ref={el => (projectBoxesRef.current[i] = el)}
                            >
                                <p>{project.title}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <p key={idx}>{tag}</p>
                                    ))}
                                </div>

                                <p>{project.description}</p>

                                <div className={project.button ? 'project-button-arrow' : 'project-buttons'}>
                                    {project.button ? (
                                        <button>
                                            <a href={project.button.link} target="_blank" rel="noopener noreferrer">
                                                <img src={Arrow} alt="Go" />
                                            </a>
                                        </button>
                                    ) : (
                                        project.buttons?.map((btn, idx) => (
                                            <button key={idx}>
                                                <a href={btn.link} target="_blank" rel="noopener noreferrer">
                                                    {btn.text}
                                                    <img src={Arrow} alt="Go" />
                                                </a>
                                            </button>
                                        ))
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            <Footer />
        </div>
    );
};

export default MainPage;
