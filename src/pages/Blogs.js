import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import Loader from "../components/loader/Loader";
import { BLOG_ASSETS } from "../config/Constants";
import { getBlog } from "../redux/features/booking-data/blogSlice";
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import Parser from 'html-react-parser';

export default function Blogs() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isBlog, setIsBlog] = useState("");
  const [singleArticle, setSingleArticle] = useState({});

  const dispatch=useDispatch();

  useEffect(()=>{
    setIsLoading(true)
    dispatch(getBlog()).then((res)=>{
      setIsBlog(res.payload)
      setIsLoading(false)
    })
  },[])
  const showModal = (key) => {
    setSingleArticle(isBlog[key])
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  if(isLoading){
    return <Loader/>
  }
  return (
    <div className="container blog">
      <div className="inner-container pt-5">
        <div className="sec-title text-center mb-5">
          <h2>Blog Posts</h2>
        </div>
      </div>
      <div className="row">
        {isBlog ? isBlog.map((article, key)=>{
          return (
          <div className="col-md-4" key={key}>
            <div className="card">
              <img
                className="card-img"
                src={BLOG_ASSETS+article.blog_image}
              />
              <div className="card-body">
                <h5 className="card-title">{article.blog_title}</h5>
                <p className="card-text">
                {Parser(article.sub_title)}
                </p>
                <span onClick={()=>{showModal(key)}} className="btn btn-sm" >
                  Read More
                </span>
              </div>
              <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                <div className="views">
                Post Date : <SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{article.created_at}</SimpleDateTime>

                </div>

              </div>
            </div>
          </div>
          )
        })
        :null}
      </div>

      <Modal show={isOpen} onHide={hideModal} dialogclassname="fullscreen-modal" className="blog">
        <Modal.Body dialogclassname="blog-modal">
            <img
              className="card-img"
              src={BLOG_ASSETS+singleArticle.blog_image}
              alt="Bologna"
            />
            <div className="card-body">
                <h5 className="card-title">{singleArticle.blog_title}</h5>
                <p className="card-text mt-3"        dangerouslySetInnerHTML={{__html: singleArticle.blog_content}} />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
