import { Badge } from '@/components/ui/badge'
import type { DeviconIconProps } from '@/lib/types'
import type { FunctionComponent } from 'react'

interface SkillProps {
  skill: { label: string; Icon: FunctionComponent<DeviconIconProps> }
}

export const Skill = ({ skill: { Icon, label } }: SkillProps) => {
  return (
    <Badge className='dark:bg-secondary dark:text-secondary-foreground dark:[a&]:hover:bg-secondary/90 sm:text-sm dark:border-transparent'>
      <Icon size={20} />
      {label}
    </Badge>
  )
}
