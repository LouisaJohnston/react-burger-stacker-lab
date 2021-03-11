export default function Ingredient(props) {
    return (
        <div>
            <button onClick={props.handleIngredientClick}>{props.name}</button>
        </div>
    )
}