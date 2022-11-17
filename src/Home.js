import React from "react";
import "./Home.css";
import Product from "./Product";
import Header from "./Header";
import { useCookies } from "react-cookie";
import LogRocket from "logrocket";
import { useEffect, useState } from "react";

function Home() {
  const [cookies, setCookie] = useCookies(["name"]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (!cookies.name) {
      setDisplay(true);
    }
  }, [cookies]);

  function acceptCookie() {
    LogRocket.init(process.env.REACT_APP_API_KEY);

    let expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + 1 * 3600 * 1000);

    setCookie("name", "yes", {
      expires: expireDate,
      httpOnly: false,
      path: "/",
      secure: true,
    });
    setDisplay(false);
  }

  return (
    <div className="home">
      <div className="home__container">
        <Header />

        {display && (
          <div>
            <div>
              Allow the use of cookies from Eshop?
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, earum quae. Possimus ipsum quam molestiae optio iste
                fugit repellendus obcaecati magnam accusamus cumque, delectus
                eligendi. Veritatis excepturi incidunt hic quisquam. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Hic fugit non
                cumque consectetur esse aperiam modi commodi optio molestiae,
                totam nemo unde deleniti earum explicabo et minima laboriosam!
                Error, doloribus.
              </div>
            </div>
            <button onClick={(e) => setDisplay(false)}>Decline</button>
            <button onClick={acceptCookie}>Allow cookies</button>
          </div>
        )}

        <img
          src="https://res.cloudinary.com/dte9dk6cl/image/upload/v1668531016/abstract-hexagonal-geometric-ultra-wide-260nw-1206683305_xknsbh.webp"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="BESTÄLL EN UNG OCH VÄLDIGT VÄLTRÄNAD ADAM , BRA PRIS"
            price={11.96}
            rating={5}
            image="https://res.cloudinary.com/dte9dk6cl/image/upload/v1668530384/image_6487327_4_b1izl0.jpg"
          />
          <Product
            id="49538094"
            title="BESTÄLL EN ÄNNU YNGRE OCH VÄLTRÄNAD ADAM , OCKSÅ BRA PRIS"
            price={239.0}
            rating={4}
            image="https://res.cloudinary.com/dte9dk6cl/image/upload/v1668530393/image_6487327_5_f2as35.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="BESTÄLL DEN YNGSTA OCH DRYGASTE ADAM , BRA PRIS"
            price={199.99}
            rating={3}
            image="https://res.cloudinary.com/dte9dk6cl/image/upload/v1668530400/image_6487327_6_ncsobv.jpg"
          />
          <Product
            id="23445930"
            title="BESTÄLL DEN SNYGGASTE ADAM MED HÅR , JÄVLIGT BRA PRIS"
            price={98.99}
            rating={5}
            image="https://res.cloudinary.com/dte9dk6cl/image/upload/v1668530408/image_6487327_7_jb5eyg.jpg"
          />
          <Product
            id="3254354345"
            title="BESTÄLL EN ADAM PÅ TOA , BRA PRIS"
            price={598.99}
            rating={4}
            image="https://res.cloudinary.com/dte9dk6cl/image/upload/v1668530418/image_6487327_8_a7lr7q.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="BESTÄLL EN I DONT GIVE A FU** ADAM, BRA PRIS"
            price={1094.98}
            rating={4}
            image="https://res.cloudinary.com/dte9dk6cl/image/upload/v1668530426/image_6487327_9_qixwbw.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
