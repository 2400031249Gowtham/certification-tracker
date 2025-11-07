const STORAGE_KEYS = {
  CERTIFICATIONS: 'certifications',
  USER_PREFERENCES: 'userPreferences',
  THEME: 'theme'
};

export const storage = {
  // Get item from storage
  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting ${key} from storage:`, error);
      return null;
    }
  },

  // Set item in storage
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error setting ${key} in storage:`, error);
      return false;
    }
  },

  // Remove item from storage
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing ${key} from storage:`, error);
      return false;
    }
  },

  // Clear all storage
  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  }
};

export { STORAGE_KEYS };

// Session Storage for Temporary Data
export const sessionStorage = {
  // Store form data temporarily
  saveFormData(formData) {
    sessionStorage.setItem('formDraft', JSON.stringify(formData));
  },

  // Retrieve form data
  getFormData() {
    const data = sessionStorage.getItem('formDraft');
    return data ? JSON.parse(data) : null;
  },

  // Clear form data
  clearFormData() {
    sessionStorage.removeItem('formDraft');
  }
};
