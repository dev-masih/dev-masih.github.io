import { useEffect, useState } from 'react';
import LazyImage from '../lazy-image';
import { PiBriefcase } from 'react-icons/pi';
import { SanitizedBlog } from '../../interfaces/sanitized-config';
import { ga, skeleton } from '../../utils';
import { Article } from '../../interfaces/article';

const staticArticles: Article[] = [
  {
    title: "Software Development Team Lead @ Filmnet.ir",
    thumbnail: "https://raw.githubusercontent.com/dev-masih/my-media-bin/refs/heads/master/dev-masih.github.io/filmnet_logo.jpg",
    link: "https://filmnet.ir",
    datetime: "Jun 2023 - Present · On-site",
    description: "Architected Filmnet's VOD backend with C#/.NET microservices, hybrid VM/container infrastructure, and CI/CD pipelines. Optimized high-traffic performance for millions of users using MSSQL, Elasticsearch, RabbitMQ, and multilevel caching with in-memory and Redis clusters.",
    categories: [".NET", "ASP.NET Web API", "C#", "Microsoft SQL Server", "RabbitMQ", "Elasticsearch", "Git", "MongoDB", "Nginx", "Sentry", "GoLang"],
  },
  {
    title: "Senior Backend Developer @ Metapolitan - The Blockchain Capital",
    thumbnail: "https://raw.githubusercontent.com/dev-masih/my-media-bin/refs/heads/master/dev-masih.github.io/metapolitan_logo.jpg",
    link: "https://metapolitan.io",
    datetime: "Sep 2024 - Present · Remote",
    description: "Developed Vero Compliance, a modular KYC/KYB platform for in-house services. Engineered a scalable backend, secure admin panel, and pluggable provider adapters to automate onboarding, enable risk scoring, and reduce manual review.",
    categories: ["KYC Verification", "Customer Onboarding", "Risk Scoring", "Workflow Automation", "ASP.NET", "Nuget"],
  },
  {
    title: "Chief Technology Officer @ Dastyartech",
    thumbnail: "https://raw.githubusercontent.com/dev-masih/my-media-bin/refs/heads/master/dev-masih.github.io/dastyartech_logo.jpg",
    link: "https://dastyartech.org",
    datetime: "May 2024 - Present · Remote",
    description: "CTO and tech lead at DastyarTech, a newly launched startup developing an AI automation platform unifying chat and ticketing across web, apps, and social media with customizable flows, 24/7 AI responses, and operator management.",
    categories: ["Technology Leadership", "Artificial Intelligence (AI)", "ASP.NET", "Social Media Integration", "Chatbot", "Workflow Orchestration"],
  }
];

const BlogCard = ({
  loading,
  blog,
  googleAnalyticsId,
}: {
  loading: boolean;
  blog: SanitizedBlog;
  googleAnalyticsId?: string;
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    setArticles(staticArticles);
  }, [blog.source, blog.username]);

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < blog.limit; index++) {
      array.push(
        <div className="card shadow-md card-sm bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0">
                <div className="w-24 h-24 mask mask-squircle">
                  {skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto md:mx-0',
                      })}
                    </h2>
                    {skeleton({
                      widthCls: 'w-24',
                      heightCls: 'h-3',
                      className: 'mx-auto md:mx-0',
                    })}
                    <div className="mt-3">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto md:mx-0',
                      })}
                    </div>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-4',
                        className: 'md:mr-2 mx-auto md:mx-0',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderArticles = () => {
    return articles && articles.length ? (
      articles.slice(0, blog.limit).map((article, index) => (
        <a
          className="card shadow-md card-sm bg-base-100 cursor-pointer"
          key={index}
          href={article.link}
          onClick={(e) => {
            e.preventDefault();

            try {
              if (googleAnalyticsId) {
                ga.event('Click Experience', {
                  post: article.title,
                });
              }
            } catch (error) {
              console.error(error);
            }

            window?.open(article.link, '_blank');
          }}
        >
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0 opacity-90">
                <div className="w-24 h-24 mask mask-squircle">
                  <LazyImage
                    src={article.thumbnail}
                    alt={'thumbnail'}
                    placeholder={skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-full',
                      shape: '',
                    })}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="text-center md:text-left w-full">
                    <h2 className="font-medium text-base-content opacity-60">
                      {article.title}
                    </h2>
                    <p className="text-base-content opacity-50 text-xs">
                      {article.datetime}
                    </p>
                    <p className="mt-3 text-base-content text-sm">
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {article.categories.map((category, index2) => (
                        <div
                          className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content"
                          key={index2}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))
    ) : (
      <div className="text-center mb-6">
        <PiBriefcase className="mx-auto h-12 w-12 opacity-30" />
        <p className="mt-1 text-sm opacity-50 text-base-content">
          No recent post
        </p>
      </div>
    );
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body p-8">
          <div className="grid grid-cols-1 gap-6">
            {loading || !articles ? renderSkeleton() : renderArticles()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
