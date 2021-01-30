import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Item } from "../shared/fakerData";

const adapter = createEntityAdapter<Item>();

export const listSlice = createSlice({
  name: "list",
  initialState: adapter.getInitialState(),
  reducers: {
    setAll: adapter.setAll,
    updateMany: adapter.updateMany
  }
});
