import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/1/9a0e7b6b-c2b2-4d5a-b53b-b91abc618c191643724903538-USPA_Desk_Banner.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="00001"
            title="The Two Last Mountains"
            image="https://matthewreilly.com/wp-content/uploads/2021/10/9781760982416-196x300.jpg"
            price={200}
          />
          <Product
            id="00002"
            title="Nike"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16274210/2022/1/25/1e84f636-e0a9-4b62-9878-5333d47287291643093064810-Nike-Air-Max-90-Next-Nature-Mens-Shoes-7871643093064368-1.jpg"
            price={10000}
          />
          <Product
            id="00003"
            title="Levis"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14322626/2021/6/15/e8b5f479-765c-4c9c-ac8c-8123927aef5a1623736080042JeansLevisMenTrousersLevisMenTrousersLevisMenTrousersLevisMe1.jpg"
            price={600}
          />

          {/*product*/}
        </div>
        <div className="home_row">{/*product*/}</div>
        <div className="home_row">{/*product*/}</div>
      </div>
    </div>
  );
}

export default Home;
