import { FC } from 'react';

interface Props {
  type: string;
}

const Arithmetic: FC<Props> = ({ type }) => {
  return <div>{type}</div>;
};

export default Arithmetic;
