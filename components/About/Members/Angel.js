import {
  Typography,
} from '@material-ui/core';

import Image from 'next/image';

import AdditionalInfo from '../AdditionalInfo';
import Avatar from '../Avatar';
import Links from '../Links';

export default function Angel() {
  return (
    <>
      <Avatar>
        <Image layout="fill" src="/angel.jpg" />
      </Avatar>
      <Typography variant="h5">Angel Ruiz-Bates</Typography>
      <Typography variant="subtitle1">Software Engineer</Typography>
      <Typography variant="subtitle2">Rincón, PR</Typography>
      <Links
        linkedIn="https://www.linkedin.com/in/angel-ruiz-bates-1b68a2142/"
        email="angelbates5@yahoo.com"
        website="https://angeljruiz.github.io/"
      />
      <AdditionalInfo interests="Full-stack development, decentralized systems, security, AI, containerization, algorithms" />
    </>
  );
}
