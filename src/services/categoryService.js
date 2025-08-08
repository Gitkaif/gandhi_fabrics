import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const categoriesCollection = 'categories';

// Get all categories
export const getCategories = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, categoriesCollection));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting categories: ', error);
    throw error;
  }
};

// Get a single category by ID
export const getCategoryById = async (id) => {
  try {
    const docRef = doc(db, categoriesCollection, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log('No such category!');
      return null;
    }
  } catch (error) {
    console.error('Error getting category: ', error);
    throw error;
  }
};

// Add a new category
export const addCategory = async (category) => {
  try {
    const docRef = await addDoc(collection(db, categoriesCollection), category);
    return { id: docRef.id, ...category };
  } catch (error) {
    console.error('Error adding category: ', error);
    throw error;
  }
};

// Update an existing category
export const updateCategory = async (id, updates) => {
  try {
    const categoryRef = doc(db, categoriesCollection, id);
    await updateDoc(categoryRef, updates);
    return { id, ...updates };
  } catch (error) {
    console.error('Error updating category: ', error);
    throw error;
  }
};

// Delete a category
export const deleteCategory = async (id) => {
  try {
    await deleteDoc(doc(db, categoriesCollection, id));
    return id;
  } catch (error) {
    console.error('Error deleting category: ', error);
    throw error;
  }
};
