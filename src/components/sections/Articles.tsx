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
    tags: ["aws", "cloud", "designpatters", "spanish"],
    date: "Nov 6, 2024",
    title: "Bulkhead: Compartmentalizing your Microservices",
    description: "A comprehensive guide on how to implement the Bulkhead design pattern in your microservices architecture for improved fault tolerance and resiliency.",
    url: "https://dev.to/diek/bulkhead-compartimentando-tus-microservicios-4him"
  },
  {
    tags: ["aws", "cloud", "designpatters", "spanish"],
    date: "Oct 15, 2024",
    title: "Implementing Blue-Green Deployments with AWS Route 53",
    description: "A step-by-step guide on how to set up blue-green deployments with AWS Route 53 and Terraform for seamless deployments.",
    url: "https://dev.to/diek/implementando-despliegues-blue-green-con-aws-route-53-1n14"
  },
  {
    tags: ["finops", "aws", "humor", "spanish"],
    date: "Oct 14, 2024",
    title: "When your AWS bill becomes a meme and your finance department becomes a meme-lord 🚀💸",
    description: "A deep dive into the cost-saving benefits of serverless architecture and how to optimize your AWS bill for Lambda functions.",
    url: "https://dev.to/diek/cuando-tu-factura-de-aws-se-convierte-en-un-meme-y-tu-departamento-financiero-en-un-meme-lord-2li8"
  },
  {
    tags: ["privacy", "cybersecurity", "spanish"],
    date: "7 sept, 2024",
    title: "The Digital Canary: Deciphering the Silences of Telegram",
    description: "An in-depth analysis of the privacy implications of Telegram's Canary Warrant and how it affects users' data protection.",
    url: "https://dev.to/diek/el-canario-digital-descifrando-los-silencios-de-telegram-2gh5"
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
