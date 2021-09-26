import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    givenName: '',
    familyName: '',
    email: ''
  },
  reducers: {
    setAuthDetails: (state, action) => {
      /* eslint-disable */
      const { given_name, family_name, email } = action.payload;

      state.givenName = given_name;
      state.familyName = family_name;
      state.email = email;
      /* eslint-enable */
    }
  }
});

// Action creators are generated for each case reducer function
export const { setAuthDetails } = authSlice.actions;

export default authSlice.reducer;
