import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchPageFilterSide from "./searchPageFilter/SearchPageFilter";
import SearchPageResultSide from "./searchPageResult/SearchPageResult";
import "./search.css";

const Search = () => {
    let [params] = useSearchParams();
    console.log(params);

    return (
        <section id="search-page">
            <div className="search-page-container">
                <SearchPageFilterSide />
                <SearchPageResultSide />
            </div>
        </section>
    );
};

export default Search;
