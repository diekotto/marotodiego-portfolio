import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/section-heading';

export default function Awards() {
  const awards = [
    {
      text: 'Invited by Ready Tensor to showcase AI Pull Review in the Agentic AI Innovation Challenge 2025',
    },
    {
      text: 'Silver League - Hypersonic Hackathon 2016',
    },
    {
      text: 'Best Tech Business Project - Yuzz Alicante 2015',
    },
    {
      text: 'Best Applied Science & Technology Project - Mooqia 2015',
    },
  ];

  return (
    <section id="awards" className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <SectionHeading command="cat awards.txt" />

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="relative">
              {index === 0 && (
                <span className="absolute right-3 top-3 border border-primary/40 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  [featured]
                </span>
              )}
              <CardContent className={`p-6 flex items-start ${index === 0 ? 'pr-28' : ''}`}>
                <span className="text-primary font-bold mr-4">*</span>
                <p>{award.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
