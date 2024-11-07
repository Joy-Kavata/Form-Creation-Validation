async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear any previous content (loading message)
    dataContainer.innerHTML = '';

    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle errors during fetching process
    dataContainer.innerHTML = 'Failed to load user data.';
  }
}

document.addEventListener('DOMContentLoaded', fetchUserData);