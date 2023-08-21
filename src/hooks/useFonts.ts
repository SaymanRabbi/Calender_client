import localFont from 'next/font/local';

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/inter.var.woff2',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
});

export default function useFonts() {
  return {
    inter: `${inter.className} font-sans`,
  };
}
