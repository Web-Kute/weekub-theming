const BASE_URL = './templates/assets/images/';
const IMAGE_EXT = '.webp';
/**
 * @param {number} id - The customer ID
 * @param {string} title - The customer title
 * @param {string} description - The customer description
 * @param {string} imageURL - The URL of the customer image
 * @param {string} url - The customer URL
 * @param {string} label - The customer label
 */

export const customersItem = [
  {
    customerId: 1,
    title: 'Antalis - E-commerce | 2023',
    description: `<li>Développement des sliders produits,</li>
                  <li>Système atomic design</li>
                  <li>HTML | CSS | JavaScript / jQuery</li>
                  <li>Bootstrap</li>`,
    imageURL: BASE_URL + 'antalis' + IMAGE_EXT,
    url: 'https://www.antalis.fr',
    label: 'Antalis',
  },
  {
    customerId: 2,
    title: 'France TV | 2022',
    description: `<li>Développement du player direct-radio</li>
                  <li>Mise en place de l'accessibilité</li>
                  <li>Optimisation de la performance</li>
                  <li>Twig | CSS / Sass | JavaScript</li>`,
    imageURL: BASE_URL + 'francetv' + IMAGE_EXT,
    url: 'https://la1ere.francetvinfo.fr/direct-radio/',
    label: 'France TV, la 1ere',
  },
  {
    customerId: 3,
    title: 'Action contre la faim | 2021',
    description: `<li>Développement de la modale cookies</li>
                  <li>Responsive</li>
                  <li>HTML | CSS / Sass | JavaScript </li>`,
    imageURL: BASE_URL + 'actioncontrelafaim' + IMAGE_EXT,
    url: 'https://www.actioncontrelafaim.org/',
    label: 'Action contre la faim',
  },
  {
    customerId: 4,
    title: 'Christian Louboutin | 2019',
    description: `<li>Développement de la FAQ</li>
                  <li>Intégration de templates pour Emails transactionnels</li>
                  <li>HTML | CSS | jQuery </li>`,
    imageURL: BASE_URL + 'louboutin' + IMAGE_EXT,
    url: 'https://eu.christianlouboutin.com/fr_fr/',
    label: 'Christian Louboutin',
  },
  {
    customerId: 5,
    title: 'Louis Vuitton | 2018 - 2019',
    description: `<li>Site carrière LVMH from scratch</li>
                  <li>Mise en place de l'accessibilité</li>
                  <li>HTML | CSS / Less | jQuery</li>`,
    imageURL: BASE_URL + 'louisvuitton' + IMAGE_EXT,
    url: 'https://fr.louisvuitton.com/fra-fr/homepage',
    label: 'Louis Vuitton',
  },
  {
    customerId: 6,
    title: 'Angelus Plongée | 2020',
    description: `<li>WordPress, template vierge</li>
                  <li>Optimisation de la performance</li>
                  <li>Aspect UI / UX</li>
                  <li>S.E.O naturel</li>
                  <li>HTML | CSS | jQuery | Bootstrap</li>`,
    imageURL: BASE_URL + 'angelusplongee' + IMAGE_EXT,
    url: 'https://angelus-plongee.com/',
    label: 'Angelus Plongée',
  },
  {
    customerId: 7,
    title: 'Élisabeth Fabre | 2025',
    description: `<li>WordPress, template Astra</li>                 
                  <li>Aspect UI / UX</li>
                  <li>S.E.O naturel</li>
                  <li>HTML | CSS | JavaScript</li>`,
    imageURL: BASE_URL + 'fabre' + IMAGE_EXT,
    url: 'https://elisabethfabre.com/',
    label: 'Élisabeth Fabre',
  },
  {
    customerId: 8,
    title: 'OTAA Architecture | 2017',
    description: `<li>WordPress, template vierge</li>
                  <li> HTML | CSS | jQuery</li>`,
    imageURL: BASE_URL + 'otaa' + IMAGE_EXT,
    url: 'https://www.otaa.fr/',
    label: 'OTAA architecture',
  },
  {
    customerId: 9,
    title: 'Crédey & Associés | 2016',
    description: `<li>WordPress, template vierge</li>
                  <li>HTML | CSS | jQuery</li>`,
    imageURL: BASE_URL + 'credey' + IMAGE_EXT,
    url: 'https://credey.com/fr/accueil/',
    label: 'Crédey & Associés',
  },
  {
    customerId: 10,
    title: 'Dotline - Informatique | 2016',
    description: `<li>WordPress, template vierge</li>
                  <li>HTML | CSS | jQuery</li>`,
    imageURL: BASE_URL + 'dotline' + IMAGE_EXT,
    url: 'https://www.dotline.fr/',
    label: 'Dotline - Informatique',
  },
  {
    customerId: 11,
    title: 'Sodexo - Restauration | 2016',
    description: `<li>Migration du site vers le CMS Jahia</li>
                  <li>Intégration du contenu</li>`,
    imageURL: BASE_URL + 'sodexo' + IMAGE_EXT,
    url: 'https://fr.sodexo.com/home.html',
    label: 'Sodexo',
  },
  {
    customerId: 12,
    title: 'Bouygues Telecom | 2012',
    description: `<li>Publicité marketing</li>
                  <li>Développement Flash</li>
                  <li>HTML | CSS | ActionScript</li>`,
    imageURL: BASE_URL + 'bouyguestelecom' + IMAGE_EXT,
    url: 'https://www.bouyguestelecom.fr/',
    label: 'Bouygues Telecom',
  },
  {
    customerId: 13,
    title: 'Société Générale | 2011',
    description: `<li>Application board traders</li>
                  <li>Développement Flash</li>
                  <li>HTML | CSS | ActionScript</li>`,
    imageURL: BASE_URL + 'societegenerale' + IMAGE_EXT,
    url: 'https://www.societegenerale.com/fr',
    label: 'Société Générale',
  },
  {
    customerId: 14,
    title: 'Fondation Mallet | 2010',
    description: `<li>Développement WordPress</li>
                  <li>HTML | CSS | Php</li>`,
    imageURL: BASE_URL + 'fondationmallet' + IMAGE_EXT,
    url: 'https://www.fondationmallet.fr/',
    label: 'Fondation Mallet',
  },
  {
    customerId: 15,
    title: 'Raoul Follereau | 2010',
    description: `<li>Développement WordPress</li>
                  <li>HTML | CSS | Php</li>`,
    imageURL: BASE_URL + 'raoulfollereau' + IMAGE_EXT,
    url: 'https://www.raoul-follereau.org/',
    label: 'Raoul Follereau',
  },
  {
    customerId: 16,
    title: 'DNDi | 2009',
    description: `<li>Développement WordPress</li>
                  <li>HTML | CSS</li>`,
    imageURL: BASE_URL + 'dndi' + IMAGE_EXT,
    url: 'https://dndi.org/',
    label: 'DNDi',
  },
  {
    customerId: 17,
    title: 'Lagardère - Presse | 2009',
    description: `<li>Développement Intranet du livre blanc</li>
                  <li>HTML | CSS | Php</li>`,
    imageURL: BASE_URL + 'lagardere' + IMAGE_EXT,
    url: 'https://www.lagardere.com/',
    label: 'Lagardère',
  },
  {
    customerId: 18,
    title: 'Total | 2009',
    description: `<li>Rapport annuel</li>
                  <li>HTML | CSS | Php</li>`,
    imageURL: BASE_URL + 'total' + IMAGE_EXT,
    url: 'https://totalenergies.com/fr',
    label: 'Total',
  },
  {
    customerId: 19,
    title: 'BNP Paribas - Banque | 2008',
    description: `<li>Intégration landing page</li>
                  <li>HTML | CSS</li>`,
    imageURL: BASE_URL + 'bnpparibas' + IMAGE_EXT,
    url: 'https://mabanque.bnpparibas/',
    label: 'BNP Paribas',
  },
  {
    customerId: 20,
    title: 'Canal + | 2007',
    description: `<li>Intégration landing page</li>
                  <li>HTML | CSS</li>`,
    imageURL: BASE_URL + 'canalplus' + IMAGE_EXT,
    url: 'https://www.canalplus.com/',
    label: 'Canal +',
  },
  {
    customerId: 21,
    title: 'Marie Kiss La Joue | 2011',
    description: `<li>Intégration from scratch</li>
                  <li>HTML | CSS</li>`,
    imageURL: BASE_URL + 'mariekisslajoue' + IMAGE_EXT,
    url: 'https://www.mariekisslajoue.fr/',
    label: 'Marie Kiss La Joue',
  },
];
