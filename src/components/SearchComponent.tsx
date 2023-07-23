import { Input } from "@chakra-ui/react"
import { FormEvent, LegacyRef } from "react";

interface FormData {
    searchRef: LegacyRef<HTMLInputElement>
    handleSubmit: (e: FormEvent) => void;
}

const SearchComponent = ({searchRef, handleSubmit}: FormData) => {

    return (
      <>
        <div className="p-5">
          <form onSubmit={handleSubmit}>
            <Input
              ref={searchRef}
              placeholder={`Search`}
            />
          </form>
        </div>
      </>
    );

}


export default SearchComponent;