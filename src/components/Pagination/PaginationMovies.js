import { Pagination } from "antd";
import "./PaginationMovies.scss";

export default ({ currentPage, totalItems, onChangePage }) => {
  return (
    <Pagination
      className="pagination"
      current={currentPage}
      total={totalItems}
      pageSize={20}
      onChange={onChangePage}
    ></Pagination>
  );
};
