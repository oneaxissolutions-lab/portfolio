import React, { useState, useEffect, useRef } from 'react';
import { Home, Briefcase, Code, Mail, Menu, X, Rocket, Cpu, Layers, Zap, Cloud, Globe, Layout, Smartphone, PenTool, Users, Award, MessageCircle, ArrowLeft } from 'lucide-react';
import Hyperspeed from './Hyperspeed.jsx'; 

// --- 🖼️ IMAGE IMPORTS ---
// NOTE: Please ensure these local paths are correct in your project structure.
// If you are using placeholder images, the path might be different or you may need to use a public folder setup.
import Livingroom1 from './assets/Livingroom1.jpg'; 
import image2 from './assets/image2.jpeg'; 
import image3 from './assets/image3.jpeg'; 
import image4 from './assets/image4.jpeg'; 
import KITCHEN1 from './assets/KITCHEN1.jpg'; 
import KITCHEN2 from './assets/KITCHEN2.jpg'; 
import KITCHEN3 from './assets/KITCHEN3.jpg'; 
import KITCHEN4 from './assets/KITCHEN4.jpg'; 
import Room1 from './assets/Room1.jpg'; 
import Room2 from './assets/Room2.jpg'; 
import Room3 from './assets/Room3.jpg'; 
import Room4 from './assets/Room4.jpg'; 
import Room5 from './assets/Room5.jpg'; 
import Livingroom2 from './assets/Livingroom2.jpg'; 
import Livingroom3 from './assets/Livingroom3.jpg'; 
import Livingroom4 from './assets/Livingroom4.jpg'; 
import Livingroom5 from './assets/Livingroom5.jpg'; 
import Livingroom6 from './assets/Livingroom6.jpg'; 
import Livingroom7 from './assets/Livingroom7.jpg'; 
import Render1 from './assets/Render1.jpg'; 
import Render2 from './assets/Render2.jpg'; 
import Render3 from './assets/Render3.jpg'; 
import Villa1 from './assets/villa1.jpeg'; 
import Villa2 from './assets/villa2.jpeg'; 
import Villa3 from './assets/villa3.jpeg'; 
import Villa4 from './assets/villa4.jpeg'; 
import Villa5 from './assets/villa5.jpeg'; 
import Villa6 from './assets/villa6.jpeg'; 
import Villa7 from './assets/villa7.jpeg'; 
import Villa8 from './assets/villa8.jpeg'; 
import Villa9 from './assets/villa9.jpeg'; 
import Villa10 from './assets/villa10.jpeg'; 
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

