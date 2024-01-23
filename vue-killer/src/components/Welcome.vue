<template>
    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(image, index) in carouselImages" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
          <img :src="image" class="d-block w-100" alt="Carousel Image">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
  
      <div class="container carousel-caption">
        <div class="row">
          <div class="col-md-12">
            <div class="welcome-content text-center">
              <h1 class="display-4">Welcome to Our Website</h1>
              <p class="lead">Discover amazing things and connect with passionate people.</p>
              <div class="brand">
                <h2>Brand Name</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        carouselImages: [
          '/images/bg.png',
          '/images/bg.png',
          '/images/bg.png',
          '/images/bg.png',
          '/images/bg.png',
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  #heroCarousel {
    display: flex;
    height: 600px; 
    max-height: 100%; 
    align-items: stretch; 
    overflow: hidden;
  }
  
  .carousel-item img {
    height: 100%; 
    object-fit: cover;
  }
  
  .carousel-caption {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--color-text);
  }
  
  .carousel-content h1 {
    font-size: 2.5rem;
  }
  
  .carousel-content p {
    font-size: 1.2rem;
  }
  
  .brand {
    margin-top: 20px;
  }
  
  .brand h2 {
    font-size: 1.8rem;
  }
  
  @media (max-width: 768px) {
    #heroCarousel {
      height: 350px; 
    }
  }
  </style>
  