import React from 'react';

import NewsCard from './NewsCard';

const newsCards = (props) => {

  return (
    <main className="main">
      <div class="row mx-auto">
        <div class="card-columns">
          <NewsCard image='https://i.imgur.com/8nR8qMK.png' bgColor='bg-1'/>
          <NewsCard image='https://i.imgur.com/gz3unZu.jpg' bgColor='bg-2'/>
          <NewsCard image='https://i.imgur.com/Po7ypyX.png' bgColor='bg-3'/>
          <NewsCard image='https://i.imgur.com/F5ZvbaB.png' bgColor='bg-1'/>
          <NewsCard image='https://i.imgur.com/f8oWUtJ.jpg' bgColor='bg-3'/>
          <NewsCard image='https://i.imgur.com/PgB5xGC.png' bgColor='bg-2'/>
        </div>
      </div>
    </main>
  )
}

export default newsCards
