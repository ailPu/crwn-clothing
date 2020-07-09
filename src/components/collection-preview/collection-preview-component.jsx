import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, match, history, routeName }) => {
	return (
		<div className="collection-preview">
			<span
				className="title"
				onClick={() => history.push(`${match.path}/${routeName}`)}
			>
				{title.toUpperCase()}
			</span>
			<div className="preview">
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};
export default withRouter(CollectionPreview);
