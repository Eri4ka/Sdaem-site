import { memo } from 'react';

import { NewsType } from '@mytypes/newsTypes';

import SingleNewsContent from '../SingleNewsContent';
import SingleNewsHead from '../SingleNewsHead';
import SingleNewsRelated from '../SingleNewsRelated';

type SingleNewsProps = {
  data: NewsType;
  similars: NewsType[];
};

const SingleNews: React.FC<SingleNewsProps> = ({ data, similars }) => {
  const {
    title,
    images: { wide },
    published,
    full_description,
  } = data;
  return (
    <section>
      <SingleNewsHead title={title} published={published} />
      <SingleNewsContent image={wide} full_description={full_description} />
      <SingleNewsRelated similars={similars} />
    </section>
  );
};

export default memo(SingleNews);
