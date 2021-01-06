import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { IoCloseSharp } from 'react-icons/io5';

import '../../styles/post.scss';

const PostModal = ({ post }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { mediaUrl, caption, userUrl, user, description } = post;

  return (
    <>
      <div style={{ cursor: 'pointer' }} onClick={handleShow}>
        <figure className="mb-5">
          <img className="post__mediaUrl" src={mediaUrl} alt="media ul" />
        </figure>
        <div className="px-4">
          <article>
            <article className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="post__caption">{caption}</h5>
              <div className="d-flex align-items-center">
                <p className="post__user">{user}</p>
                <img className="post__user__url" src={userUrl} alt="user url" />
              </div>
            </article>
            <article className="post__description__container">
              <p className="post__description">{description}</p>
            </article>
          </article>
        </div>
      </div>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="post__modalheader">
          <IoCloseSharp
            className="post__modal__closebtn"
            onClick={handleClose}
          />
        </Modal.Header>
        <Modal.Body className="post__modalbody">
          <div>
            <figure className="mb-5">
              <img className="post__mediaUrl" src={mediaUrl} alt="media ul" />
            </figure>
            <div className="px-4">
              <article>
                <article className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="post__caption">{caption}</h5>
                  <div className="d-flex align-items-center">
                    <p className="post__user">{user}</p>
                    <img
                      className="post__user__url"
                      src={userUrl}
                      alt="user url"
                    />
                  </div>
                </article>
                <article className="post__description__container">
                  <p className="post__description">{description}</p>
                </article>
              </article>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <h5 style={{ color: 'white' }}>footer section</h5>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostModal;
