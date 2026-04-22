"use client";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "@/feature/searchSlice";
function Search() {
  const dispatch = useDispatch();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="join">
        <div>
          <label className="input validator join-item">
            <input type="search" placeholder="search here" className="focus:border-none!" onChange={(e) => dispatch(setSearchTerm(e.target.value))} />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button type="submit" className="btn btn-secondary join-item">
          <CiSearch />
        </button>
      </div>
    </form>
  );
}

export default Search;
