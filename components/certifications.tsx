import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/section-heading';

export default function Certifications() {
  const certifications = [
    { name: 'AWS Certified Solutions Architect - Associate', issuer: 'AWS' },
    { name: 'HashiCorp Certified: Terraform Associate', issuer: 'Udemy' },
    { name: 'Docker Compose & Swarm', issuer: 'Udemy' },
    { name: 'Pentesting en Seguridad Informática (Detecta, Defiende 2023)', issuer: 'Udemy' },
  ];

  return (
    <section id="certifications" className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <SectionHeading command="cat certifications.txt" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg text-center">
                  {cert.name}
                  <br></br>
                  <Badge variant={cert.issuer !== 'Udemy' ? 'default' : 'secondary'} className="mt-2">
                    {cert.issuer}
                  </Badge>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
