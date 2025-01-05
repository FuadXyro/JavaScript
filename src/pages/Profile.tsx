import { useState, useEffect, useRef } from 'react';
import { useLoading } from '../context/LoadingContext';
import {
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
  CalendarIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  UserCircleIcon,
  CameraIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface ProfileData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    website: string;
    joinDate: string;
    avatar: string;
    coverPhoto: string;
  };
  professional: {
    company: string;
    position: string;
    experience: Array<{
      company: string;
      position: string;
      duration: string;
      description: string;
    }>;
    education: Array<{
      school: string;
      degree: string;
      field: string;
      duration: string;
    }>;
    skills: string[];
    projects: Array<{
      name: string;
      description: string;
      technologies: string[];
      link?: string;
    }>;
  };
}

export default function Profile() {
  const { setLoading } = useLoading();
  const [activeTab, setActiveTab] = useState('overview');
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  
  const [profileData, setProfileData] = useState<ProfileData>({
    personal: {
      name: 'Fuad Xyro',
      title: 'Software Engineer',
      email: 'lyncxteam@gmail.com',
      phone: '+62 819-9911-5614',
      location: 'Jawa Tengah, Indonesia',
      bio: 'Passionate software engineer with 8+ years of experience in full-stack development. Love building scalable applications and mentoring junior developers.',
      website: 'https://api.zenkey.my.id',
      joinDate: 'January 2025',
      avatar: '/images/default-avatar.svg',
      coverPhoto: '/images/default-cover.svg',
    },
    professional: {
      company: 'Tech Corp',
      position: 'Senior Software Engineer',
      experience: [
        {
          company: 'Tech Corp',
          position: 'Senior Software Engineer',
          duration: '2023 - Present',
          description: 'Leading development of cloud-native applications',
        },
      ],
      education: [
        {
          school: 'University of Technology',
          degree: 'Bachelor',
          field: 'Computer Science',
          duration: '2015 - 2019',
        },
      ],
      skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS'],
      projects: [
        {
          name: 'Project Alpha',
          description: 'A cloud-based project management system',
          technologies: ['React', 'Node.js', 'MongoDB'],
          link: 'https://project-alpha.com',
        },
      ],
    },
  });

  useEffect(() => {
    const initializePage = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
      } finally {
        setLoading(false);
      }
    };

    initializePage();
  }, [setLoading]);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData(prev => ({
          ...prev,
          personal: {
            ...prev.personal,
            avatar: reader.result as string,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData(prev => ({
          ...prev,
          personal: {
            ...prev.personal,
            coverPhoto: reader.result as string,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const ProfileHeader = () => (
    <div className="relative">
      {/* Cover Photo */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-b-3xl">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out hover:scale-105"
          style={{ 
            backgroundImage: `url(${profileData.personal.coverPhoto || '/images/default-cover.svg'})`,
            filter: 'blur(2px)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <button
          onClick={() => coverInputRef.current?.click()}
          className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/70 text-white rounded-xl backdrop-blur-sm transition-all"
        >
          <CameraIcon className="w-5 h-5" />
          Change Cover
        </button>
        <input
          ref={coverInputRef}
          type="file"
          accept="image/*"
          onChange={handleCoverChange}
          className="hidden"
        />
      </div>

      {/* Profile Info */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center">
        {/* Avatar */}
        <div className="relative group">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-900 relative bg-gray-800">
            <img
              src={profileData.personal.avatar || '/images/default-avatar.svg'}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/default-avatar.svg';
              }}
            />
          </div>
          <button
            onClick={() => avatarInputRef.current?.click()}
            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
          >
            <CameraIcon className="w-8 h-8 text-white" />
          </button>
          <input
            ref={avatarInputRef}
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>

        {/* Name and Title */}
        <div className="text-center mt-4">
          <h1 className="text-2xl font-bold text-white">{profileData.personal.name}</h1>
          <p className="text-gray-400">{profileData.personal.title}</p>
        </div>
      </div>
    </div>
  );

  const ContactInfo = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="flex items-center gap-3 text-gray-400">
        <EnvelopeIcon className="w-5 h-5" />
        <span>{profileData.personal.email}</span>
      </div>
      <div className="flex items-center gap-3 text-gray-400">
        <PhoneIcon className="w-5 h-5" />
        <span>{profileData.personal.phone}</span>
      </div>
      <div className="flex items-center gap-3 text-gray-400">
        <GlobeAltIcon className="w-5 h-5" />
        <a href={profileData.personal.website} className="hover:text-blue-400 transition-colors">
          {profileData.personal.website}
        </a>
      </div>
      <div className="flex items-center gap-3 text-gray-400">
        <CalendarIcon className="w-5 h-5" />
        <span>Joined {profileData.personal.joinDate}</span>
      </div>
    </div>
  );

  const TabButton = ({ name, label, icon: Icon }: { name: string; label: string; icon: any }) => (
    <button
      onClick={() => setActiveTab(name)}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
        activeTab === name
          ? 'bg-blue-500 text-white'
          : 'text-gray-400 hover:bg-gray-800/50'
      }`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <ProfileHeader />
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-12">
        <div className="space-y-8">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-4">About</h2>
            <p className="text-gray-400 leading-relaxed">{profileData.personal.bio}</p>
            <ContactInfo />
          </motion.div>

          {/* Tabs and Content */}
          <div className="space-y-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              <TabButton name="overview" label="Overview" icon={UserCircleIcon} />
              <TabButton name="experience" label="Experience" icon={BriefcaseIcon} />
              <TabButton name="education" label="Education" icon={AcademicCapIcon} />
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Skills */}
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {profileData.professional.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Projects</h3>
                    <div className="space-y-4">
                      {profileData.professional.projects.map((project, index) => (
                        <div key={index} className="space-y-2">
                          <h4 className="text-white font-medium">{project.name}</h4>
                          <p className="text-gray-400 text-sm">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'experience' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  {profileData.professional.experience.map((exp, index) => (
                    <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-white">{exp.position}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                      <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
                      <p className="text-gray-400 mt-3">{exp.description}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'education' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  {profileData.professional.education.map((edu, index) => (
                    <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
                      <p className="text-blue-400">{edu.degree} in {edu.field}</p>
                      <p className="text-gray-500 text-sm mt-1">{edu.duration}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
