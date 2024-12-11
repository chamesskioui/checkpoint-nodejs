const ps=require("generate-password")
const generator =()=>{
    const password=ps.generate({
        length:10,
        numbers:true,
        symbols:true,
        lowercase:true,
        uppercase:true
    })
    console.log(password)
}
generator()