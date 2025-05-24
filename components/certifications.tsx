import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export default function Certifications() {
  const certifications = [
    'AWS Certified Solutions Architect – Associate',
    'HashiCorp Certified: Terraform Associate',
    'Docker Compose & Swarm',
    'Pentesting en Seguridad Informática (Detecta, Defiende 2023)',
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
                <CardTitle className="text-lg text-center">{cert}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
