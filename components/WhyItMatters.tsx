// why-it-matters.tsx
import React from "react";
import Link from "next/link";

interface ResearchItem {
  title: string;
  source: string;
  link: string;
}

const WhyItMattersComponent: React.FC = () => {
  const researchArticles: ResearchItem[] = [
    {
      title: "Mobiles: Are phones 'hell' in schools?",
      source: "Eenadu Telangana",
      link: "https://www.eenadu.net/telugu-news/telangana/studies-concluded-that-mobiles-are-a-hindrance-to-students-learning/1802/125030089",
    },
    {
      title:
        "72% of U.S. high school teachers say cell phone distraction is a major problem in the classroom",
      source: "Pew Research Center",
      link: "https://www.pewresearch.org/short-reads/2024/06/12/72-percent-of-us-high-school-teachers-say-cellphone-distraction-is-a-major-problem-in-the-classroom/",
    },
    {
      title: "Schools around the world taking action on mobile phones",
      source:
        "Connecting Board of Education, Department of Education - South Australia, Department of Education - UK",
      link: "https://yaledailynews.com/blog/2024/09/23/connecticut-board-of-education-recommends-cell-phone-restrictions-in-public-schools/",
    },
    {
      title:
        "Global Education Monitoring Report argues for technology to be used in class only when it supports learning outcomes",
      source: "UNESCO",
      link: "https://unesdoc.unesco.org/ark:/48223/pf0000385723/PDF/385723eng.pdf.multi",
    },
    {
      title:
        "About half of kids ages 11 to 17 get at least 237 notifications on their phones in a typical day, and of those notifications, 25% arrive during the school day",
      source: "Common Sense Media",
      link: "https://www.nbcnews.com/health/health-news/teens-inundated-phone-prompts-day-night-research-finds-rcna108044",
    },
    {
      title:
        "Nearly 95% of young people aged 13-17 report near-constant social media use. Research shows that excessive use—over three hours a day—can elevate risks of depression, anxiety, body dissatisfaction, and exposure to harmful content",
      source: "Yale Research",
      link: "https://www.yalemedicine.org/news/social-media-teen-mental-health-a-parents-guide",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 mt-10">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Why It Matters
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-12"></div>
          <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
            Research findings highlighting the impact of mobile phones and
            social media on education and student wellbeing.
          </p>
        </div>

        <div className="space-y-16">
          {researchArticles.map((article, index) => (
            <div key={index} className="border-l-2 border-blue-500 pl-6">
              <Link href={article.link} className="block group">
                <h2 className="text-2xl font-bold text-[#4090BD] mb-2 hover:text-[#7da8c0] transition-colors">
                  {article.title}
                </h2>
                <p className="text-white text-md">{article.source}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyItMattersComponent;
