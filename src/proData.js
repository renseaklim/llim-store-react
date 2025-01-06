
import axios from "axios"
const fetchData = async () => {
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); // Update state with fetched data
        setLoading(false);    // Stop loading
    } catch (err) {
        setError(err.message);      // Capture error message
        setLoading(false);
    }
    return data;
};
const proData = fetchData();

export default proData