import '../assets/styles/footer.styl'
export default{
    data(){
        return{
            author: 'wanyong'
        }
    },
    render(){
        return(
            <div id="footer">
                <span>Written by {this.author}</span>
                <br/>
                <a href="https://github.com/wanyogn" target="_blank">
                    To Author's Github
                </a>
            </div>
        )
    }
}