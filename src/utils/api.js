export async function getMeals() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const jsonData = await response.json();

    return jsonData
}
