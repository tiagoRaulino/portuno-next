interface Props {
    room: string,
    owner: string,
    available: boolean,
    open: boolean
}
function Card({ room, owner, available, open}: Props) {
  return (
    <div className="d-flex justify-content-between">
        <div>
            <p>{room}</p>
            <p>atualmente com:</p>
            <p>{owner}</p>
        </div>
        <div>
            {available ? <p>Disponivel</p> : <p>Indisponivel</p>}
            {open ? <p>Aberta</p> : <p>Fechada</p>}
        </div>
    </div>
  )
}

export default Card
