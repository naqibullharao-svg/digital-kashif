export default function Order() {
  const formContainer = {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box"
  };

  return (
    <div style={formContainer}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Place Your Order</h2>
      <p style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
        Rao Kashif Digital Services
      </p>
      
      <form>
        <label>Full Name</label>
        <input style={inputStyle} type="text" placeholder="Enter your name" required />
        
        <label>Email Address</label>
        <input style={inputStyle} type="email" placeholder="markitingservise@gmail.com" required />
        
        <label>Service Type</label>
        <select style={inputStyle}>
          <option>Guest Posting</option>
          <option>Link Insertion</option>
          <option>SEO Strategy</option>
        </select>

        <label>Target URL & Anchor Text</label>
        <textarea 
          style={{ ...inputStyle, height: "100px" }} 
          placeholder="Paste your link and the text you want used for the backlink..."
        ></textarea>

        <button 
          style={{ 
            width: "100%", 
            padding: "12px", 
            backgroundColor: "#28a745", 
            color: "white", 
            border: "none", 
            borderRadius: "4px", 
            cursor: "pointer",
            fontWeight: "bold" 
          }}
          type="submit"
        >
          Submit Order
        </button>
      </form>

      <div style={{ marginTop: "20px", textAlign: "center", fontSize: "12px" }}>
        <p>Need help? WhatsApp me: <strong>+92 3126020316</strong></p>
      </div>
    </div>
  );
}
