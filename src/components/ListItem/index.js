import './index.css'

const ListItem=(props)=>{
    const {videoDetails,setVideo,isActive}=props
    const {id,title}=videoDetails

    const activated=isActive?'active':''

    const onChangeVideo=()=>{
        setVideo(id)
    }

    return(
        <li className='list-items'>
            <button type="button" className={`button ${activated}`} onClick={onChangeVideo}>{title}</button>
        </li>
    )
}

export default ListItem