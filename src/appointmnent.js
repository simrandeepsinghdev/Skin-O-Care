import React from 'react'
import img3 from "./doctor/doc3.jpg";
import img5 from "./doctor/doc5.jpg";

export default function Appointment() {
  return (
    <>
  <div className="row">
  <div className="card mx-5 my-3" style={{ width: "18rem" }}>
  <img src={img3}  style={{ borderRadius: '10px 10px 0 0', maxHeight: '200px', objectFit: 'cover' }}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Read more
    </a>
  </div>
</div>

<div className="card mx-5 my-3" style={{ width: "18rem" }}>
  <img src={img3}  style={{ borderRadius: '10px 10px 0 0', maxHeight: '200px', objectFit: 'cover' }}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Read more
    </a>
  </div>
</div>
<div className="card mx-5 my-3" style={{ width: "18rem" }}>
  <img src={img3}  style={{ borderRadius: '10px 10px 0 0', maxHeight: '200px', objectFit: 'cover' }}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Read more
    </a>
  </div>
</div>

  </div>

  <div className="row">
  <div className="card mx-5 my-3" style={{ width: "18rem" }}>
  <img src={img5}  style={{ borderRadius: '10px 10px 0 0', maxHeight: '200px', objectFit: 'cover' }}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a  className="btn btn-primary">
      Read more
    </a>
  </div>
</div>

<div className="card mx-5 my-3" style={{ width: "18rem" }}>
  <img src={img5}  style={{ borderRadius: '10px 10px 0 0', maxHeight: '200px', objectFit: 'cover' }}  className="card-img-top"  style={{ borderRadius: '10px 10px 0 0', maxHeight: '200px', objectFit: 'cover' }}  alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Read more
    </a>
  </div>
</div>
<div className="card mx-5 my-3" style={{ width: "18rem" }}>
  <img src={img5}  style={{ borderRadius: '10px 10px 0 0', maxHeight: '200px', objectFit: 'cover' }}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Read more
    </a>
  </div>
</div>

  </div>

 
    </>
  )
}
