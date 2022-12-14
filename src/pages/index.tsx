import Image from 'next/image'
import appPreviewImg from '../assets/celular.png'
import logoImg from '../assets/logo.svg'
import avatares from '../assets/avatares.png'
import iconCheck from '../assets/icon.svg'


export default function Home() {

  return (
    <div className='max-w-[1124px] h-screen gap-28 mx-auto grid grid-cols-2 items-center'>

      <main>

        <Image src={logoImg} alt="NLW COPA"/>

        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className='mt-10 flex items-center gap-2'>

          <Image src={avatares} alt="grupo de avatares"/>

          <strong className='text-gray-100'>
            <span className='text-iginite-500'>+12.592</span>  pessoas já estão usando 
          </strong>

        </div>

        <form className='mt-10 flex gap-2'>

            <input 
              className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm" 
              type="text" required placeholder='Qual nome do bolão?'/>

            <button type="submit" className='bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-bold text-sm uppercase hover:bg-yellow-700 '>
              Criar meu bolão
            </button>

        </form>
        
        <p className='mt-4 text-sm text-gray-300 leading-relaxed'>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
        </p>
        
        <div className='mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100'>

          <div className='flex items-center gap-6'>

            <Image src={iconCheck} alt=""/>

            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+2.034</span>

              <span>Bolões criados</span>

            </div>

          </div>

          <div className='w-px h-14 bg-gray-600'/>
 
          <div className='flex items-center gap-6'>

            <Image src={iconCheck} alt=""/>

            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+192.847</span>

              <span>Palpites enviados</span>

            </div>

          </div>
 
        </div>

      </main>

      <Image src={appPreviewImg} alt="Dois celulares" quality={100}/>
    </div> 
  )
}

//export const getServerSideProps = async ()=> {
  //const response = await fetch('http://localhost:3333/pools/count')
  //const data = await response.json()
   

  //return {
    //props: {
      //count: data.count,
    //}
  //}
//} 
