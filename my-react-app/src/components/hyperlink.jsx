
function Hyperlink(props) {
    return (
        <a className="App-link" 
           href={props.linkAddress}
           target="_blank"
           rel="noopener noreferrer"
        >
          
          {props.logoImg !== "None" ? (
              <img src={props.logoImg} width="30px" alt={props.linkName} />
          ) : null}
          
          {props.linkName}
        </a>
    );
}

export default Hyperlink;