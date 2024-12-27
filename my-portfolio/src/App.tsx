import React from 'react';
import { 
  Github, Linkedin, Twitter, Database, 
  Code, BookOpen, FileText, Award, MessageCircle,
  Menu, X, ExternalLink, Mail, Phone, MapPin,
  ChevronRight, Calendar, Briefcase
} from 'lucide-react';

// Types and Interfaces
interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  kaggle: string;
}

interface Technology {
  name: string;
  icon: React.ReactNode;
  category: 'Languages' | 'ML/DL Frameworks' | 'Data Tools' | 'Visualization' | 'NLP' | 'Cloud' | 'Other' ;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string[];
  location?: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  location?: string;
  technologies?: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  category: 'Machine Learning' | 'Data Analysis' | 'Web Development' | 'Database' | 'Other' ;
  featured?: boolean;
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  link: string;
  category: 'ai/ml' | 'programming' | 'data' | 'other';
}

interface ProfileInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  education: Education[];
  experiences: Experience[];
  projects: Project[];
  certificates: Certificate[];
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
        demoLink: "",
        category: "Machine Learning"
      },
      {
        name: "Twitter Sentiment Analysis using Web scraping, and LLMs",
        description: "Analyzes sentiment from tweets related to Gaza using GroqCloud's Llama-3 LLM model and Selenium for data collection. This project aims to provide insights into public sentiment and emotional tone regarding Gaza.",
        technologies: ["Llama3-70b-8192", "LLM", "Web Scraping", "NLP"],
        githubLink: "https://github.com/WalidAlsafadi/TwitterSentiment-Llama3",
        demoLink: "",
        category: "Machine Learning"
      },
      {
        name: "BBC News",
        description: "Self updating dataset. It collects RSS Feeds from BBC News using a Kernel: https://www.kaggle.com/gpreda/bbc-news-rss-feeds. Use the data to analyze the sentiment of news, from title and description.",
        technologies: ["Sentiment Analysis", "EDA", "Text Processing"],
        githubLink: "https://github.com/WalidAlsafadi/BBC_News",
        demoLink: "",
        category: "Data Analysis"
      },
      {
        name: "Red Wine Quality",
        description: "Practice dataset for regression or classification modelling.",
        technologies: ["Machine Learning", "Random Forest", "EDA"],
        githubLink: "https://github.com/WalidAlsafadi/Red-Wine-Quality",
        demoLink: "",
        category: "Machine Learning"
      },
      {
        name: "Indian Diabetes Analysis",
        description: "Predict whether or not a patient has diabetes, based on certain diagnostic measurements included in the dataset.",
        technologies: ["Model Selection", "Data Processing", "EDA"],
        githubLink: "https://github.com/WalidAlsafadi/Indian-Diabetes",
        demoLink: "",
        category: "Machine Learning"
      },
      {
        name: "UFO Sighting",
        description: "Perform data analysis on over 80,000 reports of unidentified flying object reports in the last century.",
        technologies: ["Data Visualization", "Plotly", "Data Precessing"],
        githubLink: "https://github.com/WalidAlsafadi/UFO-Sighting",
        demoLink: "",
        category: "Data Analysis"
      },
      {
        name: "House Prices",
        description: "Predict the finale sale price for each house using 79 explanatory variables describing (almost) every aspect of residential homes in Ames, Iowa. ",
        technologies: ["Machine Learning", "Data Processing", "EDA"],
        githubLink: "https://github.com/WalidAlsafadi/House-Prices",
        demoLink: "",
        category: "Machine Learning"
      },
      {
        name: "Divorce Predictors Dataset",
        description: "A total of 170 couples are included in this dataset, along with the Divorce Predictor Scale variables (DPS), a questionnaire of 54 questions, A five-point scale was used to measure all responses.",
        technologies: ["Machine Learning", "EDA", "Data Visualization", "Cross-Validation"],
        githubLink: "https://github.com/WalidAlsafadi/Divorce-Predictors-Dataset",
        demoLink: "",
        category: "Machine Learning"
      },
      {
        name: "Human Resources SQL DataBase ",
        description: "Use DML and DDL scripts to build a simple HR SQL project.",
        technologies: ["Oracle SQL", "Database"],
        githubLink: "https://github.com/WalidAlsafadi/HR-sqlDB",
        demoLink: "",
        category: "Database"
      },
      {
        name: "Library Website",
        description: "Website that can display dynamic books while also allowing administrators to modify, delete, or add books in the SQL database.",
        technologies: ["ASP.NET", "Web Development", "Database", "Visual Studio"],
        githubLink: "https://github.com/WalidAlsafadi/Library-Website",
        demoLink: "",
        category: "Web Development"
      }
    ],

    certificates: [
      {
        name: "Machine Learning Specialization",
        issuer: "DeepLearning.AI",
        date: "Nov 2024",
        link: "https://coursera.org/verify/specialization/9HFC164M2NWT",
        category: "ai/ml"
      },
      {
        name: "Advanced Python",
        issuer: "Gaza Sky Geeks",
        date: "Jun 2023",
        link: "https://drive.google.com/file/d/1kPkpdcIBkuoRo8bw8UF7BRApJ6XtKZdA/view?usp=sharing",
        category: "ai/ml"
      },
      {
        name: "Introduction to Data Analytics",
        issuer: "Simplilearn",
        date: "Apr 2023",
        link: "https://simpli-web.app.link/e/Wzy0WEzClzb",
        category: "ai/ml"
      },
      {
        name: "Programming for Everybody (Getting Started with Python)",
        issuer: "University of Michigan",
        date: "Mar 2023",
        link: "https://coursera.org/verify/UBW9B3K4WKWL",
        category: "ai/ml"
      }
    ],

    technologies: [
      { name: "Python", icon: <Code className="text-blue-500" />, category: 'Languages' },
      { name: "SQL", icon: <Code className="text-blue-500" />, category: 'Languages' },
      { name: "HTML | CSS | JavaScript", icon: <Code className="text-blue-500" />, category: 'Languages' }, 
      { name: "C++", icon: <Code className="text-blue-500" />, category: 'Languages' },
      { name: "TensorFlow", icon: <Code className="text-green-500" />, category: 'ML/DL Frameworks' },
      { name: "PyTorch", icon: <Code className="text-green-500" />, category: 'ML/DL Frameworks' },
      { name: "Scikit-learn", icon: <Code className="text-green-500" />, category: 'ML/DL Frameworks' },
      { name: "XGBoost", icon: <Code className="text-green-500" />, category: 'ML/DL Frameworks' },
      { name: "NumPy", icon: <Code className="text-red-500" />, category: 'Data Tools' },
      { name: "Pandas", icon: <Code className="text-red-500" />, category: 'Data Tools' },
      { name: "SciPy", icon: <Code className="text-red-500" />, category: 'Data Tools' },
      { name: "Matplotlib", icon: <Code className="text-orange-500" />, category: 'Visualization' },
      { name: "Seaborn", icon: <Code className="text-orange-500" />, category: 'Visualization' },
      { name: "Plotly", icon: <Code className="text-orange-500" />, category: 'Visualization' },
      { name: "Power BI", icon: <Code className="text-orange-500" />, category: 'Visualization' },
      { name: "NLTK", icon: <Code className="text-purple-500" />, category: 'NLP' },
      { name: "Hugging Face", icon: <Code className="text-purple-500" />, category: 'NLP' },
      { name: "Microsoft Azure", icon: <Code className="text-navy-500" />, category: 'Cloud' },
      { name: "Git", icon: <Code className="text-pink-500" />, category: 'Other' }
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

  // State management
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const [selectedTechCategory, setSelectedTechCategory] = React.useState<string>('all');
  const [selectedProjectCategory, setSelectedProjectCategory] = React.useState<string>('all');

  const sections = ['home', 'education', 'experience', 'projects', 'certificates', 'skills', 'contact'];

  // Scroll handling
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Navigation handler
  const handleNavClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Components
  const SectionHeader: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
    <h2 className="text-3xl font-bold mb-8 flex items-center group">
      <span className="mr-3 text-blue-600 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      {title}
    </h2>
  );

  const CategoryFilter: React.FC<{
    categories: string[];
    selected: string;
    onChange: (category: string) => void;
  }> = ({ categories, selected, onChange }) => (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onChange('all')}
        className={`px-4 py-2 rounded-full transition-all duration-300 ${
          selected === 'all'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${
            selected === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      {project.featured && (
        <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full mb-3">
          Featured Project
        </span>
      )}
      <h3 className="text-xl font-semibold mb-3 group">
        <span className="inline-flex items-center">
          {project.name}
          <ChevronRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={18} />
        </span>
      </h3>
      <p className="text-gray-600 text-base mb-4 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full"
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
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            <Github className="mr-2" size={18} />
            View Code
          </a>
        )}
        {project.demoLink && (
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            <ExternalLink className="mr-2" size={18} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div 
            className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            {profileInfo.name}
          </div>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize transition-all duration-300 ${
                  activeSection === section 
                    ? 'text-blue-600 font-semibold scale-105' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-x-0 transition-all duration-300 ${
          isMenuOpen ? 'top-16 opacity-100' : '-top-full opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block w-full text-left px-6 py-3 capitalize transition-colors duration-300 ${
                  activeSection === section 
                    ? 'text-blue-600 font-semibold bg-blue-50' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 md:px-6 pt-16">
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="w-40 h-40 md:w-56 md:h-56 mx-auto bg-gradient-to-br from-blue-200 to-blue-400 rounded-full shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="./src/assets/images/PersonalPhoto.jpg"  // Replace with your image path
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-6 text-center md:text-left">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  {profileInfo.name}
                </h1>
                <p className="text-xl text-blue-600 font-medium">{profileInfo.title}</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {profileInfo.summary}
              </p>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <a 
                  href={`mailto:${profileInfo.email}`} 
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <Mail size={20} />
                  <span>{profileInfo.email}</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Phone size={20} />
                  <span>{profileInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <MapPin size={20} />
                  <span>{profileInfo.location}</span>
                </div>
              </div>

              <div className="flex justify-center md:justify-start space-x-6">
                {(Object.keys(profileInfo.socialLinks) as Array<keyof SocialLinks>).map((platform) => (
                  <a 
                    key={platform}
                    href={profileInfo.socialLinks[platform]} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                    aria-label={`Visit ${platform}`}
                  >
                    {socialIcons[platform]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 max-w-4xl mx-auto">
          <SectionHeader icon={<BookOpen size={28} />} title="Education" />
          <div className="space-y-6">
            {profileInfo.education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                    <p className="text-blue-600 font-medium">{edu.degree}</p>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={18} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                {edu.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 mt-2">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 max-w-4xl mx-auto">
          <SectionHeader icon={<Briefcase size={28} />} title="Experience" />
          <div className="space-y-6">
            {profileInfo.experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                    <Calendar size={18} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <ChevronRight size={18} className="mr-2 text-blue-500 flex-shrink-0 mt-1" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 max-w-4xl mx-auto">
          <SectionHeader icon={<FileText size={28} />} title="Projects" />
          <CategoryFilter
            categories={['Machine Learning', 'Data Analysis', 'Web Development', 'Database', 'Other']}
            selected={selectedProjectCategory}
            onChange={setSelectedProjectCategory}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileInfo.projects
              .filter(project => selectedProjectCategory === 'all' || project.category === selectedProjectCategory)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20 max-w-4xl mx-auto">
          <SectionHeader icon={<Award size={28} />} title="Certificates" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileInfo.certificates.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                    <p className="text-blue-600">{cert.issuer}</p>
                  </div>
                  <span className="text-gray-500 flex items-center">
                    <Calendar size={18} className="mr-2" />
                    {cert.date}
                  </span>
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  <Award className="mr-2" size={18} />
                  View Certificate
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 max-w-4xl mx-auto">
          <SectionHeader icon={<Code size={28} />} title="Skills & Technologies" />
          <CategoryFilter
            categories={['Languages', 'ML/DL Frameworks', 'Data Tools', 'Visualization', 'NLP', 'Cloud', 'Other']}
            selected={selectedTechCategory}
            onChange={setSelectedTechCategory}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {profileInfo.technologies
              .filter(tech => selectedTechCategory === 'all' || tech.category === selectedTechCategory)
              .map((tech, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex items-center space-x-3"
                >
                  {tech.icon}
                  <span className="text-gray-700">{tech.name}</span>
                </div>
              ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Interests & Focus Areas</h3>
            <div className="flex flex-wrap gap-3">
              {profileInfo.interests.map((interest, index) => (
                <span 
                  key={index}
                  className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 max-w-4xl mx-auto">
          <SectionHeader icon={<MessageCircle size={28} />} title="Contact" />
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="space-y-4">
              <a 
                href={`mailto:${profileInfo.email}`}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Mail size={20} />
                <span>{profileInfo.email}</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone size={20} />
                <span>{profileInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin size={20} />
                <span>{profileInfo.location}</span>
              </div>
              <div className="flex space-x-6 pt-4">
                {(Object.keys(profileInfo.socialLinks) as Array<keyof SocialLinks>).map((platform) => (
                  <a 
                    key={platform}
                    href={profileInfo.socialLinks[platform]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    {socialIcons[platform]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-6 text-center border-t mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-gray-600">
            © {new Date().getFullYear()} {profileInfo.name}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;