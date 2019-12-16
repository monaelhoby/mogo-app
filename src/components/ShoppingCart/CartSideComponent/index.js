import React from "react";
import styles from  "./index.module.css";
const CartSideComponent = () => {
    return (
        <div style={{background:"#f5f5f5", padding:"40px 30px"}}>
        <h5 className={styles.h5}>Cart Total</h5>
        <p style={{color:"#333",fontWeight:"bold",fontSize:"22px"}}>Special instructions for seller</p>
        <p style={{color:"#777",marginTop:"20px"}}>Add special instructions for your order...</p>
        <textarea name="name" rows="8" ></textarea>
        <div className="clearfix" style={{fontSize:"30px",fontWeight:"bold",borderTop:"1px solid #e5e5e5",padding:"10px 5px"}}>
          <p class="float-left">Subtotal</p> 
          <p style={{color:"#FE5A1A"}} className="float-right">$970</p>
        </div>
        <p style={{color:"#777"}}>Shipping & taxes calculated at checkout</p>
        <button type="button" name="button" style={{width:"100%"}}>
          <a href="#" style={{width:"80%" , display:"block",margin:"auto"}}>
          <i className="far fa-check-square"></i> Check Out</a></button>
          </div>
          )
}

export default CartSideComponent;