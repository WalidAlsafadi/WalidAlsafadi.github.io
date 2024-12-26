import profileImage from './assets/images/PersonalPhoto.jpg';
import React from 'react';
import { 
  Github, Linkedin, Twitter, Database, 
  Code, BookOpen, FileText, Award, MessageCircle
} from 'lucide-react';

// Define types to improve type safety
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
    details: string;
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
  const [activeSection, setActiveSection] = React.useState<string>('home');

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
        degree: "BS, Data Science and Artificial Intelligence",
        period: "Aug 2022 - Present",
        details: "Specializing in Artificial Intelligence and Data Science with a comprehensive curriculum covering advanced machine learning and data science principles."
      },
      {
        institution: "American University of Ras Al Khaimah",
        degree: "BS, Artificial Intelligence",
        period: "Aug 2021 - Jun 2022",
        details: "Learning basic Computer Engineering requirements such as Calculus, Physics, C++."
      },
      {
        institution: "Al Jawda School for Boys",
        degree: "High School Degree",
        period: "2018 Oct - Jun 2021",
        details: ""
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
        description: "Analyzes sentiment from tweets related to Gaza using GroqCloud’s Llama-3 LLM model and Selenium for data collection. This project aims to provide insights into public sentiment and emotional tone regarding Gaza.",
        technologies: ["Llama3-70b-8192", "LLM", "Web Scraping", "NLP"],
        githubLink: "https://github.com/WalidAlsafadi/TwitterSentiment-Llama3",
        demoLink: ""
      },
      {
        name: "BBC News",
        description: "Self updating dataset. It collects RSS Feeds from BBC News using a Kernel: https://www.kaggle.com/gpreda/bbc-news-rss-feeds. Use the data to analyze the sentiment of news, from title and description.",
        technologies: ["Llama3-70b-8192", "LLM", "Web Scraping", "NLP"],
        githubLink: "https://github.com/WalidAlsafadi/TwitterSentiment-Llama3",
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
      }
    ],

    technologies: [
      { name: "Deep Learning", icon: <Code className="text-blue-500" /> },
      { name: "Natural Language Processing (NLP)", icon: <Code className="text-orange-500" /> },
      { name: "Machine Learning", icon: <Code className="text-orange-600" /> },
      { name: "Microsoft Azure", icon: <Code className="text-blue-600" /> },
      { name: "TensorFlow", icon: <Code className="text-green-500" /> },
      { name: "PyTorch", icon: <Code className="text-red-500" /> }
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

  // Create a type-safe icon mapping
  const socialIcons: Record<keyof SocialLinks, React.ReactNode> = {
    github: <Github size={32} />,
    linkedin: <Linkedin size={32} />,
    twitter: <Twitter size={32} />,
    kaggle: <Database size={32} />
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="flex flex-col items-center justify-center text-center p-10 space-y-6">
            {/* Profile Image */}
            <div className="w-64 h-64 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>

            {/* Profile Name and Title */}
            <div>
              <h1 className="text-4xl font-bold mb-2 text-gray-800">{profileInfo.name}</h1>
              <p className="text-xl text-blue-600 mb-4 font-medium">{profileInfo.title}</p>
            </div>

            {/* Location and Email */}
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Code size={20} className="text-blue-500" />
                <span>{profileInfo.location}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Code size={20} className="text-blue-500" />
                <span>{profileInfo.email}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              {profileInfo.summary}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
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
        );
      
      case 'education':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <BookOpen className="mr-3 text-blue-600" /> Education
            </h2>
            {profileInfo.education.map((edu, index) => (
              <div key={index} className="mb-6 p-4 border rounded-lg">
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
                <p className="mt-2">{edu.details}</p>
              </div>
            ))}
          </div>
        );
      
      case 'experience':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Code className="mr-3 text-blue-600" /> Experience
            </h2>
            {profileInfo.experiences.map((exp, index) => (
              <div key={index} className="mb-6 p-4 border rounded-lg">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
                <ul className="list-disc pl-5 mt-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      
      case 'projects':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <FileText className="mr-3 text-blue-600" /> Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {profileInfo.projects.map((project, index) => (
                <div key={index} className="border rounded-lg p-5 hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
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
                        className="flex items-center text-gray-700 hover:text-blue-600"
                      >
                        <Github className="mr-2" size={20} /> GitHub
                      </a>
                    )}
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-600"
                      >
                        <Code className="mr-2" size={20} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'certificates':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Award className="mr-3 text-blue-600" /> Certificates
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {profileInfo.certificates.map((cert, index) => (
                <div key={index} className="border rounded-lg p-5 hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'skills':
        return (
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Code className="mr-3 text-blue-600" /> Technologies
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {profileInfo.technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-100 transition"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Code className="mr-3 text-blue-600" /> Interests
              </h2>
              <div className="flex flex-wrap gap-3">
                {profileInfo.interests.map((interest, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <MessageCircle className="mr-3 text-blue-600" /> Contact Me
            </h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-2 border rounded-lg focus:outline-blue-500" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-2 border rounded-lg focus:outline-blue-500" 
                    placeholder="Your Email" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea 
                    id="message" 
                    className="w-full p-2 border rounded-lg focus:outline-blue-500" 
                    rows={4} 
                    placeholder="Your Message" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">{profileInfo.name}</div>
          <div className="space-x-4 hidden md:block">
            {['home', 'education', 'experience', 'projects', 'certificates', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
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
      </nav>

      <main className="container mx-auto">
        {renderSection()}
      </main>

      <footer className="bg-white py-6 text-center border-t">
        <div className="container mx-auto px-4">
          <p className="text-gray-600">© 2024 {profileInfo.name}. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            {(Object.keys(profileInfo.socialLinks) as Array<keyof SocialLinks>).map((platform) => (
              <a 
                key={platform}
                href={profileInfo.socialLinks[platform]} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {socialIcons[platform]}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
