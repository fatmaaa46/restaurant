
import store, { setSelectedCategorie} from '@/app/components/store';
import React  from 'react'
import { useSnapshot } from 'valtio';
function CardCategorie({ showModal, setShowModal }: any) {
  const { id } = useSnapshot(store)


  const handleCommandeClick = (item: string) => {
    setSelectedCategorie(item)
    setShowModal(true);
    // console.log({ selectedCategorie })
  };

  const cat: any = localStorage.getItem("card");

  let card = JSON.parse(cat || null);
  return (
    <div className="shop container">
      <div className="row row-cols-1 row-cols-md-4">
        {Object.entries(card.workflow).map(([key, value]: any) => (
          <div className="col-sm my-3" key={key}>
            <div className="shop-content" style={{ width: '18rem' }} onClick={() => { handleCommandeClick(card[value.type][key].title) }} >
             <div className="product-box">
              <h5 className="card-title" style={{ textAlign: "center" }}>{card[value.type][key].title}</h5>
                <img className="product-img" src={card[value.type][key].imageUrl.Default.urlDefault ? card[value.type][key].imageUrl.Default.urlDefault : "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp"} alt="Card image cap" />
              </div>
            </div>
          </div>
        ))};
      </div>

    </div>
  )
};
export default CardCategorie
