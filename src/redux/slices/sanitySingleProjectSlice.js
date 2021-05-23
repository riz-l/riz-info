// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sanityClient from "../../client";

// AsyncThunk: getSingleProject
export const getSingleProject = createAsyncThunk(
  "singleProject/getSingleProject",
  async (slug) => {
    return sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          client,
          projectType,
          link,
          tags,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          mainImageAlt,
          body,
        }`
      )
      .then((response) => {
        const data = response[0];
        return data;
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  }
);

// Slice: sanitySingleProjectSlice
export const sanitySingleProjectSlice = createSlice({
  name: "singleProject",
  initialState: {
    project: [],
    status: null,
  },
  extraReducers: {
    [getSingleProject.pending]: (state, action) => {
      state.status = "loading";
    },
    [getSingleProject.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.project = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [getSingleProject.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Reducer: sanitySingleProjectSlice.reducer
export default sanitySingleProjectSlice.reducer;