// --- Header Component ---
const Header = ({ scrollToSection, activeSection, isMenuOpen, setIsMenuOpen }) => {
    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'Interiors', id: 'interiors' },
        { name: 'Services', id: 'services' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];
    
    const handleScrollAndClose = (id) => {
        scrollToSection(id);
        setIsMenuOpen(false); 
    };

    return (
        <>
            <header className="fixed top-4 left-1/2 transform -translate-x-1/2 max-w-4xl w-[95%] z-50 backdrop-blur-xl bg-white/90 rounded-full shadow-2xl ring-1 ring-gray-100 header-fade-lift-animated">
                <div className="mx-auto px-6">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 text-xl font-extrabold cursor-pointer" onClick={() => handleScrollAndClose('home')}>
                            <span className="text-gray-900">One </span>
                            <span className="text-transparent bg-clip-text font-extrabold" style={{ backgroundImage: 'linear-gradient(90deg, #ffb6c1, #a855f7)' }}>Axsis</span>
                        </div>
                        <nav className="hidden md:flex space-x-6 lg:space-x-8">
                            {navItems.map(item => (
                                <a key={item.id} href={`#${item.id}`} onClick={(e) => { e.preventDefault(); handleScrollAndClose(item.id); }} className={`relative pb-1 group transition-all duration-300 font-medium tracking-wide ${activeSection === item.id ? 'text-gray-900 font-bold' : 'text-gray-700 hover:text-gray-900'}`}>
                                    {item.name}
                                    <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-in-out bg-cyan-600 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </a>
                            ))}
                        </nav>
                        <button 
                            className="md:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100 transition"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            <div className={`
                fixed top-0 right-0 h-screen w-3/4 max-w-sm 
                bg-white z-50 shadow-2xl 
                transform transition-transform duration-300 ease-in-out
                md:hidden 
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
            `}>
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <div className="text-xl font-extrabold">
                        <span className="text-gray-900">One </span>
                        <span className="text-transparent bg-clip-text font-extrabold" style={{ backgroundImage: 'linear-gradient(90deg, #ffb6c1, #a855f7)' }}>Axsis</span>
                    </div>
                    <button 
                        className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close Menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <nav className="flex flex-col items-start p-6 space-y-4 text-lg">
                    {navItems.map((item, index) => (
                        <button 
                            key={item.id}
                            onClick={() => handleScrollAndClose(item.id)}
                            className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-200 menu-item-animated ${activeSection === item.id ? 'bg-pink-50 text-pink-600 font-bold' : 'text-gray-800 hover:bg-gray-50'}`}
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            {item.name}
                        </button>
                    ))}
                    <a 
                        href={`https://wa.me/${portfolioData.whatsappNumber}?text=${encodeURIComponent(portfolioData.whatsappMessage)}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-6 w-full text-center px-6 py-2 bg-pink-500 text-white text-base font-semibold rounded-full shadow-lg hover:bg-pink-600 transition"
                    >
                        Chat on WhatsApp
                    </a>
                </nav>
            </div>
        </>
    );
};

// --- Hero Section ---
const HeroSection = ({ sectionRef }) => {
    return (
        <section 
            id="home" 
            ref={sectionRef} 
            // CRITICAL: fixed position, full viewport height (vh-fix), z-index 0
            className="fixed top-0 left-0 w-full vh-fix flex items-center justify-center p-4 sm:p-8 relative bg-white z-0" 
        >
            
           <Hyperspeed />
            
            <div className="text-center max-w-5xl mx-auto relative z-10">
                <h1 className={`text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none tracking-tight mb-4 header-animated text-gray-900`} style={{ animationDelay: '0.1s' }}>
                    Transform Your <span className="block text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #ffb6c1, #a855f7)' }}>Vision</span>
                </h1>
                <p className={`text-xl sm:text-2xl text-gray-700 mt-6 max-w-3xl mx-auto summary-animated`} style={{ animationDelay: '0.5s' }}>We craft cutting-edge solutions that accelerate your business forward.</p>
                
                <a 
                    href="#contact" 
                    className={`inline-flex items-center mt-10 px-8 py-3 bg-cyan-600 text-white text-lg font-semibold rounded-full shadow-2xl shadow-cyan-500/50`} 
                    style={{ animationDelay: '0.8s' }}
                >
                    Let's Talk! <MessageCircle className="w-6 h-6 ml-3" />
                </a>
            </div>
        </section>
    );
};

// --- Interior Design Card ---
const DesignCard = ({ title, description, imgSrc, index, isVisible, onDesignSelect, designData }) => {
    const handleSelect = () => {
        onDesignSelect(designData);
    };
    
    return (
        <div 
            className={`group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transition-transform duration-300 hover:scale-[1.03] ring-4 ring-transparent hover:ring-pink-200 ${isVisible ? 'card-animated' : ''}`}
            onClick={handleSelect} 
            style={{ animationDelay: isVisible ? `${index * 0.15}s` : '0s', height: '300px' }}
        >
            <img 
                src={imgSrc} 
                alt={title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                onError={(e) => {e.target.onerror = null; e.target.src="https://placehold.co/600x400/e0f7fa/00bcd4?text=Design+Render"}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300"></div>
            
            <div className={`absolute bottom-0 left-0 p-6`}>
                <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                <p className="text-gray-200 text-sm opacity-80">{description}</p>
            </div>
            
            <div className='absolute top-2 right-2 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs text-gray-800 font-semibold opacity-0 group-hover:opacity-100 transition-opacity'>
                View Details
            </div>
        </div>
    );
};

// --- Design Details (All previous logic and content retained) ---
const DesignDetails = ({ design, onBack }) => {
    if (!design) return null;

    let detailCards = [];
    let gridColsClass = 'lg:grid-cols-4'; 

    // --- LOGIC FOR LIVING ROOM DESIGN (ID 1) ---
    if (design.id === 1) { 
        detailCards = [
            { icon: Layout, title: "Living Area Render 1", description: `Primary view of the living space.`, imgSrc: Livingroom2 }, 
            { icon: Zap, title: "Living Area Render 2", description: "Alternative perspective showing furniture placement.", tags: ["Premium"], imgSrc: Livingroom3 }, 
            { icon: Layers, title: "Seating Area Detail", description: "Close-up of sofa, textures, and cushions.", imgSrc: Livingroom4 }, 
            { icon: PenTool, title: "Wall Finish & Lighting", description: "Detail of the feature wall and integrated ceiling lights.", imgSrc: Livingroom5 },
            { icon: Home, title: "Material Palette Board", description: "Sample presentation of wood, stone, and fabric finishes.", imgSrc: Livingroom6 }, 
            { icon: Layers, title: "Entertainment Unit Detail", description: "View of the media console and surrounding cabinetry.", imgSrc: Livingroom7 }, 
        ];
        gridColsClass = 'lg:grid-cols-4 xl:grid-cols-6'; 
    }
    // --- LOGIC FOR LUXURY VILLA (ID 2) ---
    else if (design.id === 2) { 
        detailCards = [
            { icon: Layout, title: "Architectural Layout Render", description: `3D perspective and floor plan for the Luxury Villa.`, imgSrc: Room1 }, 
            { icon: Zap, title: "Materials & Exterior Finish", description: "Detailed plan for concrete, glass, stone cladding, and natural wood accents.", tags: ["Premium"], imgSrc: Room2 }, 
            { icon: Layers, title: "Landscape Design Plan", description: "Plans for pool, deck area, and garden integration.", imgSrc: Room3 }, 
            { icon: PenTool, title: "Interior Lighting & Furnishing", description: "Selection of high-end furniture and integrated smart lighting systems.", imgSrc: Room4 },
            { icon: Home, title: "Master Suite Detail", description: "Specific designs for the bedroom and luxury ensuite bathroom.", imgSrc: Room5 }, 
        ];
        gridColsClass = 'lg:grid-cols-5';
    } 
    // --- LOGIC FOR COMPACT GOURMET KITCHEN (ID 3) ---
    else if (design.id === 3) {
        detailCards = [
            { icon: Layout, title: "3D Render & Layout", description: `Detailed 3D visualization and CAD blueprints for the Kitchen.`, imgSrc: KITCHEN1 },
            { icon: Zap, title: "Materials & Finish", description: "Selection of sustainable and premium materials (wood, stone, metal).", tags: ["Premium", "Sustainable"], imgSrc: KITCHEN2 },
            { icon: Layers, title: "Execution Timeline", description: "Phase-by-phase project schedule and management plan.", imgSrc: KITCHEN3 },
            { icon: PenTool, title: "Budget Breakdown", description: "Transparent cost estimation for the entire project lifecycle.", imgSrc: KITCHEN4 },
        ];
        gridColsClass = 'lg:grid-cols-4';
    } 
    // --- LOGIC FOR MODERN CONCEPT ROOM (ID 4) ---
    else if (design.id === 4) {
        detailCards = [
            { icon: Layout, title: "Render - Floor Plan Overview", description: `Zoning and layout plan emphasizing the flexible space usage.`, imgSrc: Render1 }, 
            { icon: Zap, title: "Render - Feature Wall Detail", description: "Detailed view of custom joinery, shelving, and ambient lighting.", tags: ["Modern"], imgSrc: Render2 }, 
            { icon: Layers, title: "Render - Material Palette", description: "Close-up on the blend of stone, wood, and metal finishes.", imgSrc: Render3 }, 
        ];
        gridColsClass = 'lg:grid-cols-3';
    }
    // --- LOGIC FOR RESORT (ID 5) ---
    else if (design.id === 5) {
        detailCards = [
            { icon: Layout, title: "Design View 1", description: `Collaboration space rendering.`, imgSrc: Villa1 }, 
            { icon: Zap, title: "Design View 2", description: "Lighting and material close-up.", tags: ["Detail"], imgSrc: Villa2 }, 
            { icon: Layers, title: "Design View 3", description: "Overall spatial arrangement.", imgSrc: Villa3 }, 
            { icon: PenTool, title: "Design View 4", description: "Another perspective render.", imgSrc: Villa4 },
            { icon: Cpu, title: "Design View 5", description: "Conceptual view.", imgSrc: Villa5 },
            { icon: Globe, title: "Design View 6", description: "Extended spatial render.", imgSrc: Villa6 },
            { icon: Home, title: "Design View 7", description: "Alternative perspective.", imgSrc: Villa7 },
            { icon: Users, title: "Design View 8", description: "Functional zone detail.", imgSrc: Villa8 },
            { icon: Award, title: "Design View 9", description: "Material sample view.", imgSrc: Villa9 },
            { icon: Cloud, title: "**Villa Exterior Render**", description: "**Full view of the luxurious villa exterior architecture.**", imgSrc: Villa10 }, 
        ];
        gridColsClass = 'lg:grid-cols-5';
    }
    // --- LOGIC FOR ALL OTHER DESIGNS (Fallback) ---
    else {
        detailCards = [
            { icon: Layout, title: "3D Render & Layout", description: `Detailed 3D visualization and CAD blueprints for ${design.title}.`, imgSrc: Livingroom2 }, 
            { icon: Zap, title: "Materials & Finish", description: "Selection of materials and color palettes.", tags: ["Generic"], imgSrc: Livingroom3 }, 
            { icon: Layers, title: "Execution Timeline", description: "Project scheduling and management plan.", imgSrc: Livingroom4 }, 
            { icon: PenTool, title: "Budget Breakdown", description: "Transparent cost estimation.", imgSrc: Livingroom5 },
        ];
        gridColsClass = 'lg:grid-cols-4';
    }

    return (
        <div className="mt-20 pt-10 border-t border-gray-200 detail-section-animated">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Detailed Plan for: <span className="text-pink-600">{design.title}</span>
            </h3>

            <button 
                onClick={onBack} 
                className="mb-8 inline-flex items-center text-pink-600 hover:text-pink-800 font-semibold transition"
            >
                <ArrowLeft className="w-5 h-5 mr-2" /> Back to all Designs
            </button>

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-6`}> 
                {detailCards.map((card, index) => (
                    <div 
                        key={index} 
                        className={`bg-white rounded-xl shadow-lg ring-1 ring-gray-100 border-t-4 border-pink-400 transform transition duration-300 hover:shadow-xl hover:-translate-y-1 card-animated overflow-hidden`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* 🖼️ Image Display */}
                        <div className="h-64 w-full"> 
                            <img 
                                src={card.imgSrc} 
                                alt={card.title} 
                                className="w-full h-full object-cover"
                                onError={(e) => {e.target.onerror = null; e.target.src="https://placehold.co/400x300/fecaca/991b1b?text=Plan"}}
                            />
                        </div>
                        
                        <div className="p-2">
                           {/* Keeping space empty */}
                        </div>

                    </div>
                ))}
            </div>
            
            <div className="text-center mt-12 p-6 bg-pink-50 rounded-xl shadow-inner">
                <p className="text-lg font-medium text-pink-800 mb-4">Ready to implement this vision?</p>
                <a 
                    href={`https://wa.me/${portfolioData.whatsappNumber}?text=${encodeURIComponent(`I'm interested in the detailed plan for ${design.title}.`)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-6 py-3 bg-pink-500 text-white text-base font-semibold rounded-full shadow-lg hover:bg-pink-600 transition"
                >
                    Get a Quote Now
                </a>
            </div>
        </div>
    );
};


// --- InteriorDesign Component (BACKGROUND FIXED TO SOLID WHITE) ---
const InteriorDesign = ({ sectionRef, scrollToSection }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedDesign, setSelectedDesign] = useState(null);
    const detailsRef = useRef(null);

    // Data structure for designs
    const designs = [
        { id: 1, title: "Living Room design ", description: "A collaborative, modern living room area with 2D & 3D rendering.", img: Livingroom1 }, 
        { 
            id: 2, 
            title: "Luxury Villa", 
            description: "High-end, contemporary villa architecture and interior plan, maximizing premium living space.", 
            img: image4 
        },
        { id: 3, title: "Compact Gourmet Kitchen", description: "Modern modular kitchen with patterned backsplash and black stone countertops.", img: image2 }, 
        { 
            id: 4, 
            title: "Modern Concept Room", 
            description: "A versatile, contemporary room concept featuring modern material mixing and a unique layout.", 
            img: image3 
        },
        { id: 5, title: "**Resort**", description: "A focused corner space for teamwork, enhanced by natural wood textures.", img: Villa1 } 
    ];

    const handleDesignSelect = (design) => {
        setSelectedDesign(design);
        setTimeout(() => {
            if (detailsRef.current) {
                detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    const handleBack = () => {
        setSelectedDesign(null);
        if (sectionRef.current) {
            // Using window.scrollTo to return to the top of the interior section
            window.scrollTo({
                top: sectionRef.current.offsetTop - 100, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    };

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

    return (
        <section 
            id="interiors" 
            ref={sectionRef} 
            className="py-20 md:py-24 bg-white relative overflow-hidden" 
        > 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className={`text-4xl font-bold text-center mb-12 text-gray-900 ${isVisible ? 'header-animated' : ''}`}>
                    <PenTool className="inline-block w-8 h-8 mr-3 text-pink-400 icon-pulse" /> 
                    **Luxury Villa & Space Design**
                </h2>
                <p className={`text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'summary-animated' : ''}`}>
                    We bring your **architectural vision** to life, specializing in high-end, contemporary **luxury spaces** and meticulous material selection.
                </p>
                
                <div ref={detailsRef}>
                    {selectedDesign === null ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {designs.map((design, index) => (
                                <DesignCard 
                                    key={design.id} 
                                    {...design} 
                                    index={index} 
                                    isVisible={isVisible} 
                                    imgSrc={design.img} 
                                    onDesignSelect={handleDesignSelect}
                                    designData={design} 
                                />
                            ))}
                        </div>
                    ) : (
                        <DesignDetails 
                            design={selectedDesign} 
                            onBack={handleBack} 
                            scrollToSection={scrollToSection}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

// --- Services Section (Retained) ---
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

// --- Metrics Bar (Retained) ---
const MetricCard = ({ metric, index, isVisible }) => {
    const [isTapped, setIsTapped] = useState(false);

    const handleTap = () => {
        setIsTapped(true);
        setTimeout(() => setIsTapped(false), 3000); 
    };
    
    const glowClass = isTapped ? 'shadow-2xl shadow-pink-500/30 border-pink-300 scale-[1.05]' : '';

    return (
        <div 
            key={index} 
            onClick={handleTap} 
            className={`
                bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 
                shadow-xl shadow-gray-200/50 
                flex flex-col items-center text-center 
                transition duration-500 transform cursor-pointer
                hover:scale-[1.05] hover:border-pink-300
                hover:shadow-2xl hover:shadow-pink-500/30 
                ${isVisible ? 'card-animated' : ''}
                ${glowClass} 
            `} 
            style={{ animationDelay: isVisible ? `${index * 0.15}s` : '0s' }}
        >
            <div className={`p-4 rounded-full mb-4 bg-gray-200 ${metric.color} metrics-icon-pulse`}> 
                <metric.icon className="w-8 h-8" />
            </div>
            <h3 className={`text-5xl font-extrabold mb-1 text-gray-900 ${isVisible ? 'text-animated' : ''}`}>{metric.count}</h3> 
            <p className={`text-md font-medium text-gray-600 mt-2 ${isVisible ? 'summary-animated' : ''}`} 
                style={{ animationDelay: isVisible ? `${index * 0.15 + 0.2}s` : '0s' }} 
            >
                {metric.label}
            </p>
            <div className={`w-1/3 h-1 mt-4 rounded-full ${metric.lineColor} ${isVisible ? 'animate-line-flow' : ''}`} style={{ animationDelay: isVisible ? `${index * 0.15 + 0.5}s` : '0s' }}></div>
        </div>
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
            { threshold: 0.5, rootMargin: '0px 0px -100px 0px' } 
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
                        <MetricCard 
                            key={index} 
                            metric={metric} 
                            index={index} 
                            isVisible={isVisible} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


// --- Main App Component ---
const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const sectionRefs = useRef({});

    // Custom VH calculation for mobile consistency
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        setVh();
        window.addEventListener('resize', setVh);
        return () => window.removeEventListener('resize', setVh);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    // Intersection Observer logic for active section highlighting
    useEffect(() => {
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.3 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
        }, observerOptions);
        
        // Map all sections we want to observe
        const sectionIds = ['home', 'interiors', 'services', 'projects', 'contact'];
        sectionIds.forEach(id => { sectionRefs.current[id] = document.getElementById(id); });


        Object.values(sectionRefs.current).forEach(ref => { if (ref) observer.observe(ref); });
        return () => { Object.values(sectionRefs.current).forEach(ref => { if (ref) observer.unobserve(ref); }); };
    }, []);

    // Custom scroll function to handle fixed Hero section height
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        
        if (element) {
            let offset = element.offsetTop;
            
            if (id !== 'home') {
                // Adjust scroll target to top of the floating content wrapper
                const floatingContainer = document.getElementById('floating-content-wrapper');
                const headerHeight = 100; // Approximate height of fixed header for offset
                
                if (floatingContainer) {
                    // Calculate the target position relative to the floating wrapper's top
                    offset = floatingContainer.offsetTop + (element.offsetTop - floatingContainer.offsetTop) - headerHeight;
                }
            } else {
                offset = 0; // Scroll to the very top for home
            }
            
            window.scrollTo({
                top: offset, 
                behavior: 'smooth'
            });
        }
    };


    return (
        <div className="min-h-screen bg-white font-sans antialiased">
            <style>
                {`
                    /* Custom CSS for animations and layout fixes */
                    @keyframes fadeLift {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    .header-fade-lift-animated {
                        animation: fadeLift 0.6s ease-out forwards;
                    }
                    .header-animated {
                        animation: fadeLift 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
                    }
                    .summary-animated {
                        animation: fadeIn 1s ease-out forwards;
                    }
                    .card-animated {
                        animation: fadeLift 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
                    }
                    .detail-section-animated {
                        animation: fadeIn 0.5s ease-out forwards;
                    }
                    .vh-fix {
                        min-height: calc(var(--vh, 1vh) * 100);
                    }
                    /* Keyframe for icon pulse */
                    @keyframes icon-pulse {
                        0%, 100% { transform: scale(1); opacity: 1; }
                        50% { transform: scale(1.1); opacity: 0.8; }
                    }
                    .icon-pulse {
                        animation: icon-pulse 2s infinite ease-in-out;
                    }
                    .metrics-icon-pulse {
                        animation: icon-pulse 3s infinite ease-in-out;
                        animation-delay: 1s;
                    }
                    /* Line flow animation */
                    @keyframes line-flow {
                        0% { width: 0%; opacity: 0; }
                        100% { width: 33.3333%; opacity: 1; }
                    }
                    .animate-line-flow {
                        animation: line-flow 1s ease-out forwards;
                    }
                    /* Mobile menu item slide */
                    @keyframes menu-item-slide {
                        from { opacity: 0; transform: translateX(20px); }
                        to { opacity: 1; transform: translateX(0); }
                    }
                    .menu-item-animated {
                        animation: menu-item-slide 0.5s ease-out forwards;
                    }
                    /* Project Card Glow effect */
                    @keyframes service-card-glow {
                        0%, 100% { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
                        50% { box-shadow: 0 20px 25px -5px rgba(236, 72, 153, 0.2), 0 8px 10px -6px rgba(236, 72, 153, 0.1); }
                    }
                    .hover\\:shadow-pink-500\\/30:hover {
                        box-shadow: 0 20px 25px -5px rgba(236, 72, 153, 0.3), 0 8px 10px -6px rgba(236, 72, 153, 0.1);
                    }
                `}
            </style>
            
            <Header 
                scrollToSection={scrollToSection} 
                activeSection={activeSection} 
                isMenuOpen={isMenuOpen} 
                setIsMenuOpen={setIsMenuOpen} 
            />

            <main className="pt-24">
                {/* 1. FIXED HERO SECTION (z-0 to go under the floating content) */}
                <HeroSection 
                    sectionRef={ref => sectionRefs.current.home = ref} 
                />

                {/* 2. SPACER (REQUIRED to push the rest of the content below the fixed hero) */}
                <div id="home-spacer" className="vh-fix w-full bg-transparent"></div>

                {/* 3. SCROLLABLE CONTENT WRAPPER (This content will float over the fixed Hero) */}
                <div id="floating-content-wrapper" className="relative z-10 bg-white shadow-2xl"> 
                    
                    <InteriorDesign 
                        sectionRef={ref => sectionRefs.current.interiors = ref} 
                        scrollToSection={scrollToSection} 
                    />

                    <ServicesSection 
                        sectionRef={ref => sectionRefs.current.services = ref} 
                    />

                    {/* Projects/Metrics Section */}
                    <section id="projects" ref={ref => sectionRefs.current.projects = ref} className="py-20 md:py-24 bg-white relative">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
                                <Rocket className="inline-block w-8 h-8 mr-3 text-cyan-600 icon-pulse" />
                                Our Impact & Expertise
                            </h2>
                            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
                                Driven by performance, delivered with transparency. See the metrics that define our work.
                            </p>
                        </div>
                        <MetricsBar />
                    </section>

                    {/* Contact Section (BACKGROUND FIXED TO SOLID WHITE) */}
                    <section id="contact" ref={ref => sectionRefs.current.contact = ref} className="py-20 md:py-24 bg-white relative border-t border-gray-200">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 className="text-4xl font-bold mb-4 text-gray-900">
                                <Mail className="inline-block w-8 h-8 mr-3 text-pink-400 icon-pulse" />
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
                                Get in touch today for a free consultation and let's bring your architectural and digital dreams to life.
                            </p>
                            <a 
                                href={`https://wa.me/${portfolioData.whatsappNumber}?text=${encodeURIComponent(portfolioData.whatsappMessage)}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center px-10 py-4 bg-pink-500 text-white text-xl font-semibold rounded-full shadow-2xl shadow-pink-500/50 hover:bg-pink-600 transition transform hover:scale-[1.02] active:scale-95"
                            >
                                <MessageCircle className="w-6 h-6 mr-3" /> Chat on WhatsApp
                            </a>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; {new Date().getFullYear()} One Axsis. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;