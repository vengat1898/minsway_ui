import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    headings: ["","Capabilities", "Who We Are", "Industries", "Projects", "Careers","contact us"]
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {}
});

export default headerSlice.reducer; 