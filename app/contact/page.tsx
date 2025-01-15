import React from "react";

const Contact = () => {
  const sections = [
    {
      title: "Service Optimization",
      rows: [
        {
          columns: 3,
          items: [
            {
              heading: "Service Optimization",
              points: [
                "Tailored AI Agents for Service",
                "Virtual Contact Center",
                "Agent Support Tools",
                "Industry-Ready AI Models: Finance, Healthcare, Retail",
              ],
            },
            {
              heading: "Work Automation",
              points: [
                "Custom AI Assistants for Workflow",
                "Advanced Enterprise Search",
                "Intelligent Work Assistants",
                "Ready-to-Use AI Models: HR, IT, Recruitment",
              ],
            },
            {
              heading: "Process Enhancement",
              points: [
                "Intelligent Process Automation",
                "Workflow Management Tools",
                "Predefined Process Templates",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Development Tools",
      rows: [
        {
          columns: 2,
          items: [
            {
              heading: "Code-Free Solutions",
              points: [
                "Drag-and-Drop Agent Creator",
                "Seamless Integration Tools",
                "Conversational Design Studio",
              ],
            },
            {
              heading: "AI Development Toolkit",
              points: [
                "Model Creation Framework",
                "Pre-Built AI Models",
                "Adaptive AI Engines and Services",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Data Management and Channels",
      rows: [
        {
          columns: 4,
          items: [
            {
              heading: "Unified Data Framework",
              points: [
                "Extensive Data Connectors",
                "Streamlined Data Pipelines",
                "Knowledge Repository",
                "Advanced Retrieval Systems",
              ],
            },
            {
              heading: "Platform Features",
              points: [
                "Deployment and Maintenance Tools",
                "Compliance and Security Measures",
                "Insights and Analytics",
                "Operational AI Monitoring",
              ],
            },
            {
              heading: "Specialized Solutions",
              points: [
                "AI for HR and Recruitment",
                "Support and Customer Services",
                "Communication and Interaction Platforms",
              ],
            },
            {
              heading: "Channels",
              points: [
                "Messaging Platforms",
                "Social Media Tools",
                "Mobile and Web Integration",
                "Email and SMS Support",
                "Real-Time Chat",
                "Voice Assistants",
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {sections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              {section.title}
            </h2>
            {section.rows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${row.columns} gap-6`}
              >
                {row.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                      {item.heading}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {item.points.map((point, pointIdx) => (
                        <li key={pointIdx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
