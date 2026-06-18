import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MailIcon, LinkedinIcon, MapPinIcon } from 'lucide-react';
import SectionHeading from '@/components/section-heading';

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <SectionHeading command="./contact.sh" className="mb-4" />
        <p className="mb-12 max-w-3xl text-muted-foreground">
          # Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <a href="mailto:hola@marotodiego.com" className="hover:text-primary transition-colors">
                  hola@marotodiego.com
                </a>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LinkedinIcon className="h-5 w-5 mr-2 text-primary" />
                LinkedIn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <a
                  href="https://www.linkedin.com/in/diegomaroto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  in/diegomaroto
                </a>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2 text-primary" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Alicante, Spain</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
