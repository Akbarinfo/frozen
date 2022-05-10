import './App.css';
import Footer from './companents/footer/footer';
import Header from './companents/header/header';
import Hero from './companents/hero/hero.js';
import Price from './companents/price/price.js';
import Item from './companents/tabel/item.js';
import Mai from './companents/tabel/main.js';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Price />
      <section className='mt-5'>
       <div className='container'>
        <Item />
        <Mai />
       </div>
     </section>
     <Footer />
    </>
  );
}

export default App;
