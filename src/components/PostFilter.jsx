import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Search..."
                value={filter.query}
                onChange={(event) => setFilter({...filter, query: event.target.value})}
            />
            <MySelect
                defaultValue="Sort by ..."
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    { value: "title", name: "Sort by name" },
                    { value: "description", name: "Sort by description" },
                ]}
            />
        </div>
    );
};

export default PostFilter;