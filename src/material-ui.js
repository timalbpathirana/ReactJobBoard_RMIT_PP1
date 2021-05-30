export const styles=()=>({
    root:{
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        minHeight:"100vh",
        color:"#000133",
    },
    appBar:{
        background:"#00022E",
        color:"#FC86AA"
    },
    container:{
        display:"flex",
        flex:1,
        transition:"width .7s",
    },
    drawer:{
        background:"#D8DCD6",
        width:"240px",
        position:"static",
        height:"1000px"
    },
    main:{
        flex:1,
        background:"#f7f5f5",
        color:"black",
        height:"1000px"
    },
    footer:{
        background:"#00022E",
        height:"150px",
        color:"#FC86AA"
    },
    header:{
        background:"#00022E",
        height:"70px",
        color:"#FC86AA"
    },
    icon:{
        padding:"10px",
    },
    title:{
        margin:"auto",
    },
    closed:{
        width:"0px",
    },
    opened:{
        width:"240px",
    }

})