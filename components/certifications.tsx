import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Certifications() {
  const certifications = [
    { name: 'AWS Certified Solutions Architect - Associate', issuer: 'AWS' },
    { name: 'HashiCorp Certified: Terraform Associate', issuer: 'Udemy' },
    { name: 'Docker Compose & Swarm', issuer: 'Udemy' },
    { name: 'Pentesting en Seguridad Informática (Detecta, Defiende 2023)', issuer: 'Udemy' },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg text-center">{cert.name}</CardTitle>
                <Badge variant={cert.issuer === 'AWS' ? 'default' : 'secondary'} className="mt-2">
                  {cert.issuer === 'AWS' ? 'Official' : 'Udemy'}
                </Badge>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
