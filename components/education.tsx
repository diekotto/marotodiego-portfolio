import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8 max-w-xl mx-auto">
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{item.degree}</CardTitle>
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
