import { Cards } from '../components/Cards'

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-black text-white'>
      <h1 className='absolute top-8 font-wild-words text-xl'>
        cum segs dicks boobs pussy ass
      </h1>
      <main className='max-w-7xl'>
        <p className='font-wild-words'>Ultimos Actualizados</p>
        <Cards />
      </main>
    </div>
  )
}

export default Home
