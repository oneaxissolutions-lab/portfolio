import React, { useState, useEffect, useRef } from 'react';
import { Home, Briefcase, Code, Mail, Menu, X, Rocket, Cpu, Layers, Zap, Cloud, Globe, Layout, Smartphone, PenTool, Users, Award, MessageCircle } from 'lucide-react';
// Assuming Hyperspeed.jsx exists in the same directory or is imported correctly
import Hyperspeed from './Hyperspeed.jsx';

// --- 🖼️ IMAGE IMPORTS ---
// IMPORTANT: Replace these with actual image imports or mock paths in your environment
import image1 from './assets/image1.jpeg'; 
import image2 from './assets/image2.jpeg';
import image3 from './assets/image3.jpeg';
import image4 from './assets/image4.jpeg';
import image5 from './assets/image5.jpeg';
// ----------------------------------------------------------------------

// --- Configuration Data ---
const portfolioData = {
    name: "One Axsis",
    whatsappNumber: "918954535455", 
    whatsappMessage: "Hello One Axsis, I'd like to discuss a project I have in mind.",
    skills: [
        { name: 'Cloud Architecture (AWS/GCP)', level: 95, color: 'bg-yellow-500' },
        { name: 'Enterprise React & TypeScript', level: 90, color: 'bg-blue-500' },
    ],
    projects: [
        { title: "Global Cloud Migration Strategy", description: "Designed and led the lift-and-shift migration of a legacy data center to a multi-region AWS infrastructure, achieving 30% cost efficiency.", tags: ["AWS", "Terraform", "CloudFormation"] },
    ],
};

// --- Custom Components ---

