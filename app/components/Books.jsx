import Link from 'next/link'
import React from 'react'
import https from './https';
import BookCard from './BookCard';

export default async function Books() {
    const response = await https.get('/books/new')
    // const responseData = 
    // console.log(response.data);

  return (
        <section className="home-book-list">
                <div className="container">
                    <div className="row book-list">
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <h2>Last Books</h2>
                                    </div>
                                </div>
                                {
                                    await response.data.data.map(book =>{
                                        return <BookCard 
                                            name={book.name}
                                            image={`${process.env.REACT_APP_API}${book.image}`}
                                            slug={book.slug}
                                            description={book.description}
                                            author={book.author}
                                            date={new Date(book.created_at).getFullYear()}
                                        />

                                    })
                                }







                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="row mini-list-authors">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <h2>Popular Authors</h2>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/375/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Ilona Andrews "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/375/books"> Ilona Andrews</Link>
                                        </div>
                                        <div className="author-books">27 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/1100/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Brent Weeks "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/1100/books"> Brent Weeks</Link>
                                        </div>
                                        <div className="author-books">10 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/1239/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Joyce Meyer "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/1239/books"> Joyce Meyer</Link>
                                        </div>
                                        <div className="author-books">12 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/2276/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Lois McMaster Bujold "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/2276/books"> Lois McMaster Bujold</Link>
                                        </div>
                                        <div className="author-books">9 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/3618/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="T. L. Swan "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/3618/books"> T. L. Swan</Link>
                                        </div>
                                        <div className="author-books">8 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/3632/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="A. R. Torre "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/3632/books"> A. R. Torre</Link>
                                        </div>
                                        <div className="author-books">4 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/4734/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Terry Goodkind "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/4734/books"> Terry Goodkind</Link>
                                        </div>
                                        <div className="author-books">15 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/5759/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Genevieve Cogman "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/5759/books"> Genevieve Cogman</Link>
                                        </div>
                                        <div className="author-books">8 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/6038/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Chloe Walsh (Fiction writer) "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/6038/books"> Chloe Walsh (Fiction writer)</Link>
                                        </div>
                                        <div className="author-books">2 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/6045/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Shain Rose "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/6045/books"> Shain Rose</Link>
                                        </div>
                                        <div className="author-books">7 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/6046/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Chloe Walsh "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/6046/books"> Chloe Walsh</Link>
                                        </div>
                                        <div className="author-books">3 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/6047/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Angie Sage "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/6047/books"> Angie Sage</Link>
                                        </div>
                                        <div className="author-books">7 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/6055/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Erin A. Craig "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/6055/books"> Erin A. Craig</Link>
                                        </div>
                                        <div className="author-books">3 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/6056/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Nadia Lee "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/6056/books"> Nadia Lee</Link>
                                        </div>
                                        <div className="author-books">2 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/6062/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Sadie Kincaid "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/6062/books"> Sadie Kincaid</Link>
                                        </div>
                                        <div className="author-books">8 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/6063/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Stacia Stark "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/6063/books"> Stacia Stark</Link>
                                        </div>
                                        <div className="author-books">7 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/6102/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Alessandra Torre "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/6102/books"> Alessandra Torre</Link>
                                        </div>
                                        <div className="author-books">3 books</div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 author">
                                    <div className="author-photo">
                                        <Link href="/author/6104/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/noavatar.png" alt="Deborah Bedford "
                                                className="rounded-circle" /></Link>

                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">
                                            <Link href="/author/6104/books"> Deborah Bedford</Link>
                                        </div>
                                        <div className="author-books">1 books</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}
