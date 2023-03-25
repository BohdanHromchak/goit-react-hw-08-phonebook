import { createSelector } from "@reduxjs/toolkit";

// Contacts, filter
export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectFilterValue = (state) => state.filter;

// Мемоізований селектор
export const selectFilterQuery = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);

// Звичайний селектор
// export const selectFilterQuery = (state) => {
//   const contacts = selectContacts(state);
//   const filter = selectFilterValue(state);

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter)
//   );
// };

// Auth

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUser = state => state.auth.user;
