import React from 'react'
import Link from 'next/link'
import StarFill from '../../components/icons/StarFill';
import Facebook from '../../components/icons/Facebook';
import X from '../../components/icons/X';
import Pinterest from '../../components/icons/Pinterest';
import Whatsapp from '../../components/icons/Whatsapp';
import Download from '../../components/icons/Download';
import Read from '../../components/icons/Read';
import https from '../../components/https';
import { notFound } from 'next/navigation';



export async function generateMetadata({ request,params, searchParams }, parent) {
  // read route params
  const slug = params.slug
  // fetch data

  //
  const api_url = process.env.REACT_APP_API;
  console.log(params.pathname)
  const book = await https.get(`${api_url}/api/book/${slug}`)
  // const book = await books.json();

  if (book.status !== 200) {
    return notFound()
  }

  const canonical = `https://www.freewsad.com/${params.locale === 'en' ? '' : params.locale + '/'}book/` + book.data.slug;

  return {
    title: book.data.name,
    description: book.data.description,
    images: [`${api_url}${book.data.image}`],
    keywords: ['books', book.data.tags],
    alternates: {
      canonical,
    },
    openGraph: {
      title: book.data.name,
      images: [`${api_url}${book.data.image}`],
      description: book.data.description,
      url: canonical,
      type: 'article',
      image: {
        url: `${api_url}${book.data.image}`,
        alt: book.data.name,
        width: 600,
        height: 800,
      },
    },
  }
}



export default async function BookPage({props, params}) {

    const response = await (await https.get(`/book/${params.slug}`)).data;
    const api_url = process.env.REACT_APP_API;
  return (
    <section
      className='single-book'
      data-book='10840'
      itemscope
      itemtype='http://schema.org/Book'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='sticky-left-column'>
              <div className='book-cover'>
                <img
                  src={`${api_url}${response.image}`}
                  alt='title'
                  className='img-fluid'
                  itemProp='image'
                />
              </div>

              <div className='social-btns'>
                <Link
                  className='btn facebook'
                  href={`https://www.facebook.com/share.php?u=${process.env.REACT_APP_URL + "/book/" + params.slug}&title=${response.name}`}
                  target='blank'
                >
                  <Facebook />
                </Link>
                <Link
                  className='btn twitter'
                  href='https://twitter.com/intent/tweet?status=title+url'
                  target='blank'
                >
                  <X />
                </Link>
                <Link
                  className='btn vk'
                  href='http://vk.com/share.php?url=url'
                  target='blank'
                >
                  <Whatsapp />
                </Link>
                <Link
                  className='btn pinterest'
                  href='https://pinterest.com/pin/create/button/?url=url&description=title'
                  target='blank'
                >
                  <Pinterest />
                </Link>
              </div>

              <div className='book-links row justify-content-center'>
                <Link
                  href={`${api_url}${response.file}`}
                  className='col-lg-4 col-sm-4 download-link'
                >
                  <Download width='30' height='30' /> Download
                </Link>
                <Link
                  href={`${api_url}${response.file}`}
                  className='col-lg-4 col-sm-4 read-link text-center'
                >
                  <Read /> Read
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-9'>
            <h1 itemProp='name'>{response.name}</h1>
            <div className='book-year' itemProp='datePublished'>
              {new Date(response.created_at).getFullYear()}
            </div>
            <div
              className='book-rating general'
              itemProp='aggregateRating'
              itemscope
              itemtype='http://schema.org/AggregateRating'
            >
              <div className='book-rating-box text-warning'>
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
              </div>
              <div className='whole-rating'>
                <span className='average'>0.00 Avg rating</span>
                <span className='separator'>—</span>
                <span>0</span>
                Votes
              </div>
              <meta itemProp='ratingValue' content='0.00' />
              <meta itemProp='ratingCount' content='0' />
            </div>
            <table className='table book-meta'>
              <tbody>
                <tr>
                  <td>Category:</td>
                  <td>
                    <Link href={`/category/${response.category.slug}`}>
                      {response.category.name}
                    </Link>{' '}
                  </td>
                </tr>
                <tr>
                  <td>Authors:</td>
                  <td>
                    <Link href={`/author/${response.author}`} itemProp='author'>
                      {response.author}{' '}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Pages:</td>
                  <td>
                    <span>
                      {response.pages ? `${response.pages} Pages` : '__'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Language:</td>
                  <td>{response.language.name}</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>{response.book_type ?? '__'}</td>
                </tr>

                <tr>
                  <td>Size:</td>
                  <td>{response.size ?? '__'}</td>
                </tr>

                <tr>
                  <td>Downloads:</td>
                  <td>{response.views}</td>
                </tr>
              </tbody>
            </table>
            <div dangerouslySetInnerHTML={{ __html: response.body }}></div>

            <div className='row mt-5 mb-3'>
              <div className='col-lg-6 col-6'>
                <h2>Reviews</h2>
              </div>
              <div className='col-lg-6 col-6 text-right'>
                <button
                  className='btn btn-primary btn-rounded shadow add-review-collapse'
                  data-toggle='collapse'
                  data-target='#addReview'
                  aria-expanded='false'
                  aria-controls='addReview'
                >
                  Write a review
                </button>
              </div>
            </div>

            <form
              className='add-review validate-review collapse'
              id='addReview'
            >
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='notes'>
                    Required fields are marked *. Your email address will not be
                    published.
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input
                      name='name'
                      className='form-control'
                      placeholder='Name *'
                      type='text'
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input
                      name='email'
                      className='form-control'
                      placeholder='Email *'
                      type='text'
                    />
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='form-group'>
                    <input type='hidden' name='bookId' value='10840' />
                    <textarea
                      name='text'
                      cols='30'
                      rows='5'
                      className='form-control'
                      placeholder='Review'
                    ></textarea>
                  </div>
                </div>
                <div className='col-lg-12 text-center'>
                  <button className='btn btn-primary shadow submit-review'>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
