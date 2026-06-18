import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/section-heading';

export default function Education() {
  const education = [
    {
      degree: 'B.Sc. Computer Engineering',
      institution: 'University of Alicante',
    },
    {
      degree: 'M.Sc. Business Analytics & Big Data',
      institution: 'Universidad Camilo José Cela',
    },
    {
      degree: 'Post-graduate Diploma: Web App Development',
      institution: 'Universidad Católica de Ávila',
    },
  ];

  return (
    <section id="education" className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <SectionHeading command="cat education.txt" />

        <div className="space-y-8 max-w-xl mx-auto">
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg text-primary before:content-['>_']">{item.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">{item.institution}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
