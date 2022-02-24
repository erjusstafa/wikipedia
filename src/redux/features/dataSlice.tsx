import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWekipediaApi = createAsyncThunk("wikipedia/fetchWekipediaApi", async (val  :string) => {
  return await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=490&srsearch=a${val}`
  )
    .then((res) => res.json())
    .catch((err: string) => console.log(" error bro"));
});

interface IDataWrap {
  data: IData[];
  loading: boolean;
  error: string;
  fav: any[];
}

export interface IData {
  batchcomplete: string;
  continue: IContinue;
  query?: IQuery;
}

interface IContinue {
  continue: string;
  sroffset: number;
}
interface IQuery {
  searchinfo: {
    totalhits: number;
    suggestion: string;
    suggestionsnippet: string;
  };
  search: DataItem[];
}
export interface DataItem {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

const initialState: any | IDataWrap = {
  data: [],
  fav: [],
  loading: false,
  error: "You have an error",
};

export const dataSlice = createSlice({
  name: "wikipedia",
  initialState,
  reducers: {
    addFav: (state, { payload }: PayloadAction<DataItem>) => {
      const ekzistoIndex = state.fav.findIndex((item: DataItem) => item.pageid === payload.pageid);

      if (ekzistoIndex >= 0) {
        const nextFav = state.fav.filter((item: DataItem) => item.pageid !== payload.pageid);
        state.fav = nextFav;
      } else {
        state.fav = [
          ...state.fav,
          {
            pageid: payload.pageid,
            title: payload.title,
          },
        ];
      }
    },

    delFav: (state, { payload }: PayloadAction<DataItem>) => {
      const newList = state.fav.filter((item: DataItem) => item.pageid !== payload.pageid);
      state.fav = newList;
    },
  },
  extraReducers: {
    [fetchWekipediaApi.pending.toString()]: (state, { payload }) => {
      console.log("Pending");
      state.loading = true;
      state.error = "";
    },
    [fetchWekipediaApi.fulfilled.toString()]: (state, { payload }: PayloadAction<any[]>) => {
      console.log("Fetched Successfully!");
      state.data = payload;
      state.loading = false;
      state.error = "";
    },
    [fetchWekipediaApi.rejected.toString()]: (state, { payload }) => {
      console.log("Rejecteed!");
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { addFav ,delFav} = dataSlice.actions;

export default dataSlice.reducer;
