import Card from "./Card"

function List() {
  return (
    <div className="container">
        <ul>
            <li>
                <Card room="Sala 1" owner="Marina Campos Oliveira" available={true} open={false}/>
            </li>
        </ul>
    </div>
  )
}

export default List
