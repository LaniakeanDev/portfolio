// import { /* Bebas_Neue, Galada, */ Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const poppins = localFont({
  src: [
    {
      path: './Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Poppins-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font--poppins',
});

// export const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font--poppins',
// });
