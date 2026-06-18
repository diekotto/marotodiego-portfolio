import { cn } from '@/lib/utils';

// A shell prompt line used as each section's header, e.g.  diek@portfolio:~$ cat about.md
export default function SectionHeading({ command, className }: { command: string; className?: string }) {
  return (
    <div className={cn('mb-10 text-sm md:text-base', className)}>
      <span className="text-primary">diek@portfolio</span>
      <span className="text-muted-foreground">:</span>
      <span className="text-foreground/70">~</span>
      <span className="text-muted-foreground">$ </span>
      <span className="text-foreground">{command}</span>
    </div>
  );
}
