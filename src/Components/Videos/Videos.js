import React from "react";
import './Video.css'

const Videos = () => {
  return (


    <main class="main">
      <section class="container">

        <div class="title">
          <div class="underline"></div>
        </div>

        <article class="review">
          <div class="img-container">
            <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg" alt="" id="person-img" />
          </div>

          <h4 id="author">sara jones</h4>
          <p id="job">ux designer</p>
          <p id="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            asperiores debitis incidunt, eius earum ipsam cupiditate libero?
            Iste, doloremque nihil?
          </p>


          <div class="button-container">
            <button class="prev-btn btn">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="next-btn btn">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>

        </article>

      </section>
    </main>

  );
};

export default Videos;
