import './App.css';
import Top from './components/Top'
import Card from './components/Card'
import Bottom from './components/Bottom'
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      item={item}
      />
    )
  })
  return (
    <div className="App bg-gradient-to-r from-purple-500 to-pink-500">
      <div className='shadow-2xl'>
      <Top />
      <section className='rounded-b-lg snap-y h-96 overflow-y-auto'>
        {cards}
      </section>
      </div>
      <Bottom />
    </div>
  );
}

export default App;
