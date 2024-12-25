import {} from 'react';
import Cards from './Cards';

function Home() {
  const cardsData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  return (
    <div className="container-fluid py-2">
    <div className='d-flex justify-content-center'>
        <div>Propsoch</div>
    </div>
      <div className="row py-2">
        {cardsData.map((card) => (
          <div key={card.id} className="col-6 col-md-12 col-lg-12">
            <Cards />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
