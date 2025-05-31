import './About.css';
import Footer from './Footer';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <section className="about-section">
          <h2>About Me</h2>
          <p>
              I am a junior enrolled in the highly selective Magnet (Honors) Math, Science, and Computer Science program at Blair High School, driven by a passion for learning and an interest in pursuing a career in computer science. Currently, I’m seeking a summer research internship in Computer Science. Beyond academics, I am an accomplished violinist, showcasing my dedication to the arts. In my free time, I pursue creative activities such as soap-making and various forms of digital art. 
          </p>
          <h3>Skills</h3>
          <ul>
            <li><strong>Programming:</strong> Python, Java, Julia, React, HTML/CSS</li>
            <li><strong> Skills:</strong> Excel/Google Sheets, Video Editing </li>
            <li><strong>Interests:</strong> Computer Science, AI, Robotics, Human Computer Interaction, Assitive Devices, Prosthetics</li>
          </ul>
          <br></br>
          <h2>Education</h2>
          <h3>Montgomery Blair High School</h3>
          <ul>
              <li>GPA: 4.0/4.0</li>
              <li>Relevant Coursework: AP Computer Science A, AP Calculus BC, AP Statistics, Foundations of Technology, Advanced Analysis of Algorithms, Modeling and Simulation, Future of Programming, Computational Methods, Quantum Physics</li>
              <p> Enrolled in the Magnet (Honors) Math, Science, and Computer Science program, a program designed to offer “accelerated, interdisciplinary courses in science, mathematics, and computer science for highly able students”. It covers all introductory sciences in the first two years of high school, allowing students to pursue higher level science and math courses. </p>
          </ul>

          <br></br>
          <h2>Extracurriculars</h2>
        </section>

        <section className="extracurricular-section">
          <div className="extracurricular-grid">
            <div className="extracurricular-card" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}techconnect.jpeg)` }}>
              <div className="card-overlay">
                <h3>Tech Connect Program</h3>
                <p>As the leader of the Technology Help Desk operations at Montgomery County Wheaton Senior Center, I provide tech support to the 55+ community, regularly helping 5-6 senior citizens every week. I help seniors navigate a range of devices, including cell phones, computers, and tablets. I instruct seniors one on one, enhancing their digital literacy and technological proficiency. I also create and present tailored technology classes for the 55+ community, covering topics such as online safety, streaming services, online retail, and ChatGPT.</p>
              </div>
              <div className="card-text">
                <h3>Tech Connect Program</h3>
                <p>2022 - Present</p>
              </div>
            </div>

            <div className="extracurricular-card" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}graceapl.png)` }}>
              <div className="card-overlay">
                <h3>Johns Hopkins APL Internship</h3>
                <p>I currently assist with research on applying reinforcement learning (RL) to real world challenges, including coastal defense and HVAC optimization. My work involves writing functions to assist with the training of the agent. Over the summer, I also developed a comprehensive slideshow on offline RL to teach others about the topic, deepening my own understanding. This internship has strengthened my abilities in machine learning and communicating technical ideas to others.</p>
              </div>
              <div className="card-text">
                <h3>Johns Hopkins APL Internship</h3>
                <p>June 2024 - present</p>
              </div>
            </div>

            <div className="extracurricular-card" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}robots.JPG)` }}>
              <div className="card-overlay">
                <h3>Blair HS Robotics Team</h3>
                <p>As a member of the Mechanics Team, I work constructing and assembling practice elements for the robot to interact with during gameplay. I also help design and build structural components for the robot to improve robot performance and team strategy. Two weeks ago, our team won a qualification competition, which was very exciting and a payoff for all the work our team put into the robot’s design and strategy.</p>
              </div>
              <div className="card-text">
                <h3>Blair HS Robotics Team</h3>
                <p>2024 - Present</p>
              </div>
            </div>

            <div className="extracurricular-card" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}violin.jpg)` }}>
              <div className="card-overlay">
                <h3>Blair Symphonic Orchestra</h3>
                <p>I play an instrument in the school's orchestra, performing at concerts and school events. Rehearsing and playing in an ensemble has helped me improve my technical skills and collaborate with other musicians. Last month, our orchestra performed at adjudication - a judged performance - and earned straight 1 ratings, the highest possible score.</p>
              </div>
              <div className="card-text">
                <h3>Blair Symphonic Orchestra</h3>
                <p>2021 - Present</p>
              </div>
            </div>

            <div className="extracurricular-card" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}pit.jpg)` }}>
              <div className="card-overlay">
                <h3>Blair Pit Orchestra</h3>
                <p>I played in the pit orchestra for two of my school's musical productions, providing live instrumentation and accompaniment. It was a fun challenge adapting to a live theatrical setting and working with the cast to bring the musical to life.</p>
              </div>
              <div className="card-text">
                <h3>Blair Pit Orchestra</h3>
                <p>Spring 2023 and 2024</p>
              </div>
            </div>

            <div className="extracurricular-card" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}solidground.jpg)` }}>
              <div className="card-overlay">
                <h3>Blair Solid Ground Co-president</h3>
                <p> I help plan and run weekly meetings for 40+ members focused on fellowship and spiritual growth. During these meetings, I facilitate small group discussions and create a space for meaningful conversations and connections.</p>
              </div>
              <div className="card-text">
                <h3>Blair Solid Ground Co-president</h3>
                <p>2022 - Present</p>
              </div>
            </div>
            <div className="extracurricular-card" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}blairwebsite.png)` }}>
              <div className="card-overlay">
                <h3>Blair Sysops</h3>
                <p>As a memeber of Blair Sysops, I help maintain and update the Blair HS website, ensuring it runs smoothly, stays secure, and meets the needs of the community.</p>
              </div>
              <div className="card-text">
                <h3>Blair Sysops</h3>
                <p>2024 - Present</p>
              </div>
            </div>
            <div className="extracurricular-card" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}snhs.png)` }}>
              <div className="card-overlay">
                <h3>Science National Honor Society</h3>
                <p> I help run activities that promote scientific inquiry and STEM education for the school community. Recently, during STEM week at my high school, we ran a series of different activities for each day of the week to engage students. I helped run a can implosions activity, where students heated up a small amount of water in a can on a hot plate and then quickly submerged the can into cold water, causing it to collapse due to the sudden pressure change.</p>
              </div>
              <div className="card-text">
                <h3>Science National Honor Society</h3>
                <p>2024 - Present</p>
              </div>
            </div>
            <div className="extracurricular-card" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}nhs.png)` }}>
              <div className="card-overlay">
                <h3>National Honor Society</h3>
                <p>I take part in service projects and activities that promote academic excellence and community involvement. Recently, we helped organize a coat drive to help provide clothing for people who need it, a great way to give back to the community. Through the NHS, I’ve had the chance to support meaningful volunteer work.</p>
              </div>
              <div className="card-text">
                <h3>National Honor Society</h3>
                <p>2024 - Present</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
