import {
  GitOriginal,
  JavascriptOriginal,
  NextjsOriginal,
  PostgresqlOriginal,
  PythonOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  ReduxOriginal,
  NodejsOriginal,
  ExpressOriginal,
  MongodbOriginal,
  JestPlain,
  CypressioOriginal,
  PrismaOriginal,
} from 'devicons-react'
import { Skill } from '@/components/skill'
import ReactOriginal from 'devicons-react/icons/ReactOriginal'
import type { FunctionComponent } from 'react'
import type { DeviconIconProps } from '@/lib/types'

const skills: Array<{
  label: string
  Icon: FunctionComponent<DeviconIconProps>
}> = [
  { label: 'TypeScript', Icon: TypescriptOriginal },
  { label: 'Next.js', Icon: NextjsOriginal },
  { label: 'React', Icon: ReactOriginal },
  { label: 'Node.js', Icon: NodejsOriginal },
  { label: 'Express.js', Icon: ExpressOriginal },
  { label: 'PostgreSQL', Icon: PostgresqlOriginal },
  { label: 'Prisma', Icon: PrismaOriginal },
  { label: 'MongoDB', Icon: MongodbOriginal },
  { label: 'Redux', Icon: ReduxOriginal },
  { label: 'Jest', Icon: JestPlain },
  { label: 'Cypress', Icon: CypressioOriginal },
  { label: 'Tailwind CSS', Icon: TailwindcssOriginal },
  { label: 'Git', Icon: GitOriginal },
  { label: 'JavaScript', Icon: JavascriptOriginal },
  { label: 'Python', Icon: PythonOriginal },
]

export const SkillList = () => {
  return (
    <div className='flex flex-wrap gap-2.5'>
      {skills.map((skill) => (
        <Skill key={skill.label} skill={skill} />
      ))}
    </div>
  )
}
