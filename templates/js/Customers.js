const BASE_URL = 'https://res.cloudinary.com/dwwhn7b5v/image/upload/';
const IMAGE_URL = BASE_URL + 'c_fill,h_169,w_300/docs/models-';
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
    description: `<li>Développement des sliders produits,</li><li>Système atomic design</li><li>HTML | CSS | JavaScript / jQuery</li>Bootstrap<li></li>`,
    imageURL: IMAGE_URL + '5',
    url: 'https://www.antalis.fr',
    label: 'Antalis',
  },
  {
    customerId: 2,
    title: 'France TV | 2022',
    description: `<li>Développement du player direct-radio</li><li>Mise en place de l'accessibilité</li><li>Optimisation de la performance</li><li>Twig | CSS / Sass | JavaScript</li>`,
    imageURL: IMAGE_URL + '14',
    url: 'https://la1ere.francetvinfo.fr/direct-radio/',
    label: 'France TV, la 1ere',
  },
  {
    customerId: 3,
    title: 'Action contre la faim | 2021',
    description: `<li>Développement de la modale cookies</li><li>Responsive</li><li>HTML | CSS / Sass | JavaScript </li>`,
    imageURL: IMAGE_URL + '3',
    url: 'https://www.actioncontrelafaim.org/',
    label: 'Action contre la faim',
  },
  {
    customerId: 4,
    title: 'Christian Louboutin | 2019',
    description: `<li>Développement de la FAQ</li><li>Intégration de templates pour Emails transactionnels</li><li>HTML | CSS | jQuery </li>`,
    imageURL: IMAGE_URL + '17',
    url: 'https://eu.christianlouboutin.com/fr_fr/',
    label: 'Christian Louboutin',
  },
  {
    customerId: 5,
    title: 'Louis Vuitton | 2018 - 2019',
    description: `<li>Site carrière LVMH from scratch</li><li>Mise en place de l'accessibilité</li><li>HTML | CSS / Less | jQuery</li>`,
    imageURL: IMAGE_URL + '18',
    url: 'https://fr.louisvuitton.com/fra-fr/homepage',
    label: 'Louis Vuitton',
  },
  {
    customerId: 6,
    title: 'Angelus Plongée | 2020',
    description: `<li>WordPress, template vierge</li><li>Optimisation de la performance</li><li>Aspect UI / UX</li><li>S.E.O naturel</li><li>HTML | CSS | jQuery | Bootstrap</li>`,
    imageURL: IMAGE_URL + '4',
    url: 'https://angelus-plongee.com/',
    label: 'Angelus Plongée',
  },
  {
    customerId: 7,
    title: "J'Irai marcher sur les Toits | 2020",
    description: `<li>WordPress, template vierge</li><li>Optimisation de la performance</li><li>Aspect UI / UX</li><li>S.E.O naturel</li><li>HTML | CSS | jQuery | Bootstrap</li>`,
    imageURL: IMAGE_URL + '15',
    url: 'https://jirai.fr/',
    label: "J'Irai marcher sur les Toits",
  },
  {
    customerId: 8,
    title: 'OTAA Architecture | 2017',
    description: `<li>WordPress, template vierge</li><li> HTML | CSS | jQuery</li>`,
    imageURL: IMAGE_URL + '22',
    url: 'https://www.otaa.fr/',
    label: 'OTAA architecture',
  },
  {
    customerId: 9,
    title: 'Crédey & Associés | 2016',
    description: `<li>WordPress, template vierge</li><li>HTML | CSS | jQuery</li>`,
    imageURL: IMAGE_URL + '10',
    url: 'https://credey.com/fr/accueil/',
    label: 'Crédey & Associés',
  },
  {
    customerId: 10,
    title: 'Dotline - Informatique | 2016',
    description: `<li>WordPress, template vierge</li><li>HTML | CSS | jQuery</li>`,
    imageURL: IMAGE_URL + '12',
    url: 'https://www.dotline.fr/',
    label: 'Dotline - Informatique',
  },
  {
    customerId: 11,
    title: 'Sodexo - Restauration | 2016',
    description: `<li>Migration du site vers le CMS Jahia</li><li>Intégration du contenu</li>`,
    imageURL: IMAGE_URL + '21',
    url: 'https://fr.sodexo.com/home.html',
    label: 'Sodexo',
  },
  {
    customerId: 12,
    title: 'Bouygues Telecom | 2012',
    description: `<li>Publicité marketing</li><li>Développement Flash</li><li>HTML | CSS | ActionScript</li>`,
    imageURL: IMAGE_URL + '8',
    url: 'https://www.bouyguestelecom.fr/',
    label: 'Bouygues Telecom',
  },
  {
    customerId: 13,
    title: 'Société Générale | 2011',
    description: `<li>Application board traders</li><li>Développement Flash</li><li>HTML | CSS | ActionScript</li>`,
    imageURL: IMAGE_URL + '20',
    url: 'https://www.societegenerale.com/fr',
    label: 'Société Générale',
  },
  {
    customerId: 14,
    title: 'Fondation Mallet | 2010',
    description: `<li>Développement WordPress</li><li>HTML | CSS | Php</li>`,
    imageURL: IMAGE_URL + '13',
    url: 'https://www.fondationmallet.fr/',
    label: 'Fondation Mallet',
  },
  {
    customerId: 15,
    title: 'Raoul Follereau | 2010',
    description: `<li>Développement WordPress</li><li>HTML | CSS | Php</li>`,
    imageURL: IMAGE_URL + '19',
    url: 'https://www.raoul-follereau.org/',
    label: 'Raoul Follereau',
  },
  {
    customerId: 16,
    title: 'DNDi | 2009',
    description: `<li>Développement WordPress</li><li>HTML | CSS</li>`,
    imageURL: IMAGE_URL + '11',
    url: 'https://dndi.org/',
    label: 'DNDi',
  },
  {
    customerId: 17,
    title: 'Lagardère - Presse | 2009',
    description: `<li>Développement Intranet du livre blanc</li><li>HTML | CSS | Php</li>`,
    imageURL: IMAGE_URL + '16',
    url: 'https://www.lagardere.com/',
    label: 'Lagardère',
  },
  {
    customerId: 18,
    title: 'BNP Paribas - Banque | 2008',
    description: `<li>Intégration landing page</li><li>HTML | CSS</li>`,
    imageURL: IMAGE_URL + '7',
    url: 'https://mabanque.bnpparibas/',
    label: 'BNP Paribas',
  },
  {
    customerId: 19,
    title: 'Canal + | 2007',
    description: `<li>Intégration landing page</li><li>HTML | CSS</li>`,
    imageURL: IMAGE_URL + '9',
    url: 'https://www.canalplus.com/',
    label: 'Canal +',
  },
];
