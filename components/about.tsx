import { Card, CardContent } from '@/components/ui/card';
import { ServerIcon, CloudIcon, ShieldIcon } from 'lucide-react';
import SectionHeading from '@/components/section-heading';

export default function About() {
  return (
    <section id="about" className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <SectionHeading command="cat about.md" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-muted-foreground">
              I build resilient, highly-scalable cloud platforms that turn business problems into automated, serverless,
              and container-driven solutions.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              With deep expertise in AWS, Terraform, and CI/CD automation, I enable teams to ship faster and sleep
              better.
            </p>
            <p className="text-lg text-muted-foreground">
              Passionate about clean architectures, mentoring, and driving a security-first culture.
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardContent className="flex items-start p-6">
                <ServerIcon className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Infrastructure as Code</h3>
                  <p className="text-muted-foreground">
                    Expertise in using Terraform, and CDK to automate infrastructure provisioning and management.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start p-6">
                <CloudIcon className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Cloud-Native Solutions</h3>
                  <p className="text-muted-foreground">
                    Designing and implementing solutions using containers, Kubernetes, and serverless technologies
                    across major cloud providers.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start p-6">
                <ShieldIcon className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Security & Compliance</h3>
                  <p className="text-muted-foreground">
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
