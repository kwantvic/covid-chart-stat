import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CurrentTab,
  SwitchRank,
  SwitchReportFirst,
  SwitchReportSecond,
} from './types';

interface InitialState {
  currentTab: CurrentTab;
  currentSwitchReportFirst: SwitchReportFirst;
  currentSwitchReportSecond: SwitchReportSecond;
  currentSwitchRank: SwitchRank;
  countTop: number;
}

const initialState: InitialState = {
  currentTab: 0,
  currentSwitchReportFirst: 'total_deaths',
  currentSwitchReportSecond: 'daily_value',
  currentSwitchRank: 'total_deaths',
  countTop: 10,
};

const controlSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    updateCurrentTab(state, { payload }: PayloadAction<CurrentTab>) {
      state.currentTab = payload;
    },
    updateSwitchReportFirst(
      state,
      { payload }: PayloadAction<SwitchReportFirst>,
    ) {
      state.currentSwitchReportFirst = payload;
    },
    updateSwitchReportSecond(
      state,
      { payload }: PayloadAction<SwitchReportSecond>,
    ) {
      state.currentSwitchReportSecond = payload;
    },
    updateSwitchRank(state, { payload }: PayloadAction<SwitchRank>) {
      state.currentSwitchRank = payload;
    },
    updateCountTop(state, { payload }: PayloadAction<number>) {
      state.countTop = payload;
    },
  },
});

export const {
  updateCurrentTab,
  updateSwitchReportFirst,
  updateSwitchReportSecond,
  updateSwitchRank,
  updateCountTop,
} = controlSlice.actions;
export default controlSlice;
