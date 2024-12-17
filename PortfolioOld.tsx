import React, { useState } from 'react';
import { 
  Github, Linkedin, Twitter, Database, 
  Code, Mail, Award, BookOpen, FileText, MessageCircle
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const profileInfo = {
    name: "Walid Alsafadi",
    title: "AI and Data Science Student",
    location: "Palestine, Gaza",
    email: "walid.k.alsafadi@gmail.com",
    phone: "+972 59-XXX-XXXX",
    summary: "Passionate AI and data science student with a strong focus on machine learning, deep learning, and innovative technological solutions. Committed to leveraging cutting-edge technologies to solve complex real-world problems.",
    
    education: [
      {
        institution: "Islamic University of Gaza",
        degree: "Bachelor of Computer Science",
        period: "2020 - Present",
        details: "Specializing in Artificial Intelligence and Data Science"
      }
    ],

    experiences: [
      {
        title: "AI Research Intern",
        company: "Local Tech Startup",
        period: "2023 - Present",
        responsibilities: [
          "Developed machine learning models for predictive analytics",
          "Collaborated on AI-driven solution prototypes",
          "Conducted data preprocessing and feature engineering"
        ]
      }
    ],

    projects: [
      {
        name: "Machine Learning Image Classifier",
        description: "Developed a deep learning model for image classification using CNN architecture",
        technologies: ["Python", "TensorFlow", "Keras"],
        githubLink: "https://github.com/WalidAlsafadi/image-classifier",
        demoLink: "https://example.com/image-classifier-demo"
      },
      {
        name: "NLP Sentiment Analysis",
        description: "Created a sentiment analysis tool for social media text",
        technologies: ["Python", "NLTK", "scikit-learn"],
        githubLink: "https://github.com/WalidAlsafadi/sentiment-analysis",
        demoLink: "https://example.com/sentiment-analysis-demo"
      }
    ],

    certificates: [
      {
        name: "Google Cloud Certified - Associate Cloud Engineer",
        issuer: "Google Cloud",
        date: "June 2023",
        link: "https://example.com/google-cloud-certificate"
      },
      {
        name: "Deep Learning Specialization",
        issuer: "Coursera",
        date: "December 2022",
        link: "https://example.com/deep-learning-certificate"
      }
    ],

    technologies: [
      { name: "Python", icon: <Code className="text-blue-500" /> },
      { name: "TensorFlow", icon: <Code className="text-orange-500" /> },
      { name: "Jupyter", icon: <Code className="text-orange-600" /> },
      { name: "Microsoft Azure", icon: <Code className="text-blue-600" /> },
      { name: "scikit-learn", icon: <Code className="text-green-500" /> },
      { name: "PyTorch", icon: <Code className="text-red-500" /> }
    ],

    interests: [
      "Machine Learning",
      "Deep Learning",
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

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="flex flex-col md:flex-row items-center p-10 space-x-8">
            <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">Profile Image</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{profileInfo.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{profileInfo.title}</p>
              
              <div className="flex items-center space-x-2 mb-2">
                <Code size={20} className="text-gray-500" />
                <span>{profileInfo.location}</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <Code size={20} className="text-gray-500" />
                <span>{profileInfo.email}</span>
              </div>
              
              <p className="text-gray-700 max-w-2xl">{profileInfo.summary}</p>
              
              <div className="flex space-x-4 mt-6">
                {Object.entries(profileInfo.socialLinks).map(([platform, link]) => {
                  const iconMap = {
                    github: <Github size={32} />,
                    linkedin: <Linkedin size={32} />,
                    twitter: <Twitter size={32} />,
                    kaggle: <Database size={32} />
                  };
                  
                  return (
                    <a 
                      key={platform}
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-600 transition-colors"
                    >
                      {iconMap[platform]}
                    </a>
                  );
                })}
              </div>
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
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">{profileInfo.name}</div>
          <div className="space-x-4">
            {['home', 'education', 'experience', 'projects', 'certificates', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize ${
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

      <footer className="bg-white py-4 text-center">
        <p className="text-gray-600">© 2024 {profileInfo.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
