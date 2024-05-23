const URL_BASE = import.meta.env.VITE_URL_BACKEND;

const fetchShares = async () => {
  try {
    const response = await fetch(`${URL_BASE}/shares`);

    if (!response.ok) {
      throw new Error("Not response network");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching shares:", error);
    throw error;
  }
};
export const fetchStatus = async () => {
  try{
    const response = await fetch(`${URL_BASE}/start`);
    if(!response.ok){
      throw new Error("Not response network");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error nose donde pero error:", error);
    throw error;
  }
};

const fetchRename = async (oldName, newName) => {
  try {
    const response = await fetch(`${URL_BASE}/renameShare`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ oldName: oldName, newName: newName })
    });
    const data = await response.json();

    if (response.ok) {
      console.log(data.message);
    } else {
      console.log(data.message);
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
}

export { fetchShares, fetchRename };


