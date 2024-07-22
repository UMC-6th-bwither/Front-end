import { useState } from 'react';
import Pagination from './components/Pagination/Pagination';
import DogCard from './components/DogCard/DogCard';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div>
      <h1>Pagination Information</h1>
      <Pagination
        totalItems={308}
        itemsPerPage={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <h1>Dog Information</h1>
      <DogCard
        photo={''}
        location={'서울 노원구'}
        name={'몽몽이'}
        breed={'골든 리트리버'}
        birthDate={'2020-01-01'}
        gender={'수컷'}
        breederName={'해피브리더'}
        waitlistCount={5}
        isBookmarked={isBookmarked}
        setIsBookmarked={setIsBookmarked}
      />
    </div>
  );
}

export default App;
