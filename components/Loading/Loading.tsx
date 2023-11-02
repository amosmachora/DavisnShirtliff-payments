'use client';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  from: string;
}

const Loading = (props: Props) => {
  const navigator = useRouter();
  useEffect(() => {
    switch (props.from) {
      case 'solar-calc':
        navigator.push("https://solarcalc.davisandshirtliff.com/");
        break;
      case 'pump-calc':
        navigator.push("https://pumpcalc.davisandshirtliff.com/");
      default:
        break;
    }
  
  }, []);
  
  return (
    <div className='flex justify-center text-blueCustom min-h-screen	place-items-center'>
      <CircularProgress  color='inherit' size={80}/>
    </div>
  )
}

export default Loading;