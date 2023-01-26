
import './listItem.css'

const ListItem =({items})=>{

    return <>
      <ul>
        <li className="list">
            {JSON.stringify(items)}
        </li>
      </ul>
    </>
}

export default ListItem;