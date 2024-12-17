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
    title: "AI and Data Science Innovator",
    location: "Palestine, Gaza",
    email: "walid.k.alsafadi@gmail.com",
    phone: "+972 59-XXX-XXXX",
    summary: "Passionate AI and data science professional with a strong focus on machine learning, deep learning, and innovative technological solutions. Committed to leveraging cutting-edge technologies to solve complex real-world problems and drive technological advancement.",
    
    education: [
      {
        institution: "Islamic University of Gaza",
        degree: "Bachelor of Computer Science",
        period: "2020 - Present",
        details: "Specializing in Artificial Intelligence and Data Science with a comprehensive curriculum covering advanced machine learning and software engineering principles."
      }
    ],

    experiences: [
      {
        title: "AI Research Intern",
        company: "Local Tech Startup",
        period: "2023 - Present",
        responsibilities: [
          "Developed and deployed sophisticated machine learning models for predictive analytics",
          "Collaborated on cutting-edge AI-driven solution prototypes",
          "Conducted advanced data preprocessing and feature engineering techniques"
        ]
      }
    ],

    projects: [
      {
        name: "Advanced Image Classification System",
        description: "Developed a state-of-the-art deep learning model for complex image classification using advanced CNN architectures",
        technologies: ["Python", "TensorFlow", "Keras", "CNN"],
        githubLink: "https://github.com/WalidAlsafadi/image-classifier",
        demoLink: "https://example.com/image-classifier-demo"
      },
      {
        name: "Sentiment Analysis Platform",
        description: "Created a comprehensive sentiment analysis tool for social media text using advanced NLP techniques",
        technologies: ["Python", "NLTK", "scikit-learn", "NLP"],
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
          <div className="flex flex-col md:flex-row items-center p-10 space-x-8">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-semibold">W. Alsafadi</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2 text-gray-800">{profileInfo.name}</h1>
              <p className="text-xl text-blue-600 mb-4 font-medium">{profileInfo.title}</p>
              
              <div className="flex items-center space-x-2 mb-2 text-gray-700">
                <Code size={20} className="text-blue-500" />
                <span>{profileInfo.location}</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-4 text-gray-700">
                <Code size={20} className="text-blue-500" />
                <span>{profileInfo.email}</span>
              </div>
              
              <p className="text-gray-600 max-w-2xl leading-relaxed">{profileInfo.summary}</p>
              
              <div className="flex space-x-4 mt-6">
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
        );
      
      // ... (rest of the sections remain the same as in the previous implementation)
      
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
