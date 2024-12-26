import profileImage from './assets/images/PersonalPhoto.jpg';
import React from 'react';
import { 
  Github, Linkedin, Twitter, Database, 
  Code, BookOpen, FileText, Award, MessageCircle,
  Menu, X
} from 'lucide-react';

// Types remain the same as in original code
interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  kaggle: string;
}

interface Technology {
  name: string;
  icon: React.ReactNode;
}

interface ProfileInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  education: Array<{
    institution: string;
    degree: string;
    period: string;
    details: string[];
  }>;
  experiences: Array<{
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    demoLink?: string;
  }>;
  certificates: Array<{
    name: string;
    issuer: string;
    date: string;
    link: string;
  }>;
  technologies: Technology[];
  interests: string[];
  socialLinks: SocialLinks;
}

const Portfolio: React.FC = () => {
  // Profile info remains the same as in original code
  const profileInfo: ProfileInfo = {
    name: "Walid Alsafadi",
    title: "AI and Data Science Student",
    location: "Palestine, Gaza",
    email: "walid.k.alsafadi@gmail.com",
    phone: "+972 59-334-4411",
    summary: "I am a passionate Data Science and Artificial Intelligence student with a focus on machine learning, deep learning, natural language processing (NLP), and computer vision. Skilled in implementing AI solutions using Python, TensorFlow, and PyTorch. I am experienced in tasks like regression analysis, time series forecasting, and sentiment analysis. Moreover, I am experienced in API integration, web scraping, and leveraging large language models (LLMs). Aiming to eventually develop transformative AI solutions to tackle global challenges.",
    
    education: [
      {
        institution: "University College of Applied Sciences",
        degree: "Bachelor of Science - BS, Data Science and Artificial Intelligence",
        period: "Aug 2022 - Present",
        details: ["I continued my journey in Artificial Intelligence and Data Science at UCAS after transferring from AURAK. I served as the Project Manager for the Engineering Club during Fall 2023, though activities were paused due to the war in Gaza. My efforts were recognized with a 30% scholarship for Fall 2023, awarded for outstanding academic performance, including a Spring 2022 grade of 93.26%. Unfortunately, due to interruptions caused by the war in Gaza, my graduation has been delayed to 2026."]
      },
      {
        institution: "American University of Ras Al Khaimah",
        degree: "Bachelor of Science - BS, Artificial Intelligence",
        period: "Aug 2021 - Jun 2022",
        details: ["During my time at AURAK, I excelled both academically and in extracurricular activities. I won first place in the UAE Inter-University FIFA Tournament and was listed on the Dean’s List for Fall 2021, ranking among the top 7 AI students. I successfully completed two semesters (Fall 2021 and Spring 2022) with a GPA of 3.5 across 33 credit hours before transferring to UCAS. My performance also earned me a 20% scholarship for the entire BS program, based on my high school achievement of 91.67%."]
      },
      {
        institution: "Al-Jawdah Boys’ School for Secondary Education",
        degree: "Advanced Stream, High School Degree",
        period: "Sep 2018 - Jun 2021",
        details: [
          "I graduated with high distinction, scoring 91.67% in the Advanced Stream—the most challenging academic track in public schools. Despite the challenges posed by the COVID-19 pandemic, I successfully completed Grade 12, developing strong self-learning skills along the way."
        ]
      }
    ],

    experiences: [
      {
        title: "Project Manager of Engineering Club",
        company: "University College of Applied Sciences",
        period: "Aug 2023 - Oct 2023",
        responsibilities: [
          "Managing and developing projects in the Club",
          "Providing new ideas and techniques to the team"
        ]
      }
    ],

    projects: [
      {
        name: "Sales Forecasting Using Time Series Analysis with XGBoost",
        description: "This project aims to forecast sales for thousands of product families sold at Favorita stores using historical data. The analysis is performed using XGBoost, a powerful machine learning algorithm. Through feature engineering and model tuning, the project provides both short-term and long-term sales predictions, with a focus on generating a 30-day forecast.",
        technologies: ["XGBoost", "Time Series Analysis", "Feature Engineering", "Model Optimization"],
        githubLink: "https://github.com/WalidAlsafadi/Store-Sales-TS-Forecasting",
        demoLink: ""
      },
      {
        name: "Twitter Sentiment Analysis using Web scraping, and LLMs",
        description: "Analyzes sentiment from tweets related to Gaza using GroqCloud's Llama-3 LLM model and Selenium for data collection. This project aims to provide insights into public sentiment and emotional tone regarding Gaza.",
        technologies: ["Llama3-70b-8192", "LLM", "Web Scraping", "NLP"],
        githubLink: "https://github.com/WalidAlsafadi/TwitterSentiment-Llama3",
        demoLink: ""
      },
      {
        name: "BBC News",
        description: "Self updating dataset. It collects RSS Feeds from BBC News using a Kernel: https://www.kaggle.com/gpreda/bbc-news-rss-feeds. Use the data to analyze the sentiment of news, from title and description.",
        technologies: ["Sentiment Analysis", "EDA", "Text Processing"],
        githubLink: "https://github.com/WalidAlsafadi/BBC_News",
        demoLink: ""
      },
      {
        name: "Red Wine Quality",
        description: "Practice dataset for regression or classification modelling.",
        technologies: ["Machine Learning", "Random Forest", "EDA"],
        githubLink: "https://github.com/WalidAlsafadi/Red-Wine-Quality",
        demoLink: ""
      },
      {
        name: "Indian Diabetes Analysis",
        description: "Predict whether or not a patient has diabetes, based on certain diagnostic measurements included in the dataset.",
        technologies: ["Model Selection", "Data Processing", "EDA"],
        githubLink: "https://github.com/WalidAlsafadi/Indian-Diabetes",
        demoLink: ""
      },
      {
        name: "UFO Sighting",
        description: "Perform data analysis on over 80,000 reports of unidentified flying object reports in the last century.",
        technologies: ["Data Visualization", "Plotly", "Data Precessing"],
        githubLink: "https://github.com/WalidAlsafadi/UFO-Sighting",
        demoLink: ""
      },
      {
        name: "House Prices",
        description: "Predict the finale sale price for each house using 79 explanatory variables describing (almost) every aspect of residential homes in Ames, Iowa. ",
        technologies: ["Machine Learning", "Data Processing", "EDA"],
        githubLink: "https://github.com/WalidAlsafadi/House-Prices",
        demoLink: ""
      },
      {
        name: "Divorce Predictors Dataset",
        description: "A total of 170 couples are included in this dataset, along with the Divorce Predictor Scale variables (DPS), a questionnaire of 54 questions, A five-point scale was used to measure all responses.",
        technologies: ["Machine Learning", "EDA", "Data Visualization", "Cross-Validation"],
        githubLink: "https://github.com/WalidAlsafadi/Divorce-Predictors-Dataset",
        demoLink: ""
      },
      {
        name: "Human Resources SQL DataBase ",
        description: "Use DML and DDL scripts to build a simple HR SQL project.",
        technologies: ["Oracle SQL", "Database"],
        githubLink: "https://github.com/WalidAlsafadi/HR-sqlDB",
        demoLink: ""
      },
      {
        name: "Library Website",
        description: "Website that can display dynamic books while also allowing administrators to modify, delete, or add books in the SQL database.",
        technologies: ["ASP.NET", "Web Development", "Database", "Visual Studio"],
        githubLink: "https://github.com/WalidAlsafadi/Library-Website",
        demoLink: ""
      }
    ],

    certificates: [
      {
        name: "Machine Learning Specialization",
        issuer: "DeepLearning.AI",
        date: "Nov 2024",
        link: "https://coursera.org/verify/specialization/9HFC164M2NWT"
      },
      {
        name: "Advanced Python",
        issuer: "Gaza Sky Geeks",
        date: "Jun 2023",
        link: "https://drive.google.com/file/d/1kPkpdcIBkuoRo8bw8UF7BRApJ6XtKZdA/view?usp=sharing"
      },
      {
        name: "Introduction to Data Analytics",
        issuer: "Simplilearn",
        date: "Apr 2023",
        link: "https://simpli-web.app.link/e/Wzy0WEzClzb"
      },
      {
        name: "Programming for Everybody (Getting Started with Python)",
        issuer: "University of Michigan",
        date: "Mar 2023",
        link: "https://coursera.org/verify/UBW9B3K4WKWL"
      }
    ],

    technologies: [
      { name: "Deep Learning", icon: <Code className="text-blue-500" /> },
      { name: "Natural Language Processing (NLP)", icon: <Code className="text-orange-500" /> },
      { name: "Machine Learning", icon: <Code className="text-orange-600" /> },
      { name: "Microsoft Azure", icon: <Code className="text-blue-600" /> },
      { name: "TensorFlow", icon: <Code className="text-green-500" /> },
      { name: "PyTorch", icon: <Code className="text-red-500" /> },
      { name: "Scikit-learn", icon: <Code className="text-red-500" /> },
      { name: "NumPy", icon: <Code className="text-red-500" /> },
      { name: "Pandas", icon: <Code className="text-red-500" /> },
      { name: "Matplotlib", icon: <Code className="text-red-500" /> },
      { name: "NLTK", icon: <Code className="text-red-500" /> },
      { name: "Jupyter Notebooks", icon: <Code className="text-red-500" /> }
    ],

    interests: [
      "Advanced Machine Learning",
      "Deep Learning Architectures",
      "Computer Vision",
      "Natural Language Processing",
      "AI Ethics",
      "Data Visualization"
    ],

    socialLinks: {
      github: "https://github.com/WalidAlsafadi",
      linkedin: "https://www.linkedin.com/in/walidalsafadi/",
      twitter: "https://twitter.com/walidalsafadi",
      kaggle: "https://kaggle.com/walidkw"
    }
  };

  const socialIcons: Record<keyof SocialLinks, React.ReactNode> = {
    github: <Github size={32} />,
    linkedin: <Linkedin size={32} />,
    twitter: <Twitter size={32} />,
    kaggle: <Database size={32} />
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const sections = ['home', 'education', 'experience', 'projects', 'certificates', 'skills', 'contact'];
  const [activeSection, setActiveSection] = React.useState('home');

  // Handle scroll spy
  React.useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section)
      );
      
      const currentSection = sectionElements.find((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-friendly Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold text-blue-600">{profileInfo.name}</div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize transition-colors duration-300 ${
                  activeSection === section 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block w-full text-left px-4 py-2 capitalize ${
                  activeSection === section 
                    ? 'text-blue-600 font-bold bg-blue-50' 
                    : 'text-gray-600'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="container mx-auto px-4 md:px-6">
        {/* Hero Section with integrated summary */}
        <section id="home" className="py-12 md:py-20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
            <div className="md:col-span-1">
              <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-blue-200 to-blue-400 rounded-full shadow-lg overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-4 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{profileInfo.name}</h1>
              <p className="text-lg md:text-xl text-blue-600 font-medium">{profileInfo.title}</p>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {profileInfo.summary}
              </p>

              <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Code size={20} className="text-blue-500" />
                  <span>{profileInfo.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Code size={20} className="text-blue-500" />
                  <a href={`mailto:${profileInfo.email}`} className="hover:text-blue-600">
                    {profileInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex justify-center md:justify-start space-x-4">
                {(Object.keys(profileInfo.socialLinks) as Array<keyof SocialLinks>).map((platform) => (
                  <a 
                    key={platform}
                    href={profileInfo.socialLinks[platform]} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {socialIcons[platform]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 md:py-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
            <BookOpen className="mr-3 text-blue-600" /> Education
          </h2>
          <div className="space-y-4 md:space-y-6">
            {profileInfo.education.map((edu, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg md:text-xl font-semibold">{edu.institution}</h3>
                <p className="text-blue-600">{edu.degree}</p>
                <p className="text-sm text-gray-500 mt-1">{edu.period}</p>
                {edu.details && <p className="mt-2 text-gray-600 text-sm md:text-base">{edu.details}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
            <Code className="mr-3 text-blue-600" /> Experience
          </h2>
          <div className="space-y-4 md:space-y-6">
            {profileInfo.experiences.map((exp, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg md:text-xl font-semibold">{exp.title}</h3>
                <p className="text-blue-600">{exp.company}</p>
                <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                <ul className="mt-3 md:mt-4 space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start text-sm md:text-base">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
            <FileText className="mr-3 text-blue-600" /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {profileInfo.projects.map((project, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{project.name}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-50 text-blue-600 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 text-sm md:text-base"
                    >
                      <Github className="mr-2" size={16} /> GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 text-sm md:text-base"
                    >
                      <Code className="mr-2" size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-12 md:py-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
            <Award className="mr-3 text-blue-600" /> Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {profileInfo.certificates.map((cert, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-blue-600 text-sm md:text-base">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mt-1 mb-3 md:mb-4">{cert.date}</p>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm md:text-base"
                >
                  <Award className="mr-2" size={16} />
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-20 max-w-4xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
                <Code className="mr-3 text-blue-600" /> Technologies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {profileInfo.technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-100 flex items-center space-x-3"
                  >
                    {tech.icon}
                    <span className="text-gray-700 text-sm md:text-base">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
                <Code className="mr-3 text-blue-600" /> Interests
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {profileInfo.interests.map((interest, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-50 text-blue-600 px-3 md:px-4 py-1 md:py-2 rounded-lg text-sm md:text-base"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
            <MessageCircle className="mr-3 text-blue-600" /> Contact
          </h2>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="text-blue-600" size={20} />
                <a href={`mailto:${profileInfo.email}`} className="text-gray-700 hover:text-blue-600 text-sm md:text-base">
                  {profileInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="text-blue-600" size={20} />
                <span className="text-gray-700 text-sm md:text-base">{profileInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="text-blue-600" size={20} />
                <span className="text-gray-700 text-sm md:text-base">{profileInfo.location}</span>
              </div>
              <div className="flex space-x-4 pt-3 md:pt-4">
                {(Object.keys(profileInfo.socialLinks) as Array<keyof SocialLinks>).map((platform) => (
                  <a 
                    key={platform}
                    href={profileInfo.socialLinks[platform]} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {socialIcons[platform]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-4 md:py-6 text-center border-t">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-gray-600 text-sm md:text-base">© 2024 {profileInfo.name}. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;