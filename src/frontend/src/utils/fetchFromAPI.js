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
  