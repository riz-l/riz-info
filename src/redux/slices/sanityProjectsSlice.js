// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sanityClient from "../../client";

// AsyncThunk: getProjects
export const getProjects = createAsyncThunk(
  "sanityProjects/getProjects",
  async () => {
    return sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        slug,
        date,
        mainImage{
            asset->{
            _id,
            url
            },
            alt
        },
        client,
        description,
        projectType,
        link,
        tags
      }`
      )
      .then((response) => {
        const data = response;
        return data;
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  }
);

// Slice: sanityProjectsSlice
export const sanityProjectsSlice = createSlice({
  name: "sanityProjects",
  initialState: {
    projects: [],
    status: null,
  },
  extraReducers: {
    [getProjects.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProjects.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.projects = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [getProjects.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Reducer: sanityProjectsSlice.reducer
export default sanityProjectsSlice.reducer;
