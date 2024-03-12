/* eslint-disable react/prop-types */

// wrapper in real world
function App() {
    return <div>
        <CardWrapper>
            <TextComponent/>
        </CardWrapper>

        <CardWrapper>
            <TextComponent2/>
        </CardWrapper>
    </div> 
}

function CardWrapper({children}){
    return <div style={{border:"2px solid black",padding:20}}>
        {children}
    </div>
}

function TextComponent(){
    return <div>
        Hi bro,how are you!fefwef
    </div>
}

function TextComponent2(){
    return <div>
        I am fine,what about you ?       
    </div>
}
  
export default App
