function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = JSON.stringify({ name, email });
  
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: data
    };
  
    return fetch(url, fetchOptions)
      .then(response => response.json())
      .then(data => {
        const userId = data.id;
        console.log(`User ID: ${userId}`);
        // Append user ID to DOM here (implementation omitted for brevity)
      })
      .catch(error => {
        console.error('Error:', error.message);
        // Append error message to DOM here (implementation omitted for brevity)
      });
  }
  