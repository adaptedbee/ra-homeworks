'use strict';

function Listing(props) {
  const { items } = props;

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="item-list">
      {items.map((item) => {
        return (
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{item.title}</p>
              <p className="item-price">{item.currency_code}{item.price}</p>
              <p className="item-quantity level-medium">{item.quantity} left</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const url = 'https://neto-api.herokuapp.com/etsy';

fetch(url)
  .then((res) => {
    if (200 <= res.status && res.status < 300) {
      return res;
    }
    throw new Error(response.statusText);
  })
  .then((res) => res.json())
  .then((data) => {
    ReactDOM.render(<Listing items={data} />, document.getElementById('root'));
  })
  .catch((error) => {
    console.log(`Произошла ошибка: ${error}`);
  });

