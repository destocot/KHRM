import { SkillList } from '@/components/skill-list'

export default function Page() {
  return (
    <main>
      <div className='container space-y-8 py-16'>
        <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>Khurram Ali</h1>

        <p className='text-muted-foreground max-w-prose leading-relaxed sm:text-lg'>
          Hey! 👋 I&apos;m Khurram Ali — a full-stack developer, content creator, and poet who
          builds modern web apps people love.
        </p>

        <SkillList />
      </div>
    </main>
  )
}
