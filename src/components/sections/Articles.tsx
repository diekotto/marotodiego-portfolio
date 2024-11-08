// src/components/sections/Articles.tsx
import { ExternalLink } from 'lucide-react';

interface Article {
  tags: string[];
  date: string;
  title: string;
  description: string;
  url: string;
}

const articles: Article[] = [
  {
    tags: ["aws", "cloud", "terraform"],
    date: "Oct 15, 2023",
    title: "Infrastructure as Code Best Practices",
    description: "Learn how to structure your Terraform code for large-scale AWS deployments and implement best practices for managing cloud infrastructure.",
    url: "https://dev.to/diek"
  },
  {
    tags: ["serverless", "aws", "nodejs"],
    date: "Sep 28, 2023",
    title: "Building Serverless APIs with AWS Lambda",
    description: "A comprehensive guide to creating scalable and cost-effective APIs using AWS Lambda, API Gateway, and Node.js.",
    url: "https://dev.to/diek"
  },
  {
    tags: ["devops", "automation", "github"],
    date: "Aug 12, 2023",
    title: "Advanced GitHub Actions Workflows",
    description: "Deep dive into creating sophisticated CI/CD pipelines using GitHub Actions, including deployment to AWS and automated testing.",
    url: "https://dev.to/diek"
  }
];

const Articles = () => {
  return (
    <section id="articles" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-400">
                    #{article.tags.join(' #')}
                  </span>
                  <span className="text-sm text-gray-400">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-300 mb-4">{article.description}</p>
                <a 
                  href={article.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read More <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://dev.to/diek" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Articles <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
