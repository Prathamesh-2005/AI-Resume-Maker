import React, { useRef } from "react";
import "daisyui";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaCertificate, FaCalendarAlt } from "react-icons/fa";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

const Resume = ({ data = {} }) => {
  const resumeRef = useRef(null);

  const handleDownloadPdf = () => {
    if (!resumeRef.current) return;
    toPng(resumeRef.current, { quality: 1.0 })
      .then((dataUrl) => {
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(dataUrl, "PNG", 10, 10, 190, 0);
        pdf.save(`${data?.personalInformation?.fullName || "Resume"}.pdf`);
      })
      .catch((err) => {
        console.error("Error generating PDF", err);
      });
  };

  // Debug helper to ensure certifications data exists
  console.log("Certifications data:", data?.certifications);

  return (
    <>
      <div
        ref={resumeRef}
        className="max-w-4xl mx-auto shadow-2xl rounded-lg p-8 space-y-6 bg-base-100 text-base-content border border-gray-200 dark:border-gray-700 transition-all duration-300"
      >
        {/* Header Section */}
        <div className="text-center space-y-2">
          {data?.personalInformation?.fullName && (
            <h1 className="text-4xl font-bold text-primary">
              {data.personalInformation.fullName}
            </h1>
          )}
          {data?.personalInformation?.location && (
            <p className="text-lg text-gray-500">{data.personalInformation.location}</p>
          )}

          <div className="flex justify-center space-x-4 mt-2">
            {data?.personalInformation?.email && (
              <a
                href={`mailto:${data.personalInformation.email}`}
                className="flex items-center text-secondary hover:underline"
              >
                <FaEnvelope className="mr-2" /> {data.personalInformation.email}
              </a>
            )}
            {data?.personalInformation?.phoneNumber && (
              <p className="flex items-center text-gray-500">
                <FaPhone className="mr-2" /> {data.personalInformation.phoneNumber}
              </p>
            )}
          </div>

          <div className="flex justify-center space-x-4 mt-2">
            {data?.personalInformation?.gitHub && (
              <a
                href={data.personalInformation.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            )}
            {data?.personalInformation?.linkedIn && (
              <a
                href={data.personalInformation.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            )}
          </div>
        </div>

        {data?.summary && (
          <>
            <div className="divider"></div>
            <section>
              <h2 className="text-2xl font-semibold text-secondary">Summary</h2>
              <p className="text-gray-700 dark:text-gray-300">{data.summary}</p>
            </section>
          </>
        )}

        {data?.skills?.length > 0 && (
          <>
            <div className="divider"></div>
            <section>
              <h2 className="text-2xl font-semibold text-secondary">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {data.skills.map((skill, index) => (
                  <div key={index} className="badge badge-outline badge-lg px-4 py-2">
                    {skill.title || skill.name} - <span className="ml-1 font-semibold">{skill.level}</span>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {data?.experience?.length > 0 && (
          <>
            <div className="divider"></div>
            <section>
              <h2 className="text-2xl font-semibold text-secondary">Experience</h2>
              {data.experience.map((exp, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold">{exp.jobTitle}</h3>
                  <p className="text-gray-500">
                    {exp.company} | {exp.location}
                  </p>
                  <p className="text-gray-400">{exp.duration}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {exp.responsibility}
                  </p>
                </div>
              ))}
            </section>
          </>
        )}

        {data?.education?.length > 0 && (
          <>
            <div className="divider"></div>
            <section>
              <h2 className="text-2xl font-semibold text-secondary">Education</h2>
              {data.education.map((edu, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-gray-500">{edu.university}, {edu.location}</p>
                  <p className="text-gray-400">🎓 Graduation Year: {edu.graduationYear}</p>
                </div>
              ))}
            </section>
          </>
        )}

        {/* Always render Certifications section if data exists */}
        {Array.isArray(data?.certifications) && (
  <>
    <div className="divider"></div>
    <section>
      <h2 className="text-2xl font-semibold text-secondary">Certifications</h2>
      <div className="grid gap-4 mt-2">
        {data.certifications.map((cert, index) => {
          console.log("Certificate item:", cert); // Debug each certificate
          return (
            <div
              key={index}
              className="p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <div className="flex items-center">
                <FaCertificate className="text-secondary mr-2" size={20} />
                <h3 className="text-xl font-bold">
                  {cert.name || cert.title || "Certificate"}
                </h3>
              </div>
              {cert.issuer && (
                <p className="text-gray-500 mt-1">
                  <strong>Issuer:</strong> {cert.issuer}
                </p>
              )}
              {cert.expiration && (
                <p className="text-gray-600 mt-1 ml-6">
                  <strong>Expires:</strong> {cert.expiration}
                </p>
              )}
              {cert.credentialId && (
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  <strong>Credential ID:</strong> {cert.credentialId}
                </p>
              )}
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-500 hover:underline inline-block"
                >
                  View Certificate
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  </>
)}

        {data?.projects?.length > 0 && (
          <>
            <div className="divider"></div>
            <section>
              <h2 className="text-2xl font-semibold text-secondary">Projects</h2>
              {data.projects.map((project, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold">{project.title || project.name}</h3>
                  <p className="text-gray-400">{project.duration}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge badge-accent">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-blue-500 hover:underline inline-block"
                    >
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </section>
          </>
        )}

        {data?.achievements?.length > 0 && (
          <>
            <div className="divider"></div>
            <section>
              <h2 className="text-2xl font-semibold text-secondary">Achievements</h2>
              <div className="mt-2 space-y-4">
                {data.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
                  >
                    <h3 className="text-xl font-bold">{achievement.title || achievement.name}</h3>
                    <p className="text-gray-400">{achievement.date}</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {data?.languages?.length > 0 && (
          <>
            <div className="divider"></div>
            <section>
              <h2 className="text-2xl font-semibold text-secondary">Languages</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {data.languages.map((language, index) => (
                  <div key={index} className="badge badge-outline badge-lg px-4 py-2">
                    {typeof language === 'string' 
                      ? language 
                      : `${language.name} - ${language.proficiency || language.level}`
                    }
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {data?.interests?.length > 0 && (
          <>
            <div className="divider"></div>
            <section>
              <h2 className="text-2xl font-semibold text-secondary">Interests</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {data.interests.map((interest, index) => (
                  <div key={index} className="badge badge-secondary badge-outline px-4 py-2">
                    {typeof interest === 'string' ? interest : interest.name}
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <section className="flex justify-center mt-4">
          <button onClick={handleDownloadPdf} className="btn btn-primary">
            Download PDF
          </button>
        </section>
      </div>
    </>
  );
};

export default Resume;