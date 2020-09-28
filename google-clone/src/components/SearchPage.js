import React from "react";
import "../css/SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSeach";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from '../components/Search';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://cdn.vox-cdn.com/thumbor/E9RM8-qg-iyLEAzP4d7tobqI09o=/0x0:2012x1341/1400x933/filters:focal(0x0:2012x1341):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="searchPage_headerBody">
        <Search hideButtons />
      </div>
    </div>
  );
}

export default SearchPage;
