import Button from '../components/button';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function App() {
  return (
    <div className='min-h-screen bg-gray-400 flex'>
      <Sidebar />

      <main className='flex-1 flex flex-col justify-center items-center gap-6 
      bg-[url("/4k-minimalist-black-forest-ma3c57wla5k493zj.jpg")] bg-local'>
        <Header />
        <Button text="Portfólio" onClick={() => window.open('https://roger-robertt.github.io/Meu-Portifolio-/', '_blank')} />
      </main>
    </div>
  )
}

export default App;