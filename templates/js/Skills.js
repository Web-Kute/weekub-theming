/**
 * @param {number} id - The skill ID
 * @param {string} title - The skill title
 * @param {string} description - The skill description
 * @param {string} icon - The icon name
 * @param {string} star - The rating
 */
export const skillItems = [
  {
    skillId: 1,
    title: 'Intégration HTML5',
    description: `<li>Respect des standards du web</li><li>W3C, Markup Validation Service</li><li>Sensibilité à l’UX et UI Design</li>`,
    icon: ['#html5'],
    star: `&starf;&starf;&starf;&starf;&starf;`,
  },
  {
    skillId: 2,
    title: 'Feuille de style CSS3',
    description: `<li>Dart Sass&nbsp;
                  <a href="http://sass-lang.com/" target="_blank" rel="noopener">
                  <svg class="svg" role="img" aria-label="Sass" focusable="false">
                  <use xlink:href="#sass"></use>
                  </svg>
                  </a>
                  ou
                  <a href="http://lesscss.org/" target="_blank" rel="noopener">
                  <svg class="svg" role="img" aria-label="Less" focusable="false">
                  <use xlink:href="#less"></use>
                  </svg></a></li><li>Gulp</li><li>Méthodologie
                  <a href="http://getbem.com/" target="_blank" rel="noopener">BEM</a></li>`,
    icon: ['#css3'],
    star: `&starf;&starf;&starf;&star;&star;`,
  },
  {
    skillId: 3,
    title: 'JavaScript',
    description: `<li>Vanilla JavaScript (ES6)</li><li>Framework jQuery</li><li>Connection APIs</li>`,
    icon: ['#js'],
    star: `&starf;&starf;&starf;&star;&star;`,
  },
  {
    skillId: 4,
    title: 'Environnement de travail',
    description: `<li>Visual Studio Code</li>
            <li>Jira</li>
            <li>Confluence</li>
            <li>Méthode Agile - Scrum</li>
            <li>Git / GitLab - CI/CD - Jenkins</li>
            <li>Bundle via webpack</li>
            <li>Docker</li>
            <li>Photoshop</li>
            <li>Adobe XD</li>
            <li>Figma (récupération des maquettes et des assets)</li>
            <li>Framework Symfony - Twig</li>
            <li>Anglais (niveau A1)</li>`,
    icon: ['#tools'],
    star: ``,
  },
  {
    skillId: 5,
    title: 'Bootstrap 5',
    description: `<li>Framework responsive</li>`,
    icon: ['#bootstrap'],
    star: `&starf;&starf;&starf;&star;&star;`,
  },
  {
    skillId: 6,
    title: 'Responsive',
    description: `<li>Un site web responsive s'adapte aux différentes tailles d'écrans,
                  smartphone, PC, tablettes ou TV</li><li>Mobile First</li><li>Compatibilité cross-navigateur</li>`,
    icon: ['#desktop', '#mobile'],
    star: `&starf;&starf;&starf;&starf;&starf;`,
  },
  {
    skillId: 7,
    title: 'Accessibilité RGAA',
    description: `<li>Un site web accessible le rend utilisable par tout le monde, peu
              importe l’âge et le handicap.</li><li>Le référencement, la navigation et L'UX s'en trouveront également
              àméliorés.</li>`,
    icon: ['#a11y'],
    star: `&starf;&starf;&starf;&star;&star;`,
  },
  {
    skillId: 8,
    title: 'WordPress',
    description: `<li>Développement de thèmes sur mesure</li>`,
    icon: ['#wordpress'],
    star: `&starf;&starf;&starf;&star;&star;`,
  },
];
