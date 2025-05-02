import React, { useEffect, useState } from 'react';

const Analytics = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const count = parseInt(localStorage.getItem('visitCount') || '0', 10) + 1;
    localStorage.setItem('visitCount', count);
    setVisits(count);
  }, []);

  return (
    <div className="analytics-footer">
      <p>Total visits: {visits}</p>
    </div>
  );
};

export default Analytics;
