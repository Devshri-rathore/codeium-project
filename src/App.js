import React, { useState, useEffect } from 'react';
import List from './Component/List';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await response.json();
      setItems(data);
      // setTotalPages(data.totalPages);
    };
    fetchItems();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <List items={items} />
    </div>
  );
};

export default App;