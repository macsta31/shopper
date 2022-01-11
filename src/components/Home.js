import '../styles/Home.css'

function Home() {
    return (
        <div className='homecontainer'>
            <section className='showcase'>
                <h1 className="welcomemessage">Hello User</h1>
            </section>
            <section className='popularitems-container'>
                <div className="popularitems">
                    <div className="item">
                        <h3>Macbook</h3>
                        <img src="#" alt="Macbook" />
                        <p>Price:...</p>
                    </div>
                    <div className="item">
                        <h3>Suit</h3>
                        <img src="#" alt="suit" />
                        <p>Price:...</p>
                    </div>
                    <div className="item">
                        <h3>Basketball</h3>
                        <img src="#" alt="basketball" />
                        <p>Price:...</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
