import { Link } from "react-router-dom"

const CatCard = ({cat}) => {
    return (
        <tr>
            <td>{cat.id}</td>
            <td>{cat.name}</td>
            <td>
                <Link key={cat.id} to={`/cats/view/${cat.id}`} state={{cat}}> View </Link> |
                <Link key={cat.id} to={`/cats/edit/${cat.id}`} state={{cat}}> Edit </Link> |
                <Link key={cat.id} to={`/cats/delete/${cat.id}`} state={{cat}}> Delete </Link>
            </td>
        </tr>
    );
}

export default CatCard;