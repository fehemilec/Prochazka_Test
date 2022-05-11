import axios from "axios";
import '@testing-library/jest-dom/extend-expect';
import { getProductDetails, getProducts, removeProductDetails } from "./actions/productActions";
import { addToCart, removeFromCart } from "./actions/cartActions";

test('Thest if the /api/products/ endpoint is available', async () => { 
    const { result } = axios.get("/api/products/");
    expect(result).not.toBeNull();
});

test('Test if the getProducts method works', async () => {
    const { products } = getProducts();
    expect(products).not.toBeNull();
});

test('Test if the getProductDetails method works', async () => { 
    const { myProduct } = getProductDetails(1); 
    expect(myProduct).not.toBeNull();
});

test('Test if the removeProductDetails method does not throw an exception', async () => { 
    expect(removeProductDetails()).not.toThrowError;
});

test('Test if the addToCart method works', async () => {
    expect(addToCart(1, 10)).not.toThrowError;
});

test('Test if the addToCart and removeFromCart methods work', async () => {
    expect(addToCart(1, 10)).not.toThrowError;
    expect(removeFromCart(1)).not.toThrowError;
});