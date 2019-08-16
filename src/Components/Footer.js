import React from "react";
import "../Styles/Footer.css";

function Footer(props) {
    return (
        <div
            data-testid="footer" 
            className="footer">
            <p>
                DISCLAIMER: THIS WEBSITE IS NOT ACCURATE. PRODUCTS MAY CONTAIN NUTS OR ANYTHING ELSE YOU CAN'T EAT. SORRY! (happy snacking)
            </p>
        </div>
    );
}

export default Footer;