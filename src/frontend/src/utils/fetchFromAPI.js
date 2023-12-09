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

    if (!response.ok) {
      // Handle non-successful response (e.g., server error)
      throw new Error("Failed to create appointment");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating appointment:", error.message);
    throw error;
  }
}