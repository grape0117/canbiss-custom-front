import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import "./Form.css";
import { useContext } from "react";
import { SearchContext } from "../../../Context/SearchContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { isEmpty } from "../../../utils";

import { FaTimes } from "react-icons/fa";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const Form = () => {
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();
  const citemList = useSelector((state) => state.category.citemList);
  const searchList = useSelector((state) => state.category.searchList);
  const [mcitemList, setCitemList] = useState([]);
  const [selectedCategory, setSelectCategory] = useState("");

  const [selectedValue, setSelectedValue] = useState(null);

  const handleAutocompleteChange = (event, value) => {
    setSelectedValue(value);
  };
  const handelFormSubmit = (e) => {
    e.preventDefault();
    console.log("selected Value:", selectedValue);
    // searchContext.setSearchQuery(selectedValue)
    // navigate('/search')
    if (!isEmpty(selectedValue)) {
      let strUrl = "/item/" + selectedValue.id;
      navigate(strUrl);
    }
  };
  const changeCategory = (value) => {
    setSelectCategory(value);
  };

  useEffect(() => {
    setCitemList(citemList);
    console.log("====categoryList:", citemList);
  }, [citemList]);

  useEffect(() => {
    const inputElement = document.querySelector(".MuiAutocomplete-input");
    inputElement.placeholder = "Search for products";
  }, []);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
      await sleep(1000); // For demo purposes.
      console.log("searchList2:", searchList);
      if (active && !isEmpty(searchList)) {
        setOptions([...searchList]);
      }
    })();
    return () => {
      active = false;
    };
  }, [loading, searchList]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  
  return (
    <form className="search__form" onSubmit={handelFormSubmit}>
      <Autocomplete
        id="asynchronous-demo"
        sx={{ width: "100%" }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
        value={selectedValue}
        onChange={handleAutocompleteChange}
        renderInput={(params) => (
          <TextField
            className="autocomplete_textfield"
            // label="Search for products"
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Fragment>{params.InputProps.endAdornment}</Fragment>
              ),
            }}
          />
        )}
      />
      <button className="search__form__button" type="submit">
        {/* <SearchIcon fontSize="medium" /> */}
        <FaTimes />
      </button>
    </form>
  );
};

export default Form;
