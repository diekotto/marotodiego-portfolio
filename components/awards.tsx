import { Card, CardContent } from '@/components/ui/card';

export default function Awards() {
  const awards = [
    {
      emoji: '🧠',
      text: 'Invited by Ready Tensor to showcase AI Pull Review in the Agentic AI Innovation Challenge 2025',
    },
    {
      emoji: '🥈',
      text: 'Silver League - Hypersonic Hackathon 2016',
    },
    {
      emoji: '🏆',
      text: 'Best Tech Business Project - Yuzz Alicante 2015',
    },
    {
      emoji: '🏅',
      text: 'Best Applied Science & Technology Project - Mooqia 2015',
    },
  ];

  return (
    <section id="awards" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards &amp; Highlights</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <Card key={index}>
              <CardContent className="p-6 flex items-start">
                <span className="text-3xl mr-4">{award.emoji}</span>
                <p className="text-lg text-slate-700 dark:text-slate-300">{award.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
