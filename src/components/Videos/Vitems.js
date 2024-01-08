import './Vitems.css'
function Items({data}){
    return (
        <div className="row ">
        {
          data.map((value)=>{
           const {id, video} = value;
           return (
            <div className="col-sm-4 my-3 text-center" key={id}>
                 <video className="videoBorder" width="300" height="400" controls >
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
           )
          })
        }

</div>
    )
}

export default Items;