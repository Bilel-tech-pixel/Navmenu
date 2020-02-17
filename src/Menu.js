import React from 'react'
import ListMenu from './ListMenu'


function Menu(props){
    return(<div className="box">
        {props.navmenu.map((el,i)=><ListMenu key={i} menus={el}/>)}

</div>)
}

export default Menu