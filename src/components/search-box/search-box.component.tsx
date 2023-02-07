import { ChangeEventHandler } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onSearchHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  className,
  placeholder,
  onSearchHandler,
}: SearchBoxProps) => {
  console.log("render SearchBox component");

  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchHandler}
      />
    </div>
  );
};

export default SearchBox;

/*
interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder?: string | null;
}

interface IChangeHandlerProps {
  onSearchHandler: (a: string) => void;
}
*/

//or with overload:

// interface ISearchBoxProps {
//   className: string;
//   placeholder?: string;
// }

// interface ISearchBoxProps {
//   onSearchHandler: (a: string) => void;
// }

/* 

what union is?

type CanadianAddress ={
  street: string;
  province: string;
}

type USAddress = {
  street: string;
  state: string;
}

type NorthAmericanAddress = CanadianAddress | USAddress

so NorthAmericanAddress can either have a province or a state like so:

const address: NorthAmericanAddress = {
  street: "blablabla"
  province: "blablabla" or state: "blablabla"
}

or 

const address2: NorthAmericanAddress = {
  street: "blablabla"
  state: "blablabla"
}

*/
