import { Card, CardContent } from '@/components/ui/card';
import { ServerIcon, CloudIcon, ShieldIcon } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
              I build resilient, highly-scalable cloud platforms that turn business problems into automated, serverless,
              and container-driven solutions.
            </p>
            <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
              With deep expertise in AWS, Terraform, and CI/CD automation, I enable teams to ship faster and sleep
              better.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Passionate about clean architectures, mentoring, and driving a security-first culture.
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardContent className="flex items-start p-6">
                <ServerIcon className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Infrastructure as Code</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Expertise in using Terraform, CloudFormation, and Pulumi to automate infrastructure provisioning and
                    management.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start p-6">
                <CloudIcon className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cloud-Native Solutions</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Designing and implementing solutions using containers, Kubernetes, and serverless technologies
                    across major cloud providers.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start p-6">
                <ShieldIcon className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Implementing security best practices and compliance frameworks in cloud environments to protect
                    sensitive data and systems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
