import Image from 'next/image'
import appPreviewImg from '../assets/celular.png'
import logoImg from '../assets/logo.svg'
import avatares from '../assets/avatares.png'
import iconCheck from '../assets/icon.svg'


export default function Home() {

  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center'>

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

        <form>

            <input type="text" required placeholder='Qual nome do bolão?'></input>

            <button type="submit">Criar meu bolão</button>

        </form>
        
        <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>
        
        <div>

          <div>

            <Image src={iconCheck} alt=""/>

            <div>

              <span>+2.034</span>

              <span>Bolões criados</span>

            </div>

          </div>

          <div>

            <Image src={iconCheck} alt=""/>

            <div>

              <span>+192.847</span>

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
