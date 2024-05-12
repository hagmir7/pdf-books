import React from 'react';
import Link from 'next/link';
import StarFill from './icons/StarFill';

export default function BookCard(props) {
  return (
    <div className="col-lg-6 col-md-6" key={props.slug}>
        <div className="row book">
            <div className="book-cover col-lg-3 col-3">
                <Link href={`/books/${props.slug}`}>
                    <img src={props.image} alt={props.name} className="img-fluid border" />
                </Link>
            </div>
            <div className="book-info col-lg-9 col-9">
                <div className="book-title">
                    <Link href={`/books/${props.slug}`}>{ props.name }</Link>
                </div>
                <div className="book-attr">
                    <span className="book-publishing-year">{props.date}, {props.author}</span>
                     <span className="book-author">{props.author}</span>
                </div>
                <div className="book-rating">
                    <div className="book-rating-box">
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                    </div>
                </div>
                <div className="book-short-description">{props.description}</div>
                {/* <div className="book-settings">
                    <Link href="#"><i className="fa fa-ellipsis-v"></i></Link>
                </div> */}
            </div>
        </div>
    </div>
  )
}
