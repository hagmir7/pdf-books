import React from 'react'

export default function page() {
  return (
    <section className="authors-listing">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="authors-list">
                        <div className="top-filter row">
                            <div className="col-lg-8 text">
                                Found <span>5815 authors</span> in total
                            </div>
                            <div className="col-lg-4 pr-0 pl-0">
                                <select name="sortColumn" id="books-sort" className="custom-select">
                                    <option value="Authors.lastName" data-order="DESC">Name Descending</option>
                                    <option value="Authors.lastName" data-order="ASC">Name Ascending</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/1/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Stephen King "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/1/books">Stephen King </a>
                                        </h4>
                                        <span className="author-books">77 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/2/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Nikki St. Crowe "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/2/books">Nikki St. Crowe </a>
                                        </h4>
                                        <span className="author-books">5 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/3/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Johnny Cash "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/3/books">Johnny Cash </a>
                                        </h4>
                                        <span className="author-books">1 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/4/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Patrick Carr "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/4/books">Patrick Carr </a>
                                        </h4>
                                        <span className="author-books">1 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/5/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Agatha Christie "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/5/books">Agatha Christie </a>
                                        </h4>
                                        <span className="author-books">70 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/6/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Anthony De Mello "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/6/books">Anthony De Mello </a>
                                        </h4>
                                        <span className="author-books">2 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/7/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="George R. R. Martin "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/7/books">George R. R. Martin </a>
                                        </h4>
                                        <span className="author-books">11 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/8/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Carl Gustav Jung "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/8/books">Carl Gustav Jung </a>
                                        </h4>
                                        <span className="author-books">5 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/9/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Ray Bradbury "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/9/books">Ray Bradbury </a>
                                        </h4>
                                        <span className="author-books">11 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/10/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Arundhati Roy "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/10/books">Arundhati Roy </a>
                                        </h4>
                                        <span className="author-books">1 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/11/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Michael Morpurgo "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/11/books">Michael Morpurgo </a>
                                        </h4>
                                        <span className="author-books">2 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/12/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Clive Staples Lewis "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/12/books">Clive Staples Lewis </a>
                                        </h4>
                                        <span className="author-books">4 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/13/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Garth Nix "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/13/books">Garth Nix </a>
                                        </h4>
                                        <span className="author-books">5 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/14/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Jean-Dominique Bauby "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/14/books">Jean-Dominique Bauby </a>
                                        </h4>
                                        <span className="author-books">1 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/15/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Philippa Gregory "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/15/books">Philippa Gregory </a>
                                        </h4>
                                        <span className="author-books">5 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/16/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Oliver Jeffers "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/16/books">Oliver Jeffers </a>
                                        </h4>
                                        <span className="author-books">4 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/17/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="John Gray "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/17/books">John Gray </a>
                                        </h4>
                                        <span className="author-books">1 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/18/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Paulo Coelho "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/18/books">Paulo Coelho </a>
                                        </h4>
                                        <span className="author-books">4 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/19/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Hilary Mantel "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/19/books">Hilary Mantel </a>
                                        </h4>
                                        <span className="author-books">10 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/20/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Dr. Seuss "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/20/books">Dr. Seuss </a>
                                        </h4>
                                        <span className="author-books">5 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/21/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Geraldine Brooks "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/21/books">Geraldine Brooks </a>
                                        </h4>
                                        <span className="author-books">3 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/22/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Henri Charriere "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/22/books">Henri Charriere </a>
                                        </h4>
                                        <span className="author-books">1 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/23/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Richard Mabey "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/23/books">Richard Mabey </a>
                                        </h4>
                                        <span className="author-books">1 books</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 col-6">
                                <div className="author">
                                    <div className="author-photo">
                                        <a href="/author/24/books" className="text-center"><img
                                                src="https://z-pdf.com/resources/images/comingsoon.png" alt="Daniel Gilbert "/></a>
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            <a href="/author/24/books">Daniel Gilbert </a>
                                        </h4>
                                        <span className="author-books">1 books</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="books-per-page d-flex">
                            <nav className="m-auto">
                                <ul className="pagination">
                                    <li className="page-item  active">
                                        <a href="/authors" className="page-link ajax-page">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item ">
                                        <a href="/authors/page/2" className="page-link ajax-page">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item ">
                                        <a href="/authors/page/3" className="page-link ajax-page">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item ">
                                        <a href="/authors/page/2" className="page-link ajax-page">
                                            <i className="fa fa-angle-right"></i> </a>
                                    </li>
                                    <li className="page-item ">
                                        <a href="/authors/page/243" className="page-link ajax-page">
                                            Last Page
                                        </a>
                                    </li>

                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
