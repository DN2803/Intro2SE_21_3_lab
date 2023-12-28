export async function submitForm(submitForm) {
    const text = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
  
    try {
      const response = await fetch('http://localhost:2212/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text,
          password: password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Response from BE:', data);
        // Handle successful response from the backend
        return data;
      } else {
        console.error('Error:', response.statusText);
        // Handle error response from the backend
        return null;
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle network or other errors
      return null;
    }
}


export const fetchDoctorsIDName = async () => {
  try {
    const response = await fetch('http://localhost:2212/bookingDocs');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

export async function createAppointment(appointmentData) {
  try {
    const response = await fetch("http://localhost:2212/createAppointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error creating appointment:", error.message);
    throw error;
  }
}


export const fetchEmployees = async () => {
  try {
    const response = await fetch('http://localhost:2212/getEmployees');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

export const addNewEmployee = async (newEmployeeData) => {
  try {
    const response = await fetch("http://localhost:2212/addNewEmployee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployeeData),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error creating new employee:", error.message);
    throw error;
  }
};

export const updateEmployee = async (updatedEmployeeData) => {
  try {
    const response = await fetch("http://localhost:2212/updateEmployee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEmployeeData),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error updating new employee:", error.message);
    throw error;
  }
};


export const deleteEmployee = async (idNeedDeleted) => {
  try {
    const response = await fetch(`http://localhost:2212/deleteEmployee/${idNeedDeleted}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error updating new employee:", error.message);
    throw error;
  }
};

