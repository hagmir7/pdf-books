"use client"
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import navigation module styles (optional)
import 'swiper/css/pagination'; //

export default function Carousel() {

  const breakpoints = {
    // when window width is >= 320px

    300: {
      slidesPerView: 1,
    },

    600: {
      slidesPerView: 2,
    },

    1000: {
      slidesPerView: 3,
    },
    // when window width is >= 480px

    // when window width is >= 640px
  }

    
  return (
    <section className='home-book-carousel owl-carousel'>
      <Swiper
        spaceBetween={0} // Optional spacing between slides
        slidesPerView={3}
        breakpoints={breakpoints} // Optional number of slides visible
        // navigation={true} // Optional navigation arrows (requires import)
        // pagination={{ clickable: true }} // Optional pagination dots (requires import)
      >
        <SwiperSlide>
          <div className='book green-bg'>
            <div className='row'>
              <div className='book-cover col-lg-4 col-4'>
                <Link href='/book/9756'>
                  <img
                    src='https://z-pdf.com/images/covers/2024/February/65cf6d24a0027/small/9780316404457.jpg'
                    alt='Do Not Disturb (Deanna Madden #2) Free PDF Download'
                    className='img-fluid'
                  />
                </Link>
              </div>
              <div className='book-info col-lg-8 col-8'>
                <div className='book-title'>
                  <Link href='/book/9756'>
                    Do Not Disturb (Deanna Madden #2) Free PDF Download
                  </Link>
                </div>
                <div className='book-attr'>
                  <span className='book-publishing-year'>2015, </span>{' '}
                  <span className='book-author'>A. R. Torre </span>
                </div>
                <div className='book-rating'>
                  <div className='book-rating-box'>
                    <div className='rating' style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className='book-short-description'>
                  {' '}
                  Equal parts Dexter and 50 Shades , this is the eagerly awaited
                  follow-up to the award winning erotic thriller, The Girl in
                  6E, by A.R. Torre. 1....
                </div>
                <div className='book-settings'>
                  <Link href='#'>
                    <i className='fa fa-ellipsis-v'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='book purple-bg'>
            <div className='row'>
              <div className='book-cover col-lg-4 col-4'>
                <Link href='/book/9757'>
                  <img
                    src='https://z-pdf.com/images/covers/2024/February/65cf6d9851045/small/9780446578110.jpg'
                    alt='The Penny by Joyce Meyer Free PDF Download'
                    className='img-fluid'
                  />
                </Link>
              </div>
              <div className='book-info col-lg-8 col-8'>
                <div className='book-title'>
                  <Link href='/book/9757'>
                    The Penny by Joyce Meyer Free PDF Download
                  </Link>
                </div>
                <div className='book-attr'>
                  <span className='book-publishing-year'>2007, </span>{' '}
                  <span className='book-author'>Joyce Meyer </span>
                </div>
                <div className='book-rating'>
                  <div className='book-rating-box'>
                    <div className='rating' style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className='book-short-description'>
                  {' '}
                  Jenny Blake has a theory about life: big decisions often don't
                  amount to much, but little decisions sometimes transform
                  everything. Her theory...
                </div>
                <div className='book-settings'>
                  <Link href='#'>
                    <i className='fa fa-ellipsis-v'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='book blue-bg'>
            <div className='row'>
              <div className='book-cover col-lg-4 col-4'>
                <Link href='/book/9617'>
                  <img
                    src='https://z-pdf.com/images/covers/2024/February/65ce426d83e4d/small/9781607513513.jpg'
                    alt='The Night Angel Trilogy #1-3 Free PDF Download'
                    className='img-fluid'
                  />
                </Link>
              </div>
              <div className='book-info col-lg-8 col-8'>
                <div className='book-title'>
                  <Link href='/book/9617'>
                    The Night Angel Trilogy #1-3 Free PDF Download
                  </Link>
                </div>
                <div className='book-attr'>
                  <span className='book-publishing-year'>2009, </span>{' '}
                  <span className='book-author'>Brent Weeks </span>
                </div>
                <div className='book-rating'>
                  <div className='book-rating-box'>
                    <div className='rating' style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className='book-short-description'>
                  {' '}
                  From NYT bestselling author Brent Weeks comes his breakout
                  fantasy trilogy in which a young boy trains under the city's
                  most legendary and feared...
                </div>
                <div className='book-settings'>
                  <Link href='#'>
                    <i className='fa fa-ellipsis-v'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='book burgundy-bg'>
            <div className='row'>
              <div className='book-cover col-lg-4 col-4'>
                <Link href='/book/9618'>
                  <img
                    src='https://z-pdf.com/images/covers/2024/February/65ce42e03626b/small/9781625173430.jpg'
                    alt='Clean Sweep (Innkeeper Chronicles #1) Free PDF Download'
                    className='img-fluid'
                  />
                </Link>
              </div>
              <div className='book-info col-lg-8 col-8'>
                <div className='book-title'>
                  <Link href='/book/9618'>
                    Clean Sweep (Innkeeper Chronicles #1) Free PDF Download
                  </Link>
                </div>
                <div className='book-attr'>
                  <span className='book-publishing-year'>2013, </span>{' '}
                  <span className='book-author'>Ilona Andrews </span>
                </div>
                <div className='book-rating'>
                  <div className='book-rating-box'>
                    <div className='rating' style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className='book-short-description'>
                  ***Notice: This is a special Collectors Edition,
                  trade-paperback volume, which includes Black and White
                  original illustrations. It is a short...
                </div>
                <div className='book-settings'>
                  <Link href='#'>
                    <i className='fa fa-ellipsis-v'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='book beige-bg'>
            <div className='row'>
              <div className='book-cover col-lg-4 col-4'>
                <Link href='/book/9620'>
                  <img
                    src='https://z-pdf.com/images/covers/2024/February/65ce436dba068/small/9781734510911.jpg'
                    alt='Reverie (Stonewood Brothers #2) Free PDF Download'
                    className='img-fluid'
                  />
                </Link>
              </div>
              <div className='book-info col-lg-8 col-8'>
                <div className='book-title'>
                  <Link href='/book/9620'>
                    Reverie (Stonewood Brothers #2) Free PDF Download
                  </Link>
                </div>
                <div className='book-attr'>
                  <span className='book-publishing-year'>2020, </span>{' '}
                  <span className='book-author'>Shain Rose </span>
                </div>
                <div className='book-rating'>
                  <div className='book-rating-box'>
                    <div className='rating' style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className='book-short-description'>
                  Reverie is an angsty, enemies-to-lovers office standalone
                  romance.VickRude. Harsh. Severe. Jett Stonewood.The
                  billionaire businessman refused to...
                </div>
                <div className='book-settings'>
                  <Link href='#'>
                    <i className='fa fa-ellipsis-v'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='book pink-bg'>
            <div className='row'>
              <div className='book-cover col-lg-4 col-4'>
                <Link href='/book/9622'>
                  <img
                    src='https://z-pdf.com/images/covers/2024/February/65ce43bdef18c/small/9781910817087.jpg'
                    alt='Treacherous (Carter Kids #1) Free PDF Download'
                    className='img-fluid'
                  />
                </Link>
              </div>
              <div className='book-info col-lg-8 col-8'>
                <div className='book-title'>
                  <Link href='/book/9622'>
                    Treacherous (Carter Kids #1) Free PDF Download
                  </Link>
                </div>
                <div className='book-attr'>
                  <span className='book-publishing-year'>2015, </span>{' '}
                  <span className='book-author'>Chloe Walsh </span>
                </div>
                <div className='book-rating'>
                  <div className='book-rating-box'>
                    <div className='rating' style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className='book-short-description'>
                  {' '}
                  One year is all I have to endure. That was the agreement with
                  Uncle Max. One year in a new school, on a new continent, and
                  then I can go home to...
                </div>
                <div className='book-settings'>
                  <Link href='#'>
                    <i className='fa fa-ellipsis-v'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='book green-bg'>
            <div className='row'>
              <div className='book-cover col-lg-4 col-4'>
                <Link href='/book/9624'>
                  <img
                    src='https://z-pdf.com/images/covers/2024/February/65ce444387b9e/small/9781943772322.jpg'
                    alt='Sweep in Peace (Innkeeper Chronicles #2) Free PDF Download'
                    className='img-fluid'
                  />
                </Link>
              </div>
              <div className='book-info col-lg-8 col-8'>
                <div className='book-title'>
                  <Link href='/book/9624'>
                    Sweep in Peace (Innkeeper Chronicles #2) Free PDF Download
                  </Link>
                </div>
                <div className='book-attr'>
                  <span className='book-publishing-year'>2015, </span>{' '}
                  <span className='book-author'>Ilona Andrews </span>
                </div>
                <div className='book-rating'>
                  <div className='book-rating-box'>
                    <div className='rating' style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className='book-short-description'>
                  {' '}
                  Dina DeMille isn't your typical Bed and Breakfast owner. Her
                  inn defies laws of physics, her dog is secretly a monster, and
                  the only permanent...
                </div>
                <div className='book-settings'>
                  <Link href='#'>
                    <i className='fa fa-ellipsis-v'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='book purple-bg'>
            <div className='row'>
              <div className='book-cover col-lg-4 col-4'>
                <Link href='/book/9627'>
                  <img
                    src='https://z-pdf.com/images/covers/2024/February/65ce44b19fb76/small/9781956810066.jpg'
                    alt='Fractured Freedom Free PDF Download'
                    className='img-fluid'
                  />
                </Link>
              </div>
              <div className='book-info col-lg-8 col-8'>
                <div className='book-title'>
                  <Link href='/book/9627'>
                    Fractured Freedom Free PDF Download
                  </Link>
                </div>
                <div className='book-attr'>
                  <span className='book-publishing-year'>2022, </span>{' '}
                  <span className='book-author'>Shain Rose </span>
                </div>
                <div className='book-rating'>
                  <div className='book-rating-box'>
                    <div className='rating' style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className='book-short-description'>
                  Is it so bad that I tricked my older brother's best friend
                  into taking my v-card? Maybe. In my defense, it was Dante
                  Reid-my crush, my first love,...
                </div>
                <div className='book-settings'>
                  <Link href='#'>
                    <i className='fa fa-ellipsis-v'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='book blue-bg'>
            <div className='row'>
              <div className='book-cover col-lg-4 col-4'>
                <Link href='/book/9629'>
                  <img
                    src='https://z-pdf.com/images/covers/2024/February/65ce455bbc6c1/small/9781956810158.jpg'
                    alt='Between Love and Loathing #2 Free PDF Download'
                    className='img-fluid'
                  />
                </Link>
              </div>
              <div className='book-info col-lg-8 col-8'>
                <div className='book-title'>
                  <Link href='/book/9629'>
                    Between Love and Loathing #2 Free PDF Download
                  </Link>
                </div>
                <div className='book-attr'>
                  <span className='book-publishing-year'>2023, </span>{' '}
                  <span className='book-author'>Shain Rose </span>
                </div>
                <div className='book-rating'>
                  <div className='book-rating-box'>
                    <div className='rating' style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className='book-short-description'>
                  {' '}
                  Fake dating my enemy so I can design my dream bakery should be
                  easy … as long as I don't fall in love with him. Dominic Hardy
                  might be an...
                </div>
                <div className='book-settings'>
                  <Link href='#'>
                    <i className='fa fa-ellipsis-v'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='book burgundy-bg'>
            <div className='row'>
              <div className='book-cover col-lg-4 col-4'>
                <Link href='/book/9632'>
                  <img
                    src='https://z-pdf.com/images/covers/2024/February/65ce45ab9dd06/small/9798353092117.jpg'
                    alt='Unnatural Magic (Bargains with Beasts #1) Free PDF Download'
                    className='img-fluid'
                  />
                </Link>
              </div>
              <div className='book-info col-lg-8 col-8'>
                <div className='book-title'>
                  <Link href='/book/9632'>
                    Unnatural Magic (Bargains with Beasts #1) Free PDF Download
                  </Link>
                </div>
                <div className='book-attr'>
                  <span className='book-publishing-year'>2022, </span>{' '}
                  <span className='book-author'>Stacia Stark </span>
                </div>
                <div className='book-rating'>
                  <div className='book-rating-box'>
                    <div className='rating' style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className='book-short-description'>
                  I was kept ignorant and sheltered my whole life. Now that I'm
                  free, I'll never be coddled again. Even if the smoking hot
                  werewolf king thinks...
                </div>
                <div className='book-settings'>
                  <Link href='#'>
                    <i className='fa fa-ellipsis-v'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
