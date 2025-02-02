import { Link } from "react-router-dom"

const product = [
    { id:1, name: "Product 1" },
    { id:2, name: "Product 2" },
    { id:3, name: "Product 3" },
];

export default function ProductList () {
    return (
    <div>
        <h1>Product List</h1>
        <ul>
            {product.map((product) => (
            <li key={product.id}>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
            </li>
          ))}  
        </ul>
    </div>
    );
}