export async function submitForm(submitForm) {
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
  
    try {
      const response = await fetch('http://localhost:2212/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Response from BE:', data);
        // Handle successful response from the backend
      } else {
        console.error('Error:', response.statusText);
        // Handle error response from the backend
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle network or other errors
    }
}
  