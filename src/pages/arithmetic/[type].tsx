import { useRouter } from 'next/router';
import { FC } from 'react';
import Arithmetic from '@/components/arithmetic';

const ArithmeticPage: FC = () => {
  const router = useRouter();
  const { type } = router.query;

  return <Arithmetic type={type?.toString() || ''} />;
};

export default ArithmeticPage;
