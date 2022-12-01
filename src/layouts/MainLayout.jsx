function MainLayout({ children }) {
    return (
        <div>
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li> 
                    <li></li>
                    <li></li> 
                </ul>
            </div>
            {children}
        </div>
    )
}

export default MainLayout