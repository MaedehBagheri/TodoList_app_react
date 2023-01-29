const Wrapper =(WrappedComponent,className)=>{
    return (props)=>{
        return(


        <div className={className}>
            <WrappedComponent />
        </div>
        )
    }
}

export default Wrapper;