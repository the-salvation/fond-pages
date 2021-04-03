import React from 'react';
// import styles from './Search.scss'

const listOfNarcotics = [
  {
    text: "Konopli"
  },
  {
    text: "Konapli"
  },
  {
    text: "Hash"
  },
  {
    text: "Cocaine"
  },
  {
    text: "Konapli"
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : listOfNarcotics.filter(narc =>
    narc.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.SearchRef = React.createRef();
    this.InputRef = React.createRef();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };


  componentDidMount() {
    document.body.addEventListener(
      "click",
      this.bodyListenerRemoveSearch.bind(this)
    );
  }
  componentWillUnmount() {
    // console.log("i was unmounted");
    document.body.removeEventListener(
      "click",
      this.bodyListenerRemoveSearch.bind(this)
    );
  }

  inputFocus() {
    const search = this.SearchRef.current;
    const input = this.InputRef.current;
    search.classList.toggle("active");
    if (search.classList.contains("active")) {
      setTimeout(() => {
        input.focus();
      }, 200);
    }
  }
  searchFocus() {
    const search = this.SearchRef.current;
    const input = this.InputRef.current;
    if (search.classList.contains("active")) {
      setTimeout(() => {
        input.focus();
      }, 200);
    }
  }
  searchRemove() {
    const search = this.SearchRef.current;
    const input = this.InputRef.current;
    input.value = "";
    input.focus();
    search.classList.remove("searching");
  }

  searchHide(event) {
    const search = this.SearchRef.current;
    const input = this.InputRef.current;
    if (!search.contains(event.target) && input.value.length === 0) {
      search.classList.remove("active");
      search.classList.remove("searching");
      input.value = "";
    }
  }

  toggleSearch(e) {
    const search = this.SearchRef.current;
    if (e.target.value.length > 0) {
      search.classList.add(`searching`);
    }
    else {
      search.classList.remove(`searching`);
    }
  }

  bodyListenerRemoveSearch(e) {
    const search = this.SearchRef.current;
    const input = this.InputRef.current;
    if (!search.contains(e.target) && input.value.length === 0) {
      search.classList.remove("active");
      search.classList.remove("searching");
      input.value = "";
    }
  }

  render() {
    return (
      
      <div
        className={"searchWrapper"}
        onClick={(event) => {
          this.searchHide(event);
        }}
      >
        <div
          className={"search"}
          ref={this.SearchRef}
          onClick={() => {
            this.searchFocus();
          }}
          type="text"
        >
          <input
            ref={this.InputRef}
            className={"input"}
            type="text"
            onChange={(event) => {
              this.toggleSearch(event);
            }}
          />
          <svg viewBox="0 0 700 100" className={"magnifyingGlass"}>
            <path
              className={"magnifyingGlassPath"}
              d="m 59.123035,59.123035 c -10.561361,10.56136 -27.684709,10.56136 -38.24607,0 -10.56136,-10.561361 
              -10.56136,-27.684709 0,-38.24607 10.561361,-10.56136 27.684709,-10.56136 38.24607,0 10.56136,10.561361
              10.56136,27.684709 0,38.24607 l 28.876965,28.876965 c 6.304625,7.101523 5.754679,-0.187815 13.07143,-0.5 h 582.04101"
            />
            <path
              className={"x"}
              d="m 673.46803,25.714286 -37.17876,38.816532 c 0,0 -5.08857,5.60515 -5.68529,11.841734 -1.06622,11.143538 13.02902,11.127448 13.02902,11.127448"
            />
            <path
              className={"x"}
              d="m 635.08021,25.714286 37.17876,38.816532 c 0,0 5.08857,5.60515 5.68529,11.841734 1.06622,11.143538 -13.02902,11.127448 -13.02902,11.127448"
            />
          </svg>
          <div
            className={`overlay overlay1`}
            onClick={() => {
              this.inputFocus();
            }}
          ></div>
          <div
            className={`overlay overlay2`}
            onClick={() => {
              this.searchRemove();
            }}
          ></div>
        </div>
      </div>
    );
  }
}
