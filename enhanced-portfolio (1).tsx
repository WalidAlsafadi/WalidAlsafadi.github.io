import React, { useState, useEffect, useCallback } from 'react';
import { 
  Github, Linkedin, Twitter, Database, 
  Code, Mail, Award, BookOpen, FileText, MessageCircle, 
  MapPin, Phone, Download, Star, Briefcase, Layers, Contact, Send, Copy
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copied, setCopied] = useState({
    email: false,
    phone: false
  });

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Memoized function to handle copying contact information
  const handleCopyToClipboard = useCallback((text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(prev => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setCopied(prev => ({ ...prev, [type]: false }));
      }, 2000);
    });
  }, []);

  const profileInfo = {
    name: "Walid Alsafadi",
    title: "AI and Machine Learning Engineer",
    location: "Gaza, Palestine",
    email: "walid.k.alsafadi@gmail.com",
    phone: "+972 59-XXXX-XXXX",
    summary: "Innovative AI and data science professional with a passion for developing intelligent solutions. Combining academic expertise with practical experience in machine learning, deep learning, and cutting-edge technologies.",
    
    education: [
      {
        institution: "Islamic University of Gaza",
        degree: "Bachelor of Computer Science",
        period: "2020 - Present",
        gpa: "3.8/4.0",
        details: "Specializing in Artificial Intelligence and Data Science, with a focus on machine learning and neural networks",
        relevantCourses: [
          "Machine Learning Algorithms",
          "Deep Neural Networks",
          "Data Mining",
          "Computer Vision",
          "Natural Language Processing"
        ]
      }
    ],

    experiences: [
      {
        title: "AI Research Intern",
        company: "Local Tech Startup",
        period: "2023 - Present",
        responsibilities: [
          "Developed advanced machine learning models for predictive analytics",
          "Implemented deep learning solutions for complex problem-solving",
          "Conducted comprehensive data preprocessing and feature engineering",
          "Collaborated with cross-functional teams to prototype AI-driven solutions"
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"]
      }
    ],

    projects: [
      {
        name: "AI-Powered Image Classifier",
        description: "Developed a robust convolutional neural network for advanced image classification using transfer learning techniques.",
        technologies: ["Python", "TensorFlow", "Keras", "CNN"],
        githubLink: "https://github.com/WalidAlsafadi/image-classifier",
        demoLink: "https://example.com/image-classifier-demo",
        highlights: [
          "Achieved 95% accuracy on complex image recognition tasks",
          "Implemented advanced data augmentation techniques"
        ],
        challenges: [
          "Overcoming limited training data",
          "Optimizing model performance",
          "Implementing efficient transfer learning"
        ]
      },
      {
        name: "NLP Sentiment Analysis Platform",
        description: "Created an advanced sentiment analysis tool for social media text using state-of-the-art NLP techniques.",
        technologies: ["Python", "NLTK", "Transformers", "Hugging Face"],
        githubLink: "https://github.com/WalidAlsafadi/sentiment-analysis",
        demoLink: "https://example.com/sentiment-analysis-demo",
        highlights: [
          "Developed multi-language sentiment detection",
          "Implemented machine learning models with 92% accuracy"
        ],
        challenges: [
          "Handling multiple languages",
          "Managing computational complexity",
          "Ensuring model generalizability"
        ]
      }
    ],

    technologies: [
      { name: "Python", proficiency: 90, color: "bg-blue-500" },
      { name: "TensorFlow", proficiency: 85, color: "bg-orange-500" },
      { name: "Machine Learning", proficiency: 88, color: "bg-green-500" },
      { name: "Deep Learning", proficiency: 85, color: "bg-purple-500" },
      { name: "Data Science", proficiency: 80, color: "bg-red-500" },
      { name: "PyTorch", proficiency: 75, color: "bg-indigo-500" }
    ],

    certifications: [
      {
        name: "Google Cloud Certified - Associate Cloud Engineer",
        issuer: "Google Cloud",
        date: "June 2023",
        description: "Validated cloud computing skills and expertise in Google Cloud Platform."
      },
      {
        name: "Deep Learning Specialization",
        issuer: "Coursera",
        date: "December 2022",
        description: "Advanced training in deep learning techniques and neural network architectures."
      }
    ],

    socialLinks: {
      github: "https://github.com/WalidAlsafadi",
      linkedin: "https://www.linkedin.com/in/walidalsafadi/",
      twitter: "https://twitter.com/walidalsafadi",
      kaggle: "https://kaggle.com/walidkw"
    }
  };

  // Enhanced download resume function with tracking
  const downloadResume = () => {
    // In a production app, this would trigger an actual file download
    window.analytics?.track('Resume Download', {
      name: profileInfo.name,
      timestamp: new Date().toISOString()
    });
    alert('Resume download functionality to be implemented');
  };

  // Rest of the component remains similar to previous implementation
  // with added interactivity and more detailed sections

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50'}`}>
      {/* Navigation and main content remain similar */}
      
      {/* Consider adding subtle animations, more interactive elements */}
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          aria-label="Scroll to Top"
        >
          ↑
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
