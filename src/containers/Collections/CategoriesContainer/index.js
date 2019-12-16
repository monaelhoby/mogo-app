import React, { Component } from "react";
import PropTypes from "prop-types";
import CateggoriesList from "../../../components/Collections/CategoriesList";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";

class CategoriesContainer extends Component {
  componentDidMount() {
    this.props.collections.fetchCollections();
  }

  render() {
    let { state, collections } = this.props.collections;
    return (
      <div>
      {
        state === "done" ? ( <CateggoriesList list={collections} /> ):(<div className={`spinner ${state === "done" ? "hide" : "show"}`}>
          <div class="double-bounce1" />
          <div class="double-bounce2" />
        </div>)
      }

      </div>
    );
  }
}

export default inject("collections")(observer(CategoriesContainer));

// export default inject('collections')(CategoriesContainer);
