import React from 'react';
import { Breadcrumb, BreadcrumbItem ,Container} from 'reactstrap';
import Style from "./index.module.css";

const BreadCrumbComponent = (props) => {
  return (
    <div className={Style.pageslinks}>
    <Container>
      <Breadcrumb>
        <BreadcrumbItem><a href="/"><i className="fas fa-home"></i></a></BreadcrumbItem>
        <BreadcrumbItem active>Your Shopping Card</BreadcrumbItem>
      </Breadcrumb>
      </Container>
    </div>
  );
};

export default BreadCrumbComponent;
