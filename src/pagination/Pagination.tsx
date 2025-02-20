import { useEffect, useState } from "react";
import useFetch from "../custom-hooks/useFetch";
import "./pagination.css";

const ProductCard = ({
  thumbnail,
  title,
}: {
  thumbnail: string;
  title: string;
}) => {
  return (
    <div className="product-card">
      <img src={thumbnail} alt="product-image" width={100} height={100} />
      <h5>{title}</h5>
    </div>
  );
};

const Pagination = ({ pageSize }: { pageSize: number }) => {
  const { data, isLoading }: { data: any; isLoading: any } = useFetch(
    "https://dummyjson.com/products"
  );
  const [pageData, setPageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (!isLoading && data) {
      setPageData(data?.products);
    }
  }, [data, isLoading]);

  const noOfPages = Math.ceil(pageData.length / pageSize);
  const start = currentPage * pageSize;
  const end = start + pageSize;

  const goToPrev = () => {
    if (currentPage !== 0) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage(noOfPages - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < noOfPages - 1) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage(0);
    }
  };

  return (
    <div className="pagination-container">
      <h1 className="pagination-title">Pagination</h1>
      <div className="pagination-content">
        {pageData.length > 0 &&
          pageData
            .slice(start, end)
            .map((data: any) => (
              <ProductCard
                key={data.id}
                thumbnail={data.thumbnail}
                title={data.title}
              />
            ))}
      </div>
      <div className="pagination-buttons">
        <span onClick={goToPrev}>⬅️</span>
        {[...Array(noOfPages).keys()].map((p) => (
          <span
            className={`pagination-button ${currentPage === p && "active"}`}
            onClick={() => setCurrentPage(p)}
          >
            {p}
          </span>
        ))}
        <span onClick={goToNext}>➡️</span>
      </div>
    </div>
  );
};

export default Pagination;
