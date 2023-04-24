function sharePost() {
    const postUrl = 'https://example.com/post/123'; // replace with actual post URL
    const shareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(postUrl)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
  

  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    loop: true
  });


  $(index.html).ready(function(){
    $('.swiper-container').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
    });
  });
      