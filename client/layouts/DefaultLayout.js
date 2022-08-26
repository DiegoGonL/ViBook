import React from 'react';

const DefaultLayout = ({ children }) => {
    return (
        <>
            {/*   <Navbar />*/}
            <main>{children}</main>
            {/*<Footer />*/}
        </>
    );
};

export default DefaultLayout;
