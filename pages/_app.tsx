import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 '>
        <div className='col-span-12 p-4 text-center bg-white rounded-2xl dark:bg-dark-300 shadow-costum-light dark:shadow-costum-dark'>
          <Sidebar/>
        </div>
        <div className='flex flex-col col-span-12 p-4 overflow-hidden bg-white rounded-2xl dark:bg-dark-300 shadow-costum-light dark:shadow-costum-dark'>
          <Navbar/>
          <AnimatePresence >
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
