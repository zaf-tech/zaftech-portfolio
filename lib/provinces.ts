export interface Province {
  slug: string
  name: string
  industries: string[]
  industryDescription: string
}

export const provinces: Province[] = [
  {
    slug: 'ontario',
    name: 'Ontario',
    industries: ['Finance', 'Legal', 'Healthcare', 'Technology'],
    industryDescription: 'finance, legal services, healthcare, and technology sectors',
  },
  {
    slug: 'british-columbia',
    name: 'British Columbia',
    industries: ['Technology', 'Healthcare', 'Mining', 'Real Estate'],
    industryDescription: 'technology, healthcare, mining, and real estate industries',
  },
  {
    slug: 'alberta',
    name: 'Alberta',
    industries: ['Oil & Gas', 'Energy', 'Agriculture', 'Finance'],
    industryDescription: 'oil & gas, energy, agriculture, and financial services',
  },
  {
    slug: 'quebec',
    name: 'Quebec',
    industries: ['Manufacturing', 'Pharmaceuticals', 'Finance', 'Government'],
    industryDescription: 'manufacturing, pharmaceutical, financial, and government sectors',
  },
  {
    slug: 'manitoba',
    name: 'Manitoba',
    industries: ['Agriculture', 'Healthcare', 'Manufacturing'],
    industryDescription: 'agriculture, healthcare, and manufacturing industries',
  },
  {
    slug: 'saskatchewan',
    name: 'Saskatchewan',
    industries: ['Agriculture', 'Mining', 'Energy'],
    industryDescription: 'agriculture, mining, and energy sectors',
  },
  {
    slug: 'nova-scotia',
    name: 'Nova Scotia',
    industries: ['Maritime', 'Healthcare', 'Government'],
    industryDescription: 'maritime, healthcare, and government sectors',
  },
  {
    slug: 'new-brunswick',
    name: 'New Brunswick',
    industries: ['Manufacturing', 'Healthcare', 'Forestry'],
    industryDescription: 'manufacturing, healthcare, and forestry industries',
  },
  {
    slug: 'prince-edward-island',
    name: 'Prince Edward Island',
    industries: ['Agriculture', 'Tourism', 'Government'],
    industryDescription: 'agriculture, tourism, and government sectors',
  },
  {
    slug: 'newfoundland-and-labrador',
    name: 'Newfoundland and Labrador',
    industries: ['Oil & Gas', 'Mining', 'Fisheries'],
    industryDescription: 'oil & gas, mining, and fisheries industries',
  },
  {
    slug: 'northwest-territories',
    name: 'Northwest Territories',
    industries: ['Mining', 'Government', 'Remote Operations'],
    industryDescription: 'mining, government, and remote operations sectors',
  },
  {
    slug: 'yukon',
    name: 'Yukon',
    industries: ['Mining', 'Government', 'Tourism'],
    industryDescription: 'mining, government, and tourism industries',
  },
  {
    slug: 'nunavut',
    name: 'Nunavut',
    industries: ['Mining', 'Indigenous Governance', 'Remote Operations'],
    industryDescription: 'mining, indigenous governance, and remote operations sectors',
  },
]

export function getProvince(slug: string): Province | undefined {
  return provinces.find((p) => p.slug === slug)
}
