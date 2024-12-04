import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfile {
  name: string;
  email: string;
  profileImageUrl: string | null;
}

const initialState: UserProfile = {
  name: '',
  email: '',
  profileImageUrl: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.profileImageUrl = action.payload.profileImageUrl;
    },
    updateUserProfile: (state, action: PayloadAction<Partial<UserProfile>>) => {
      if (action.payload.name) state.name = action.payload.name;
      if (action.payload.email) state.email = action.payload.email;
      if (action.payload.profileImageUrl) state.profileImageUrl = action.payload.profileImageUrl;
    },
  },
});

export const { setUserProfile, updateUserProfile } = userSlice.actions;
export default userSlice.reducer;
