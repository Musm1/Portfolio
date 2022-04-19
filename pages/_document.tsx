import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className=' bg-gradient-to-br from-purple-600 to-blue-500 dark:from-dark-200 dark:to-dark-400 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}