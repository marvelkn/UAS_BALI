import  Card  from "../components/Restoran/Card"
import data from "../components/Restoran/Menu"
import "./App.css"

function Restoran() {
    return (
        <div className="isi">
            <div className="isi2">
                <div className='head'><h1>Daftar Menu</h1></div>
                <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-between" }}>
                    {data.map((data, key) => { return <><Card menu={data.menu} description={data.description} key={key} img={data.imgURL} name={data.name} price={data.price} /></> })}{/* <CreateCard/> */}
                </div>
            </div>
        </div>
    );
}

export default Restoran;