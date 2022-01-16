import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Modal, Button } from 'react-bootstrap';
import Article from '../../components/article/Article';
import './blog.css';
// eslint-disable-next-line
import devProjects from './projects.js';

const Blog = () => {
  // eslint-disable-next-line
  const [loadedProjects, setLoadedProjects] = useState(devProjects);
  const [pageNumber, setPageNumber] = useState(0);
  const [modalContent, setModalContent] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  // eslint-disable-next-line
  const handleShow = () => {
    setShowModal(true);
  };

  const projectsPerPage = 6;
  const pagesVisited = pageNumber * projectsPerPage;
  const displayProjects = loadedProjects
    .slice(pagesVisited, pagesVisited + projectsPerPage)
    .map((project) => (
      <div key={project.name} className="col-lg-4 col-md-6 col-xs-12" style={{ marginBottom: '2rem' }} onClick={() => { handleShow(); setModalContent(project.htmlname); }}>
        <Article imgUrl={project.image} tags={project.tags} description={project.description} name={project.name} htmlname={project.htmlname} />
      </div>
    ));
  const pageCount = Math.ceil(loadedProjects.length / projectsPerPage);

  const handlePageClick = (event) => {
    setPageNumber(event.selected);
  };

  return (
    <div className="gpt3__blog section__padding" id="portfolio">
      <div className="row">
        {displayProjects}
      </div>
      <Modal show={showModal} onHide={handleClose} dialogClassName="gpt3_modal_project" fullscreen className="gpt3_modal_style">
        <Modal.Header closeButton className="gpt3_modal_header">
          <span />
        </Modal.Header>
        <Modal.Body className="gpt3_modal_body">
          {modalContent}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="paginationBttns"
        previousLinkClassName="previousBttn"
        nextLinkClassName="nextBttn"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </div>
  );
};

export default Blog;
