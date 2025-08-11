import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Database, Brain, BarChart3, Code, Calendar, Award, User, Briefcase, GraduationCap, Target, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    { name: 'Python', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'Machine Learning', level: 85, icon: <Brain className="w-5 h-5" /> },
    { name: 'SQL', level: 88, icon: <Database className="w-5 h-5" /> },
    { name: 'Data Visualization', level: 82, icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Statistical Analysis', level: 87, icon: <Target className="w-5 h-5" /> },
    { name: 'Deep Learning', level: 80, icon: <Brain className="w-5 h-5" /> },
    { name: 'Gen AI', level: 75, icon: <Database className="w-5 h-5" /> }
  ];

  const projects = [
    {
      title: "Predictive Analytics Platform",
      description: "Built an end-to-end machine learning pipeline for customer churn prediction with 94% accuracy using ensemble methods.",
      tech: ["Python", "Scikit-learn", "Pandas", "Flask"],
      category: "Machine Learning"
    },
    {
      title: "Real-time Data Dashboard",
      description: "Developed interactive dashboards for business intelligence using modern visualization libraries and real-time data processing.",
      tech: ["Tableau", "Python", "SQL", "Apache Kafka"],
      category: "Data Visualization"
    },
    {
      title: "AI-Powered Recommendation System",
      description: "Implemented collaborative filtering and content-based recommendation algorithms for e-commerce platform.",
      tech: ["TensorFlow", "Python", "MongoDB", "Docker"],
      category: "AI/ML"
    }
  ];

  const experience = [
    {
      title: "Machine Learning Engineer",
      company: "Vosyn",
      period: "Feb 2025 - Present",
      description: "Leading data-driven initiatives and implementing advanced analytics solutions for business optimization."
    },
    {
      title: "AI Intern/ Open Source",
      company: "Tublian",
      period: "Mar 2024 - June 2024",
      description: "Developed machine learning models and predictive analytics solutions for various business domains."
    },
    {
      title: "Programmer Analyst",
      company: "Cognizant",
      period: "2021 - 2022",
      description: "Performed data analysis and created reports to support business decision-making processes."
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Machine Learning Professional",
      issuer: "Amazon Web Services",
      date: "Dec 2024 - Dec 2027",
      credential: "AWS-MLP-2024-123456",
      link: "https://www.credly.com/badges/01088d2e-8e5a-4c51-aa53-6858300a0bc9/public_url",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Oracle Cloud Infrastructure Generative AI Certified Professional",
      issuer: "Google Cloud",
      date: "2023",
      credential: "GCP-PDE-2023-004321",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1325C6B8A4B72A002076BD89C9E8A2AFAEF7584B0F07E2128BCA36A648B35F3E",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "IBM Certified Data Scientist Professional",
      issuer: "IBM-Coursera",
      date: "2024",
      credential: "AZ-900-2023-009012",
      link: "",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Certified Analytics Professional (CAP)",
      issuer: "INFORMS",
      date: "2022",
      credential: "CAP-2022-003456",
      link: "https://www.your-credly-url-for-cap",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ]

  // Theme classes
  const themeClasses = {
    // Main backgrounds
    mainBg: isDarkMode ? 'bg-zinc-900 text-gray-100' : 'bg-gray-50 text-gray-900',
    
    // Navigation
    navBg: isDarkMode 
      ? 'bg-zinc-900/95 backdrop-blur-sm shadow-lg border-b border-gray-500/20' 
      : 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-300/30',
    navText: isDarkMode ? 'text-gray-200' : 'text-gray-800',
    navTextSecondary: isDarkMode ? 'text-gray-400' : 'text-gray-600',
    navActive: isDarkMode ? 'text-gray-200 border-gray-400' : 'text-gray-800 border-gray-600',
    
    // Sections
    sectionAlt: isDarkMode ? 'bg-gray-800/30' : 'bg-white',
    sectionPrimary: isDarkMode ? 'bg-zinc-900' : 'bg-gray-50',
    
    // Cards
    card: isDarkMode 
      ? 'bg-gray-800/50 backdrop-blur-sm border-gray-600/30 hover:border-gray-500/50' 
      : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg',
    cardText: isDarkMode ? 'text-gray-200' : 'text-gray-800',
    cardTextSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    cardTextMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    
    // Buttons
    primaryBtn: isDarkMode 
      ? 'bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white' 
      : 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white',
    
    // Progress bars
    progressBg: isDarkMode ? 'bg-gray-700' : 'bg-gray-200',
    progressFill: isDarkMode 
      ? 'bg-gradient-to-r from-gray-500 to-gray-400' 
      : 'bg-gradient-to-r from-gray-700 to-gray-600',
    
    // Headings
    heading: isDarkMode 
      ? 'bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent' 
      : 'bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent',
    
    // Tags
    tag: isDarkMode 
      ? 'bg-gray-600/30 text-gray-200 border-gray-500/50' 
      : 'bg-gray-100 text-gray-700 border-gray-300',
    techTag: isDarkMode 
      ? 'bg-zinc-800 text-gray-200' 
      : 'bg-gray-800 text-white',
    
    // Special elements
    avatar: isDarkMode 
      ? 'bg-gradient-to-r from-gray-400 to-gray-500' 
      : 'bg-gradient-to-r from-gray-600 to-gray-800',
    heroText: isDarkMode 
      ? 'bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent' 
      : 'bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 bg-clip-text text-transparent',
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses.mainBg}`}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? themeClasses.navBg : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`text-2xl font-bold ${themeClasses.heading}`}>
              Sashi Kiran
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-300 hover:${themeClasses.navText} ${
                      activeSection === item ? `${themeClasses.navActive} border-b-2` : themeClasses.navTextSecondary
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${themeClasses.card} hover:scale-110`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-gray-800/30 to-zinc-800/30' : 'bg-gradient-to-br from-gray-100/50 to-gray-200/50'}`}></div>
        <div className="text-center z-10 px-6">
          <div className="mb-8">
            <div className={`w-32 h-32 mx-auto rounded-full ${themeClasses.avatar} p-1 mb-6`}>
              <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-zinc-900' : 'bg-white'} flex items-center justify-center`}>
                <User className={`w-16 h-16 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              </div>
            </div>
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${themeClasses.heroText}`}>
              Hi, I'm Sashi Kiran 👋
            </h1>
            <p className={`text-xl md:text-2xl ${themeClasses.cardTextSecondary} max-w-3xl mx-auto leading-relaxed`}>
              Passionate Data Professional with <span className={`${themeClasses.cardText} font-semibold`}>3+ years</span> of experience turning complex data challenges into valuable business solutions
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className={`px-4 py-2 ${themeClasses.tag} rounded-full backdrop-blur-sm`}>
              Machine Learning
            </span>
            <span className={`px-4 py-2 ${themeClasses.tag} rounded-full backdrop-blur-sm`}>
              Predictive Modeling
            </span>
            <span className={`px-4 py-2 ${themeClasses.tag} rounded-full backdrop-blur-sm`}>
              Advanced Analytics
            </span>
            <span className={`px-4 py-2 ${themeClasses.tag} rounded-full backdrop-blur-sm`}>
              AI Solutions
            </span>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className={`inline-flex items-center gap-2 px-8 py-3 ${themeClasses.primaryBtn} rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg`}
          >
            Explore My Work
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 ${themeClasses.sectionAlt}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${themeClasses.heading}`}>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className={`text-lg ${themeClasses.cardTextSecondary} leading-relaxed`}>
                I'm a dedicated data professional who thrives on transforming raw data into actionable insights that drive business growth. With nearly 3 years of hands-on experience, I specialize in machine learning, predictive modeling, and advanced analytics.
              </p>
              <p className={`text-lg ${themeClasses.cardTextSecondary} leading-relaxed`}>
                Recently, I've been focusing on implementing cutting-edge AI solutions that solve real-world problems. I believe in the power of data to tell stories and guide strategic decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className={`flex items-center gap-2 ${themeClasses.cardText}`}>
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">3+ Years Experience</span>
                </div>
                <div className={`flex items-center gap-2 ${themeClasses.cardText}`}>
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">AI/ML Specialist</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`${themeClasses.card} p-6 rounded-lg transition-all duration-300 shadow-lg`}>
                <Database className={`w-8 h-8 ${themeClasses.cardText} mb-3`} />
                <h3 className={`font-semibold mb-2 ${themeClasses.cardText}`}>Data Engineering</h3>
                <p className={`text-sm ${themeClasses.cardTextMuted}`}>Building robust data pipelines and infrastructure</p>
              </div>
              <div className={`${themeClasses.card} p-6 rounded-lg transition-all duration-300`}>
                <Brain className={`w-8 h-8 ${themeClasses.cardText} mb-3`} />
                <h3 className={`font-semibold mb-2 ${themeClasses.cardText}`}>Machine Learning</h3>
                <p className={`text-sm ${themeClasses.cardTextSecondary}`}>Developing predictive models and AI solutions</p>
              </div>
              <div className={`${themeClasses.card} p-6 rounded-lg transition-all duration-300`}>
                <BarChart3 className={`w-8 h-8 ${themeClasses.cardText} mb-3`} />
                <h3 className={`font-semibold mb-2 ${themeClasses.cardText}`}>Analytics</h3>
                <p className={`text-sm ${themeClasses.cardTextSecondary}`}>Advanced statistical analysis and insights</p>
              </div>
              <div className={`${themeClasses.card} p-6 rounded-lg transition-all duration-300 shadow-lg`}>
                <Target className={`w-8 h-8 ${themeClasses.cardText} mb-3`} />
                <h3 className={`font-semibold mb-2 ${themeClasses.cardText}`}>Business Intelligence</h3>
                <p className={`text-sm ${themeClasses.cardTextMuted}`}>Strategic insights for decision making</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${themeClasses.sectionPrimary}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${themeClasses.heading}`}>
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className={`${themeClasses.card} p-6 rounded-lg transition-all duration-300 shadow-lg`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={themeClasses.cardTextSecondary}>{skill.icon}</div>
                  <span className={`font-semibold ${themeClasses.cardText}`}>{skill.name}</span>
                  <span className={`ml-auto ${themeClasses.cardTextSecondary} font-bold`}>{skill.level}%</span>
                </div>
                <div className={`w-full ${themeClasses.progressBg} rounded-full h-2`}>
                  <div 
                    className={`${themeClasses.progressFill} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 ${themeClasses.sectionAlt}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${themeClasses.heading}`}>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${themeClasses.card} rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105`}>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-bold ${themeClasses.cardText}`}>{project.title}</h3>
                    <ExternalLink className={`w-5 h-5 ${themeClasses.cardTextSecondary} hover:${themeClasses.cardText} cursor-pointer`} />
                  </div>
                  <p className={`${themeClasses.cardTextSecondary} mb-4 text-sm leading-relaxed`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-2 py-1 ${themeClasses.techTag} rounded text-xs`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`text-xs ${themeClasses.cardTextSecondary} font-semibold`}>{project.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-6 ${themeClasses.sectionPrimary}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${themeClasses.heading}`}>
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className={`${themeClasses.card} p-6 rounded-lg transition-all duration-300 shadow-lg`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${themeClasses.cardText}`}>{exp.title}</h3>
                    <p className={`${themeClasses.cardTextSecondary} font-semibold`}>{exp.company}</p>
                  </div>
                  <div className={`flex items-center gap-2 ${themeClasses.cardTextMuted} mt-2 md:mt-0`}>
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <p className={`${themeClasses.cardTextSecondary} leading-relaxed`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 px-6 ${themeClasses.sectionAlt}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${themeClasses.heading}`}>
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`${themeClasses.card} p-6 rounded-lg transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${themeClasses.cardText} mt-1`}>{cert.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold ${themeClasses.cardText} mb-2`}>
                      {cert.title}
                    </h3>
                    <p className={`${themeClasses.cardTextSecondary} font-semibold mb-1`}>
                      {cert.issuer}
                    </p>
                    <div className={`flex items-center gap-4 ${themeClasses.cardTextSecondary} text-sm`}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                      <div className={`text-xs ${themeClasses.techTag} px-2 py-1 rounded`}>
                        {cert.credential}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block ${themeClasses.primaryBtn} text-sm font-medium px-4 py-2 rounded-lg transition`}
                  >
                    View Badge
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${themeClasses.sectionPrimary}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-12 ${themeClasses.heading}`}>
            Let's Connect
          </h2>
          <p className={`text-xl ${themeClasses.cardTextSecondary} mb-12 max-w-2xl mx-auto`}>
            Ready to turn your data challenges into opportunities? Let's discuss how we can work together to unlock the power of your data.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`${themeClasses.card} p-6 rounded-lg transition-all duration-300 shadow-lg`}>
              <Mail className={`w-8 h-8 ${themeClasses.cardTextSecondary} mx-auto mb-4`} />
              <h3 className={`font-semibold mb-2 ${themeClasses.cardText}`}>Email</h3>
              <p className={`${themeClasses.cardTextMuted} text-sm`}>sashikiranm7@gmail.com</p>
            </div>
            <div className={`${themeClasses.card} p-6 rounded-lg transition-all duration-300 shadow-lg`}>
              <Phone className={`w-8 h-8 ${themeClasses.cardTextSecondary} mx-auto mb-4`} />
              <h3 className={`font-semibold mb-2 ${themeClasses.cardText}`}>Phone</h3>
              <p className={`${themeClasses.cardTextMuted} text-sm`}>+1 (940)-252-4140</p>
            </div>
            <div className={`${themeClasses.card} p-6 rounded-lg transition-all duration-300 shadow-lg`}>
              <MapPin className={`w-8 h-8 ${themeClasses.cardTextSecondary} mx-auto mb-4`} />
              <h3 className={`font-semibold mb-2 ${themeClasses.cardText}`}>Location</h3>
              <p className={`${themeClasses.cardTextMuted} text-sm`}>United States</p>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <a href="#" className={`w-12 h-12 ${themeClasses.primaryBtn} rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg`}>
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className={`w-12 h-12 ${themeClasses.primaryBtn} rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg`}>
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${themeClasses.sectionAlt} py-8 px-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={themeClasses.cardTextSecondary}>
            © 2025 Sashi Kiran. Crafted with passion for data and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;