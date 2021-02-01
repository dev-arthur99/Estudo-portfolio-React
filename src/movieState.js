//Import Images
import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

const MovieState = () => {
  return [
    {
      title: 'O Atleta',
      mainImg: athlete,
      secondaryImg: athlete2,
      url: '/work/o-atleta',
      awards: [
        {
          title: 'Lorem ipsum dolor sit amet.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Lorem ipsum dolor sit.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'As Férias',
      mainImg: goodtimes,
      url: '/work/as-ferias',
      secondaryImg: goodtimes2,
      awards: [
        {
          title: 'Lorem, ipsum dolor.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Lorem ipsum dolor sit amet.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Lorem ipsum dolor sit.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'O Piloto',
      mainImg: theracer,
      url: '/work/o-piloto',
      secondaryImg: theracer2,
      awards: [
        {
          title: 'Lorem ipsum dolor sit.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Lorem ipsum dolor sit amet.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Lorem, ipsum dolor.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ];
};

export default MovieState;
