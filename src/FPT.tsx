export interface ListCard{
    image:string;
    name: string;
    description: string;
}
const FPT=({image,name,description}:ListCard)=> {
    return (
        <div style={{
            width:'100%',
            maxWidth:'300px',
            backgroundColor:'white',
            border:'1px solid black',
            borderRadius:'10px',
            overflow:'hidden',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
        }}>
            <div style={{
                padding:'10px',
            }}>
                <img style={{
                    width: "100px",
                    height: "100%",
                }} src={image} alt=""/>
                <h3>{name}</h3>
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                        }} className={"flex items-center justify-between"}>
                        <span className={"text-xl font-bold text-orange-500"}>
                            {description}
                        </span>
                </div>
            </div>
        </div>
    );
}
export default FPT;