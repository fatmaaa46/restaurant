import Icons from '@/app/components/Icons/Icons';
import { setId } from '@/app/components/store';
import { ListShop } from '@/app/constants/ListShop';
import { Listcard } from '@/app/constants/Listcard';
import { useRouter } from "next/navigation";
import React from 'react';

function CardBoutique() {
  const router = useRouter();

  // Fonction pour naviguer vers une autre page avec l'ID
  const navigateToOtherPage = (id: number) => {
    setId(id);
    localStorage.setItem("id", id.toString());
    var jsonString = JSON.stringify(Listcard[id]);

    // Sample JSON data
    var jsonData = {
      workflow: Listcard[id].workflow,
      categories: Listcard[id].categories,
      items: Listcard[id].items,
    };

    // Convert JSON data to a string
    var jsonString = JSON.stringify(jsonData);

    // Store the JSON string in localStorage
    localStorage.setItem("card", jsonString);

    router.push('/components/Boutiques');
  };

  return (
    <section className="news_section">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Latest News</h2>
        </div>

        <div className="row">
          {Object.values(ListShop).map((item: any, id: number) => (
            <div
              className="col-md-4 my-3"
              key={id}
              onClick={() => navigateToOtherPage(item.shopid)}
              style={{
                cursor: "pointer"
              }}
            >
              <div className="box">
                <div className="img-box">
                  <img src={item.image} className="box-img" alt="" />
                </div>
                <div className="detail-box">
                  <h4> {item.Company}</h4>
                  <p>
                    {" "}
                    {item.Address}, {item.PostalCode} {item.town}
                  </p>
                </div>
                <div>
                  <Icons />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardBoutique;
