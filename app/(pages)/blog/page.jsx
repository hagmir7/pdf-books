import React from 'react'

export default function page() {
  return (
    <section className='blog-posts'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-lg-12'>
            <h1>Library CMS Blog</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className='post'>
              <div className='post-img'>
                <a href='/blog/Are-Readers-Important-To-Authors'>
                  <img
                    src='https://yes-pdf.com/images/post/2020/October/5f8f526ab2423/small/Are Readers Important To Authors.jpg'
                    alt='Are Readers Important To Authors?'
                  />
                </a>
              </div>
              <div className='post-info'>
                <div className='post-meta'>Oct 20, 2020</div>
                <a
                  href='/blog/Are-Readers-Important-To-Authors'
                  className='post-title'
                >
                  <h4>Are Readers Important To Authors?</h4>
                </a>
                <div className='post-short-description'>
                  Bestselling authors speak of their fans in almost reverential
                  tones, as well they should. A loyal readership that comes back
                  for more, book after book, is the real key to long-term
                  publishing success. Savvy authors work diligently to produce
                  great wo
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='post'>
              <div className='post-img'>
                <a href='/blog/READING-CAMUS-THE-PLAGUE'>
                  <img
                    src='https://yes-pdf.com/images/post/2020/May/5eb1eb96b2b6a/small/Camus.jpg'
                    alt="READING CAMUS' THE PLAGUE IN THE MIDST OF A PANDEMIC"
                  />
                </a>
              </div>
              <div className='post-info'>
                <div className='post-meta'></div>
                <a href='/blog/READING-CAMUS-THE-PLAGUE' className='post-title'>
                  <h4>READING CAMUS' THE PLAGUE IN THE MIDST OF A PANDEMIC</h4>
                </a>
                <div className='post-short-description'>
                  {' '}
                  London Lockdown—things to do. Firstly you must find your copy
                  of The Plague by great French writer Albert Camus. Of course
                  you know the fabulous Penguin edition survived the last
                  relocation and is in your current premises somewhere. Of
                  course you...
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='post'>
              <div className='post-img'>
                <a href='/blog/SEVEN-TRUE-CRIME-BOOKS-FOR-DOMESTIC-SUSPENSE-LOVERS'>
                  <img
                    src='https://yes-pdf.com/images/post/2020/July/5f20418fa3269/small/Shadow-of-a-Doubt.png'
                    alt='SEVEN TRUE CRIME BOOKS FOR DOMESTIC-SUSPENSE LOVERS'
                  />
                </a>
              </div>
              <div className='post-info'>
                <div className='post-meta'></div>
                <a
                  href='/blog/SEVEN-TRUE-CRIME-BOOKS-FOR-DOMESTIC-SUSPENSE-LOVERS'
                  className='post-title'
                >
                  <h4>SEVEN TRUE CRIME BOOKS FOR DOMESTIC-SUSPENSE LOVERS</h4>
                </a>
                <div className='post-short-description'>
                  {' '}
                  Your family—or your home–can be the place the worst things
                  happen to you. This is the essence of domestic suspense: that
                  someone within the smallest of your inner circle is trying to
                  hurt you, whether it’s violent or not (gaslighting, e.g.)....
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-lg-12'></div>
        </div>
      </div>
    </section>
  )
}
