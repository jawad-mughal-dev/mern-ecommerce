export async function addToCart(item) {
  console.log(item)
  try {
    const response = await fetch('http://localhost:8080/cart', {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": 'application/json' }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Error:', error);
    throw error; // Return a rejected Promise with the error
  }
}
export async function updateCart(update) {
  console.log(typeof update.id)
  console.log(update)
  try {
    const response = await fetch(`http://localhost:8080/cart/` + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": 'application/json' }
    });
    console.log(response)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Error:', error);
    throw error; // Return a rejected Promise with the error
  }
}
export async function deleteItemByUserId(deleteId) {
  try {
    const response = await fetch(`http://localHost:8080/cart/${deleteId}`, {
      method: "DELETE",
      headers: { "content-type": 'application/json' }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // const data = await response.json();
    return { id: deleteId };
  } catch (error) {
    console.error('Error:', error);
    throw error; // Return a rejected Promise with the error
  }
}
export async function fetchItemByUserId(userId) {
  try {
    const response = await fetch(`http://localhost:8080/cart/cartInfo/${userId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Error:', error);
    throw error; // Return a rejected Promise with the error
  }
}



export async function resetCart(userId) {
  // console.log(userId)
  const response = await fetchItemByUserId(userId);
  console.log(response.data)
  const items = await response.data;
  // for (let i = 0; i < items.length; i++) {
  //   const item = items[i];
  //   try {
  //     await deleteItemByUserId(item.id);
  //     console.log(`Item with id ${item.id} deleted successfully.`);
  //   } catch (error) {
  //     console.error(`Error deleting item with id ${item.id}: ${error.message}`);
  //   }
  // }
  for (let item of items) {
    await deleteItemByUserId(item.id)
    console.log(`Item with id ${item.id} deleted successfully.`);
  }
}