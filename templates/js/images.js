import favicon from '../assets/images/favicon.ico';
import logo from '../assets/images/logo-no-text.png';
import antalis from '../assets/images/antalis.webp';
import actionContreLaFaim from '../assets/images/actioncontrelafaim.webp';
import angelusPlongee from '../assets/images/angelusplongee.webp';
import bnpParibas from '../assets/images/bnpparibas.webp';
import canalplus from '../assets/images/canalplus.webp';
import credey from '../assets/images/credey.webp';
import dotline from '../assets/images/dotline.webp';
import fondationmallet from '../assets/images/fondationmallet.webp';
import francetv from '../assets/images/francetv.webp';
import jirai from '../assets/images/jirai.webp';
import lagardere from '../assets/images/lagardere.webp';
import louboutin from '../assets/images/louboutin.webp';
import louisVuitton from '../assets/images/louisvuitton.webp';
import otaa from '../assets/images/otaa.webp';
import sodexo from '../assets/images/sodexo.webp';

const sources = [
  favicon,
  logo,
  antalis,
  actionContreLaFaim,
  angelusPlongee,
  bnpParibas,
  canalplus,
  credey,
  dotline,
  fondationmallet,
  francetv,
  jirai,
  lagardere,
  louboutin,
  louisVuitton,
  otaa,
  sodexo,
];

const imagesIds = [
  'favicon',
  'logo',
  'antalis',
  'actioncontrelafaim',
  'angelusplongee',
  'bnpparibas',
  'canalplus',
  'credey',
  'dotline',
  'fondationmallet',
  'francetv',
  'jirai',
  'lagardere',
  'louboutin',
  'louisvuitton',
  'otaa',
  'sodexo',
];

imagesIds.map((id, i) => {
  return (document.getElementById(id).src = sources[i]);
});
