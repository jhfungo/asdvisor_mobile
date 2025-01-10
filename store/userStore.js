const PropTypes = require('prop-types');
const { create } = require('zustand');

const userStore = create((set) => ({
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  role: '',
  setUser: (id, firstName, lastName, email, contact, role) => {
    set(() => {
      return { id, firstName, lastName, email, contact, role };
    });
  },
  clearUser: () => {
    set((state) => {
      // Only clear if values are not already cleared
      if (
        state.id !== '' ||
        state.firstName !== '' ||
        state.lastName !== '' ||
        state.email !== '' ||
        state.contact !== ''
      ) {
        return { id: '', firstName: '', lastName: '', email: '', contact: '' };
      }
      return state; // No update needed
    });
  },
}));
userStore.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  contact: PropTypes.string,
  setUser: PropTypes.func,
  clearUser: PropTypes.func,
};

export default userStore;