const Header = ({ scrollToSection, activeSection }) => {
    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'Interiors', id: 'interiors' },
        { name: 'Services', id: 'services' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];
    return (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 max-w-4xl w-[95%] z-50 backdrop-blur-xl bg-white/90 rounded-full shadow-2xl ring-1 ring-gray-100 hidden md:block header-fade-lift-animated">
            <div className="mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 text-xl font-extrabold cursor-pointer" onClick={() => scrollToSection('home')}>
                        <span className="text-gray-900">One </span>
                        <span className="text-transparent bg-clip-text font-extrabold" style={{ backgroundImage: 'linear-gradient(90deg, #ffb6c1, #a855f7)' }}>Axsis</span>
                    </div>
                    <nav className="flex space-x-6 lg:space-x-8">
                        {navItems.map(item => (
                            <a key={item.id} href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }} className={`relative pb-1 group transition-all duration-300 font-medium tracking-wide ${activeSection === item.id ? 'text-gray-900 font-bold' : 'text-gray-700 hover:text-gray-900'}`}>
                                {item.name}
                                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-in-out bg-cyan-600 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

const MobileNavBar = ({ scrollToSection, activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { name: 'Home', id: 'home', icon: Home },
        { name: 'Interiors', id: 'interiors', icon: Layout },
        { name: 'Services', id: 'services', icon: Cloud }, 
        { name: 'Projects', id: 'projects', icon: Rocket },
        { name: 'Contact', id: 'contact', icon: Mail },
    ];
    const handleClick = (id) => { setIsOpen(false); scrollToSection(id); };
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
            {isOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>}
            <div className="relative flex justify-center pb-2 pt-2">
                <button onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 rounded-full bg-cyan-600 shadow-2xl shadow-cyan-500/50 flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 ring-4 ring-white">
                    {isOpen ? <X className="w-6 h-6 transform rotate-90" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            <div className={`absolute bottom-20 right-4 p-4 bg-white rounded-xl shadow-2xl ring-1 ring-gray-100 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'}`}>
                <nav className="flex flex-col space-y-3">
                    {navItems.map((item, index) => (
                        <button key={item.id} onClick={() => handleClick(item.id)} 
                                className={`flex items-center space-x-3 p-2 rounded-lg transition duration-200 menu-item-animated ${activeSection === item.id ? 'bg-cyan-100 text-cyan-700 font-semibold' : 'text-gray-900 hover:bg-gray-50'}`}
                                style={{ animationDelay: `${isOpen ? index * 0.1 : 0}s` }}>
                            <item.icon className="w-5 h-5" /><span>{item.name}</span>
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

// 🛑 MODIFIED: HeroSection with White Background 
const HeroSection = ({ sectionRef, scrollToSection }) => {
    return (
        <section 
            id="home" 
            ref={sectionRef} 
            // CRITICAL: sticky top-0 and h-screen make this the stable background layer
            // BACKGROUND IS WHITE
            className="w-full h-screen flex items-center justify-center p-4 sm:p-8 relative bg-white sticky top-0" 
            style={{ zIndex: 5 }}
        >
            
           <Hyperspeed />
            
            <div className="text-center max-w-5xl mx-auto relative z-10">
                {/* Text color changed to gray-900 for visibility on white background */}
                <h1 className={`text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none tracking-tight mb-4 header-animated text-gray-900`} style={{ animationDelay: '0.1s' }}>
                    Transform Your <span className="block text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #ffb6c1, #a855f7)' }}>Vision</span>
                </h1>
                {/* Text color changed to gray-700 for visibility on white background */}
                <p className={`text-xl sm:text-2xl text-gray-700 mt-6 max-w-3xl mx-auto summary-animated`} style={{ animationDelay: '0.5s' }}>We craft cutting-edge solutions that accelerate your business forward.</p>
                
                <a 
                    href="#contact" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                    className={`inline-flex items-center mt-10 px-8 py-3 bg-cyan-600 text-white text-lg font-semibold rounded-full shadow-2xl shadow-cyan-500/50`} 
                    style={{ animationDelay: '0.8s' }}
                >
                    Let's Talk! <MessageCircle className="w-5 h-5 ml-3" />
                </a>
            </div>
        </section>
    );
};

const DesignCard = ({ title, description, imgSrc, index, isVisible }) => (
    <div className={`group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer ${isVisible ? 'card-animated' : ''}`}
        style={{ animationDelay: isVisible ? `${index * 0.15}s` : '0s', height: '300px' }}>
        <img 
            src={imgSrc} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            onError={(e) => {e.target.onerror = null; e.target.src="https://placehold.co/600x400/e0f7fa/00bcd4?text=Design+Render"}}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute inset-0 ring-4 ring-transparent transition-all duration-300 group-hover:ring-pink-200"></div> 
        <div className="absolute bottom-0 left-0 p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{description}</p>
        </div>
    </div>
);

const InteriorDesign = ({ sectionRef }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [sectionRef]);

    const designs = [
        { title: "Co-working Office Design (Front)", description: "A collaborative, modern office area with wood accents and vertical greenery for a fresh environment.", img: image1 },
        { title: "Sleek Executive Cabin", description: "A sophisticated executive workspace featuring dark ceilings, glass partitions, and integrated wooden shelving.", img: image4 },
        { title: "Compact Gourmet Kitchen", description: "Modern modular kitchen with patterned backsplash, integrated lighting, and black stone countertops.", img: image2 },
        { title: "Terrazzo Bathroom Luxury", description: "A contemporary bathroom featuring terrazzo tiling, striking gold-framed mirror, and suspended vanity.", img: image3 },
        { title: "Office Collaboration Corner", description: "A focused corner space for teamwork, enhanced by natural wood textures and strategic vertical plant elements.", img: image5 } 
    ];

    return (
        <section id="interiors" ref={sectionRef} className="py-20 md:py-24 bg-gray-50 relative overflow-hidden"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className={`text-4xl font-bold text-center mb-12 text-gray-900 ${isVisible ? 'header-animated' : ''}`}>
                    <PenTool className="inline-block w-8 h-8 mr-3 text-pink-400 icon-pulse" /> 
                    Interior Designing
                </h2>
                <p className={`text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'summary-animated' : ''}`}>
                    Beyond code, we design the physical spaces where digital innovation happens. Creating ergonomic, futuristic environments that inspire creativity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {designs.map((design, index) => (
                        <DesignCard key={index} {...design} index={index} isVisible={isVisible} imgSrc={design.img} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServicesSection = ({ sectionRef }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); 
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [sectionRef]);

    const services = [
        { icon: Smartphone, title: "Custom App Development", description: "Building high-performance, scalable native and cross-platform mobile applications for iOS and Android." },
        { icon: Globe, title: "Enterprise Web Applications", description: "Developing robust, modern web portals, CRMs, and internal tools using React, Vue, and cutting-edge backends." },
        { icon: Cpu, title: "AI-Powered Solutions", description: "Integrating Machine Learning, Generative AI, and predictive analytics to automate decisions and unlock data insights." },
        { icon: Cloud, title: "SaaS Platforms & Migration", description: "Designing, building, and scaling multi-tenant Software as a Service products from concept to global deployment on AWS/GCP." },
    ];

    return (
        <section id="services" ref={sectionRef} className="py-20 md:py-24 bg-white border-t border-b border-gray-200 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className={`text-4xl font-bold text-center mb-12 text-gray-900 ${isVisible ? 'header-animated' : ''}`}>
                    <Briefcase className="inline-block w-8 h-8 mr-3 text-pink-400 icon-pulse" />
                    Digital Transformation Services
                </h2>
                <p className={`text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'summary-animated' : ''}`}>
                    We provide end-to-end digital expertise, ensuring your technology stack is robust, scalable, and future-proof.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} 
                            className={`
                                bg-gray-50 p-6 rounded-xl shadow-lg ring-1 ring-gray-200 
                                transition-all duration-300 transform 
                                hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2 hover:bg-white hover:ring-2 hover:ring-pink-400 
                                service-card-glow
                                ${isVisible ? 'card-animated' : ''}
                            `}
                            style={{ animationDelay: isVisible ? `${index * 0.15 + 0.5}s` : '0s' }}
                        >
                            <service.icon className="w-8 h-8 mb-4 text-pink-400" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const MetricsBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const metricsBarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); 
                }
            },
            { threshold: 0.4 }
        );

        if (metricsBarRef.current) {
            observer.observe(metricsBarRef.current);
        }

        return () => {
            if (metricsBarRef.current) {
                observer.unobserve(metricsBarRef.current);
            }
        };
    }, []);

    const metrics = [
        { icon: Layers, count: "10+", label: "Projects Completed", color: 'text-orange-600', lineColor: 'bg-orange-600' }, 
        { icon: Users, count: "10+", label: "Happy Clients", color: 'text-blue-600', lineColor: 'bg-blue-600' }, 
        { icon: Award, count: "5+", label: "Years Experience", color: 'text-pink-600', lineColor: 'bg-pink-600' }, 
        { icon: Code, count: "50+", label: "Technologies", color: 'text-pink-600', lineColor: 'bg-pink-600' }, 
    ];
    return (
        <div className="py-12 bg-white" ref={metricsBarRef}> 
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {metrics.map((metric, index) => (
                        <div key={index} 
                            className={`
                                bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 
                                shadow-xl shadow-gray-200/50 
                                flex flex-col items-center text-center 
                                transition duration-500 hover:scale-[1.05] hover:border-pink-300
                                ${isVisible ? 'card-animated' : ''}
                            `} 
                            style={{ animationDelay: isVisible ? `${index * 0.15}s` : '0s' }
                        }
                        >
                            <div className={`p-4 rounded-full mb-4 bg-gray-200 ${metric.color} metrics-icon-pulse`}> 
                                <metric.icon className="w-8 h-8" />
                            </div>
                            <h3 className={`text-5xl font-extrabold mb-1 text-gray-900 ${isVisible ? 'text-animated' : ''}`}>{metric.count}</h3> 
                            <p className={`text-md font-medium text-gray-600 mt-2 ${isVisible ? 'summary-animated' : ''}`} style={{ animationDelay: isVisible ? `${index * 0.15 + 0.2}s` : '0s' }}>{metric.label}</p>
                            <div className={`w-1/3 h-1 mt-4 rounded-full ${metric.lineColor} ${isVisible ? 'animate-line-flow' : ''}`} style={{ animationDelay: isVisible ? `${index * 0.15 + 0.5}s` : '0s' }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// --- Main App Component ---
const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const sectionRefs = useRef({});

    useEffect(() => {
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.3 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
        }, observerOptions);
        
        Object.values(sectionRefs.current).forEach(ref => { if (ref) observer.observe(ref); });
        return () => { Object.values(sectionRefs.current).forEach(ref => { if (ref) observer.unobserve(ref); }); };
    }, []);

    const scrollToSection = (id) => {
        const element = sectionRefs.current[id];
        if (element) setTimeout(() => { element.scrollIntoView({ behavior: 'smooth' }); }, 100);
    };

    const whatsappLink = `https://wa.me/${portfolioData.whatsappNumber}?text=${encodeURIComponent(portfolioData.whatsappMessage)}`;

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
            
            <Header scrollToSection={scrollToSection} activeSection={activeSection} />
            <MobileNavBar scrollToSection={scrollToSection} activeSection={activeSection} />

            <main className="relative z-10">
                
                {/* 1. Hero (Sticky Background) */}
                <HeroSection 
                    sectionRef={el => sectionRefs.current.home = el} 
                    scrollToSection={scrollToSection} 
                />

                {/* 🛑 FLOATING SECTIONS WRAPPER 🛑 
                    - This div contains all content after the hero.
                    - It scrolls up over the hero section.
                */}
                <div 
                    className="
                        relative bg-white z-20 shadow-2xl 
                        rounded-t-[50px] md:rounded-t-[80px] lg:rounded-t-[100px] 
                        -mt-10 pt-20
                    "
                    style={{ transition: 'border-radius 0.5s ease-out' }} 
                > 
                    {/* 2. Interior Designing Section */}
                    <InteriorDesign sectionRef={el => sectionRefs.current.interiors = el} />

                    {/* 3. Services Section */}
                    <ServicesSection sectionRef={el => sectionRefs.current.services = el} />

                    {/* 4. Projects */}
                    <section id="projects" ref={el => sectionRefs.current.projects = el} className="py-16 md:py-24 bg-gray-50"> 
                        <div className="container mx-auto px-6 max-w-6xl">
                            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 header-animated" style={{ animationDelay: '0.1s' }}>
                                <Rocket className="inline-block w-8 h-8 mr-3 text-pink-400 icon-pulse" />
                                Project Stats
                            </h2>
                        </div>
                        
                        <MetricsBar />

                        <div className="container mx-auto px-6 max-w-5xl mt-12">
                            <div className="text-center py-10">
                                <h3 className="text-3xl font-bold text-gray-900 mb-3 summary-animated" style={{ animationDelay: '0.5s' }}>Our Track Record Speaks Volumes</h3>
                                <p className="text-gray-700 max-w-2xl mx-auto summary-animated" style={{ animationDelay: '0.7s' }}>
                                    Review the impact of our full-stack solutions and innovative design approach on client success.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* --- Contact Section --- */}
                    <section id="contact" ref={el => sectionRefs.current.contact = el} className="py-20 md:py-24 bg-white border-t border-gray-200">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 className="text-4xl font-bold mb-6 text-gray-900 header-animated">
                                <Mail className="inline-block w-8 h-8 mr-3 text-cyan-400 icon-pulse" />
                                Ready to accelerate?
                            
                            </h2>
                            <p className="text-xl text-gray-700 mb-10 summary-animated">
                                Start the conversation about your next big digital transformation project today.
                            </p>
                            <a 
                                href={whatsappLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center px-8 py-4 bg-pink-500 text-white text-xl font-bold rounded-full shadow-2xl shadow-pink-500/50 transition duration-300 transform hover:bg-pink-600 btn-pulse-hover summary-animated"
                                style={{ animationDelay: '1.0s' }}
                            >
                                <MessageCircle className="w-6 h-6 mr-3" />
                                Chat with One Axsis on WhatsApp
                            </a>
                        </div>
                    </section>
                    
                    {/* --- Footer --- */}
                    <footer className="bg-gray-100 py-8 border-t border-gray-200">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 text-sm">
                            <p>&copy; {new Date().getFullYear()} One Axsis. All rights reserved.</p>
                            <p className="mt-1">Built with React, Tailwind CSS, and a dedication to digital excellence.</p>
                        </div>
                    </footer>
                </div>

            </main>
            
            {/* Global Styles (kept here for animation definitions) */}
            <style jsx="true">{`
            @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            .card-animated { opacity: 0; animation: fade-in-up 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
            
            @keyframes pulse-icon { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.05); opacity: 0.95; } }
            .icon-pulse { animation: pulse-icon 2s ease-in-out infinite alternate; }
            
            @keyframes text-fade-in { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
            .text-animated { animation: text-fade-in 0.5s ease-out forwards; }
            
            @keyframes appear-from-bottom { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            .summary-animated { opacity: 0; animation: appear-from-bottom 1s ease-out forwards; }
            
            @keyframes header-scale-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
            .header-animated { opacity: 0; animation: header-scale-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }

            @keyframes header-fade-lift {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .header-fade-lift-animated {
                animation: header-fade-lift 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                opacity: 0; 
            }

            @keyframes button-pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.02); }
                100% { transform: scale(1); }
            }
            .btn-pulse-hover:hover {
                animation: none; 
                transform: scale(1.03); 
            }

            @keyframes menu-item-fade-in {
                from { opacity: 0; transform: translateX(20px); }
                to { opacity: 1; transform: translateX(0); }
            }
            .menu-item-animated {
                opacity: 0;
                animation: menu-item-fade-in 0.4s ease-out forwards;
            }

            @keyframes metrics-icon-pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.03); }
                100% { transform: scale(1); }
            }
            .metrics-icon-pulse {
                animation: metrics-icon-pulse 2s ease-in-out infinite alternate;
            }

            .input-focus-animate:focus {
                outline: none;
                box-shadow: 0 0 0 3px rgba(255, 182, 193, 0.5);
                border-color: #ffb6c1;
            }
            
            @keyframes line-flow {
                0% { transform: scaleX(0.8); opacity: 0.8; }
                50% { transform: scaleX(1.1); opacity: 1; }
                100% { transform: scaleX(0.8); opacity: 0.8; }
            }
            .animate-line-flow {
                animation: line-flow 3s ease-in-out infinite alternate;
            }

            @keyframes glow-pink {
                0%, 100% { box-shadow: 0 0 10px rgba(255, 182, 193, 0.4); } 
                50% { box-shadow: 0 0 20px rgba(255, 182, 193, 0.8), 0 0 30px rgba(255, 100, 150, 0.2); } 
            }

            .service-card-glow:hover {
                animation: glow-pink 2s infinite alternate;
            }

            `}</style>

        </div>
    );
};

export default App;