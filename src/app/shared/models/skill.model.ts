export type SkillCategory = 'backend' | 'frontend' | 'devops' | 'architecture';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
  level?: number;
}
