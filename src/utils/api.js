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
const fetchStatus = async () => {
  try {
    const response = await fetch(`${URL_BASE}/start`);
    if (!response.ok) {
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oldName: oldName, newName: newName }),
    });
    const data = await response.json();

    if (response.ok) {
      console.log(data.message);
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const fetchLogin = async (user) => {
  try {
    const response = await fetch(`${URL_BASE}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Cant login");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error login:", error);
    throw error;
  }
};

const fetchEnable = async () => {
  try {
    const response = await fetch(`${URL_BASE}/enable`);
    if (!response.ok) {
      throw new Error("Not response network");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error nose donde pero error:", error);
    throw error;
  }
};

const fetchUpdateStart = async (actual, onReboot) => {
  try {
    const response = await fetch(`${URL_BASE}/update_samba`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ actual: actual, onReboot: onReboot }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data.message);
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const fectchEdit = (share_name, jsonData) => {
  fetch(`${URL_BASE}/shares/${share_name}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  })
    .then((response) => {
      if (response.ok) {
        console.log("Data sent correctly");
      } else {
        console.error("Error sending data");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const fetchDelete = async (name) => {
  try {
    const response = await fetch(`${URL_BASE}/deleteShare`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ share_name: name }),
    });

    if (response.ok) {
      console.log("Deleted resource");
    } else {
      console.log("Not Deleted resource");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const fetchAdd = async (resource) => {
  try {
    const response = await fetch(`${URL_BASE}/addShare`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resource)
    });

    if (response.ok) {
      console.log("Add resource");
    } else {
      console.log("Not add resource");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const fetchDirectorys = async (user) => {
  try {
    const response = await fetch(`${URL_BASE}/files?user=${user}`);

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


export {
  fetchShares,
  fetchRename,
  fetchLogin,
  fetchStatus,
  fectchEdit,
  fetchEnable,
  fetchUpdateStart,
  fetchDelete,
  fetchAdd,
  fetchDirectorys
};
