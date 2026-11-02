export const phone = '1300 000 222';
export const tel = 'tel:1300000222';
export const branches = {
  sydney: { name: 'Sydney', branch: 'Silverwater branch', street: 'Unit 4, 18 Carnarvon Street', short: 'Unit 4, 18 Carnarvon St', suburb: 'Silverwater NSW 2128', phone: '02 9000 4100', tel: 'tel:0290004100', email: 'sydney@corellamech.com.au', techs: '26 technicians [sample]', href: '/locations/sydney/' },
  newcastle: { name: 'Newcastle', branch: 'Mayfield West branch', street: '2/40 Industrial Drive', short: '2/40 Industrial Dr', suburb: 'Mayfield West NSW 2304', phone: '02 4900 4100', tel: 'tel:0249004100', email: 'hunter@corellamech.com.au', techs: '14 technicians [sample]', href: '/locations/newcastle/' },
};
export const nav = [
  { key: 'commercial', label: 'Commercial', href: '/commercial/' },
  { key: 'maintenance', label: 'Maintenance Contracts', href: '/maintenance-contracts/' },
  { key: 'residential', label: 'Residential', href: '/residential/' },
  { key: 'industries', label: 'Industries', href: '/industries/' },
  { key: 'projects', label: 'Projects', href: '/projects/' },
  { key: 'locations', label: 'Locations', href: '/locations/sydney/', children: [['Sydney', 'Silverwater branch', '/locations/sydney/'], ['Newcastle', 'Mayfield West branch', '/locations/newcastle/']] },
  { key: 'about', label: 'About', href: '/about/' },
  { key: 'contact', label: 'Contact', href: '/contact/' },
];
export const trust = [
  ['Lic. 000000C', 'NSW contractor licence [sample]', 'NSW contractor licence [sample]'],
  ['ARC AU00000', 'Refrigerant handling authorisation [sample]', 'Refrigerant handling authorisation [sample]'],
  ['ISO 9001', 'Certified quality system [sample]', 'Certified quality system [sample]'],
  ['$20M + PI', 'Public liability and professional indemnity [sample]', 'Public liability and PI [sample]'],
  ['4.9 ★', 'Average from 186 client reviews [sample]', 'From 186 client reviews [sample]'],
];
export const industries = [
  { slug: 'offices', name: 'Offices', img: 'p36631700', short: 'Tenancy fit-outs, base building and after-hours loads' },
  { slug: 'retail', name: 'Retail', img: 'p13425897', short: 'Centres, flagship stores and refrigerated display' },
  { slug: 'hospitality', name: 'Hospitality', img: 'p26729406', short: 'Kitchens, dining rooms, hotels and function spaces' },
  { slug: 'medical', name: 'Medical', img: 'p127873', short: 'Clinics, day hospitals, theatres and pathology' },
  { slug: 'education', name: 'Education', img: 'p19037688', short: 'Classrooms, halls and staged holiday works' },
  { slug: 'strata', name: 'Strata', img: 'p18153132', short: 'Common areas, central plant and owner upgrades' },
];
